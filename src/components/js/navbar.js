import React from 'react'
import "../css/navbar.css";

export default function navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand mx-5" href="/"><b>Prime</b>Fort</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Managed Security Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Initiatives</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Blog</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn nav-btn mx-5" type="submit"><b>CONTACT US</b></button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
