module.exports.default = (count, map) => new Array(count).fill(null).map((_, index) => map(index));
