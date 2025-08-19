// Import the configured Express application
const app = require('./app');

// Load environment variables from .env file into process.env
const dotenv = require('dotenv');
dotenv.config();

// Extract the PORT variable from environment config
const PORT = process.env.PORT || 5000;

// Start the server (Render needs this)
app.listen(PORT, () => {
    console.log(`🚀 Server is running at port ${PORT}`);
});
