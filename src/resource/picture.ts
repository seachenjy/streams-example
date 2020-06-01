import { resource } from "./resource"

export interface picture extends resource {

    //从文件创建
    create(file:File):picture
}

export class picture implements picture {
    resource:Uint8Array

    create(file:File):picture {
        
        return this
    }

    action(){

    }

    destory(){

    }
}