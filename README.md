# express-dynamic-routing
Assignment 9

This Node.js server built with Express handles dynamic route parameters, allowing for personalized responses based on URL input.

## Instructions

### Starting the Server

1. Make sure you have Node.js installed on your system.

2. Clone this repository or download the source code and navigate to the project directory in your terminal.

3. Install dependencies by running:
npm install

4. Start the server with the following command:
npm start

This will run the server on the default port 3000. If you want to specify a custom port, you can set the `PORT` environment variable.

### Testing the Server

1. Open your web browser.
2. Use URLs with dynamic route parameters to test the server. For example:

- `http://localhost:3000/user/john`

## Explanation of Route Parameters in Express

Express allows you to define routes with parameters, denoted by a colon (`:`) followed by the parameter name. 

When a request is made to a route with parameters, Express extracts the values of these parameters from the URL and makes them available in the `req.params` object. 
