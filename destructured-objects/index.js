'use strict';

var isCorrectLoc = (line, properties) => {
    const n = properties.length;

    for (let i = 0; i < n; i++) {
        const prop = properties[i];

        if (prop.loc.start.line !== i + line + 1)
            return false;
    }

    return true;
};

module.exports.category = 'destructuring';
module.exports.report = () => 'Keep each property on separate lines when using multiple destructuring properties';

module.exports.include = ({options}) => {
    const {minProperties = 1} = options[0] || {};

    return [
        `VariableDeclarator > .id[type="ObjectPattern"][properties.length>${minProperties}]`,
        `ArrowFunctionExpression > .params[type="ObjectPattern"][properties.length>${minProperties}]`,
        `FunctionDeclaration > .params[type="ObjectPattern"][properties.length>${minProperties}]`,
    ];
};

module.exports.filter = ({node}) => {
    if (node.parent.parent.type === 'ForOfStatement')
        return false;

    const {properties} = node;
    const {line} = node.loc.start;
    const isLoc = isCorrectLoc(line, properties);

    if (isLoc)
        return false;

    return true;
};

module.exports.fix = ({text}) => {
    return text
        .replace(/,/g, ',\n')
        .replace('{', '{\n')
        .replace('}', '\n}')
        .replace(/\n(\s*)?\n/g, '\n');
};
