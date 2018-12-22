module.exports = function(sequelize, Sequalize) {
    var ClientSchema = sequelize.define("Client", {
        ssn: Sequalize.CHAR(10),
        first_name: Sequalize.CHAR(100),
        last_name: Sequalize.CHAR(100)
    },{
        timestamps: false
    });
    return ClientSchema;
}