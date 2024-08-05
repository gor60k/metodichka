const Sequelize = require('sequelize');
const sequelize = require('../connection');

const PocupatelModel =sequelize.define(
    'pocupatel',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(25),
            allowNull: false,
        },
        inn: {
            type: Sequelize.STRING(25),
            allowNull: false,
        },
        kpp: {
            type: Sequelize.STRING(25),
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = PocupatelModel;