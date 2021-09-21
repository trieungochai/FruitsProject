const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit.",
});

mango.save();

Person.updateOne({ name: "John" }, { favoriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple,
// });

person.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "61498d919dab9c443a7eeff6" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document.");
//     }
//   }
// );

// Fruit.deleteOne({ name: "Apple" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// });

Fruit.deleteMany({ name: "Apple" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted all the document.");
  }
});
