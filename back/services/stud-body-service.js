const StudBodyModel = require('../models/stud-body-model');

class StudBodyService {
    /** получить все записи из таблицы "proxybodies" по  proxyHeaderId */
    async getAllHeadersRecords(headerId) {
        const list = await StudBodyModel.findAll({ where: { studHeaderId: headerId } });
        return list;
    }

    /** создать запись в таблице "proxybodies" */
    async createRecord(payload) {
        const data = await StudBodyModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "proxybodies" */
    async updateRecord(payload) {
        let record = await StudBodyModel.findOne({ where: { id: payload.id } });
        record.productId = payload?.productId || record.productId;
        record.endTime = payload?.endTime || record.endTime;
        record.probeg = payload?.probeg || record.probeg;
        record.cena = payload?.cena || record.cena;
        record.sum = payload?.sum || record.sum;
        record.nalog = payload?.nalog || record.nalog;
        record.sumNaloga = payload?.sumNaloga || record.sumNaloga;
        record.studHeaderId = payload?.studHeaderId || record.studHeaderId;
        return await record.save();
    }

    /** удалить запись из таблицы "proxybodies" */
    async removeRecord(recordId) {
        const record = await StudBodyModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new StudBodyService();