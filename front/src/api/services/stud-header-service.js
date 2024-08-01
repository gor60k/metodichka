import { instanceAxios } from "../axios-config";

export default class StudHeadersService {

    static apiUrl = '/api/stud-headers';

    static async getAllRecords() {
        const res = await instanceAxios.get(this.apiUrl);
        return res.data;
    }

    static async getOneRecord(body) {
        const res = await instanceAxios.get(this.apiUrl + `/${body}`);
        return res.data;
    }

    static async createRecord(body) {
        const res = await instanceAxios.post(this.apiUrl, body);
        return res.data;
    }

    static async updateRecord(body) {
        const res = await instanceAxios.put(this.apiUrl, body);
        return res.data;
    }

    static async removeRecord(body) {
        const res = await instanceAxios.delete(this.apiUrl + `/${body}`);
        return res.data;
    }
} 