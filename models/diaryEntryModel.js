const mongoose = require('mongoose');

const diaryEntrySchema = mongoose.Schema({
    id: {
        type: Number
    },
    time: {
        type: Number
    },
    meals: {
        type: String // todo - change to product
    }
})

module.exports = diaryEntrySchema;