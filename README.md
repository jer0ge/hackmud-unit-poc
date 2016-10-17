# hackmud-unit-poc
Proof-of-concept for unit testing hackmud scripts
This projects attempts to demonstrate:
* calling the top-level anonymous function (context,args) {} of a hackmud script within a unit test and obtaining its output
* mocking or stubbing scriptor / hackmud api calls (such as #s)

In this example, an arbirary stub object defined within the test class is injected in place of #s.accts.balance. In a real scenario, a js mocking framework of choice such as sinon could be used.

## how to run
You need [nodejs](nodejs.org) to run this project.
Run the unit tests with:

    npm test
