import {frame} from "./resource/frame"
/**
 * 舞台
 */
export class screen {
    width:number
    height:number
    canvas:CanvasRenderingContext2D
    audio:AudioContext
    frames:frames
    currentFrame:frame

    constructor(opts:screenOptions){
        this.width = opts.width
        this.height = opts.height
        this.canvas = opts.canvas
        this.audio = opts.audio
    }

    attachFrame(f:frame){
        this.frames[f.ID] = f
    }
}

interface frames {
    [id:number]:frame
}

export interface screenOptions {
    width:number
    height:number
    canvas:CanvasRenderingContext2D
    audio:AudioContext
}