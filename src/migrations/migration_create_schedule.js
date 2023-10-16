'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Schedules', {
            Schedule_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            current_number: {
                type: sequelize.INTEGER
            },
            max_number: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            time_type: {
                type: Sequelize.STRING
            },
            doctor_id: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('Schedule');
    }
};