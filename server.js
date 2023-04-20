const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const strains = {
    'berniehana butter': {
        'name' : 'Berniehana Butter',
        'aroma': 'Complex, creamy and buttery funk, with a sweet floral and berry gas',
        'flavor': 'Buttery Jasmine Floral notes, with an earthy berry gas',
        'experience': 'Calm and Relaxing Body High'
    },
    'cereal a la mode':{
        'name':'Cereal a la Mode',
        'aroma': 'Gassy and sweet condensed milk with a Graham Cracker crust',
        'flavor': 'Gassy and Creamy Vanilla Bean and Toasted Marshmellows',
        'experience': 'Full Bodied Happy and Giggly High' 
    },
    'congo kashmir':{
        'name':'Congo Kashmir',
        'aroma': 'Earthy Sweet with a slight Zesty Citrus finish',
        'flavor': 'Gassy and Creamy Vanilla Bean and Toasted Marshmellows',
        'experience': 'Full Bodied Happy and Giggly High' 
    },
    'pacman':{
        'name':'PACMAN',
        'aroma': 'Cotton Candy and Fermented berries topped with Lime Juice',
        'flavor': 'Blue Cotton Candy and Frosted Lemon Pound Cake',
        'experience': 'An Active, Alert, and Uplifting High' 
    },
    'ridgeline lantz':{
        'name':'Rindgeline Lantz',
        'aroma': 'Sweet Candy and Earth Pine',
        'flavor': 'Candy Kush with a slighty Creamy Backend',
        'experience': 'Euphoric and Relaxing Full Body High' 
    },
    'triple scoop':{
        'name':'Triple Scoop',
        'aroma': 'Rainbow Sherbet Ice Cream with Canied Fruit and Gas',
        'flavor': 'Fruity, Creamy and Gassy',
        'experience': 'Creative and Functional, Mentally Stimulating High' 
    },
    'that badu':{
        'name':'That Badu',
        'aroma': 'Earthy Herbal Garden, and Fresh Lemons',
        'flavor': 'Fresh Lemon Balm with a Melon Base',
        'experience': 'Very Strong, Euphoric, and Balanced Head and Body High' 
    },
    'adios mother fucker':{
        'name':'Adios Mother Fucker',
        'aroma': 'Candied Lime, Blueberry Jam, and Marshmellow',
        'flavor': 'A Fresh Bowl of Berries and Cream with Lime on Top',
        'experience': 'Strong and Heavy, Mood Lifting Body High' 
    },
    'cereal milk':{
        'name':'Cereal Milk',
        'aroma': 'Creamy and Fruity with a hint of Gas',
        'flavor': 'Sweet Sugary Cream',
        'experience': 'Relaxed Body Feel with a Happy Head High' 
    },
    'unknown':{
        'name':'Please Enter Strains that are Cureently In-Stock!',
        'aroma': 'Happy',
        'flavor': 'Blessed',
        'experience': 'Joyful' 
    }
    
    
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/styles.css', (request, response)=>{
    response.sendFile(__dirname + '/styles.css')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})
app.get('/api/:name',(request,response)=>{
    const strainName = request.params.name.toLowerCase()

    if( strains[strainName] ){
        response.json(strains[strainName])
    }else{
        response.json(strains['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})