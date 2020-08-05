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

module.exports.category = 'function properties';
module.exports.report = () => 'Keep each function property on separate lines';

module.exports.include = ({options}) => {
    const {minProperties = 1} = options[0] || {};

    return [
        `ArrowFunctionExpression[params.length>${minProperties}]`,
        `FunctionDeclaration[params.length>${minProperties}]`,
    ];
};

module.exports.filter = ({node}) => {
    if (node.parent.parent.type === 'ForOfStatement')
        return false;

    const {params} = node;
    const {line} = node.loc.start;
    const isLoc = isCorrectLoc(line, params);

    if (isLoc)
        return false;

    return true;
};

module.exports.fix = ({text}) => {
    return text
        .replace(/,/g, ',\n')
        .replace('(', '(\n')
        .replace(')', '\n)')
        .replace(/\n(\s*)?\n/g, '\n');
};
