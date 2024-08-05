const Sequelize = require('sequelize');
const sequelize = require('../connection');

const StudBodyModel = sequelize.define(
    'studbody',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        productId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        endTime: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        probeg: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        cena: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        sum: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nalog: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        sumNaloga: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        studHeaderId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = StudBodyModel;