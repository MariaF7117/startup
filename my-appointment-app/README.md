# startup
cs260

[Click here for the Notes page](notes.md)

## Startup Specification
### Elevator pitch

I am a senior this year and throughout the years I have faced the same issue and so have all of the roommates I've had and people I've interacted with. The problem is that we don't know how to budget well. All we know how to do is pay our bills, save for tuition, and save the rest. Students aren't required to take a financial literacy class and financial literacy in college is the best starting point for a successful future. `Student Budgeter` is made by students for students with professional advice on how to manage your personal finances.

### Design

![Mock](/images/budgetImage.png)

Here is a sequence diagram that shows how the user will interact with the backend to change variables

![SequenceDiagram](/images/SequenceDiagram.png)

### Key features

- Secure login over HTTPS
- Ability to input various sources of income
- Ability to track expenses and input manually
- Display transaction history with a net total
- Drop down menu for options of income, spending, overview, investment, and saving goals
- Interactive pi chart for user convenience and visuals
- Ability to login multiple users and save their individual information
- Results are persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Five HTML pages: one for Login/ Logout, one to Register a new user, one for overview or the home page, one for spending and income, and one for investments and goals.
- **CSS** - I will use the same CSS styling and apply it to each page for a cohesive user experience.
- **React** - Ability to Login and logout, ability to register a new user, ability to intime refresh the page for any changes made.
- **Service** - Backend service with endpoints for:
  - login
  - register user
  - total income
  - total spending
  - retrieving ongoing total
  - retrieving adjusted individual totals for: food, rent, savings, tithing, and spending
- **DB/Login** - Store users, their sources of income and spending, and goals in the database. Register and login users. User's credentials are securely stored in database. Cannot view website unless authenticated.
- **WebSocket** - The websocket will communicate between a currency converter API that I will call from in order to communicate and be useful for other countries and currencies.

## Implementation HTML
The HTML structure of my webpage consists of the following key components:
- index.html: This serves as the homepage. It features an interactive pie chart that responds to user inputs at the bottom of the page and displays the user's name. Additionally, it includes a link to my personal GitHub profile.
- transactions.html: This page contains fields for entering income and expenditure. It includes a function to calculate the net total, which is displayed at the bottom of the page.
- login.html: This page provides fields for username and password input, along with a login button. There is also a link directing users to the registration page.
- register.html: This page includes fields for entering a username, email address, and password. It features a button to register a new user and provides a link back to the login page.


## Implementation of CSS
The CSS design of my webpage consists of the following key components:
- Responsive Element Sizing: Elements on the page adapt dynamically for optimal display.
- Adaptive Header and Footer: The header and footer adjust seamlessly to enhance user experience.
- Personal Branding: Your name is prominently featured within the application, alongside a direct link to your GitHub repository.
- Unified Color Palette: A cohesive color scheme is consistently applied throughout the web app for a harmonious aesthetic.


## Implementation of React
The React.js design for my webpage includes the following key features and components:  
- Local Storage Integration: Utilized to persist scheduled appointment data across sessions.  
- Authentication Components: Fully functional login and registration system to manage user access.  
- Appointment Scheduling: Features for adding appointments with detailed fields such as description, name, date, and time.  
- Appointment Management: Includes components for viewing, editing, and canceling appointments.  

## Implementation of Service
The Service design for my webpage includes the following key features and components:
- GET, POST, UPDATE, and DELETE calls used with await and fetch to the backend
- Frontend making API calls to the backend server
- About page includes API call to a public Server

## Implementation of Login
The Login design for my webpage includes the following key features and components:
- Supports new user registration
- Supports existing user authentication and logout
- Stores application data in MongoDB
- Stores and retrieves credentials in MongoDB
- Restricts application functionality based upon authentication

## Implementation of Websocket
The websocket demonstrates peer to peer communication using WebSocket.
- Backend listens for WebSocket connection
- Frontend makes WebSocket connection
- Data sent over WebSocket connection
- WebSocket data displayed in the application interface
- All visible elements are working - Some of your application functionality has been mocked up in previous version of the startup. Your application should feel fully functional.