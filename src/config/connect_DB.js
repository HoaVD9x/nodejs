const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('vau', 'root', null, {
    host: 'localhost',
    dialect: "mysql"
});

let connect = async() => {
    try {
        await sequelize.authenticate();
        console.log("success");
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = connect;