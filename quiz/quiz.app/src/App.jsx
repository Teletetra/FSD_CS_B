import { Routes,Route } from "react-router-dom"
import Home from "../components/Home"
import Counter from "../components/Counter"
import Quiz from "../components/Quiz"
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route path="/signup" element={<h1>Signup</h1>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="*" element={<h1>No page available</h1>}></Route>
      </Routes>    
    </div>
 )
}
export{App}