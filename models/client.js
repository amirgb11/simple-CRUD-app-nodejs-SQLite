module.exports = function(sequelize, Sequalize) {
    var ClientSchema = sequelize.define("Client", {
        ssn: Sequalize.STRING,
        first_name: Sequalize.STRING,
        last_name: Sequalize.STRING
    },{
        timestamps: false
    });
    return ClientSchema;
}