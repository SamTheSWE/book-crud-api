const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

