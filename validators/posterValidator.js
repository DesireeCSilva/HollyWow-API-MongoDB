import {body, check } from "express-validator"
import {validateResult} from "../helpers/validatorHelper.js"
import PosterModel from "../models/PosterModel.js"

export const validateCreatePoster = [
    body('name').notEmpty().withMessage('Name is required'),
    body('director').notEmpty().withMessage('Director must not be empty'),
    body('year').isInt().withMessage('Year must have integer numbers '),
    body('imageUrl').notEmpty().withMessage('The image is required'),
    (req, res, next)=>{
        validateResult(req, res, next)
    }  
    
]; 

export const validateDeletePoster=[
    check("id")
        .exists()
        .notEmpty()
        .withMessage('ID is required')
        .custom(async (id) => {
            const poster = await PosterModel.findById(id);
            if (!poster) {
                throw new Error('The poster you want to delete does not exist.');
            }
        }),
     validateResult
]

export const  validatePutPosters= [
    check("name")
    .exists()
    .notEmpty()
    .withMessage('Name is required'),

    check("year")
    .exists()
    .notEmpty()
    .withMessage('Year is required'),

    check("director")
    .exists()
    .notEmpty()
    .withMessage('Director is required'),

    check("imageUrl")
    .exists()
    .notEmpty()
    .withMessage('ImageUrl is required'),



    check("id")
    .exists()
    .notEmpty()
    .custom(
        async (id)=>{
            const poster = await PosterModel.findById(id);
            if(!poster){
                throw new Error('The poster was not found')
            }
        }
    ),
    validateResult
]