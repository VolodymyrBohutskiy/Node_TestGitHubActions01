import * as core from '@actions/core'

async function main() {
  const name = core.getInput('Name');
  core.info(`Hello, ${name}!!!`);
}

main();
