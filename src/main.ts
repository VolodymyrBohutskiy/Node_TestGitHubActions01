import * as core from '@actions/core';
import { context, getOctokit } from "@actions/github";
import * as dedent from 'dedent';

const ghToken = core.getInput("ghToken");

getDiff().then(files => {
  console.log(dedent(`
  Your PR diff:
  ${JSON.stringify(files, undefined, 2)}
  `))
})

async function getDiff() {
  if (ghToken && context.payload.pull_request) {
      const octokit = getOctokit(ghToken)

      const result = await octokit.rest.repos.compareCommits({
          repo: context.repo.repo,
          owner: context.repo.owner,
          head: context.payload.pull_request.head.sha,
          base: context.payload.pull_request.base.sha,
          per_page: 100
      })

      return result.data.files || []
  }

  return []
}
