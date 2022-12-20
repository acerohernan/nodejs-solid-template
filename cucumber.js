const command = [
  "--require-module ts-node/register",
  "tests/e2e/features/**/*.feature",
  "--require tests/e2e/steps-definitions/**.steps.ts",
  "--publish-quiet",
].join(" ");

module.exports = {
  default: command,
};
