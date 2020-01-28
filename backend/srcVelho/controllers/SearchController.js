const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
          // Coisas possiveis de se fazer aqui:
         // Buscar todos os devs em raio de 10 km
        // e filtrar por tecnologia
    async index(request, response){

        const { latitude, longitude, techs } = request.query;
        
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
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