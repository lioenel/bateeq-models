'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class Bank extends BaseModel {
    constructor(source) {
        super('bank', '1.0.0');
   
        this.code = ''; 
        this.name = ''; 
        this.description = ''; 
        
        this.copy(source);
    }
}