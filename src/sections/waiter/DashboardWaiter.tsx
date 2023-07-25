import React from 'react'

function DashboardWaiter() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a className="navbar-brand pt-0" href="#">
                            <img src="../../../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                        </a>
                        <ul className="nav align-items-center d-md-none">
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ni ni-bell-55" />
                                </a>
                                {/* <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something</a>
                                </div> */}
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <img alt="Image placeholder" src="./assets/img/theme/team-1-800x800.jpg" />
                                        </span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                    
                                    <a href="#" className="dropdown-item">
                                        <i className="ni ni-single-02" />
                                        <span>My profile</span>
                                    </a>
                                  
                                    
                                    <div className="dropdown-divider" />
                                    <a href="#!" className="dropdown-item">
                                        <i className="ni ni-user-run" />
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                            <div className="navbar-collapse-header d-md-none">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="#">
                                            <img src="./assets/img/brand/blue.png" />
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <form className="mt-4 mb-3 d-md-none">
                                <div className="input-group input-group-rounded input-group-merge">
                                    <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <span className="fa fa-search" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item  active ">
                                    <a className="nav-link  active " href="#">
                                        <i className="ni ni-tv-2 text-primary" /> Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <i className="ni ni-planet text-blue" />Orders
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <i className="ni ni-pin-3 text-orange" />Billings
                                    </a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-link " href="#">
                                        <i className="ni ni-bullet-list-67 text-red" /> Reports
                                    </a>
                                </li>
                               
                                
                            </ul>
                            {/* <hr className="my-3" /> */}
                           
                            {/* <ul className="navbar-nav">
                                <li className="nav-item active active-pro">
                                    <a className="nav-link" href="#">
                                        <i className="ni ni-send text-dark" /> Upgrade to PRO
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
                <div className="main-content">
                    <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                        <div className="container-fluid">
                            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="#">Dashboard waiter</a>
                            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                                <div className="form-group mb-0">
                                    <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-search" /></span>
                                        </div>
                                        <input className="form-control" placeholder="Search" type="text" />
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav align-items-center d-none d-md-flex">
                                <li className="nav-item dropdown">
                                    <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="media align-items-center">
                                            <span className="avatar avatar-sm rounded-circle">
                                                <img alt="Image placeholder" src="./assets/img/theme/team-4-800x800.jpg" />
                                            </span>
                                            <div className="media-body ml-2 d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">Jessica Jones</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                      
                                        <a href="./examples/profile.html" className="dropdown-item">
                                            <i className="ni ni-single-02" />
                                            <span>My profile</span>
                                        </a>
                                     
                                        <div className="dropdown-divider" />
                                        <a href="#!" className="dropdown-item">
                                            <i className="ni ni-user-run" />
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
                        <div className="container-fluid">
                            <div className="header-body">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">Orders</h5>
                                                        <span className="h2 font-weight-bold mb-0">350,897</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                                            <i className="fas fa-chart-bar" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-success mr-2"><i className="fa fa-arrow-up"/> 3.48</span>
                                                    <span className="text-nowrap">Since last month</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">Menu List</h5>
                                                        <span className="h2 font-weight-bold mb-0">2,356</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                                            <i className="fas fa-chart-pie" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-danger mr-2"><i className="fas fa-arrow-down" /> 3.48</span>
                                                    <span className="text-nowrap">Since last week</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-4 col-lg-6">
                                        <div className="card card-stats mb-4 mb-xl-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5 className="card-title text-uppercase text-muted mb-0">Menus</h5>
                                                        <span className="h2 font-weight-bold mb-0">49</span>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                                            <i className="fas fa-percent" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-3 mb-0 text-muted text-sm">
                                                    <span className="text-success mr-2"><i className="fas fa-arrow-up" /> 12%</span>
                                                    <span className="text-nowrap">Since last month</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt--7">
                        <div className="row">
                        <div className="col-xl-8 mb-5 mb-xl-0">
                                <div className="card shadow">
                                    <div className="card-header border-0">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h3 className="mb-0">Recent Items Register</h3>
                                            </div>
                                            <div className="col text-right">
                                                <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table align-items-center table-flush">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Item Nanme</th>
                                                    <th scope="col">Quantiyt</th>
                                                    <th scope="col">Amounts</th>
                                                    <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        /argon/
                                                    </th>
                                                    <td>
                                                        4,569
                                                    </td>
                                                    <td>
                                                        340
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        /argon/index.html
                                                    </th>
                                                    <td>
                                                        3,985
                                                    </td>
                                                    <td>
                                                        319
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        /argon/charts.html
                                                    </th>
                                                    <td>
                                                        3,513
                                                    </td>
                                                    <td>
                                                        294
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        /argon/tables.html
                                                    </th>
                                                    <td>
                                                        2,050
                                                    </td>
                                                    <td>
                                                        147
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        /argon/profile.html
                                                    </th>
                                                    <td>
                                                        1,795
                                                    </td>
                                                    <td>
                                                        190
                                                    </td>
                                                    <td>
                                                        <i className="fas fa-arrow-down text-danger mr-3" /> 46,53%
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card shadow">
                                    <div className="card-header bg-transparent">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                                                <h2 className="mb-0">Total orders</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table align-items-center table-flush">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Order menu</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope='col'>Amount</th>
                                                    <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        Friday Bilian
                                                    </th>
                                                    <td>
                                                        10
                                                    </td>
                                                    <td>2000</td>
                                                    <td>
                                                       2023-04-20
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Friday Bilian
                                                    </th>
                                                    <td>
                                                        10
                                                    </td>
                                                    <td>2000</td>
                                                    <td>
                                                       2023-04-20
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Friday Bilian
                                                    </th>
                                                    <td>
                                                        10
                                                    </td>
                                                    <td>2000</td>
                                                    <td>
                                                       2023-04-20
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Friday Bilian
                                                    </th>
                                                    <td>
                                                        10
                                                    </td>
                                                    <td>2000</td>
                                                    <td>
                                                       2023-04-20
                                                    </td>
                                                </tr>
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <footer className="footer">
                            <div className="row align-items-center justify-content-xl-between">
                                <div className="col-xl-6">
                                    <div className="copyright text-center text-xl-left text-muted">
                                        © 2023 <a href="#" className="font-weight-bold ml-1" target="_blank">Cafeteria</a>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link" target="_blank">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link" target="_blank">Blog</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardWaiter