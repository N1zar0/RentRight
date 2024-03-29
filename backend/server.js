  const express = require('express');
  const tenantRoutes = require('./routes/tenants');
  const managerRoutes = require('./routes/managers');
  const requestRoutes = require('./routes/requests');
  const applicationRoutes = require('./routes/applications');
  const listingRoutes = require('./routes/listings');
  const authorizationRoutes = require('./routes/authorizations');

  const cors = require('cors');
  const mongoose = require('mongoose');
  const app = express();

  const DB_CONNECTION_STRING = process.env.DB_URI || 'mongodb://admin:admin@mongo:27017/admin';

  mongoose.connect(DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use('/api/v1/tenants', tenantRoutes);
  app.use('/api/v1/managers', managerRoutes);
  app.use('/api/v1/requests', requestRoutes);
  app.use('/api/v1/applications', applicationRoutes); 
  app.use('/api/v1/listings', listingRoutes);
  app.use('/api/v1/auth', authorizationRoutes);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  