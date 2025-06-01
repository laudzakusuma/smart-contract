const { expect } = require("chai");

describe("HelloWorld", function () {
  let helloWorld;

  beforeEach(async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    helloWorld = await HelloWorld.deploy();

  });

  it("should return the default greeting", async function () {
    expect(await helloWorld.getGreeting()).to.equal("Hello, Web3!");
  });

  it("should update the greeting", async function () {
    const newGreeting = "Hello, Laudza!";
    await helloWorld.setGreeting(newGreeting);
    expect(await helloWorld.getGreeting()).to.equal(newGreeting);
  });
});
