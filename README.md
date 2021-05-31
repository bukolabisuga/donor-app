# donor-app
donor-app is the api that helps save data entered in [donor-app-ui]("https://github.com/bukolabisuga/donor-app-ui/") in the database.

# Up and Running
To get this Node Js app running on your localhost:
- clone this repo
- cd into the cloned directory
- run `npm install` to get the required packages downloaded
- run `npm run dev` to see what it does
- run `rpm run test` to run the tests

# Deployment
## Steps to deploy this app on Heroku:
Prerequisites:
- App cloned and running perfectly locally
- Tests passing
- [Heroku account]("https://signup.heroku.com"))
- A Mysql db -> the `.sql` file in the root fo the app directory has the necessary command for creating the database table

Inside the root of the app directory
- Run `heroku local` to run it locally, to be safe
- run `heroku login` and fill in credentials
- On successful login, run `git push heroku main` to deploy the `main` branch.
- Make sure your environment variables are set on Heroku. See below for details.
- We are live! Open the heroku link to your app (provided in the previous step) as soon as it is up with configurations set up.
Check that things work as they should.

Config setup on Heroku
- run the following to get the evironment variables set up on heroku
  - `heroku config:set DB_HOST = YOUR_DB_HOST`
  - `heroku config:set DB_NAME = YOUR_DB_NAME`
  - `heroku config:set DB_HOST = YOUR_DB_HOST`
  - `heroku config:set DB_USER = YOUR_DB_PASSWORD`

Kindly follow the steps carefully to ensure that your deployemnt is seamless. I also think [Herocu Documentation]("https://devcenter.heroku.com/categories/reference") would be pretty helpful if you run into any issues

# Contact Me
You can reach out to me on LinkedIn or Twitter
- [LinkedIn]("https://www.linkedin.com/in/olubukola-bisuga-636160aa/") 
- [Twitter]("https://twitter.com/bukolabisuga")
