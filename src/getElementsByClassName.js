// eslint-disable-next-line no-unused-vars
const getElementsByClassName = (targetClassName) => {
  const result = [];

  const recursionHelper = function(domNode) {
    if (domNode && domNode.classList.contains(targetClassName)) {
      result.push(domNode);
    }
    const nodes = domNode.children;
    for (let i = 0; i < nodes.length; i++) {
      recursionHelper(nodes[i]);
    }
  };

  recursionHelper(document.body);
  return result;
};
