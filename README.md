# HTML5 Markup overview
- Tags and self closing 
- Div vs span
- Tables

# CSS Overview
- Selectors
- Box Model
- Order

# Express
- Make a directory, call it public and move your files there
- Use express to serve this directory

# AWS Setup
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html

- Create an ec2 instance
- Pick free tier -> ubuntu
- Download pem file
- `sudo chmod 400 path/to/pem`
- ssh in with `ssh -i path/to/pem ubuntu@ipaddress`
- Install node and npm
- `sudo apt-get update`
- `sudo apt-get install nodejs`
- `sudo apt-get install npm`
- Install pm2 `sudo npm i pm2 -g`
- Start server on port 80 `pm2 start server.js` 
- Visit your server!