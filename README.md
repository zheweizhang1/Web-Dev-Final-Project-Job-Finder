# Jobicy Project
## Zhe Wei Zhang

## Description
This project utilizes the Jobicy API to fetch job listings and displays them in a user-friendly way. It uses Node.js, Express.js, Axios, and EJS.

## Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```

## Endpoints
- `GET /` - Fetches and displays job listings.
- `GET /search` - Allows searching for job listings based on specified criteria.

## File Structure
The project directory is structured as follows:
- **`public`**: Contains static files such as CSS stylesheets and client-side JavaScript files.
- **`views`**: Contains EJS templates for rendering HTML pages.
- **`app.js`**: Main entry point of the application where the server is configured and endpoints are defined.
- **`styles.css`**: CSS stylesheet for styling the HTML pages.

## Dependencies
- **Express.js**: Web framework for Node.js used to create server-side applications.
- **Axios**: Promise-based HTTP client for making requests to the Jobicy API.
- **EJS**: Embedded JavaScript templating engine for generating HTML with plain JavaScript.
