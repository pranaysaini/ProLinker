Freelance Service Marketplace
A full-stack web application that allows users to create profiles, list services (gigs), and discover services across multiple categories. The platform enables sellers to showcase their skills and portfolios while buyers can explore available services.
This project is built with a React frontend and Node.js backend following a REST API architecture.

Features
User Authentication
User signup
Secure login
Authentication middleware
Protected routes
User Profiles
Create seller profile
Upload portfolio
Manage seller details
Gig Management
Create gigs
View gigs by category
View gigs by seller
Discover available services
File Upload
Portfolio upload support
Document storage in server uploads
Service Discovery
Browse services
Filter services by category
Explore different service types

Tech Stack
Frontend
React
Tailwind CSS
React Router
Axios

Backend
Node.js
Express.js
REST APIs
JWT Authentication
Database
MongoDB

Other Tools
Multer (file uploads)

Environment variables
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key


Installation
Clone Repository
git clone https://github.com/pranaysaini/ProLinker.git
cd prolinker

Install Dependencies
Frontend
cd client
npm install

Backend
cd server
npm install

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Frontend will run on:
http://localhost:3000

Backend will run on:
http://localhost:5000
