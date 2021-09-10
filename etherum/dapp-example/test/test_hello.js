var hello = artifacts.require("HelloWorld");

contract("HelloWorld", function () {

    it("should be same .. ", function () {
        return hello.deployed().then(function (instance) {
            return instance.say().then(function (greeting) {
                assert.equal(greeting, "Hello, World!");
            });
        })
    })

    it("should be same 2.. ", function () {
        return hello.deployed().then(function (instance) {

            instance.setGreeting("Hello, Block", {
                from: web3.eth.accounts[0]
            });

            return instance.say().then(function (greeting) {
                assert.equal(greeting, "Hello, Block");
            })
        })
    })
});