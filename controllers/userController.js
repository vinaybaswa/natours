const fs = require("fs");
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    results: users.length,
    dtat: {
      users,
    },
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((el) => el._id === id);

  if (!user) {
    return res.status(404).json({
      status: "fail",
      data: {
        message: "Ivalid ID",
      },
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

// exports.createUser = (req, res) => {
//   const newId = users[users.length - 1].id + 1;
//   const newUser = Object.assign({ _id: newId }, req.body);
//   users.push(newUser);
//   fs.writeFile(
//     `${__dirname}/dev-data/data/users.json`,
//     JSON.stringify(users),
//     (err) => {
//       res.status(201).json({
//         status: "success",
//         data: {
//           user: newUser,
//         },
//       });
//     }
//   );
// };

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet",
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet",
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet",
  });
};