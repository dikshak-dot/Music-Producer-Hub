import { useState } from "react";
import API from "../service/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post("/auth/login", form);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            alert("Login failed!")
        }
    };
    return (
        <div className="h-screen flex items-center justify-center bg-black text-white">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded w-96">
                <h2 className="text-2xl mb-4 text-center">Login</h2>

                <input className="input" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="password" className="input" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

                <button className="btn">Login</button>

                <p className="mt-3 text-sm text-center">
                    New here?{" "}
                    <span className="text-blue-400 cursor-pointer" onClick={()=>navigate("/register")}>Register</span>
                </p>
            </form>
        </div>
    )
}