# Teach-Finder-Case-Study

model - user: {
username,
password
}

views {
home - specific to the user
register
login
}

The user's data will be stored in the browser - probably local storage with key, values pairs - {
username: 'username'
isLoggedIn: boolean
}

The view should only render the data of user stored in the browser if no one is logged in else show all the data.

templating engine - ejs
