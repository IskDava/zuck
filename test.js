const fs = require('fs');

fs.readFile('./Web/versus/sevengrade.json', 'utf8', (err, data) => {
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});