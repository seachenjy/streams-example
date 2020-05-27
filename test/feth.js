var assert = require('assert');
describe('ArrayBuffer to uint16', function() {
    //双字节
    let uintBuffer = new ArrayBuffer(4)
    let u16 = new DataView(uintBuffer)

    //输入内容的位置、输入的值、是否使用小端方式(默认大端）
    u16.setUint32(0,0x7FFFFFFF,false)

    var b = new Blob(uintBuffer,"application/octet-stream")


    

    
    //获得值
    console.log(u16.getUint32(0))
});