
# 📘 React Frontend Assignment

This is a React-based Single Page Application (SPA) built as part of a frontend development assignment. It showcases key frontend skills including component-based design, API integration, responsive layout, and loading/error handling using modern tools and libraries.

---

##  Features

-  Reusable React components (Header, Footer, Posts, Weather)
-  Responsive design using **Bootstrap**
-  API integration using **Axios**
  - Fetching posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - Fetching weather information from [OpenWeatherMap](https://openweathermap.org/api)
-  Loading indicators and error handling
-  Organized project structure and modular code

---

##  Project Structure

react-frontend-assignment/
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Weather.js
│   │   └── Posts.js
│   ├── pages/                  # Page views
│   │   ├── Home.js
│   │   └── About.js
│   ├── services/               # API logic
│   │   └── api.js
│   ├── App.js                  # App routing and layout
│   └── index.js                # Entry point
├── public/                     # Static files
├── package.json                # Project config and dependencies
└── README.md                   # Documentation

###  Component Descriptions:
- **Header.js**: Displays the header with navigation links.
- **Footer.js**: Footer with copyright info and links.
- **Weather.js**: Displays weather info fetched from OpenWeatherMap.
- **Posts.js**: Fetches and displays a list of posts from JSONPlaceholder.

###  Page Descriptions:
- **Home.js**: The homepage of the app, showcasing the weather info and recent posts.
- **About.js**: Provides information about the app or creator.

---

## Getting Started

###  Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm (comes with Node.js)

###  Installation

# Clone the repository
git clone https://github.com/Ayrusop/react-frontend-assignment.git

# Navigate to the project folder
cd react-frontend-assignment

# Install dependencies
npm install


### 🌤️ API Setup

#### OpenWeatherMap API:
1. Create a free account on [OpenWeatherMap](https://openweathermap.org/api).
2. Generate an API key.
3. Create a `.env` file in the root of the project and add your API key:

   REACT_APP_WEATHER_API_KEY=your-api-key-here   

4. In `src/services/api.js`, replace the placeholder with the environment variable:
   const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
   
### Run the App

npm start


Open your browser and visit:  
📍 http://localhost:3000

---

## APIs Used

| #API              | #Endpoint                                          | #Usage                                 |
|-------------------|----------------------------------------------------|----------------------------------------|
| JSONPlaceholder   | https://jsonplaceholder.typicode.com/posts         | Fetch dummy posts                      |
| OpenWeatherMap    | https://api.openweathermap.org                     | Fetch live weather info                |

---

## License

This project is created for educational/demo purposes. You are free to use and modify it as needed.

---

### Acknowledgements

- React
- Bootstrap
- Axios
- JSONPlaceholder
- OpenWeatherMap

