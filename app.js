require('dotenv').config()
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

//console.log(process.env)

const main = async()=>{

    const busquedas = new Busquedas();
    let opt;

    

    do {
        opt = await inquirerMenu();
       

        switch (opt) {
            case 1:
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
               
                
               //mosrtar mensaje
               //buscar lugares
               //seleccionar lugar
               //Clima
               //mostrar resultados 

                console.log('\n Información de la ciudad: ' + lugar+'\n')
                console.log('Ciudad: ')
                console.log('Lat: ')
                console.log('Long: ')
                console.log('Temperatura: ')
                console.log('Minima')
                console.log('Maxima')
                
               
                
                break;
                   
            
        }
        if (opt !== 0 ) {
            await pausa();
        }

                                        
    } while (opt!==0);

    

}

main();

