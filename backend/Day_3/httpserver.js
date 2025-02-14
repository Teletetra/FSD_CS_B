const http=require("http");

const server=http.createServer(async(req,res)=>{
  res.setHeader('content-type','text/html');
  // application/json
  res.statusCode=200;
  const data=await fetch("http://dummyjson.com/recipes")
  const datajson= await data.json();
  const dataarray=datajson.recipes;
  const name=dataarray.map((item)=>{
    res.write("<h3>"+item.name+"</h3>");
  })
  res.end();
})

server.listen(3000,(err)=>{
  try{
    if (err) throw err;
    console.log("server is listening on port",3000)
  }
  catch(err){
    console.log("server error ", err.message);
  }
})