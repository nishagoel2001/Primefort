import React from 'react';
import '../css/hero.css';

export default function hero() {
  return (
    <>
      <div className="container hero-cont my-5">
        <div className="row px-5 py-5">
          <div className="col-lg-6 text-white mt-5">
            <h3 className='mt-5'>Get in Touch</h3>
            <p>Reach out to us. We can make something awesome together</p>
            <p className="mt-5">info@primefort.net</p>
            <p>
              Raheja Towers, Unit, 812, Alpha
              <br /> wing, No, 177 Anna Salai, Chennai -<br /> 600002
            </p>
          </div>
          <div className="col-lg-6">
            <div className='hero-form p-5'>
          <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label mt-4">
                Full Name  
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label mt-4">
                Email  
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label mt-4">
                Subject   
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label mt-4">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
            </div>
            <button className='btn form-btn mb-4 mt-5 px-4 py-2'><b>SEND MESSAGE  --></b></button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
