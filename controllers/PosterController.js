import Poster from "../models/PosterModel.js"

//GET

export const getAllPosters = async (request, response) => {
   
    try {
    const posters = await Poster.find({})
    response.status(200).json(posters);
}
catch(error){
    response.status(500).json({message: error.message})
}

}

//GET BY ID

export const getPosterById = async  (request,response)=>{
    try {
        const poster = await Poster.findById(request.params.id);
        console.log(request.params.id);

        if (!poster){
            return response.status(404).json({message:"Cannot find the specified poster"});
        }
            response.status(200).json(poster);
    } 
    catch (error) {
        response.status(500).json({message: error.message})
    }

}

//DELETE

export const deletePoster = async (request, response) => {
    try {
        const poster = await Poster.findByIdAndDelete(request.params.id);
        if (!poster) {
            return response.status(404).json({message: 'Cannot find the specified poster'});
        }
        response.status(200).json(poster);
        response.json({message:'The poster was deleted properly'});
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

//POST

export const createPoster = async(request,response)=>{
     
    try {
        const poster = await Poster.create(request.body)
        
        response.status(201).json(poster);
        
    } catch (error) {

        response.status(500).json({message: error.message})
    }
} 


//UPDATE

export const updatePoster = async (request,response)=> {
    try {
       
        const putPoster = await Poster.findOneAndUpdate({_id: request.params.id} , request.body ); 

        response.status(200).json({
            poster: putPoster,
            message:"Poster updated correctly",
        });
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}