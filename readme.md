[![Build Status](https://travis-ci.org/anhnt0212/react-node.svg?branch=master)](https://travis-ci.org/anhnt0212/react-node)
* Install express
* Install react
* Install nodemon for debug

 Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.
 
`npm install -g nodemon`

* Start

 `nodemon npm start`

#Deploy with heroku
* Step 1

 `heroku login`

 * Step 2
 `heroku create [app_name]`
 
 * Step 3
 
 ` git push heroku master`
 
 * Step 4
 
 `heroku ps:scale web=1`
 
 * Step 5
 
 `heroku open`