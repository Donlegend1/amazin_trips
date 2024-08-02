import React from 'react'

export default function Footer() {
  return (
    <div>
     
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ "border-color": "rgba(256, 256, 256, .1) !important" }}>
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white-50">
              Copyright © <a href="#">Domain</a>. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <p className="m-0 text-white-50">
              Designed by <a href="#">Shedrack Ogwuche</a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
}
