import React from "react";
import "../layout/footer.css";
import { BsInstagram, BsTelegram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer-48201">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pr-md-5">
              <div className="content ml-5">
                <small>Pretty Pages</small>
                <small>Pretty Pages</small>
                <div className="pt-5 ml-n5 divContainer">
                  <p className="ml-n5">
                    What I say is, a{" "}
                    <a className="link" href="">
                      town{" "}
                    </a>{" "}
                    isn’t a town without a bookstore. It may call itself a town,
                    but unless it’s got a{" "}
                    <a className="link" href="">
                      bookstore
                    </a>
                    , it knows it’s not fooling a soul.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#">Clients</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Journal</a>
                </li>
              </ul>
            </div>
            <div className="col-md">
              <ul className="list-unstyled nav-links">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>
            <div className="col-md text-md-center">
              <ul className="social list-unstyled">
                <li>
                  <a href="#">
                    <BsInstagram className="m-1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTwitter className="m-1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsLinkedin className="m-1" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTelegram className="m-1" />
                  </a>
                </li>
              </ul>
              <p class="">
                <a href="#" class="btn btn-tertiary">
                  Contact Us
                </a>
              </p>
            </div>
          </div>

          <div class="col-10 text-center">
            <hr />
            <div class="copyright  pt-5">
              <p>
                <small>&copy; BookStore - 2021-2022, All Rights Reserved</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
