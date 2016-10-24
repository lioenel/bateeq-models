require("should");
 
var validateRewardType = require("./reward-type-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
     
    data.should.have.property('reward');
    data.reward.should.instanceof(String); 
    
    data.should.have.property('unit');
    data.unit.should.instanceof(String);  
    
    data.should.have.property('discount1');
    data.discount1.should.be.Number();
    
    data.should.have.property('discount2');
    data.discount2.should.be.Number();
    
    data.should.have.property('nominal');
    data.nominal.should.be.Number();
    
    data.should.have.property('rewardTypeId');
    data.rewardTypeId.should.instanceof(Object); 
    
    data.should.have.property('rewardType');
    data.rewardType.should.instanceof(Object); 
    
    //validateRewardType(data.rewardType);
};