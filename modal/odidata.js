const mongoose = require('mongoose')
const Schema = mongoose.Schema

const odiDataSchema = new Schema({
    "batting_score": String,
    "wickets": String,
    "runs_conceded": String,
    "catches": String,
    "opposition": String,
    "ground": String,
    "date": String,
    "match_result": String,
    "result_margin": String,
    "toss": String,
    "batting_innings": String
})

module.exports = mongoose.model("OdiData", odiDataSchema)