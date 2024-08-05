const PocupatelModel = require('../models/pocupatel-model');

class PocupatelService {
    /** получить все записи из таблицы "individuals" */
    async getAllRecords() {
        const list = await PocupatelModel.findAll();
        return list;
    }

    /** создать запись в таблице "individuals" */
    async createRecord(payload) {
        const data = await PocupatelModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "individuals" */
    async updateRecord(payload) {
        let record = await PocupatelModel.findOne({ where: { id: payload.id } });
        record.title = payload?.title || record.title;
        record.inn = payload?.inn || record.inn;
        record.kpp = payload?.kpp || record.kpp;
        return await record.save();
    }

    /** удалить запись из таблицы "individuals" */
    async removeRecord(recordId) {
        const record = await PocupatelModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new PocupatelService();