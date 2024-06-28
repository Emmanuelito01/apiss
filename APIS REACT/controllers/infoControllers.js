import mysql from 'mysql2/promise'
import db from '../config/database.js'

export default class infoController{
    static async index(req,res){
        let connection;
        try{
            connection=await mysql.createConnection(db)
            const [result]= await connection.execute("SELECT * FROM bob")
            console.log(result)
            res.json(result)
        }
        catch(error){
            res.status(500).json({'error':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
    static async store(req,res){
        let connection;
        try{
            const {title, description, img, leftColor, rightcolor}=req.body
            connection=await mysql.createConnection(db)
            console.log(title,",",description,",",img, ",",leftColor, ",",rightcolor)
            const [resultado] = await connection.execute("INSERT INTO bob (title, description, img, leftColor, rightcolor) VALUES(?,?,?,?,?)",[title,description,img,leftColor,rightcolor])
            console.log("este son los datos enviados",resultado)
        }
        catch(error){
            res.status(500).json({'errorcitoo':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
//     static async details(req,res){
//         let connection;
//         try{
//             const idB = req.params.id;
//             connection = await mysql.createConnection(db)
//             const [send] = await connection.execute("SELECT * FROM bob WHERE id = ?", [idB])
//             res.json(send)
//         }
//         catch(error){
//             res.status(500).json({'error': error.message})
//         }
//         finally{
//             if(connection){
// await connection.end()
//             }
//         }
//     }


}

