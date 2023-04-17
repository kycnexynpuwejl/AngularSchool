const tree = {value: 3, root: {value: 5, root: {value: -4, root: null}}};

const sumTreeValues = (node) => (node === null) ? 0 : node.value + sumTreeValues(node.root);

console.log(sumTreeValues(tree));