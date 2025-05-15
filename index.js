const express =require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('servidor funcionado');
   

});


app.listen(10000);