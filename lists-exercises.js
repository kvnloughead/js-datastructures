// Exercises
// 1 create insertIfBiggest method for List class

List.prototype.insertIfBiggest = function(elem, after=undefined, byIndex=false){
    //inserts iff elem is > all elements in List 
    //(numerically or lexicographically, according to context)
    for (i = this.front(); this.hasNext();){
        if (this.next() >= elem){
            return false;
        }
    } 
    return this.insert(elem, after, byIndex);
}

// 3 create Person class

class Person {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

function filterForAttribute(list, property, x){
    // filters list, displaying only those elements such that element.property === x
    var newList = new List();
    for (list.front(); list.hasNext();){
        elem = list.next()
        if (elem[property] === x){
            newList.append(elem);
        }
    }
    return newList;
}


var names = ['Avery', 'Bob', 'Calvin', 'Dennis', 'Eva', 'Frank', 'Greta', 'Hans', 'Ida', 'James'];
var genders = ['F', 'M', 'M', 'M', 'F', 'M', 'F', 'M', 'F', 'M'];
var persons = new List();
for (i = 0; i < 10; i++){
    var person = new Person(names[i], genders[i])
    persons.append(person)
}
console.log(filterForAttribute(persons, 'gender', 'M'))


function testInsertIfBiggest(){
    numList = new List();
    numList.append(1);
    numList.append(2);
    numList.append(3);
    numList.insertIfBiggest(5, 2);
    console.log(numList)

    strList = new List();
    strList.append('a');
    strList.append('b');
    strList.append('c');
    strList.insertIfBiggest('e', 'b');
    console.log(strList)
}