# Weather Forecast Simple Project

This project provides a simple weather forecast for a given city. It fetches and displays weather details such as temperature, humidity, wind speed, and other relevant information.

## Frameworks, Libraries & Programs Used

- [Next.js](https://nextjs.org/) - The React framework used.
- [OpenWeatherMap API](https://openweathermap.org/) - Access current weather data for the specified/searched location.
- [Auth0](https://auth0.com/) - For authentication services.

This project requires certain environment variables to function correctly. These include:

- `NEXT_PUBLIC_GITHUB_CLIENT_ID`: Your OpenWeatherMap API key.
- `NEXT_PUBLIC_GITHUB_CLIENT_SECRET`: Your Auth0 domain.
- `NEXT_PUBLIC_WEATHER_KEY`: Your Auth0 client ID.
- `NEXTAUTH_SECRET`: Your Auth0 client ID.

Create a `.env` file at the root of your project and add these variables:

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a basic understanding of Next.js and its concepts.
- GIT

### Installing

To install the project, follow these steps:

-  Clone the repository by `git clone https://github.com/calz10/weather-forecast.git`

-  Navigate into the project directory by typing `cd weather-forecast`

- Create an account in [OpenWeatherMap](https://openweathermap.org/) and [Auth0](https://auth0.com/). These services provide the weather data and authentication services.

- Run the application by typing `npm run dev`

### Deployed Url
You can also check the deployed version using the url below

`https://weather-forecast-virid-one.vercel.app/`