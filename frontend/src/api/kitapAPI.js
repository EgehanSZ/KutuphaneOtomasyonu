import { API } from './authAPI.js';

export async function getAllKitaplar() {
    try {
        const response = await API.get('/kitaplar');
        return response.data;
    } catch (error) {
        console.error('Error fetching kitaplar:', error);
        throw error;
    }
}
export async function getKitapByISBN(isbn) {
    try {
        const response = await API.get(`/kitaplar/${isbn}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching kitap:', error);
        throw error;
    }
}
export async function createKitap(kitap) {
    try {
        const response = await API.post('/kitaplar/', kitap);
        return response.data;
    } catch (error) {
        console.error('Error creating kitap:', error);
        throw error;
    }
}
export async function updateKitap(isbn, kitap) {
    try {
        const response = await API.put(`/kitaplar/${isbn}`, kitap);
        return response.data;
    } catch (error) {
        console.error('Error updating kitap:', error);
        throw error;
    }
}
export async function deleteKitap(isbn) {
    try {
        const response = await API.delete(`/kitaplar/${isbn}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting kitap:', error);
        throw error;
    }
}