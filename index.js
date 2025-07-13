const core = require('@actions/core');

try {
  const name = core.getInput('name');
  console.log(`¡Hola, ${name}! que tengas un gran día!`);
} catch (error) {
  core.setFailed(error.message);
}
