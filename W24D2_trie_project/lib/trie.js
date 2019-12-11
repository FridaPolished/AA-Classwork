class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor(){
        this.root = new Node();       
   }

   insertRecur(word, root = this.root){
        let letter = word[0];

        if (!(letter in root.children)){
            root.children[letter] = new Node();
        }

        if(word.length === 1){
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter])
        }
   }


   insertIter(word){
       let letter = word[0];
    
        if (!(letter in this.root.children)) {
           
            this.root.children[letter] = new Node();
           
        }
        let curRoot = this.root;
        let cur;
        
        for(let i = 0; i < word.length; i ++){
            cur = word[i];
            if (i === word.length - 1) {
                curRoot.children[cur] = new Node();
                curRoot.children[cur].isTerminal = true;
            } else {
                if(!(cur in curRoot.children)){
                    curRoot.children[cur] = new Node();
                    curRoot = curRoot.children[cur];
                }  else {
                    curRoot = curRoot.children[cur];
                }
            }
       }
   }

   searchRecur(word, root = this.root){
        if(word.length === 0 && root.isTerminal){
            return true;
        } 
        
        let letter = word[0];
        if (letter in root.children){
            return this.searchRecur(word.slice(1), root.children[letter]);
        } else {
            return false;
        }
    }

    searchIter(word){
        let letter = word[0];

        if (!(letter in this.root.children)) {
            return false;
        }
        let curRoot = this.root;
        let cur;

        for (let i = 0; i < word.length; i++) {
            cur = word[i];
            if (i === word.length - 1 && cur in curRoot.children ) {
                if(curRoot.children[cur].isTerminal) {
                    return  true;
                } else { 
                    return false;
                }
            } else {
                if (cur in curRoot.children) {
                    curRoot = curRoot.children[cur];
                } else {
                    return false;
                }
            }
        }
        return false;
    }

    wordsWithPrefix(prefix, root = this.root){

        if (prefix.length === 0) {
            let recognizedWords = [];

            if(root.isTerminal) recognizedWords.push('')

            for (let letter in root.children){
                let child = root.children[letter];
                let suffixes = this.wordsWithPrefix(prefix, child);
                let words = suffixes.map(suffix => letter + suffix);
                recognizedWords.push(...words);
            }
            return recognizedWords;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];
            if (child === undefined){
                return [];
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
                let words = suffixes.map(suffix => firstLetter + suffix);
                return words;
            }
        }
    }
    
}

module.exports = {
    Node,
    Trie
};