import { Router } from "express";
import infoController from '../controllers/infoControllers.js'


const router=new Router()

//obtiene info disponible
router.get('/info',infoController.index)

//crear un nuevo info
router.post('/info',infoController.store)

// //obtiene la info por el id
// router.get('/info/:id',infoController.details)

export default router