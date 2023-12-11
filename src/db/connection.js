const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AppApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error('Connection to MongoDB failed:', e);
  });
