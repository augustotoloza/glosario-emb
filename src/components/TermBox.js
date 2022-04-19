import React from "react";
import { dataGlosario } from "../dataGlosario";
import { Link, useRouteMatch } from "react-router-dom";

function TermBox() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="termBox">
      <ul className="termList">
        {/* {dataGlosario.map((word, key) => {
          return (
            <li>
              <Link to={`/que-es/${word.urlName}`}> {word.term} </Link>
            </li>
          );
        })} */}
        {alphabet.map((letter) => {
          let startsWith = dataGlosario.filter((term) =>
            term.term.startsWith(letter)
          );
          if (startsWith.length != 0) {
            return (
              <li className="letterWrapper">
                <h5>{letter}</h5>
                <ul>
                {startsWith.map((word, key) => {
                  return (
                    
                      <li className="termWrapper">
                        <Link to={`/que-es/${word.urlName}`}>
                          {" "}
                          {word.term}{" "}
                        </Link>
                      </li>
                    
                  );
                })}
                </ul>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default TermBox;
