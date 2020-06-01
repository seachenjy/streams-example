import {resource} from "./resource"
export interface video extends resource {
    play():boolean
    replay():boolean
    pause():boolean
    //从网站创建
    createFromUrl(videoUrl:string):video
    //从文件创建
    createFromFile(file:File):video
}