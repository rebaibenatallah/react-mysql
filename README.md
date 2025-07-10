##react and mysql
###Project Setup: Creating Application Folders and Initializing the Project
(__creat package.json in server file__)
use this commande
  npm init -y
add thos lines to script in **packege.json**
  "start": "node server.js",
  "dev": "nodemon server.js"
change main file 
  "main": "index.js", 
to 
  "main": "server.js",
then install mysql 
  npm install express mysql cors nodemon
