import { API } from './authAPI.js';

export async function getAllOduncs() {
    try {
        const response = await API.get('/odunc');
        return response.data;
    } catch (error) {
        console.error('Error fetching odunclar:', error);
        throw error;
    }
};
export async function getOduncById(uye_id) {
    try {
        const response = await API.get(`/odunc/${uye_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching odunc:', error);
        throw error;
    }
};
export async function createOdunc(odunc) {
    try {
        const response = await API.post('/odunc/', odunc);
        return response.data;
    } catch (error) {
        console.error('Error creating odunc:', error);
        throw error;
    }
};
export async function updateOdunc(id, odunc) {
    try {
        const response = await API.put(`/odunc/${id}`, odunc);
        return response.data;
    } catch (error) {
        console.error('Error updating odunc:', error);
        throw error;
    }
};
export async function deleteOdunc(id) {
    try {
        const response = await API.delete(`/odunc/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting odunc:', error);
        throw error;
    }
};