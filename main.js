const fs = require("fs");

// Create the file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});
fs.readFile("welcome.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
