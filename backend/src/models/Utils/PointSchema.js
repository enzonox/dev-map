const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],// longitude/ latitude - o mongo entende nessa ordem
        required: true,

    },
});

module.exports = PointSchema;