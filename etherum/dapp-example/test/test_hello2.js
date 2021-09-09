var hello = artifacts.require("HelloWorld");

contract("HelloWorld", function () {

    it("should be same .. ", async () => {

        let instance = await hello.deployed();
        let greeting = await instance.say.call();

        assert.equal(greeting, "Hello, World!");
    })

    it("should be same .. ", async () => {

        let instance = await hello.deployed();
        await instance.setGreeting("Hello, Block", {
            from: web3.eth.accounts[0]
        });
        let greeting = await instance.say.call();
        assert.equal(greeting, "Hello, Block");
    })

});