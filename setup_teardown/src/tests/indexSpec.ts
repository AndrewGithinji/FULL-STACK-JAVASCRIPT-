import newArr from '../index';
import strings from '../utilities/strings';
import numbers from '../utilities/numbers';
import arrays from '../utilities/arrays';

describe('Tests for all array utilities', () => {
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

describe('Test for new array', () => {
    it('should make a new array containing dog', () => {
        expect(newArr(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect(newArr(3, wordArr)).toContain(3);
    });
    
}),

describe('Test for a capitalized string', () => {
    it('should capitalize a string', () => {
        expect(strings.capitalize('a sentence')).toEqual('A Sentence');
    });

    it('should allow sentence to remain capitalized', () => {
        expect(strings.capitalize('A Sentence')).toEqual('A Sentence');
    });
}),


describe('Calculates the sum of numbers', () => {
    it('should be a sum greater than 10', () => {
        expect(numbers.sum(3,10)).toBeGreaterThan(10);
    });
    it('should be a sum less than 10', () => {
        expect(numbers.sum(-3,10)).toBeLessThan(10);
    });
    
    it('should multiply 3 by 5 and be 15', () => {
        expect(numbers.multiply(3,5)).toBe(15);
    });
    it('should multiply 0 by 5 to be falsy', () => {
        expect(numbers.multiply(0,5)).toBeFalsy();
    });
}),


describe('Checks for numbers in array', () => {
    it('should add numbers in array and be truthy', () => {
        expect(arrays.addArr(numArr)).toBeTruthy();
    });
    it('should add numbers in array and be 19', () => {
        expect(arrays.addArr(numArr)).toBe(19);
    });
}),

describe('Concatinates numbers in an array', () => {
    it('should concatinate 2 arrays to not equal the first', () => {
        expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
    });
    it('should concatinate 2 arrays to not equal the second', () => {
        expect(arrays.concatArr(numArr, wordArr)).not.toEqual(wordArr);
    });
}),

describe('Checks the items in the array' , () => {
    it('should contain 3 items except rabbit', () => {
        expect(arrays.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
    });
    it('should not contain the third index rabbit', () => {
        expect(arrays.cut3(wordArr)).not.toContain('rabbit');
    });
}),

describe('Tests for the largest number', () => {
    it('should have 6 be largest number', () => {
        expect(arrays.lgNum(numArr)).toEqual(6);
    });
    it('should not have a large number and be falsy', () => {
        expect(arrays.lgNum(wordArr)).toBeFalsy();
    });
})
})