import { API } from './authAPI.js';


export async function getAllKategoriler() {
    try {
        const response = await API.get('/kategoriler');
        return response.data;
    } catch (error) {
        console.error('Error fetching kategoriler:', error);
        throw error;
    }
};
export async function getKategoriById(id) {
    try {
        const response = await API.get(`/kategoriler/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching kategori:', error);
        throw error;
    }
};
export async function createKategori(kategori) {
    try {
        const response = await API.post('/kategoriler', kategori);
        return response.data;
    } catch (error) {
        console.error('Error creating kategori:', error);
        throw error;
    }
};
export async function updateKategori(id, kategori) {
    try {
        const response = await API.put(`/kategoriler/${id}`, kategori);
        return response.data;
    } catch (error) {
        console.error('Error updating kategori:', error);
        throw error;
    }
};
export async function deleteKategori(id) {
    try {
        const response = await API.delete(`/kategoriler/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting kategori:', error);
        throw error;
    }
};