const utils = require("./utils")
// @ponicode
describe("utils.createStore", () => {
    test("0", () => {
        let callFunction = () => {
            utils.createStore()
        }
    
        expect(callFunction).not.toThrow()
    })
})
