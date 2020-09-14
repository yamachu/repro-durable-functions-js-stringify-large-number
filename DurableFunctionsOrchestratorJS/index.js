/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 *
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *    function app in Kudu
 */

const df = require("durable-functions");

module.exports = df.orchestrator(function* (context) {
  const currentValue = context.bindingData.input.bigId;
  context.log(`currentValue type name: ${typeof currentValue}`);
  // typeof currentValue => string
  context.log(`value: ${currentValue}`);

  const returnValue = yield context.df.callActivity("Hello", currentValue);
  context.log(`returnValue type name: ${typeof returnValue}`);
  // typeof returnValue => expected: string, actual: number
  context.log(`value: ${returnValue}`);

  return returnValue;
});
