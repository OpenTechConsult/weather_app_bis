# WEATHER APP (Asynchronous Node.js)

In this project we are creating an Asynchronous Non Blocking Node.js application.
It means that the application will continue to do other things while waiting for a long run io process to complete.

We are going to explore async programming with a basic example 
And based off of that example we will build a basic weather application.
To build that application, we are going to  interact with real time weather API and that will require us to make an async HTTP requests.

## Phase 1 - First thing first

We don't need to initialize the app using npm init
We are just going to place a bunch of console.log calls


## Phase 2 -Learn how to make HTTP requests form our node.js application

We are going to get real time weather data into our application by making an HTTP request.
HTTP requests is at the core if making real world application communicate with the outside world.

So are application will make an HTTP request to a company server API to have some tasks done
Here are the steps to consider
1- specify a url we want to make our request to
2- fire the request of sending some location data
3- get a weather information response back