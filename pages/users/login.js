import { Component } from "react";
import Link from "next/link";
import Profile from "../../components/Profile";

class Login extends Component {
    
    render() {
        return (
            <div>
                <Link href="/api/auth/login">Login</Link>
                <Profile/>
                <Link href="/api/auth/logout">Logout</Link>
            </div>
        )
        
    }
}

export default Login;