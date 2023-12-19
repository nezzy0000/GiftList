const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList");
const verifyProof = require("./verifyProof");

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();
console.log(root);

// find the proof that norman block is in the list
const name = "Norman Block";
const index = niceList.findIndex((n) => n === name);
const proof = merkleTree.getProof(index);

// verify proof against the Merkle Root
console.log(`Name: ${name} | verified: ${verifyProof(proof, name, root)}`); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?
const name2 = "NoName";
const index2 = niceList.findIndex((n) => n === name2);
const proof2 = merkleTree.getProof(index2);
console.log(`Name: ${name2} | verified: ${verifyProof(proof2, name2, root)}`);
