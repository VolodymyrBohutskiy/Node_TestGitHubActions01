import * as core from '@actions/core';
import * as fs from "fs"; 

async function main() {
  const path = './'
  const fileName = core.getInput('Name');
  fs.writeFile(path + fileName + '.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
}

main();
