const mongoose = require('mongoose');

const BitSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required : true
      },
      bit: {
        type: String,
        required: true
      },
      coin: {
        type: String,
        required: true
      },
      currentTime: {
        type: Date,
        default: Date.now
      }
  });


const BitModel = mongoose.model('Bit_details', BitSchema);

module.exports = BitModel;
