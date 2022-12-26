[] A request handler with access to the application's request-response cycle is a middleware
[] It's a function that holds the request object, response object and a middleware function
[] Middleware can also send the response to the server before the request
[] The next middleware function is commonly represeneted as the variable next
[] The middleware is a function that can be applied using the routes
[] We can access and modify request and response data using middleware
