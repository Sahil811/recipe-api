import express from 'express';
import recipeRoutes from './routes/recipeRoutes';
import db from './database/db';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', recipeRoutes);

// Start server
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await db.sync(); // Sync database models
});
