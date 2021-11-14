import * as path from "path";
import * as cdk from "@aws-cdk/core";
import * as cdk3 from ".";

// application for testing deployments
const app = new cdk.App();

const stack = new cdk.Stack(app, "test-cdk3-10", {
  env: {
    account: process.env.ENV_AWS_ACCOUNT_ID,
    region: process.env.ENV_AWS_REGION ?? "us-west-2",
  },
});

const wallet = new cdk3.Wallet(stack, "Wallet", {});

new cdk3.Contract(stack, "HelloWorld", {
  owner: wallet,
  contractFile: path.join(__dirname, "..", "contracts", "hello-world.sol"),
});
