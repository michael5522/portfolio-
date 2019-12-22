import React from 'react';

export default function Skill() {
  return (
    <div className="skills-bg d-flex justify-content-center align-items-center" id="skills">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="row">

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/javascript.png" className=" img-fluid" />
              <h5 className="card-title text-center">Java Script</h5>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/bootstrap.png" className=" img-fluid" />
              <h5 className="card-title text-center">Java Script</h5>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/css.png" className=" img-fluid" />
              <h5 className="card-title text-center">Java Script</h5>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/html5.png" className=" img-fluid" />
              <h5 className="card-title text-center">Java Script</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
