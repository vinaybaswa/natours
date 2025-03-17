const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("../../models/tourModel");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("DB connection successful");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

// READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"),
);
console.log(tours);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
    // eslint-disable-next-line no-console
    console.log("Data successfully loaded!");
    console.log(tours[0]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    // eslint-disable-next-line no-console
    console.log("Data successfully deleted!");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
// To import data, run this command in the terminal:
// node dev-data/data/import-dev-data.js --import
// To delete data, run this command in the terminal:
// node dev-data/data/import-dev-data.js --delete
