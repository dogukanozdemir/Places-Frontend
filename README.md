# React Places App

Welcome to the React Places App! This application allows you to search for places within a specific radius based on latitude and longitude coordinates and view the results on a map.

You can check my repository called `Places-Backend` to see the server side

## Table of Contents

- Introduction
- Features
- Getting Started
  - Prerequisites
  - Installation
- Usage
  - Search for Places
  - View Results
  - Locate on Map
- API
- License

## Introduction

The React Places App is a simple web application built with React. It utilizes the [React Query](https://react-query.tanstack.com/) library for data fetching and state management. This app allows you to search for nearby places within a specified radius based on latitude and longitude coordinates. You can view the results in a list format and locate a specific place on a map.

## Features

- Search for places within a specified radius.
- View search results in a list.
- Locate a specific place on a map.
- Error handling for API requests.
- Responsive design for different screen sizes.

## Getting Started

### Prerequisites

Before you get started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)

### Installation

1. Clone the project and install the modules
  ```bash
  git clone https://github.com/dogukanozdemir/places-frontend.git
  ```
  
  ```bash
  cd places-frontend
  
  ```
  
  ```bash
  npm install
  ```
2. Acquire a google cloud api key
   
   You need to have a valid google cloud api key to run and test this project locally
   After you have acquired you api key, create `.env` file at the root directory and type the below:

   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
   ```
3. Start the project

   ```bash
   npm start
   ```

   The app should run localy on `localhost:3000`
   
## Usage

### Search for Places

1. Enter the desired latitude and longitude coordinates in the respective text fields.
2. Specify the search radius in kilometers.
3. Click the "Search" button to initiate the search.

### View Results

- The search results will be displayed in a list format, showing the name, rating, and type of each place.
- If there are no results or an error occurs during the search, appropriate messages will be displayed.

### Locate on Map

- Click on a place card in the list to locate the place on the map.
- The place's name, rating, and type will be displayed on the map.

## API

The React Places App uses an external API to fetch nearby locations. The API endpoint is:

- [Nearby Locations API](https://placesapi.dogukanozdemir.com/api/nearby-locations)

You can customize the API endpoint in the `getPlacesInRadius` function defined in the project to suit your needs.

```javascript
const apiUrl = `https://placesapi.dogukanozdemir.com/api/nearby-locations?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for using the React Places App! If you have any questions or encounter issues, please feel free to reach out to me.

Happy exploring! 🌍🗺️
