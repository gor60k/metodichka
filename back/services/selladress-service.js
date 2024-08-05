const SelladressModel = require('../models/selladress-model');

class SelladressService {
    /** получить все записи из таблицы "individuals" */
    async getAllRecords() {
        const list = await SelladressModel.findAll();
        return list;
    }

    /** создать запись в таблице "individuals" */
    async createRecord(payload) {
        const data = await SelladressModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "individuals" */
    async updateRecord(payload) {
        let record = await SelladressModel.findOne({ where: { id: payload.id } });
        record.city = payload?.city || record.city;
        record.street = payload?.street || record.street;
        record.nomer = payload?.nomer || record.nomer;
        return await record.save();
    }

    /** удалить запись из таблицы "individuals" */
    async removeRecord(recordId) {
        const record = await SelladressModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new SelladressService();