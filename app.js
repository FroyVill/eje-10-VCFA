//Crear el servidor//
const express = require("express");
const app = express();

//config
app.use(express.static("public")) ;

//que busque el index.html
app.get("/", (req, res) => {
    res.send("En teoria es el index.html");
});

app.get("*",(req,res) =>{
    res.send(__dirname+"/public/not-found-404.html");
})

//Proceso
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log("El servidor esta corriendo en el puerto:",port);
});
