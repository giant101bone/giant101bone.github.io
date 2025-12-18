import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate()
    return (
        <div className="dashboard">
            Blank page
            <div></div>
            <button onClick={()=> navigate("/")}>Log Out</button>
        </div>
        
    );
}