import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex justify-content-center  justify-content-lg-between p-4 border-top">
        <section>
          <p>Made during 2023-2024</p>
        </section>
        <section>
          <a className="me-4 link-secondary" href="#">
            LinkedIn
          </a>
          <a className="me-4 link-secondary" href="#">
            Github
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
