fetch('/string.txt').then((res) => {
    let rd = res.body.getReader()
    const rdfun = ():any => rd.read().then(({value,done})=>{
        if (done){
            console.log('done')
            return false
        }
        var string = new TextDecoder().decode(value);

        console.log(string)
        console.log("----------------")
        return rdfun()
    })
    return rdfun()
    // const decoder = new TextDecoderStream('utf-8', { ignoreBOM: true });
    // const textStream = res.body.pipeThrough(decoder);
    // const reader = textStream.getReader();
    // const findMatched = () => reader.read().then(({ value, done }) => {
    //     if (done) {
    //         console.log("done");
    //         return false;
    //     }
    //     // console.log(value);
    //     console.log("--------");
    //     return findMatched();
    // });
    // return findMatched();
    // // console.log("...")
});