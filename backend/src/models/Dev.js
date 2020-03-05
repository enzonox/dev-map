const mongoose = require('mongoose');
const PointSchema = require('./Utils/PointSchema');//Objeto que armazena a latitude e longitude

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere',// Indice utilizado para geolocalização facilitando a busca
    }
});

module.exports = mongoose.model('Dev', DevSchema);