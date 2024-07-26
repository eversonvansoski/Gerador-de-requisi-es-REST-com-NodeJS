const fs = require("fs");
const csv = require("csv-parser");
const Piscina = require("piscina");
const path = require("path");

const results = [];

const piscina = new Piscina({
  filename: path.resolve(__dirname, "worker.js"),
  maxThreads: 30, // Limita o número de threads a 10
});

fs.createReadStream("requests.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    results.forEach((row) => {
      piscina
        .run(row)
        .then((response) => {
          console.log(`Response from ${row.url}:`, response);
        })
        .catch((error) => {
          console.error(`Error making request to ${row.url}:`, error.message);
        });
    });
  });
