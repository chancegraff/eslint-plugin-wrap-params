'use strict';

const wrap = require('./wrap');

const getWrapRule = (a) => ({
    [a]: wrap(require(`./${a}`)),
});

module.exports.rules = {
    ...getWrapRule('wrap-params'),
    ...getWrapRule('destructured-imports'),
    ...getWrapRule('destructured-objects'),
    ...getWrapRule('logical-expressions'),
};

module.exports.configs = {
    recommended: {
        rules: {
            'wrap-params/wrap-params': 'error',
            'wrap-params/destructured-imports': 'error',
            'wrap-params/destructured-objects': 'error',
            'wrap-params/logical-expressions': 'error',
        },
    },
};
