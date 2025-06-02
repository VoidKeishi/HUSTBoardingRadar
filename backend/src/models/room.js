const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    area: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    distance: {
      type: Number,
      default: 0,
    },
    capacity: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      default: '',
    },
    amenities: [{
      type: String,
    }],
    contact: {
      name: {
        type: String,
        default: '',
      },
      phone: {
        type: String,
        default: '',
      },
    },
    facebookLink: {
      type: String,
      default: '',
    },
    images: [String],
    trustScore: {
      score: {
        type: Number,
        default: 0,
      },
      details: {
        source: {
          type: String,
          default: '',
        },
        lastUpdated: {
          type: Date,
          default: null,
        },
        imageQuality: {
          type: String,
          default: '',
        },
        contactVerified: {
          type: Boolean,
          default: false
        },
        priceAcceptable: {
          type: Boolean,
          default: false,
        }
      }
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Room', roomSchema);
