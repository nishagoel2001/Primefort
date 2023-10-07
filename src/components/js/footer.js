import React from 'react';
import '../css/footer.css';

export default function footer() {
  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <p className="footer-brand">
                  <b>Prime</b>Fort
                </p>
                <p >
                  Primefort is a global provider of IT security<br/> solutions that
                  solve real business issues. Our<br/> dedicated team of security
                  engineers offers<br/> solutions to customers throughout the world<br/>
                  for securing innovations.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <p className="footer-headers">Services</p>
                <ul className="list-unstyled">
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                    Web Application Penetration Testing
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                    Mobile Application Penetration Testing
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                    Network Penetration Testing
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                    Cloud Security
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                    Compliance
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                    SOC
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <p className="footer-headers">About Us</p>

                <ul className="list-unstyled mb-0">
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                      Our Story
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                      Our Journey
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                      Leadership Team
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                      Advisors
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                      Careers
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a href="/" className="footer-content">
                      Awards
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <button className="btn footer-btn" type="submit"><b>CONTACT US  --></b></button>
                <p className='footer-headers mt-3 mb-2'>Headquaters</p>
                <p>Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai - 600002</p>
                <p className='footer-headers mb-1'>Email</p>
                <p>info@primefort.net</p>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3">
        Privacy Policy | Terms and Conditions<br/>
          ©Copyright - Primefort Private Limited
        </div>
      </footer>
    </>
  );
}
