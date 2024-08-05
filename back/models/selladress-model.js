const Sequelize = require('sequelize');
const sequelize = require('../connection');

const SelladressModel = sequelize.define(
    'selladress',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING(25),
            allowNull: false,
        },
        street: {
            type: Sequelize.STRING(25),
            allowNull: false,
        },
        nomer: {
            type: Sequelize.STRING(25),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = SelladressModel;