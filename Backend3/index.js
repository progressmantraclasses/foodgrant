require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT || 5432;
const DB_DIALECT = process.env.DB_DIALECT || 'postgres';
const PORT = process.env.PORT || 4000;

// Connect to PostgreSQL database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    logging: false, // Disable SQL logs in console
});

// Check database connection
sequelize.authenticate()
    .then(() => console.log('✅ Connected to PostgreSQL'))
    .catch(err => console.error('❌ PostgreSQL Connection Error:', err.message));

// Define Retailer Model
const Retailer = sequelize.define('Retailer', {
    wholesalerName: { type: DataTypes.STRING, allowNull: false },
    itemName: { type: DataTypes.STRING, allowNull: false },
    contact: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    requirementKgs: { type: DataTypes.INTEGER, allowNull: false },
});

// Sync Database
sequelize.sync()
    .then(() => console.log('✅ Database synced!'))
    .catch(err => console.error('❌ Database Sync Error:', err.message));

// Route to handle form submission
app.post('/submit', async (req, res) => {
    try {
        const newRetailer = await Retailer.create(req.body);
        res.status(201).json({ message: "Retailer data saved!", newRetailer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/wholesalers', async (req, res) => {
    try {
        const { location, itemName, quantity } = req.query;
        
        let whereCondition = {};
        
        if (location) {
            whereCondition.location = location;
        }
        if (itemName) {
            whereCondition.itemName = itemName;
        }
        if (quantity) {
            whereCondition.requirementKgs = { [Sequelize.Op.gte]: quantity };
        }

        const wholesalers = await Retailer.findAll({ where: whereCondition });
        res.json(wholesalers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
