import {picture, text, video, audio } from "./resource"
export class frame {

    picture:picture

    text:text

    video:video

    audio:audio

    //解码
    decode(buffer:Uint8Array):boolean{
        return true
    }

    action():boolean {
        return true
    }
}
