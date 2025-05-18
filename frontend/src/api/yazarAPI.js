import { API } from './authAPI.js';

export async function getAllYazarlar() {
    try {
        const response = await API.get('/yazarlar');
        return response.data;
    } catch (error) {
        console.error("Yazarlar getirilemedi", error);
        throw error;
    }
};
export async function getYazarById(id) {
    try {
        const response = await API.get(`/yazarlar/${id}`);
        return response.data;
    } catch (error) {
        console.error("Yazar getirilemedi", error);
        throw error;
    }
};
export async function createYazar(yazar) {
    try {
        const response = await API.post('/yazarlar', yazar);
        return response.data;
    } catch (error) {
        console.error("Yazar oluşturulamadı", error);
        throw error;
    }
};
export async function updateYazar(id, yazar) {
    try {
        const response = await API.put(`/yazarlar/${id}`, yazar);
        return response.data;
    } catch (error) {
        console.error("Yazar güncellenemedi", error);
        throw error;
    }
};
export async function deleteYazar(id) {
    try {
        const response = await API.delete(`/yazarlar/${id}`);
        return response.data;
    } catch (error) {
        console.error("Yazar silinemedi", error);
        throw error;
    }
};
