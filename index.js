'use strict';

const wrap = require('./wrap');

const getWrapRule = (a) => ({
    [a]: wrap(require(`./${a}`)),
});

module.exports.rules = {
    ...getWrapRule('wrap-destructured-object-params'),
    ...getWrapRule('wrap-function-params'),
};

module.exports.configs = {
    recommended: {
        rules: {
            'wrap-params/wrap-params': 'error',
            'wrap-params/destructured-objects': 'error',
        },
    },
};
