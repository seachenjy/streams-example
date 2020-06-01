import {resource} from "./resource"
export interface audio extends resource {
    setVolumn(v:number):number
    getVolumn():number
    stop():boolean
    play():boolean
    replay():boolean
    pause():boolean
    //从网站创建
    createFromUrl(audioUrl:string):audio
    //从文件创建
    createFromFile(file:File):audio
}