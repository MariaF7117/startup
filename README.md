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
  Implementation of HTML in my webpage is:
  - index.html: which is the home page. Contains Pi Chart that interacts with user's inputs at the bottom. Displays user's name.