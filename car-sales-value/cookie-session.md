## setup cookie and session

# Install the below packages:

npm install cookie-session @types/cookie-session

# require the cookie-session in main.types

const cookieSession = require('cookie-session');

# then use inside bootstrap function

app.use(cookieSession({
keys: ['asdssdsd'] /some keys/
}))

//Custom decorators
//Interceptors
//global Interceptors and pass in module

## Guard: Can be apply on three level

- App level
- Controller level
- handler level
