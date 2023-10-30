export default function Register() {
    return (
        <main>
            <div className="login-page">
                <h3>Welcome To Students Dashboard</h3>
                <form className="form-login">
                    <label className="login-control">First Name</label>
                    <input type="text" className="login-control input-login" />
                    <label className="login-control">Middle Name</label>
                    <input type="text" className="login-control input-login" />
                    <label className="login-control">Last Name</label>
                    <input type="text" className="login-control input-login" />
                </form>
            </div>
        </main>
    );
}