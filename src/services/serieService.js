import { instance } from "./api.js";
import { state } from "../data/store.js"


export async function getAll() {
    try {
        const response = await instance.get('/series');
        state.movies = response.data;
        
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function getById(id) {
    try {
        const response = await instance.get(`/series/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}


export async function create(movie) {
    try {
        const response = await instance.post('/series', movie);
        return console.log(response.data)
    } catch (error) {
        console.log(error);
    }
}

export async function update(id, updatedMovie) {
    try {
        const response = await instance.patch(`/series/${id}`, updatedMovie);
        return console.log(response.data)
    } catch (error) {
        console.log(error);
    }

}


export async function remove(id) {
    try {
        const response = await instance.delete(`/series/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}