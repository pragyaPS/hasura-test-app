# Hasura app assignment

This is a small application where a CRUD operation can be performed.

Below is the list of tasks done:

- Created a postgres relational database, and deployed using AWS RDS.
- Configured the DB connection in a nodeJs application and created API for get and post data in database table.(Hrdcoded the connection for time being)
- Used koa and koa-router to create routes in the API server. Check the code here (https://github.com/pragyaPS/hasura-test-api)
- APIs server is deployed in Heroku
  End Points are https://hasura-test-api.herokuapp.com/
  add Album(POST): https://hasura-test-api.herokuapp.com/add-album
  all Albums(GET): https://hasura-test-api.herokuapp.com/all-albums

- The react application creates the interface for get and post Albums using the Heroku endpoints
- The frontend application is created using react (Create react app) and deployed in **Netlify**-
  https://hasura-test-app.netlify.app/
