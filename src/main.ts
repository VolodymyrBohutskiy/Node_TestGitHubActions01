import * as core from '@actions/core';
import * as fs from "fs"; 

async function main() {
  const path = './../newfiles/'
  const fileName = core.getInput('Name');
  fs.writeFile(path + fileName, 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
}

main();
