export interface resource {
    //资源
    resource:Uint8Array
    //进入舞台
    action():any
    //退出舞台
    destory():any
}