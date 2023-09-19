const Table = require("cli-table");

const table = new Table({
  head: ["ACTIVE", "NAME", "WEIGHT (lbs)", "QUANTITY", "COST (gp)", "NOTES"],
});

table.push(
  ["false", "Clothes, Common", 3, "1", "0.5", "Social, Outerwear"],
  ["false", "Clothes, Common", 3, "1", "0.5", "Social, Outerwear"],
  ["false", "Crossbow Bolts", 1.5, "20", "1", "Damage, Combat"],
  ["true", "Crossbow, light", 5, "1", "25", "Simple, Ammunition, Loading, Range, Two-Handed, Range (80/320)"],
);

console.log(table.toString());

const objectTable = new Table({
  head: ["ACTIVE"]
});

const rand = {
  active: true,
  weight: 44,
  name: "sword"
};

console.log(rand.toString());

objectTable.push(
  {
    active: true
  }
);

// console.log(objectTable.toString())