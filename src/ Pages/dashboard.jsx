import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Cbody from "../components/cbody";
export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="body">
                <Navbar/>
                <Cbody/>
            </div>
            
            <div className="footer">
                Blank page
                <button onClick={()=> navigate("/")}>Log Out</button>
            </div>
            
        </div>
        
    );
}