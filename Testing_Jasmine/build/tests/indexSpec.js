"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = __importDefault(require("./utilities/arrays"));
var arrSum = arrays_1.default.addArr(numArr);
var mixArr = arrays_1.default.concatArr(numArr, wordArr);
it('should concatenate two arrays', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
