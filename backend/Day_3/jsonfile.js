const http=require("http");
const port=3000

const jsondata=[
  {
  id:1,
  name:'gaurav',
  email:'lasdfknanlsd'
},
  {
  id:2,
  name:'gaurav',
  email:'lasdfknanlsd'
},
  {
  id:3,
  name:'gaurav',
  email:'lasdfknanlsd'
},
  {
  id:4,
  name:'gaurav',
  email:'lasdfknanlsd'
},
]
const server=http.createServer((req,res)=>{
  res.setHeader('content-type','application/json');
  res.statusCode=200;
  jsondata.map((item)=>{
    res.write("<h3>"+item+"</h3>")
  })
})


server.listen(port,(err)=>{
  try{
  if (err) throw err;
  console.log(`server is running on port:${port}`);
}
catch(err){
  console.log("error",err.message)

}}
)