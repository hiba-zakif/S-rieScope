import {instance} from "./api.js";


 export async function getAll (){
    try{
        const response = await instance.get('/series');
        return response.data
    }catch(error){
        console.log(error);
    }
}

export async function getById(id){
    try{
        const response = await instance.get(`/series/${id}`);
        return console.log (response.data)
    }catch(error){
        console.log(error);
    }
}


 export async function create (movie){
    try{
        const response = await instance.post('/series',movie);
        return console.log (response.data)
    }catch(error){
        console.log(error);
    }
}

 export async function update (movie){
    try{
        const response = await instance.put(`/series/${movie.id}`,movie);
        return console.log (response.data)
    }catch(error){
        console.log(error);
    }
}
 

 export async function remove (id){
    try{
        const response = await instance.delete(`/series/${id}`);
        return response.data
    }catch(error){
        console.log(error);
    }
}