import type Button from '../model/Button';

const baseUrl = 'http://localhost:3001/api/v1';

export default {
    async getButtons(): Promise<{ error: boolean, buttons: Button[] }> {
        const headers = { authorization: getAuthorization() };
        const result = await fetch(`${baseUrl}/button`, { method: 'GET', headers });

        return result.json();
    },

    async playSound(id: number) {
        const headers = { authorization: getAuthorization() };
        await fetch(`${baseUrl}/button/${id}`, { method: 'POST', headers });
    },

    async uploadSound(id: number, file: File) {
        const headers = { authorization: getAuthorization() };

        const formData = new FormData();
        formData.append('sound', file);

        await fetch(`${baseUrl}/button/${id}`, { method: 'PUT', headers, body: formData });
    }
}

function getAuthorization() {
    return 'Basic ' + window.btoa(`admin:admin`);
}