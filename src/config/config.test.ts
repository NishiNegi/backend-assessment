import configExpress from "../config/express";
import configDb from '../config/database';

describe('config', ()=> {
    test('configExpress should return a function', ()=>{
        // Arragne
        const expected = Function
        // Act
        const result = configExpress
        // Assert
        expect(result).toBeInstanceOf(expected);
    })
    test('configDb should return a function', ()=>{
        // Arragne
        const expected = Function
        // Act
        const result = configDb
        // Assert
        expect(result).toBeInstanceOf(expected);
    })
})