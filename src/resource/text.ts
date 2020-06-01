import {resource} from "./resource"
export interface text extends resource {
    cn:string
    en:string
    //创建
    createCn(cn:string):text
    createEn(en:string):text
}