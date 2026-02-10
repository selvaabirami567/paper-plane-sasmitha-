const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let events = [
  {
    id: 1,
    title: "Techathon'26",
    category: "Hackathon",
    department: "CSE",
    date: "2026-02-20",
    link: "#",
    bookmarked: false
  },
  {
    id: 2,
    title: "Fracticals",
    category: "Competition",
    department: "ECE",
    date: "2026-02-22",
    link: "#",
    bookmarked: false
  },
  {
    id: 3,
    title: "Robotics Club Orientation",
    category: "Club",
    department: "MECH",
    date: "2026-02-25",
    link: "#",
    bookmarked: false
  }
];

app.get("/events", (req, res) => {
  res.json(events);
});

app.post("/events", (req, res) => {
  const newEvent = {
    id: Date.now(),
    ...req.body,
    bookmarked: false
  };
  events.push(newEvent);
  res.json(newEvent);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
