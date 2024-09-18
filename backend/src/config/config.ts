import DotenvFlow from 'dotenv-flow'

DotenvFlow.config()

export default {
    // Default configuration
    ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // Database configuration
    MONGODB_URL: process.env.MONGODB_URL
}

