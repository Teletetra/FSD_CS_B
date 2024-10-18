function hello(){
    console.log("Hello word");
}

hello();

const hello1=()=>{
    console.log("Hello1 world");
}

hello1();

const sum=(x,y,z)=>{
    return (x+y+z);
}


const Person={
    name:"gaur",age:20
};

const newp={...Person};
newp.age=35;
const newperson1={...Person,name:"kans"};
console.log(Person);
console.log(newperson1);
const emp=[...Person];
console.log(emp);
