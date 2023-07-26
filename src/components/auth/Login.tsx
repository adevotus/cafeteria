import { Link } from 'react-router-dom';


function Login() {
    return (
        <div>
            <div id="app">
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <div className="login-brand">
                                    <h3>My Cafeteria</h3>
                                    {/* <img src="assets/img/stisla-fill.svg" alt="logo" width={100} className="shadow-light rounded-circle" /> */}
                                </div>
                                <div className="card card-primary" style={{ boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" }}>
                                    <div className="card-header"><h4 className="text-center">Login Here</h4></div>
                                    <div className="card-body">
                                        <form method="POST" action="#" className="needs-validation" noValidate>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" className="form-control" name="email" tabIndex={1} required />
                                                <div className="invalid-feedback">
                                                    Please fill in your email
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="d-block">
                                                    <label htmlFor="password" className="control-label">Password</label>
                                                    <div className="float-right">
                                                        <a href="auth-forgot-password.html" className="text-small">
                                                            Forgot Password?
                                                        </a>
                                                    </div>
                                                </div>
                                                <input id="password" type="password" className="form-control" name="password" tabIndex={2} required />
                                                <div className="invalid-feedback">
                                                    please fill in your password
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                                                    <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                                                    <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                        Login generel <i className="fas fa-arrow-right fa-sm"></i>
                                                    </Link>
                                                </button>
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                                                    <Link to="/kitchen" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                        Login kitchen<i className="fas fa-arrow-right fa-sm"></i>
                                                    </Link>
                                                </button>
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                                                    <Link to="/waiter" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                        Login  waiter<i className="fas fa-arrow-right fa-sm"></i>
                                                    </Link>
                                                </button>
                                            </div>
                                        </form>


                                    </div>
                                </div>
                                {/* <div className="mt-5 text-muted text-center">
                                    Don't have an account? <a href="auth-register.html">Create One</a>
                                </div> */}
                                <div className="simple-footer">
                                    Copyright © Cafeteria 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>



    )
}

export default Login