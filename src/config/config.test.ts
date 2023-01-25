import configExpress from "../config/express"

describe('express', ()=> {
    test('configExpress should return a function', ()=>{
        // Arragne
        const expected = Function
        // Act
        const result = configExpress
        // Assert
        expect(result).toBeInstanceOf(expected);
    })
})