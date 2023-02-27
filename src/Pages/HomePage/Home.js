import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="background">
      <div className="main">
        <div className="heading">
          <h2>YOUR GO-TO APPS FOR FINANCE & MATH</h2>
        </div>
        <div className="container-m">
          <div className="container-c">
            <p>
              Calculator app is perfect for quick and easy calculations. Whether
              you're splitting a bill with friends, figuring out your monthly
              budget, or just need to solve a math problem, our calculator app
              has you covered.
            </p>
            <Link to="/App01">
              <button className="bn3">Calculator</button>
            </Link>
          </div>

          <div className="divider"></div>

          <div className="container-e">
            <p>
              Expense tracker app is designed to help you keep track of your
              spending and budget. With our app, you can easily track your
              expenses, categorize them, and set a budget to help you stay on
              track.
            </p>
            <Link to="/App02">
            <button className="bn3">Expense Tracker</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
