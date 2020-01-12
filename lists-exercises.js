function List(){
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;                    
    this.append = append;
    this.find = find;
    this.remove = remove;
    this.length = length;               // getter for listSize
    this.clear = clear;               
    this.toString = toString;       
    this.getElement = getElement;      // gets element at current position
    this.getPos = getPos;         
    this.setPos = setPos; 
    this.contains = contains;
    this.insert = insert;
    this.front = front;             // set this.pos = 0
    this.end = end;                 // set this.pos = this.length - 1
    this.previous = previous;       // Next four are the iterators
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    // Exercises
    this.insertIfBiggest = insertIfBiggest;
              
}

function append(element){
    this.dataStore[this.listSize++] = element;
};

function find(element){
    for (i = 0; i < this.dataStore.length; i++){
        if (this.dataStore[i] === element){
            return i;
        }
    };
    return -1;
};

function remove(element){
    //removes element, shifting indices for remaining indices as needed
    var foundAt = this.find(element);
    if (foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function insert(newElement, afterThis=undefined, byIndex=false){
    // inserts newElement after first instance of afterThis (if possible)
    // leaving afterThis=undefined inserts at front of list.
    // byIndex=true makes afterThis an index.
    if (afterThis === undefined){
        this.dataStore.splice(0, 0, newElement)
        return true;
    }
    if (byIndex){
        var insertPos = afterThis;
    } else {
        var insertPos = this.find(afterThis);
    }
    if (insertPos != -1){
        this.dataStore.splice(insertPos+1, 0, newElement);
        ++this.listSize;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function clear(){
    delete this.dataStore;  // not sure why delete is necessary
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function toString(){
    return this.dataStore;
}

function contains(element){
    if (this.find(element) === -1){
        return false;
    }
    return true;
}

function getElement(element){
    return this.dataStore[this.pos];
}

function setPos(position){
    this.pos = position;
}

function getPos(position){
    return this.pos;
}

function previous(){
    // returns undefined if not hasPrevious
    thisOne = this.dataStore[this.pos];
    --this.pos;
    return thisOne;
}

function next(){
    // returns undefined if not hasNext
    thisOne = this.dataStore[this.pos];
    ++this.pos;
    return thisOne;
}

function hasNext(){
    if (this.pos > this.listSize - 1) {
        return false;
    }
    return true;
}

function hasPrevious(){
    if (this.pos <= 0) {
        return false;
    }
    return true;
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}


//Exercises
//1

function insertIfBiggest(elem, after){
    //inserts iff elem is > all elements in List 
    //(numerically or lexicographically, according to context)
    for (i = this.front(); this.hasNext();){
        if (this.next() >= elem){
            return false;
        }
    } this.insert(elem, after);
}

list = new List();
list.append(1);
list.append(2);
list.append(3);

list.insertIfBiggest(5, 2);
console.log(list)
