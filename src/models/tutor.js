const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      maxlength: 500,
    },

    subjects: [
      {
        type: String,
        required: true,
      },
    ],

    classes: [
      {
        type: String,
      },
    ],

    qualification: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      default: 0,
    },

    hourlyRate: {
      type: Number,
      required: true,
    },

    teachingMode: [
      {
        type: String,
        enum: ["Home", "Online", "Both"],
      },
    ],

    languages: [
      {
        type: String,
      },
    ],

    available: {
      type: Boolean,
      default: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

tutorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("TutorProfile", tutorSchema);
