function Login() {
    return (
        <main>
            <div className="login-page">
                <h3>Welcome To Students Dashboard</h3>
                <form className="form-login">
                    <label className="login-control">Username</label>
                    <input type="text" className="login-control input-login" />
                    <label className="login-control">Password</label>
                    <input type="password" className="login-control input-login" />
                </form>
            </div>
        </main>
    );
}


export default Login;