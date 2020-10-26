# URLShortener
A web application which creates short URLs from long URLs. Demo is here: www.youtube.com/watch?v=ReDonEHHb78&feature=youtu.be

## Tech Stack
I implemented this project using Javascript, Express, and MongoDB. The frontend for this project can be found in ```index.ejs``` in the "views" folder. This is a simple rendering of our web application that allows the user to interact with the features of the URL Shortener. The routes for this project can be found in ```server.js``` This specifies the basic POST and GET routes that allow users to submit a long URL that they wish to shorten and be directed to a long URL from a shortened URL. Finally, the model for our shortened URL can be found in ```shortURL.js``` in the "models" folder. This describes the mongoose Schema on how the data for our URLs will be stored in our database. 

## Features
- Shorten a long URL 
- Hyperlinked access to both short and long versions of a URL in a data table 
- User Analytics 
  - Number of times a shortened version of a URL has been visited
  - When the shortened version of a URL was created
  - When the shortened version of a URL was last visited 

## User Authentication
I also spent about 3-4 hours trying to implement user authentication for this project. In the ```AuthController.js``` file in the "controllers" folder, I wrote two main functions that allowed a user to register and sign in. Notably, I used the ```bcryptjs```library to encrypt a user's password (so that the real version of the password is not even visible in the MongoDB). I wrote the model for the user in ```User.js``` in the "models" folder. This describes the mongoose Schema on how the data for our users will be stored in our database. Finally, I wrote routes in ```auth.js``` in the "routes" folder that would allow us to access the functions written in ```AuthController.js``` I tested these functions in Postman and used MongoDB Compass to help with debugging. Ultimately, I did not have time to integrate these functionalities with the original core of the project. 

## Challenges
- Determining which Tech Stack to use 
- Integrating User Authentication with Core Functionalities
- Integrating style formatting with retrieved data 

## Future Improvements 
- Finishing User Authentication 
- Launching on a web application with proper hosting for the database 
- Allowing users to make custom shortened URLs 
- User Limits on number of shortened URLs they can make in one day 
