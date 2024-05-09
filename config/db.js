const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = "mongodb+srv://andyalviaing:andy1234@cluster0.q7d5tff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
};
module.exports = {
    db: 'your-mongodb-connection-string',
    JWT_SECRET: 'your-secret-key',
    
};
module.exports = connectDB;
