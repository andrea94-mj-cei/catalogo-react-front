import express from 'express';

//Hash y JWT
import bcrypt from 'bcrypt'; // es para hacer hash de nuestros passwords
import jwt from 'jsonwebtoken'; // crear y leer tokens JWT 

//middlewares
import cors from 'cors';

//configuraciones
import {PORT, DOMAIN, JWT_SECRET, __dirname} from './config.js';

//utilies



const router = express();


//Middleware

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({extended:true}));


//base de datos
const users=[];

const MockUser = {
    name: "Andrea",
    username: "andrea@gmail.com",
    password: "1234",
    image: "https://picsum.photos/id/237/200/300"
}


//rutas

router.get('/api/v1/users', async (req, res, next) =>{
    res.status(200).json({data:users, mesage:"Aquí están tus usuarios"});
});

router.post('/api/v1/login', async (req, res, next) =>{
    try{
    console.log("haciendo login");
    res.status(200).json({data:MockUser, mesage:"Aquí estan tus usuarios"})
    }catch (e){
    res.status(500).json({error: "Error en el servidor"})
    }
});

router.post('/api/v1/register', async (req, res, next) =>{

    const {username, password, name, imagen="https://picsum.photos/id/237/200/300"} = req.body;

    console.log(req.body);

    try{
    console.log("haciendo register");
    res.status(200).json({data:MockUser, mesage:"Login correcto"})
    }catch (e){
    res.status(500).json({error: "Error en el servidor"})
    }
});

router.post('/api/v1/admin', async (req, res, next) =>{
    console.log("ver contenido privado en admin");
    res.status(200).json ({mesage: "Aquí esta tu contenido PRIVADO!"})
});

router.get('/api/v1/users', () =>{
    res.status(200).json(users);
});


router.listen(PORT, () =>{
    console.log(`Server esta corriendo en ${DOMAIN} : ${PORT}`);
})