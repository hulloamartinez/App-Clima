const axios =  require('axios');

class Busquedas{

    historial = ['Madrid','Santiago','Lima','Chillan','Quebec','Aukland']

    constructor(){
        //leer DB si existe

    }
    get paramsMaxbox(){
        return {
        'limit' : 5,
        'language': 'es',
        'access-token': process.env.MAPBOX_KEY
        }

    }

    async ciudad (lugar = ''){
       

        try {
            /*const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMaxbox
            });
            */

            const resp = await axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`, {
                params: this.paramsMaxbox
            });
            console.log(`${resp} ++++++++++++++++++++++++`);

            //const resp = await instance.get();

            console.log(resp.data);
            return []; // devolver los lugares relacionados (solo
            
        } catch (error) {
            console.log(error);
            return [];
       
        }

        


    }

}

module.exports = Busquedas;