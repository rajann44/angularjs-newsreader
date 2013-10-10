# AngularJS News Reader

A simple news reader application built with AngularJS 1.2.x, demonstrating the use of ngResource, ngRoute, and REST APIs.

## Author
Rajan Chaudhary (rajann44)

## Features

- View latest news headlines
- Browse news by categories
- Responsive design using Bootstrap 3.0.3
- REST API integration using ngResource

## Setup

1. Install dependencies:
```bash
npm install
```

2. Get an API key from [The Guardian Open Platform](http://open-platform.theguardian.com/access/)

3. Replace 'YOUR_API_KEY' in `js/services.js` with your actual Guardian API key

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:8080`

## Technologies Used

- AngularJS 1.2.32
- Angular Route 1.2.32
- Angular Resource 1.2.32
- Bootstrap 3.0.3
- The Guardian Open Platform API

## Project Structure

```
├── index.html
├── js/
│   ├── app.js
│   ├── controllers.js
│   └── services.js
├── views/
│   ├── headlines.html
│   └── categories.html
├── css/
│   └── style.css
└── package.json
``` 