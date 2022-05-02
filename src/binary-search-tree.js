const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor (data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
    
}
class BinarySearchTree {

  constructor(){
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode= new Node(data);
    if(this.treeRoot===null) this.treeRoot = newNode;
    else this.addNode(this.treeRoot, newNode);
    
  }
  addNode(node, newNode){
    if(node.data < newNode.data){
      if(node.right===null) node.right=newNode;
      else this.addNode(node.right, newNode);
    } 
    else{
      if(node.left===null) node.left=newNode;
      else this.addNode(node.left, newNode);
    } 
  }

  has(data) {
    if(this.findData(this.treeRoot, data)===null) return false;
    else return true;
  }

  find(data) {
    return this.findData(this.treeRoot, data);
  }
  findData(node, data){
    if(node===null) return null;
    if(data===node.data) return node;
    if(data<node.data){
      return this.findData(node.left, data);
    }
    if(data>node.data){
      return this.findData(node.right, data);
    }
  }

  remove(data) {
    this.treeRoot= this.removeNode(this.treeRoot, data);
  }
  removeNode(node, data){
    if(node===null) return null;
    if(data>node.data){
      node.right= this.removeNode(node.right, data);
      return node
    }
    if(data<node.data){
      node.left= this.removeNode(node.left, data);
      return node;
    }
    if(data===node.data){
      if(node.left===null && node.right===null){
        node=null;
        return node;
      }
      if(node.right===null){
        node=node.left;
        return node;
      }
      if(node.left===null){
        node=node.right;
        return node;
      }

      const buffer= this.findMin(node.right);
      node.data= buffer.data;
      node.right= this.removeNode(node.right, buffer.data);
      return node;
    }
  }

  min() {
    return this.findMin(this.treeRoot).data;
  }
  findMin(node){
    if(node.left===null) return node;
    else return this.findMin(node.left);
  }

  max() {
    return this.findMax(this.treeRoot).data;
  }
  findMax(node){
    if(node.right===null) return node;
    else return this.findMax(node.right);
  }
}

module.exports = {
  BinarySearchTree
};
