/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 *
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

module.exports = async function (context) {
  context.log("Hello Activity...");

  const bigId = context.bindings.bigId;
  context.log(`Hello Activity bigId type name: ${typeof bigId}`);
  // typeof bigId => expected: string, actual: number
  context.log(`value: ${bigId}`);
  return bigId;
};
