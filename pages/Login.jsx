import React from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [loginFormData, setLoginFormData] = React.useState({email: "", password: ""})

    function handleSubmit(e){

    }

    function handleChange(e){
        
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    value={loginFormData.email}
                />
                <input 
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}