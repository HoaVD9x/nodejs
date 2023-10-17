'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Historys', {
            History_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            patient_id: {
                type: sequelize.INTEGER
            },
            doctor_id: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            file: {
                type: Sequelize.TEXT
            },
            create_At: {
                allowNull: false,
                type: Sequelize.DATE
            },
            update_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('History');
    }
};