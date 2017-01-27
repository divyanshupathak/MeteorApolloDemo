# Meteor Apollo Demo

# Overview
In this app we have integrated Apollo with Meteor React. Here we are using MongoDB & MySQL as databases. Here user can select desired database and can insert any post in same. Inserted post will get visible inside respective column.

# Getting Started
 # Install MySQL
 To run, first install MySQL. On OSX:
 ``` 
 > brew install mysql
``` 
 Start MySQL and create a database named `apollodemo`
```
> mysql.server start
```
```
> mysql -u root
```
 ```
 mysql>  CREATE DATABASE apollodemo;
 ```
 
 # Run the app
 First clone this repository, if you haven't already. Then run the app.
 ```
 > meteor npm install
 ```
 ```
 > meteor
 ```
 
 You can view the app at `http://localhost:3000/` or the built in graphiqql browser at `http://localhot:3000/graphiql`
