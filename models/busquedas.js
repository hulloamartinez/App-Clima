const axios =  require('axios');

class Busquedas{

    historial = ['Madrid','Santiago','Lima','Chillan','Quebec','Aukland']

    constructor(){
        //leer DB si existe

    }
    get paramsMaxbox(){
        return {
        'access-token': process.env.MAPBOX_KEY,
        'limit' : 5,
        'language': 'es'
        
        }

    }

    async ciudad (lugar = ''){
       

        try {
            /*const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMaxbox
            });
            */

            /*const resp = await axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`, {
                params: this.paramsMaxbox
            });
            */

            const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?language=es&limit=5&access_token=pk.eyJ1IjoiaHVsbG9hZGV2IiwiYSI6ImNrejYzb292NTB3cGkyd21wNXcwbnRrbWgifQ.WHkRAEpkkBffU-o1gDxPqQ`)
            
            return resp.data.features.map(lugar =>({

                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]

            }));



        } catch (error) {
            console.log(error);
            return [];
       
        }

        


    }

}

module.exports = Busquedas;