// const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');

const apiKey = core.getInput('apiKey');

const composerContents = fs.readFileSync('composer.json').toString();
const composerConfig = JSON.parse(composerContents);

composerConfig.repositories = (composerConfig.repositories || [])
    .filter(repo => !/bitbucket.org[:\/]speareducation/.test(repo.url))

composerConfig.repositories.push({
    type: "composer",
    url: "https://packages.speareducation.com/composer",
    options: { http: { header: [ `x-api-key: ${apiKey}` ] } }
});

console.log('Updating composer.json');
console.log(JSON.stringify(composerConfig, null, 2));

fs.writeFileSync('composer.json', JSON.stringify(composerConfig));
