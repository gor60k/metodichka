const Sequelize = require('sequelize');
const sequelize = require('../connection');

const StudHeaderModel = sequelize.define(
    'studheader',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        date1: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        organizationId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        sellAdressId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        pocupatelId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        valuta: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = StudHeaderModel;