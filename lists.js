// Implementation of List data structure, a la Michael McMillian

// Desireable improvements:
    // make insert method allow insertion of multiple elements
    //                and allow locating insertion by index

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

function insert(newElement, afterThisElement){
    // inserts newElement afterThisElement (if possible)

    var insertPos = this.find(afterThisElement);
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


var colors = new List()
colors.append(1)
colors.append(2)
colors.append(3)
console.log(colors.find(2))
console.log(colors.find(4))



