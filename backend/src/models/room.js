const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amenities: [{
      type: String,
      required: true,
    }],
    contact: {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    facebookLink: {
      type: String,
      required: true,
    },
    images: [String],
    trustScore: {
      score: {
        type: Number,
        required: true,
      },
      details: {
        source: {
          type: String,
          required: true,
        },
        lastUpdated: {
          type: Date,
          required: true,
        },
        imageQuality: {
          type: String,
          required: true,
        },
        contactVerified: {
          type: Boolean,
          required: true,
        }
      }
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Room', roomSchema);
