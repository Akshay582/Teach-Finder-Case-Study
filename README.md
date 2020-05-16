# Teach-Finder-Case-Study

### Features

- The app has three pages:

  - Sign Up
  - Sign In
  - Home

- Run the following commands one by one in the directory of the project and the server will start running at `PORT: 8000`.

  ```
  npm install
  npm start
  ```

- The root page will be empty initially as their is no data to the connected mongo dB database. 

- Their will be only two links: `SignUp` and `SignIn` initially in the store.  

- Sign Up with valid credentials. After signing up successfully, you will be redirected to signin page automatically.

- After signing in, you will be redirected to the homepage and **you can enter your one liner notes in textbox in homepage and they will appear below the text box**.

-The styling is not fancy, very simple.

### Technology stack:

- Node js
- Express js
- EJS
- Mongo DB
- HTML, SCSS

### Technique for creating a session in express:

I have used passport and passport-local to create a session and authenticate a user, no fancy authentication used.

### Frontend

- The templating engine used is **ejs**.
- The CSS preprocessor used is **sass**.

### Database

- The dbms system used is **MongoDB**.




