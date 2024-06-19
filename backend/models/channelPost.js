const mongoose = require('mongoose');

const ChannelPostSchema = new mongoose.Schema({
  postedBy: { type: String, required: true },
  postedTo: { 
    type: String, 
    required: true,
    enum: ['daily-notice', 'alpha-group', 'beta-group', 'gaming', 'kontribution', 'hostel', 'general'] 
  },
  message: { type: String, required: true },
  postedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChannelPost', ChannelPostSchema);
