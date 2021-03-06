module.exports = function(sequelize, Sequalize) {
    var CarSchema = sequelize.define("Car", {
        VIN:{
            type : Sequalize.CHAR(16),
            allowNull : false,
            primaryKey : true
        }, 
        model: Sequalize.CHAR(45),
        company: Sequalize.CHAR(45),
        color: Sequalize.CHAR(45),
        Client_ssn: {
            type : Sequalize.CHAR(10),
            allowNull : false,
            references: {
                model: 'Client',
                key: 'ssn',
            }
    }, 
    },{
        timestamps: false
    });
    return CarSchema;
}