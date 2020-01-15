// Stack implementation

class Stack{
    constructor(){
        this.dataStore = [];
        this.size = 0;
    }
    push(elem){
        this.dataStore.push(elem);
        this.size++;
    };
    pop(){
        if(this.size > 0){
            this.size--;
            return this.dataStore.pop();  
        };
        return false;
        
    }
    peek(){
        return this.dataStore[this.size-1];
    }
}

var pile = new Stack();
for (i = 0; i < 4; i++){
    pile.push(i)
}
console.log("3 == ", pile.peek());
console.log("3 == ", pile.pop());
console.log("2 == ", pile.peek());
console.log("undefined == ", pile.push(4));
console.log("4 == ", pile.pop());
console.log("2 == ", pile.pop());
console.log("1 == ", pile.peek());
console.log("1 == ", pile.pop());
console.log("0 == ", pile.pop(0));
console.log("false == ", pile.pop(0));


