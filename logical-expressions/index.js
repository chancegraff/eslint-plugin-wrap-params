'use strict';

module.exports.category = 'logical expressions';
module.exports.report = () => 'Keep right side of logical expression on new line';

module.exports.include = () => {
  return [
    "LogicalExpression",
  ];
};

module.exports.filter = ({node}) => {
  const {
    loc: {
      start,
      end,
    }
  } = node;

  return start.line === end.line;
};

module.exports.fix = ({text, node}) => {
  const {
    loc: {
      start,
    },
  } = node;
  const count = start.column;
  const indent = " ".repeat(count);

  return text
    .replace(/\s*\&\&\s*/g, `&&\n${indent}`)
    .replace(/\s*\|\|\s*/g, `||\n${indent}`)
    .replace(/\(\s*/g, `(\n${indent}`)
    .replace(/\s*\)/g, `${indent}\n)`)
    .replace(/\n(\s*)?\n/g, '');
};
