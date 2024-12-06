const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

// TheSchedule and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let schedule = [];


const authCookieName = 'token';

// The service port may be set on the command line
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);


// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});


// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// register
apiRouter.get('/register', (_req, res) => {
  res.send(register);
});

//schedule appointment
apiRouter.post('/schedule', (req, res) => {
  const newSchedule = req.body;
  
  schedule = updateSchedule(newSchedule, schedule);
  res.status(200).json({ message: 'Schedule updated successfully', schedule });
});

function updateSchedule(newSchedule,schedule){
  let found = false;
  for (const [i, prevSchedule] of schedule.entries()) {
    if (newSchedule.schedule > prevSchedule.schedule) {
      schedule.splice(i, 0, newSchedule);
      found = true;
      break;
    }
  }

  if (!found) {
    schedule.push(newSchedule);
  }

  if (schedule.length > 10) {
    schedule.length = 10;
  }

  return schedule;

};

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

apiRouter.get('/schedule', (_req,res) => {
    res.send(schedule)
});

apiRouter.delete('/schedule/:indexId', (req,res) => {
  const indexId = req.params.indexId;
  schedule.splice(indexId,1);
  res.send(schedule)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

