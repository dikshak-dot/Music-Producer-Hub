import {useState} from "react";
import API from "../service/api";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        bio: "",
        genre: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await API.post("/auth/register", form);
            alert("Registered Successfully!");
            navigate("/");
        }catch(err){
            console.error(err);
            alert("Error registering");
        }
    };

    return(
        <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded w96">
                <h2 className="text-2xl mb-4 text-center">Register</h2>

                <input className="input" placeholder="Username" onChange={(e)=>setForm({...form, username:e.target.value})}/>
                <input className="input" placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
                <input className="input" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>
                <input className="input" placeholder="Bio" onChange={(e)=>setForm({...form, bio:e.target.value})}/>
                <input className="input" placeholder="Genre" onChange={(e)=>setForm({...form, genre:e.target.value})}/>

                <button className="btn">Register</button>
                <p className="mt-3 text-sm text-center">
                    Already have an account?{" "}
                    <span className="text-blue-400 cursor-pointer " onClick={()=>navigate("/")}>Login</span>
                </p>
            </form>
        </div>
    )
}