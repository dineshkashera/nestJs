## setup cookie and session

# Install the below packages:

npm install cookie-session @types/cookie-session

# require the cookie-session in main.types

const cookieSession = require('cookie-session');

# then use inside bootstrap function

app.use(cookieSession({
keys: ['asdssdsd'] /some keys/
}))
