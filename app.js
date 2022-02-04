require('dotenv').config()
const { inquirerMenu, pausa, leerInput, listarLugares, climaLugar } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

//console.log(process.env)

const main = async()=>{

    const busquedas = new Busquedas();
    let opt;

    

    do {
        opt = await inquirerMenu();
       

        switch (opt) {
            case 1:
                //mostrar menjsae
                const lugar = await leerInput('Ciudad: ');
                //buscar los lugarer y añadirlos al arreglo lugares
                const lugares = await busquedas.ciudad(lugar);
                // muestra los lugares y el lugar seleccionado
                const idSeleccionado = await listarLugares(lugares);
                const lugarSeleccionado = lugares.find(l => l.id === idSeleccionado);
                                     
               //Clima
               const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

               

               //mostrar resultados 

                console.log('\n\nInformación de la ciudad:'.green)
                console.log('Ciudad: ', lugarSeleccionado.nombre)
                console.log('Lat: ', lugarSeleccionado.lat)
                console.log('Long: ', lugarSeleccionado.lng)
                console.log('Temperatura: ', clima.temp)
                console.log('Minima: ', clima.max)
                console.log('Maxima', clima.min)
                console.log('El clima está: ', clima.desc)
                
               
                
                break;
                   
            
        }
        if (opt !== 0 ) {
            await pausa();
        }

                                        
    } while (opt!==0);

    

}

main();

