const Sequelize = require('sequelize');
const sequelize = require('../connection');

const OrganizationModel = sequelize.define(
    'organization',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        inn: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        kpp: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = OrganizationModel;