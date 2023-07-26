import React from 'react'

function Dashboard() {
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
                                <div className="search-result">
                                    <div className="search-header">
                                        Histories
                                    </div>
                                    <div className="search-item">
                                        <a href="#">How to hack NASA using CSS</a>
                                        <a href="#" className="search-close"><i className="fas fa-times" /></a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">Kodinger.com</a>
                                        <a href="#" className="search-close"><i className="fas fa-times" /></a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">#Stisla</a>
                                        <a href="#" className="search-close"><i className="fas fa-times" /></a>
                                    </div>
                                    <div className="search-header">
                                        Result
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <img className="mr-3 rounded" width={30} src="assets/img/products/product-3-50.png" alt="product" />
                                            oPhone S9 Limited Edition
                                        </a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <img className="mr-3 rounded" width={30} src="assets/img/products/product-2-50.png" alt="product" />
                                            Drone X2 New Gen-7
                                        </a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <img className="mr-3 rounded" width={30} src="assets/img/products/product-1-50.png" alt="product" />
                                            Headphone Blitz
                                        </a>
                                    </div>
                                    <div className="search-header">
                                        Projects
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <div className="search-icon bg-danger text-white mr-3">
                                                <i className="fas fa-code" />
                                            </div>
                                            Stisla Admin Template
                                        </a>
                                    </div>
                                    <div className="search-item">
                                        <a href="#">
                                            <div className="search-icon bg-primary text-white mr-3">
                                                <i className="fas fa-laptop" />
                                            </div>
                                            Create a new Homepage Design
                                        </a>
                                    </div>
                                </div>
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
                                <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
                                <div className="d-sm-none d-lg-inline-block">Hi,</div></a>
                                <div className="dropdown-menu dropdown-menu-right">
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
                                <a href="/dashboard">Cafeteria</a>
                            </div>
                            <div className="sidebar-brand sidebar-brand-sm">
                                <a href="#">C</a>
                            </div>
                            <ul className="sidebar-menu">
                                <li className="menu-header">Dashboard</li>
                                <li className="dropdown active">
                                    <a href="#" className="nav-link"><i className="fas fa-fire" /><span>General Dashboard</span></a>

                                </li>
                                <li className="menu-header">Starter</li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span>Orders</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="#">Recent Orders</a></li>
                                        <li><a className="nav-link" href="#">Creat Orders</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link" href="blank.html"><i className="far fa-square" /> <span>Blank Page</span></a></li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th" /> <span>Menu</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="bootstrap-alert.html">Alert</a></li>
                                        <li><a className="nav-link" href="bootstrap-badge.html">Badge</a></li>

                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th-large" /> <span>Store</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="components-article.html">Article</a></li>                <li><a className="nav-link beep beep-sidebar" href="components-avatar.html">Avatar</a></li>                <li><a className="nav-link" href="components-chat-box.html">Chat Box</a></li>                <li><a className="nav-link beep beep-sidebar" href="components-empty-state.html">Empty State</a></li>                <li><a className="nav-link" href="components-gallery.html">Gallery</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-hero.html">Hero</a></li>                <li><a className="nav-link" href="components-multiple-upload.html">Multiple Upload</a></li>
                                        <li><a className="nav-link beep beep-sidebar" href="components-pricing.html">Pricing</a></li>                <li><a className="nav-link" href="components-statistic.html">Statistic</a></li>                <li><a className="nav-link" href="components-tab.html">Tab</a></li>
                                        <li><a className="nav-link" href="components-table.html">Table</a></li>
                                        <li><a className="nav-link" href="components-user.html">User</a></li>                <li><a className="nav-link beep beep-sidebar" href="components-wizard.html">Wizard</a></li>            </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="far fa-file-alt" /> <span>Report</span></a>
                                    <ul className="dropdown-menu">
                                        <li><a className="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
                                        <li><a className="nav-link" href="forms-editor.html">Editor</a></li>
                                        <li><a className="nav-link" href="forms-validation.html">Validation</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-map-marker-alt" /> <span>Users</span></a>

                                </li>




                            </ul>


                        </aside>
                    </div>
                    {/* Main Content */}
                    <div className="main-content">
                        <section className="section">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-statistic-2">
                                        <div className="card-stats">
                                            <div className="card-stats-title text-center">General  View
                                                <div className="dropdown d-inline">
                                                    <a className="font-weight-600 " href="#" id="orders-month"></a>
                                                   
                                                </div>
                                            </div>


                                            <div className="card-stats-items">
                                                <div className="card-stats-item">
                                                    <div className="card-stats-item-count">24</div>
                                                    <div className="card-stats-item-label">Orders</div>
                                                </div>
                                                <div className="card-stats-item">
                                                    <div className="card-stats-item-count">12</div>
                                                    <div className="card-stats-item-label">Menu avaliable</div>
                                                </div>
                                                <div className="card-stats-item">
                                                    <div className="card-stats-item-count">23</div>
                                                    <div className="card-stats-item-label">Tables</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-icon shadow-primary bg-primary">
                                            <i className="fas fa-archive" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Total Orders</h4>
                                            </div>
                                            <div className="card-body">
                                                59
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-statistic-2">
                                        <div className="card-chart">
                                            <canvas id="balance-chart" height={80} />
                                        </div>
                                        <div className="card-icon shadow-primary bg-primary">
                                            <i className="fas fa-dollar-sign" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Sales  </h4>
                                            </div>
                                            <div className="card-body">
                                                TSH 187,130/=
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="card card-statistic-2">
                                        <div className="card-chart">
                                            <canvas id="sales-chart" height={80} />
                                        </div>
                                        <div className="card-icon shadow-primary bg-primary">
                                            <i className="fas fa-shopping-bag" />
                                        </div>
                                        <div className="card-wrap">
                                            <div className="card-header">
                                                <h4>Stores Items</h4>
                                            </div>
                                            <div className="card-body">
                                                47
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Budget vs Sales</h4>
                                        </div>
                                        <div className="card-body">
                                            <canvas id="myChart" height={158} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card gradient-bottom">
                                        <div className="card-header">
                                            <h4 className='text-center'>Latest Items in Store</h4>
                                            
                                        </div>
                                        <div className="card-body" id="top-5-scroll">
                                            <ul className="list-unstyled list-unstyled-border">
                                                <li className="media">
                                                <div className="media-title">Water Kili</div>
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">86 </div></div>
                                                        <div className="media-title"> 23-08-2002</div>
                                                       
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <img className="mr-3 rounded" width={55} src="assets/img/products/product-4-50.png" alt="product" />
                                                    <div className="media-body">
                                                        <div className="float-right"><div className="font-weight-600 text-muted text-small">67 Sales</div></div>
                                                        <div className="media-title">iBook Pro 2018</div>
                                                        <div className="mt-1">
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-primary" data-width="84%" />
                                                                <div className="budget-price-label">$107,133</div>
                                                            </div>
                                                            <div className="budget-price">
                                                                <div className="budget-price-square bg-danger" data-width="60%" />
                                                                <div className="budget-price-label">$91,455</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                               
                                               
                                                
                                            </ul>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Invoices</h4>
                                            <div className="card-header-action">
                                                <a href="#" className="btn btn-danger">View More <i className="fas fa-chevron-right" /></a>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-invoice">
                                                <table className="table table-striped">
                                                    <tbody><tr>
                                                        <th>Invoice ID</th>
                                                        <th>Customer</th>
                                                        <th>Status</th>
                                                        <th>Due Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                        <tr>
                                                            <td><a href="#">INV-87239</a></td>
                                                            <td className="font-weight-600">Kusnadi</td>
                                                            <td><div className="badge badge-warning">Unpaid</div></td>
                                                            <td>July 19, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-48574</a></td>
                                                            <td className="font-weight-600">Hasan Basri</td>
                                                            <td><div className="badge badge-success">Paid</div></td>
                                                            <td>July 21, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-76824</a></td>
                                                            <td className="font-weight-600">Muhamad Nuruzzaki</td>
                                                            <td><div className="badge badge-warning">Unpaid</div></td>
                                                            <td>July 22, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-84990</a></td>
                                                            <td className="font-weight-600">Agung Ardiansyah</td>
                                                            <td><div className="badge badge-warning">Unpaid</div></td>
                                                            <td>July 22, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><a href="#">INV-87320</a></td>
                                                            <td className="font-weight-600">Ardian Rahardiansyah</td>
                                                            <td><div className="badge badge-success">Paid</div></td>
                                                            <td>July 28, 2018</td>
                                                            <td>
                                                                <a href="#" className="btn btn-primary">Detail</a>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-hero">
                                        <div className="card-header">
                                            <div className="card-icon">
                                                <i className="far fa-question-circle" />
                                            </div>
                                            <h4>14</h4>
                                            <div className="card-description">Customers need help</div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="tickets-list">
                                                <a href="#" className="ticket-item">
                                                    <div className="ticket-title">
                                                        <h4>My order hasn't arrived yet</h4>
                                                    </div>
                                                    <div className="ticket-info">
                                                        <div>Laila Tazkiah</div>
                                                        <div className="bullet" />
                                                        <div className="text-primary">1 min ago</div>
                                                    </div>
                                                </a>
                                                <a href="#" className="ticket-item">
                                                    <div className="ticket-title">
                                                        <h4>Please cancel my order</h4>
                                                    </div>
                                                    <div className="ticket-info">
                                                        <div>Rizal Fakhri</div>
                                                        <div className="bullet" />
                                                        <div>2 hours ago</div>
                                                    </div>
                                                </a>
                                                <a href="#" className="ticket-item">
                                                    <div className="ticket-title">
                                                        <h4>Do you see my mother?</h4>
                                                    </div>
                                                    <div className="ticket-info">
                                                        <div>Syahdan Ubaidillah</div>
                                                        <div className="bullet" />
                                                        <div>6 hours ago</div>
                                                    </div>
                                                </a>
                                                <a href="features-tickets.html" className="ticket-item ticket-more">
                                                    View All <i className="fas fa-chevron-right" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer className="main-footer">
                        <div className="footer-left">
                            Copyright © 2023 <div className="bullet" />  <a href="https://nauval.in/">Cafeteria</a>
                        </div>
                        <div className="footer-right">
                        </div>
                    </footer>
                </div>
            </div>
        </div>

    )
}

export default Dashboard