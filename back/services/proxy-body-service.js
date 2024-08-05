const ProxyBodyModel = require('../models/proxy-body-model');

class ProxyBodyService {
    /** получить все записи из таблицы "proxybodies" по  proxyHeaderId */
    async getAllHeadersRecords(headerId) {
        const list = await ProxyBodyModel.findAll({ where: { proxyHeaderId: headerId } });
        return list;
    }

    /** создать запись в таблице "proxybodies" */
    async createRecord(payload) {
        const data = await ProxyBodyModel.create(payload);
        return data;
    }

    /** обновить запись в таблице "proxybodies" */
    async updateRecord(payload) {
        let record = await ProxyBodyModel.findOne({ where: { id: payload.id } });
        record.count = payload?.count || record.count;
        record.unit = payload?.unit || record.unit;
        record.proxyHeaderId = payload?.proxyHeaderId || record.proxyHeaderId;
        record.productId = payload?.productId || record.productId;
        return await record.save();
    }

    /** удалить запись из таблицы "proxybodies" */
    async removeRecord(recordId) {
        const record = await ProxyBodyModel.destroy({ where: { id: recordId } });
        return record;
    }
}

module.exports = new ProxyBodyService();