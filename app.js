const express = require('express'); // Import the express module
const axios = require('axios'); // Import the axios module for making HTTP requests
const bodyParser = require('body-parser'); // Import the body-parser module for parsing request bodies
const app = express(); // Create an instance of express
const port = 3000; // Define the port number for the server

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(bodyParser.urlencoded({ extended: false })); // Use body-parser middleware to parse URL-encoded bodies
app.use(express.static(__dirname + '/public')); // Serve static files from the 'public' directory

// Define a GET endpoint to render the index page with job listings from the API
app.get('/', async (req, res) => {
    try {
        // Define the API URL to fetch job listings
        const apiUrl = 'https://jobicy.com/api/v2/remote-jobs';
        
        // Make an HTTP GET request to the API to fetch job listings
        const response = await axios.get(apiUrl);
        
        // Extract job listings from the API response
        const jobs = response.data.jobs;
        
        // Get query parameters or set default values if not provided
        const geo = req.query.geo || '';
        const industry = req.query.industry || '';
        const tag = req.query.tag || '';

        // Render the 'index' view, passing the job listings and query parameters to the template
        res.render('index', { jobs, count: 50, geo, industry, tag });
    } catch (error) {
        // Log the error to the console
        console.error(error);
        
        // Render the 'error' view if an error occurs
        res.status(500).render('error');
    }
});

// Define a GET endpoint for searching job listings
app.get('/search', async (req, res) => {
    try {
        // Extract non-empty query parameters from the request
        const queryParams = {};
        for (const key in req.query) {
            if (req.query[key]) {
                queryParams[key] = req.query[key];
            }
        }

        // Construct the API URL with non-empty query parameters
        const apiUrl = 'https://jobicy.com/api/v2/remote-jobs';
        const url = `${apiUrl}?${new URLSearchParams(queryParams).toString()}`;

        // Make an HTTP GET request to the API to fetch job listings based on search criteria
        const response = await axios.get(url);
        
        // Extract job listings from the API response
        const jobs = response.data.jobs;

        // Render the 'index' view, passing the job listings and query parameters to the template
        res.render('index', { jobs, ...req.query });
    } catch (error) {
        // Log the error to the console
        console.error(error);
        
        // Render the 'error' view if an error occurs
        res.status(500).render('error');
    }
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
