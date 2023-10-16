'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", [{
            password: "1234",
            first_name: "Dinh",
            last_name: "Hoa",
            email: "admin@gmail.com",
            address: "ha noi",
            gender: "1",
            type_role: "ROLE",
            key_role: "R1",
            create_At: new Date(),
            update_at: new Date()
        }])
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
