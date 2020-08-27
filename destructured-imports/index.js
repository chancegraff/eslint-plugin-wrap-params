'use strict';

var isCorrectLoc = (line, specifier) => {
    const n = specifier.length;
    const lens = [];

    for (let i = 0; i < n; i++) {
        const prop = specifier[i];
        const prevDiffs = lens.reduce((p, c) => p + c, 0);
        const diff = prop.loc.end.line - prop.loc.start.line;
        lens.push(diff);

        if (prop.loc.start.line !== line + i + 1 + prevDiffs)
            return false;
    }

    return true;
};

module.exports.category = 'destructuring';
module.exports.report = () => 'Keep each destructured import property on a separate line';

module.exports.include = ({options}) => {
    const {minProperties = 1} = options[0] || {};

    return [
        `ImportDeclaration[specifiers.length>=${minProperties}]`,
    ];
};

module.exports.filter = ({node}) => {
    const {specifiers} = node;
    const withoutDefaults = specifiers.filter(({ type }) => type === "ImportSpecifier");
    const {line} = node.loc.start;
    const isLoc = isCorrectLoc(line, withoutDefaults);

    if (isLoc)
        return false;

    return true;
};

module.exports.fix = ({text}) => {
    return text
        .replace(/,(?!\s{)/g, ',\n')
        .replace('{', '{\n')
        .replace('}', '\n}')
        .replace(/\n(\s*)?\n/g, '\n');
};
