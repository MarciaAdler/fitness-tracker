const db = require("../models");
const mongoose = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;

// insert routes here
module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    db.Workout.update(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      }
    );
  });
};
