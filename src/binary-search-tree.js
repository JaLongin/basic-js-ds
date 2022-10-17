const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.key = null;
  }
  root(){
    return this.key;
  }
  add(data) {
    this.key = addWithin(this.key, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    if (!this.key) return false;
    let current = this.key;
    while (true) {
      if (!current) return false;
      if (data == current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    if (!this.key) return null;
    let current = this.key;
    while (true) {
      if (!current) return null;
      if (data == current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  remove(data) {
    this.key = this.removeNode(this.key, data)
  }
  removeNode(current, data) {
   if(current === null) return current;
    if (data === current.data) {
        if (current.left === null && current.right === null){
                return null;
            }else if(current.left === null){
                return current.right;
            }else if(current.right === null){
                return current.left;
            }else{
                let tempNode = this.mini(current.right)
                    current.data = tempNode.data
                  current.right = this.removeNode(current.right, tempNode.data)
                return current;
        }
    }else if(data < current.data) {
        current.left = this.removeNode(current.left, data)
        return current;
    }else{
        current.right = this.removeNode(current.right, data)
        return current;
    }
}

  mini() {
    let noda = this.key;
    while(!(noda.left == null))
    noda = noda.left;

  return noda;
  }

  min() {
    let noda = this.key;
    while(!(noda.left == null))
    noda = noda.left;

return noda.data;
  }

  max() {
    let noda = this.key;
    while(!(noda.right == null))
    noda = noda.right;

return noda.data;
  }
}

module.exports = {
  BinarySearchTree
};