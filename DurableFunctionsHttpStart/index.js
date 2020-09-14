const df = require("durable-functions");

module.exports = async function (context, req) {
  const client = df.getClient(context);
  const bigId = req.query.big_id;
  if (bigId === undefined) {
    throw new Error("You must set query parameter name of `big_id`");
  }
  const instanceId = await client.startNew(
    "DurableFunctionsOrchestratorJS",
    undefined,
    {
      bigId,
    }
  );

  context.log(`Started orchestration with ID = '${instanceId}'.`);

  return client.createCheckStatusResponse(context.bindingData.req, instanceId);
};
