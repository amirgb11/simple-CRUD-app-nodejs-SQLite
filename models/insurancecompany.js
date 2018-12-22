module.exports = function(sequelize, Sequalize) {
    var InsuranceCompanyShema = sequelize.define("InsuranceCompany", {
        company_name:{
            type : Sequalize.CHAR(20) ,
            allowNull: false
        } 
    },{
        timestamps: false
    });
    return InsuranceCompanyShema;
}