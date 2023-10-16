'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Doctor_clinic_specialty', {
            Doctor_clinic_specialty_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctor_id: {
                type: sequelize.INTEGER
            },
            clinic_id: {
                type: Sequelize.INTEGER
            },
            specialty_id: {
                type: Sequelize.INTEGER
            },
            update_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Doctor_clinic_specialty');
    }
};