import {picture} from "./picture"
import {text} from "./text"
import {video} from "./video"
import {audio} from "./audio"

export interface frame {
    ID:number
    action():boolean
    decode(buffer:Uint8Array):boolean
    encode():Uint8Array
}
export class frame implements frame{
    //前景
    picture:picture

    //背景
    background:picture

    //对白
    text:text

    //视频
    video:video

    //音频
    audio:audio

    //解码
    decode(buffer:Uint8Array):boolean{
        return true
    }

    //开始
    action():boolean {
        return true
    }

    /**
     * 编码
     * [ea 83]
     * [ea 82 4字节长度，多余以零补齐]
     * [ea 81 前景]
     * [ea 80 背景]
     * [ea 79 对白]
     * [ea 78 视频]
     * [ea 77 音频]
     * **/
    encode():Uint8Array {
        return new Uint8Array()
    }
}
