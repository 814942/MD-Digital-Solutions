import React from "react";
import { data } from "./dt";

import "./styles.css";

console.log(data);

const Rtwo = () => {
  return (
    <div className="table-center">
      <h2 style={{ margin: "0 0 10px 0" }}>
        COVID-19 testing statistics by country
      </h2>
      <table className="rowgrou">
        <thead>
          <tr>
            <th>Country</th>
            <th>Date</th>
            <th>Tested</th>
            <th>Confirmed Cases</th>
            <th>Confirmed Tested %</th>
            <th>Tested Population %</th>
            <th>Confirmed Population %</th>
          </tr>
        </thead>

        <tbody>
          {data.map((country, index) => {
            return (
              <tr key={index}>
                <td>{country.country}</td>
                <td>{country.date}</td>
                <td>{country.tested}</td>
                <td>{country.confirmed_cases}</td>
                <td>{country.confirmed_tested}</td>
                <td>{country.tested_population}</td>
                <td>{country.confirmed_population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Rtwo;
