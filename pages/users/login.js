import { Component } from "react";
import Profile from "../../components/Profile";

class Login extends Component {
    
    render() {
        return (
            <div>
                <a href="/api/auth/login">Login</a>
                <Profile/>
                <a href="/api/auth/logout">Logout</a>
            </div>
        )
        
    }
}

export default Login;