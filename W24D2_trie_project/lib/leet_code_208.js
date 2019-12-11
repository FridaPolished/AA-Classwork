// Implement a trie with insert, search, and startsWith methods.

//   Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a - z.
// All inputs are guaranteed to be non - empty strings.


class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter])
    }
  }


  search(word, root = this.root) {
    if (word.length === 0 && root.isTerminal) {
      return true;
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  startsWith(prefix) {
    let subr = this.wordsWithPrefix(prefix)
    return subr.length > 0 ? true : false;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (prefix.length === 0) {
      let recognizedWords = [];

      if (root.isTerminal) recognizedWords.push('')

      for (let letter in root.children) {
        let child = root.children[letter];
        let suffixes = this.wordsWithPrefix(prefix, child);
        let words = suffixes.map(suffix => letter + suffix);
        recognizedWords.push(...words);
      }
      return recognizedWords;
    } else {
      let firstLetter = prefix[0];
      let child = root.children[firstLetter];
      if (child === undefined) {
        return [];
      } else {
        let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
        let words = suffixes.map(suffix => firstLetter + suffix);
        return words;
      }
    }
  }
}

let trie = new Trie();

trie.insert("apple");
// console.log(trie.search("apple"));   // returns true
// console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
console.log(trie.startsWith("p")); // returns false
trie.insert("app");
// console.log(trie.search("app"));     // returns true