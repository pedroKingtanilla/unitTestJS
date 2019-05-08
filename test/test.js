const chai = require("chai");
const expect = chai.expect;
const sinon = require('sinon')
const controller = require('../controller/indexController')
const controller2 = require('../controller/pruebaController')

const user = {
  addUser: (name) => {
    this.name = name;
  }
}

//*****************Pruebas de Spias */
describe("Pruebas de Spies", ()=>{
  describe("prueba", function() {
    it("should return index Peter", function() {
      let req = {}
      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let reply = {
        send: sinon.spy()
      }

      controller.getData(req,reply)

      console.log(reply.send);
      expect(reply.send.calledOnce).to.be.true;
      expect(reply.send.firstCall.args[0]).to.equal("Hello Peter");
    });
  });

  describe("User", function() {
    describe("addUser", function() {
      it("should add a user", function() {
        sinon.spy(user, "addUser");

        user.addUser('Peter');
        // lets log `addUser` and see what we get
        console.log('addUser', user.addUser);
        expect(user.addUser.calledOnce).to.be.true;
      });
    });
  });
});

//*****************FIN Pruebas de Spies */

//*****************Pruebas de Stubs */

describe("Pruebas de Stubs", function()  {
  describe("getIndexPage", function() {
    it("should send hey when user is logged in", function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      // pass user into the req object
      let req = {
        user: user
      }

      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let reply = {
        // replace empty function with a spy
        send: sinon.spy()
      }

      controller.getStubs(req, reply);
      // let's see what we get on res.send
      // console.log(res.send);
      // `res.send` called once
      expect(reply.send.calledOnce).to.be.true;
      expect(reply.send.firstCall.args[0]).to.equal("Hey");

      // assert that the stub is logged in at least once
      expect(isLoggedInStub.calledOnce).to.be.true;
    });
  });
});

//*****************FIN Pruebas de Stubs */

//*****************Pruebas de Mock */

describe("Pruebas de Mock", function()  {
  describe("getIndexPage", function() {
    it("provando Mock", function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

      // pass user into the req object
      let req = {
        user: user
      }

      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let reply = {
        send: function(){}
      }

      // mock reply
      const mock = sinon.mock(reply);
      // build how we expect it t work
      mock.expects("send").once().withExactArgs("Hey");

      controller.getStubs(req, reply);
      expect(isLoggedInStub.calledOnce).to.be.true;

      // verify that mock works as expected
      mock.verify();
    });
  });
});

//*****************FIN Pruebas de Mock */









//*****************Pruebas de Stubs */

describe("Pruebas de StubsII", function()  {
  describe("getIndexPage", function() {
    it("Muestra alguna wea, porfa funca", function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function(){}
      }

      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);
      const Peter = sinon.stub(controller2, "pivote").returns('Peter');

      //controller2

      // pass user into the req object
      let req = {
        user: user
      }

      // Have `res` have a send key with a function value coz we use `res.send()` in our func
      let reply = {
        // replace empty function with a spy
        send: sinon.spy()
      }

      controller.getStubs(req, reply);
      // let's see what we get on res.send
      // console.log(res.send);
      // `res.send` called once
      expect(reply.send.calledOnce).to.be.true;
      expect(reply.send.firstCall.args[0]).to.equal("Peter");

      // assert that the stub is logged in at least once
      expect(isLoggedInStub.calledOnce).to.be.true;
      expect(Peter.calledOnce).to.be.true;
    });
  });
});

//*****************FIN Pruebas de Stubs */