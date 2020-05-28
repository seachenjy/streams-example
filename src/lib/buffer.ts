//StringToArrayBuffer 返回字符的utf-8Arraybuffer
export function StringToArrayBuffer(str:string):ArrayBuffer {
    let length = str.length
    let uintBuffer = new ArrayBuffer(length*2)
    let u16 = new DataView(uintBuffer)

    //输入内容的位置、输入的值、是否使用小端方式(默认大端）
    for(let i=0;i<length;i++){
        u16.setUint16(i*2,str.charCodeAt(i),false)
    }
    return uintBuffer
}

//BufferToString 返回字节对应字符
export function BufferToString(ArrayBuffer:ArrayBuffer):string{
    let i=0
    let string = ""
    let max=ArrayBuffer.byteLength/2
    let u16 = new DataView(ArrayBuffer)
    for(;i<max;i++){
        let code = u16.getUint16(i)
        string += String.fromCodePoint(code) 
    }
    return string
}