'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Booking', {
            booking_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            status_id: {
                type: sequelize.STRING
            },
            doctor_id: {
                type: Sequelize.INTEGER
            },
            patient_id: {
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE
            },
            time_type: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Booking');
    }
};