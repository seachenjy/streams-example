export interface resource {
    id:number
    resource:Uint8Array
    action():boolean
    destory():boolean
}

export interface picture extends resource {

}

export interface text extends resource {

}

export interface video extends resource {
    play():boolean
    replay():boolean
    pause():boolean
}

export interface audio extends resource {
    setVolumn(v:number):number
    getVolumn():number
    stop():boolean
    play():boolean
    replay():boolean
    pause():boolean
}
