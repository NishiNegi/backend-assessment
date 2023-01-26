import { signToken, verifyToken, getUserFromToken, JWTDecoded } from './auth.services';
import { faker } from '@faker-js/faker';
import * as jwt from 'jsonwebtoken';

describe('general auth', ()=> {
    test('signToken should return a token', ()=>{
        // Arragne
        const payload={
            email:faker.internet.email(),
            password:faker.internet.password()
        };
        const secret = process.env.JWT_SECRET as jwt.Secret;
        // Act
        const result = signToken(payload)
        // Assert
        expect(() => jwt.verify(result, secret)).not.toThrow();
    })
    test('verifyToken should return a object with payload data', ()=>{
        // Arragne
        const payload={
            email:faker.internet.email(),
            password:faker.internet.password()
        };
        const token = signToken(payload)
        // Act
        const result = verifyToken(token)
        // Assert
        expect(result).toBeInstanceOf(Object);
        expect(result).toMatchObject(payload);
    })
})