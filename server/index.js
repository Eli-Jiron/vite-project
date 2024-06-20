import express, { json, Router } from "express";
import cors from "cors";
import { uuid } from "uuidv4";

let app = express();
app.use(json());

app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

let usersRouter = Router();

let users = [];

usersRouter
  .route("/")
  .get(function (req, res) {
    return res.json(users);
  })
  .post(function (req, res) {
    users.push({
      ...req.body,
      id: uuid(),
    });
    return res.json(users);
  });
usersRouter
  .route("/:task_id")
  .get(function (req, res) {
    const id = req.params.task_id;
    return res.json(users.find((t) => t.id === id) ?? {});
  })
  .delete(function (req, res) {
    const id = req.params.task_id;
    users = users.filter((t) => t.id !== id);
    return res.json({});
  })
  .put(function (req, res) {
    const id = req.params.task_id;
    for (let index in users) {
      const user = users[index];
      if (user.id === id) {
        users[index] = {
          ...user,
          ...req.body,
        };
        return res.json(users[index]);
      }
    }
    return res.json({});
  });

app.use("/api/users/", usersRouter);
