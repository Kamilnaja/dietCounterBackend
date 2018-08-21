const mongoose = require('mongoose');
const diaryEntrySchema = require('./../models/diaryEntryModel');
const diaryEntryModel = mongoose.model('DiaryEntry', diaryEntrySchema);

function getDiaryEntryFromDb(req, res) {
    diaryEntryModel
        .find({})
        .exec((err, data) => {
            if (err) { console.log(err) }
            res.send(data);
        })
}

exports.getDiaryEntry = (req, res) => {
    getDiaryEntryFromDb(req, res)
}