const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);
       
        const devs = await Dev.find({
            //filtrar por tecnologias
            techs: {
                $in: techsArray,
            },
            //buscar todos devs em um raio de 10km
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
     
        return response.json({ devs });
    }
}