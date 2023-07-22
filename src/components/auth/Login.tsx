

function Login() {
    return (
        <div className="bg-default">
            <div className="main-content">
                {/* Navbar */}
                <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
                    <div className="container px-4">
                        <a className="navbar-brand" href="../index.html">
                            <img src="../assets/img/brand/white.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-collapse-main">
                            {/* Collapse header */}
                            <div className="navbar-collapse-header d-md-none">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="../index.html">
                                            <img src="../assets/img/brand/blue.png" />
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Navbar items */}
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="#">
                                        <i className="ni ni-planet" />
                                        <span className="nav-link-inner--text">Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="#">
                                        <i className="ni ni-circle-08" />
                                        <span className="nav-link-inner--text">About</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="#">
                                        <i className="ni ni-key-25" />
                                        <span className="nav-link-inner--text">Contacts</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Header */}
                <div className="header bg-gradient-primary py-5 py-lg-7">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-6">
                                    <h1 className="text-white">Welcome!</h1>
                                    {/* <p className="text-lead text-light">Use these awesome forms to login or create new account in your project for free.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </div>
                {/* Page content */}
                <div className="container mt--8 pb-8">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                        <div className="card bg-secondary shadow border-0" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }}>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        {/* <small>Login Here</small> */}
                                        <h2 className="display-3"><b>Login</b></h2>
                                    </div>
                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Email" type="email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                <span className="text-muted">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary my-4">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                               
                            </div>
                            

                        </div>

                    </div>
                    <div className="col-md-12 text-center mt-3">
                                    <a href="#" className="text-center text-primary" style={{color:"#ffff"}}><small> © 2023  <a href="#"> mamaAfrica Cafetia </a></small></a>
                                </div>
                </div>
                {/* <footer className="py-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-xl-between">
                            <div className="col-xl-6">
                                <div className="copyright text-center text-xl-left text-muted">
                                    © 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </div>
        </div>

    )
}

export default Login