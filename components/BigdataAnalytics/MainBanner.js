import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const MainBanner = () => {
  return (
    <>
      <div className="bigdata-analytics-banner">
        <div className="container">
          <div className="bigdata-analytics-content">
            <h1>Leading Big Education Platform Company</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            <Link href="/contact" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>

        <div className="banner-boxes-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Server />
                  </div>
                  <h3>Lorem ipsum dolor</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Code />
                  </div>
                  <h3>Lorem ipsum dolor</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Users />
                  </div>
                  <h3>Lorem ipsum dolor</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
