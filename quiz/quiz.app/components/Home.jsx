import { Link } from "react-router-dom"
const Home=()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to="/login"> login</Link>
                </li>
                <li><Link to="/signup">signup</Link></li>
                <li><Link to="/counter">counter</Link></li>
            </ul>
        </div>
    )
}

export default Home;