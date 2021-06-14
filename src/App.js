import "./styles.css";
import React, { useState } from "react";

const profile = [
  {
    name: "Brett Lee",
    img: "https://starsunfolded.com/wp-content/uploads/2016/07/Brett-Lee.jpg",
    designation: "bowler",
    shortdescription: "legendary"
  },
  {
    name: "Sachin Tendulkar",
    img:
      "https://www.mapsofindia.com/ci-moi-images/who_is_who_new/2018/02/who-is-who-sports-sachin-tendulkar.jpg",
    designation: "batsman",
    shortdescription: "legendary"
  },
  {
    name: "Virat Kohli",
    img:
      "https://i.guim.co.uk/img/media/b76d91ded27c0705d0cd97a77cf41d367c62c72b/0_63_1659_995/master/1659.jpg?width=620&quality=85&auto=format&fit=max&s=6f3b197a33ff70f91572a9906b70e6da",
    designation: "batsmen",
    shortdescription: "legendary"
  },
  {
    name: "Rahul Dravid",
    img:
      "https://image.crictracker.com/wp-content/uploads/2020/03/Rahul-Dravid-1.jpg",
    designation: "batsmen",
    shortdescription: "legendary"
  },
  {
    name: "Ms dhoni",
    img:
      "https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg?output-quality=60&output-format=webp&downsize=555:*",
    designation: "batsmen",
    shortdescription: "legendary"
  }
];

export default function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <ul>
          {profile.map((i) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid yellowgreen",
                width: "30%",
                margin: "1rem 25rem",
                backgroundColor: "lightgray"
              }}
            >
              <div>
                <div style={{ textAlign: "left" }}>
                  <img src={i.img} width="150" alt="unable to show pic" />
                </div>
                <div>
                  <h2 style={{ color: "green" }}>{i.name}</h2>
                </div>
                <div>
                  <h3>{i.designation}</h3>
                </div>
                <div>
                  <h3>{i.shortdescription}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
