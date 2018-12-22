module.exports = function(sequelize, Sequalize) {
    var InsuranceShema = sequelize.define("Insurance", {
        price: Sequalize.DECIMAL(15 , 2),
        expiration_date: Sequalize.DATE,
        paymanet_date: Sequalize.DATE,
        InsuranceCompany_company_name: Sequalize.CHAR(20)
    },{
        timestamps: false
    });
    return InsuranceShema;
}