'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ArticleMotif extends BaseModel {
    constructor(source) {
        super('article-motif', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}