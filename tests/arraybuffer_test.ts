var assert = require('assert');
import {StringToArrayBuffer,BufferToString} from "../src/lib/buffer"

describe('字符串和arraybuffer互转', function() {
    const testString = "字符转arraybuffer"
    var uint8array = new TextEncoder().encode(testString);
    var string = new TextDecoder().decode(uint8array);
    console.log(uint8array ,string )
    let arrayBuffer = StringToArrayBuffer(testString)
    console.log(arrayBuffer)
    // let string = BufferToString(arrayBuffer)
    // it('字符转arraybuffer',function(){
    //     assert.equal(arrayBuffer.byteLength,testString.length*2)
    // })
    // it('arrayBuffer转字符',function(){
    //     assert.equal(string,testString)
    // })
});