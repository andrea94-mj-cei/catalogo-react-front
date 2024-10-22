import express from 'express';
import bcrypt from 'bcrypt'; // es para hacer hash de nuestros passwords
import jwt from 'jsonwebtoken'; // crear y leer tokens JWT 
import { upload } from './middlewares/multer.js'; 
import {PORT, DOMAIN, FULL_DOMAIN, JWT_SECRET, __dirname} from './config.js';

const router = express();

const users=[];


//UPLOAD
router.post("/api/v1/upload", upload.single("avatar"),  (req, res, next) =>{
    console.log("Archivo subido")

    console.log("file es:", req.file); // informacion del archivo
    console.log("body es:", req.body); // otros campos del formulario

    // guardar en la DB
    res.status(201).json({
        "mensaje": "Archivo subido correctamente",
        file: req.file,
        body: req.body,
        peso: `${Math.round(req.file.size / 1024)} Kbytes`,
        url: `${FULL_DOMAIN} /uploads/ ${req.file.filename}`,
    })
});


//USUARIOS
router.get('/api/v1/users', async (req, res, next) =>{
    res.status(200).json({data:users, mesage:"Aquí están tus usuarios"});
});


//LOGIN
router.post('/api/v1/login', async (req, res, next) =>{
    try{
        const {username, password} = req.body;

        //obtener el usuario recien creado
        const user = users.find((u) => u.username === username);

        if(!user){
            return res.status(400).json({message: "Usuario no encontrado"});
        }

        //Comparar la contraseña de la base de datos, con la BD
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message:"Clave incorrecta"});
        }

        console.log("User encontrado", user);

    console.log("haciendo login");
    res.status(200).json({data:user, mesage:"Aquí estan tus usuarios"});
    }catch (e){
    res.status(500).json({error: "Error en el servidor"})
    }
});


//REGISTER
router.post('/api/v1/register', async (req, res, next) =>{

    try{
    const {username, password, name, image="https://picsum.photos/id/237/200/300"} = req.body;
    console.log(req.body);

        //Hash de contraseña con Bcript
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    

    //Guardar esto en la BD(base de datos)
    const id = Math.floor(Math.random()*10000) + 1;
    const newUser = {id,username, password:hashedPassword, name, image};
    users.push(newUser);

    //obtener el usuario recien creado
    const user = users.find((u) => u.username === username);

    console.log("haciendo register");
    res.status(200).json({data: user, mesage:"Registro correcto"})
    }catch (e){
    res.status(500).json({error: "Error en el servidor"})
    }
});


//ADMIN
router.get('/api/v1/admin', async (req, res, next) =>{
    console.log("ver contenido privado en admin");
    res.status(200).json ({mesage: "Aquí esta tu contenido PRIVADO!"});
})
