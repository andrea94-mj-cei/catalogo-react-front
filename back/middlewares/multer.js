import multer from "multer";
import path from 'path';

//v1 opcion minima
// export const upload = multer ({dest: 'public/uploads'})

//v2 opcion con nombre personalizado
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //aquí definimos donde subiremos los archivos
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        //aquí definimos el nombre que tendrá nuestro upload(el archivo que subamos)

        // V1 guardar el archivo con el mismo nombre con el que lo subimos

        // cb(null, file.originalname);

        // V2 generar un nombre único + la extensión (avatar-1234556.png)

        // const extension = path.extname(file.originalname);
        // const uniqueNumber=Date.now() + "-" + Math.round(Math.random()*1E9);
        // // ej: (avatar-9876554.png)
        // cb(null, `${file.fieldname}-${uniqueNumber}${extension}`); 

        // V3 con fecha tipo DB "avatar-2024-09-23-123123123.png"
        
        const extension = path.extname(file.originalname);
        const uniqueSuffix = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');
        cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`); 

    }

});

//cb es funcion callback

export const upload = multer({storage:storage})