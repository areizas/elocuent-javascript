/*
Iterable groups
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
 */

class Groups{
    constructor() {
        this.values = [];
    }

    add(value){
        if(! this.has(value)){
            this.values.push(value);
        }
    }

    delete(value){
        if(this.has(value)){
            let index = this.values.indexOf(value);
            this.values = this.values.slice(0,index).concat(this.values.slice(index+1));
        }
    }

    has(value){
        return this.values.some( el => el===value)
    }

    static from(iterable){
        let group = new Groups();
        for (let element of iterable){
            group.add(element)
        }
        return group;
    }

}

class GroupsIterator {
    constructor(groups) {
        this.x = 0;
        this.groups = groups;
    }

    next(){
        let isDone = false;
        let value;

        if(this.groups.values[this.x] === undefined) isDone=true;
        value = this.groups.values[this.x];
        this.x+=1;

        return {value: value, done: isDone}
    }
}

Groups.prototype[Symbol.iterator] = function n(){
  return new GroupsIterator(this);
};

let a = Groups.from([1,2,3,4]);

for (let value of a){
    console.log(value);
}

