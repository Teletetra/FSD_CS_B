const num=[2,3,4,5,5,6,7]
const data=num.filter((n)=>(n%2!=0)).map((a)=>(a*5)).reduce((b,s)=>(b+s))

console.log(data);
