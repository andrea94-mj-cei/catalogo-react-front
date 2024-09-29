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

router.get('/api/v1/admin', async (req, res, next) =>{
    console.log("ver contenido privado en admin");
    res.status(200).json ({mesage: "Aquí esta tu contenido PRIVADO!"});
});



router.listen(PORT, () =>{
    console.log(`Server esta corriendo en ${DOMAIN}:${PORT}`);
})