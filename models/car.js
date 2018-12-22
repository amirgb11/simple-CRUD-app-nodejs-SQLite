module.exports = function(sequelize, Sequalize) {
    var CarSchema = sequelize.define("Car", {
        VIN: Sequalize.CHAR(16),
        model: Sequalize.CHAR(45),
        company: Sequalize.CHAR(45),
        color: Sequalize.CHAR(45),
        Client_ssn: Sequalize.CHAR(10)
    },{
        timestamps: false
    });
    return CarSchema;
}