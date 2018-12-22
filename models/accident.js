module.exports = function(sequelize, Sequalize) {
    var AccidentShema = sequelize.define("Accident", {
        place: Sequalize.CHAR(45),
        adate: Sequalize.DATE,
        Car_VIN: Sequalize.CHAR(16)
    },{
        timestamps: false
    });
    return AccidentShema;
}