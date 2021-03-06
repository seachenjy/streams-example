//双字节
let uintBuffer = new ArrayBuffer(4)
let u16 = new DataView(uintBuffer)

//输入内容的位置、输入的值、是否使用小端方式(默认大端）
u16.setUint32(0,0x7FFFFFFF,false)

//Failed to construct 'Blob': Iterator getter is not callable.
var b = new Blob(["okokok"],{"type":"text/plain"})

var url = window.URL.createObjectURL(b);
//获得值
console.log(uintBuffer)
downloadFileByBlob(url,"book.txt")
function downloadFileByBlob(blobUrl :string, filename:string) {
  const eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'
  eleLink.href = blobUrl
  // 触发点击
  document.body.appendChild(eleLink)
  eleLink.click()
  // 然后移除
  document.body.removeChild(eleLink)
}