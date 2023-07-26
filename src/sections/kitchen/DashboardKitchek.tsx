import React from 'react'

function DashboardKitchek() {
    return (
        <div>
            <div id="app">
                <div className="main-wrapper main-wrapper-1">
                    <div className="navbar-bg" />
                    <nav className="navbar navbar-expand-lg main-navbar">
                        <form className="form-inline mr-auto">
                            <ul className="navbar-nav mr-3">
                                <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars" /></a></li>
                                <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search" /></a></li>
                            </ul>
                            <div className="search-element">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width={250} />
                                <button className="btn" type="submit"><i className="fas fa-search" /></button>
                                <div className="search-backdrop" />

                            </div>
                        </form>
                        <ul className="navbar-nav navbar-right">

                            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell" /></a>
                                <div className="dropdown-menu dropdown-list dropdown-menu-right">
                                    <div className="dropdown-header">Notifications
                                        <div className="float-right">
                                            <a href="#">Mark All As Read</a>
                                        </div>
                                    </div>

                                    <div className="dropdown-footer text-center">
                                        <a href="#">View All <i className="fas fa-chevron-right" /></a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                <img alt="image" src="#" className="rounded-circle mr-1" />
                                <div className="d-sm-none d-lg-inline-block">Hi,</div></a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-title">Logged in 5 min ago</div>
                                    <a href="features-profile.html" className="dropdown-item has-icon">
                                        <i className="far fa-user" /> Profile
                                    </a>


                                    <div className="dropdown-divider" />
                                    <a href="#" className="dropdown-item has-icon text-danger">
                                        <i className="fas fa-sign-out-alt" /> Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="main-sidebar sidebar-style-2">
                        <aside id="sidebar-wrapper">
                            <div className="sidebar-brand">
                                <a href="#">Cafeteria</a>
                            </div>
                            <div className="sidebar-brand sidebar-brand-sm">
                                <a href="#">C</a>
                            </div>
                            <ul className="sidebar-menu">
                                <li className="menu-header">Dashboard</li>
                                <li className="dropdown active">
                                    <a href="#" className="nav-link"><i className="fas fa-fire" /><span>Dashboard</span></a>

                                </li>
                                <li className="menu-header">Starter</li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span>Orders</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="#">Received Orders</a></li>
                                        <li><a className="nav-link" href="#">All Orders</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-th" /> <span>Menus</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="#">Create Menus</a></li>
                                        <li><a className="nav-link" href="#">All Menus</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="nav-link"><i className="fas fa-th-large" /> <span>Store</span></a>

                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link "><i className="far fa-file-alt" /> <span>Report</span></a>

                                </li>



                            </ul>

                        </aside>
                    </div>
                    {/* Main Content */}
                    <div className="main-content">
                        <section className="section">
                            <div className="section-header">
                                <h1>Dashboard Kitchen</h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="card card-statistic-1">
                                        <div className="card-icon bg-primary">
                                            <i className="far fa-user" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4> Receved Orders</h4>
                                            </div>
                                            <div className="card-body">
                                                10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="card card-statistic-1">
                                        <div className="card-icon bg-danger">
                                            <i className="far fa-newspaper" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Menu Available</h4>
                                            </div>
                                            <div className="card-body">
                                                42
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="card card-statistic-1">
                                        <div className="card-icon bg-warning">
                                            <i className="far fa-file" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Reports</h4>
                                            </div>
                                            <div className="card-body">
                                                1,201
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <div className="card card-statistic-1">
                                        <div className="card-icon bg-success">
                                            <i className="fas fa-circle" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Store Items</h4>
                                            </div>
                                            <div className="card-body">
                                                47
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-12 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Latest Orders Required</h4>
                                            <div className="card-header-action">
                                                <a href="#" className="btn btn-primary">View All</a>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table table-striped mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Menu Id</th>
                                                            <th>Menu Title</th>
                                                            <th>Quantity</th>
                                                            <th>Time</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                #cf123

                                                            </td>
                                                            <td>
                                                                <p>chicken meat </p>
                                                            </td>
                                                            <td>
                                                                12
                                                            </td>
                                                            <td>12:00 pm</td>
                                                            <td>
                                                                <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                                                                <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                #cf123

                                                            </td>
                                                            <td>
                                                                <p>chicken meat </p>
                                                            </td>
                                                            <td>
                                                                12
                                                            </td>
                                                            <td>12:00 pm</td>
                                                            <td>
                                                                <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                                                                <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                #cf123

                                                            </td>
                                                            <td>
                                                                <p>chicken meat </p>
                                                            </td>
                                                            <td>
                                                                12
                                                            </td>
                                                            <td>12:00 pm</td>
                                                            <td>
                                                                <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                                                                <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                #cf123

                                                            </td>
                                                            <td>
                                                                <p>chicken meat </p>
                                                            </td>
                                                            <td>
                                                                12
                                                            </td>
                                                            <td>12:00 pm</td>
                                                            <td>
                                                                <a className="btn btn-primary btn-action mr-1" data-toggle="tooltip" title="Edit"><i className="fas fa-pencil-alt" /></a>
                                                                <a className="btn btn-danger btn-action" data-toggle="tooltip" title="Delete" data-confirm="Are You Sure?|This action can not be undone. Do you want to continue?" data-confirm-yes="alert('Deleted')"><i className="fas fa-trash" /></a>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-12 col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Recent Menu Available</h4>
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-unstyled list-unstyled-border">
                                                <li className="media">
                                                    <img className="mr-3 rounded-circle" width={50} src="./src/assets/img/avatar/avatar-1.png" alt="avatar" />
                                                    <div className="media-body">
                                                        <div className="float-right text-primary">Available </div>
                                                        <div className="media-title">Salad</div>
                                                        <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                                                    </div>
                                                </li>

                                                <li className="media">
                                                    <img className="mr-3 rounded-circle" width={50} src="./src/assets/img/avatar/avatar-3.png" alt="avatar" />
                                                    <div className="media-body">
                                                        <div className="float-right">17m</div>
                                                        <div className="media-title">Salad</div>
                                                        <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img className="mr-3 rounded-circle" width={50} src="./src/assets/img/avatar/avatar-4.png" alt="avatar" />
                                                    <div className="media-body">
                                                        <div className="float-right">21m</div>
                                                        <div className="media-title">Salad n</div>
                                                        <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-lg-7 col-md-12 col-12 col-sm-12">

                                </div>
                            </div>
                        </section>
                    </div>
                    <footer className="main-footer">
                        <div className="footer-left">
                            Copyright © 2023 <div className="bullet" />  <a href="#">Cafetaria</a>
                        </div>
                        <div className="footer-right">
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default DashboardKitchek