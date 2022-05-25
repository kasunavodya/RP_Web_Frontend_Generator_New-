/**
 * SCOPE    -   side NavigatonBar development
 * PAGE     -   sideNavBar.js
 * 
 * ================================================
 * CREATED BY :   H.M. Kasuni Navodya (IT19144986)
 */

 import React, { Component } from 'react'
 import '../../assets/css/dashboard.css';
 import '../../assets/css/nucleo-icons.css';
 import '../../assets/css/nucleo-svg.css';
 import logo from '../../assets/img/logo.png';
 
 export default class sideNavBar extends Component {
     constructor(props) {
         super(props);
     }
 
     render() {
         return (
             <aside class="sidenav bg-black navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
                 <div class="sidenav-header">
                     <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                     <center><a class="navbar-brand m-0" href="/">
                         <img src={logo} class="navbar-brand-img h-100" alt="main_logo" />
                         <span class="ms-1 font-weight-bold" style={{ color: 'white', fontSize: '18px' }}>UI BUILDER</span>
                     </a></center>
                 </div>
                 <hr class="horizontal dark mt-0" />
                 <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                     <ul class="navbar-nav">
                         <li class="nav-item">
                             <a class="nav-link active" href="/">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Dashboard</span>
                             </a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="../pages/tables.html">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-app text-info text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>UI Template Generator</span>
                             </a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="/convertXmltoJson">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-app text-info text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Web Frontend Generator</span>
                             </a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="../pages/virtual-reality.html">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-app text-info text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Mobile Frontend Generator</span>
                             </a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="../pages/rtl.html">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-app text-info text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Backend Generator</span>
                             </a>
                         </li>
                         <li class="nav-item mt-3">
                             <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6" style={{ color: 'white', fontSize: '15px' }}>Account pages</h6>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="../pages/profile.html">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Profile</span>
                             </a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="../pages/sign-in.html">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Sign In</span>
                             </a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link " href="../pages/sign-up.html">
                                 <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                     <i class="ni ni-collection text-info text-sm opacity-10"></i>
                                 </div>
                                 <span class="nav-link-text ms-1" style={{ color: 'white', fontSize: '15px' }}>Sign Up</span>
                             </a>
                         </li>
                     </ul>
                 </div>
                 {/* bottom buttons */}
                 <div class="sidenav-footer mx-3 ">
                     <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard" target="_blank" class="btn btn-dark btn-sm w-100 mb-3">File Formats</a>
                     <a class="btn btn-primary btn-sm mb-0 w-100" href="/addStyles" type="button">Add Styles - 1st Try</a><br /><br />
                     <a class="btn btn-primary btn-sm mb-0 w-100" href="/sampleReactCode" type="button">Sample React Template</a><br /><br />
                     <a class="btn btn-primary btn-sm mb-0 w-100" href="/browse" type="button">Convert to JSON - 1st Try</a>
                 </div>
             </aside>
         )
     }
 }