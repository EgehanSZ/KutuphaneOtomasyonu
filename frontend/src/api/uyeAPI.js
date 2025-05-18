import { API } from './authAPI.js';

export async function getAllUyeler() {
    try {
        const response = await API.get('/uyeler');
        return response.data;
    } catch (error) {
        console.error('Error fetching uyeler:', error);
        throw error;
    }
};
export async function getUyeById(id) {
    try {
        const response = await API.get(`/uyeler/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching uye:', error);
        throw error;
    }
};
export async function createUye(uye) {
    try {
        const response = await API.post('/uyeler', uye);
        return response.data;
    } catch (error) {
        console.error('Error creating uye:', error);
        throw error;
    }
};
export async function updateUye(id, uye) {
    try {
        const response = await API.put(`/uyeler/${id}`, uye);
        return response.data;
    } catch (error) {
        console.error('Error updating uye:', error);
        throw error;
    }
};
export async function deleteUye(id) {
    try {
        const response = await API.delete(`/uyeler/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting uye:', error);
        throw error;
    }
};