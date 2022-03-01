const mongoose = require('mongoose')
// mongoose es una dependencia entre la base de datos y node.js
const DB_USER = ''
const DB_PASSWORD = ''
const DB_HOST = ''
const DB_NAME = ''

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

//Modelo = plantilla, template o machote

//Schema = definir mi plantilla

/*
1- generamos el esquema
2- a partir del schema generamos el modelo
*/ 

//schema
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 150
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        enum: ['f','m'] // estos valores serian los validos
    },
})
//modelo
const Koder = mongoose.model('koders', koderSchema)// la coleccion a la que va a hacer referencia y el esquema

mongoose.connect(URL)
    .then(async (connection) => {
        console.log('DB connection established: ', connection)

        /*Koder.find({}) //todas las peticiones a la base de datos es asincrona
            .then((koders) => {
                console.log('Mis Koders: ', koders)
            })
            .catch((error) => console.error('Error: ', error))*/
            const newKoder = {
                name: 'Brian',
                lastName: 'Rodriguez',
                age: 31,
                gender: 'm'
            }
            Koder.create(newKoder)
                .then((koderCreated) => {
                    console.log('Koder Created: ', koderCreated)
                })
                .catch((error) => {
                    console.log('Error: ', error)
                })

            const koderCreated = await Koder.creat(newKoder)
            console.log(koderCreated)    
    })
    .catch((error) => {
        console.log('Error: ', error)
    })
