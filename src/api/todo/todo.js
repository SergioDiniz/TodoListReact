const restful = require('node-restful')
const mongoose = require('mongoose')

const todoScheme = new mongoose.Schema({
    description: {type: String, required: true},
    done: {Type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.module('todo'. todoScheme)