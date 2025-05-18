import { API } from './authAPI.js';

export async function getAllYayinEvleri() {
    try {
        const response = await API.get('/yayinevleri');
        return response.data;
    } catch (error) {
        console.error("Yayınevleri getirilemedi", error);
        throw error;
    }
};
export async function getYayinEviById(id) {
    try {
        const response = await API.get(`/yayinevleri/${id}`);
        return response.data;
    } catch (error) {
        console.error("Yayınevi getirilemedi", error);
        throw error;
    }
};
export async function createYayinEvi(yayinEvi) {
    try {
        const response = await API.post('/yayinevleri', yayinEvi);
        return response.data;
    } catch (error) {
        console.error("Yayınevi oluşturulamadı", error);
        throw error;
    }
};
export async function updateYayinEvi(id, yayinEvi) {
    try {
        const response = await API.put(`/yayinevleri/${id}`, yayinEvi);
        return response.data;
    } catch (error) {
        console.error("Yayınevi güncellenemedi", error);
        throw error;
    }
};
export async function deleteYayinEvi(id) {
    try {
        const response = await API.delete(`/yayinevleri/${id}`);
        return response.data;
    } catch (error) {
        console.error("Yayınevi silinemedi", error);
        throw error;
    }
};
