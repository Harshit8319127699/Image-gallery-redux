import { AddImage,DeleteImage } from "./ActionType"

export const addimage=(value)=>{
return{
type:AddImage,
payload:value
}
}
export const deleteimage=(value)=>{
    return{
    type:DeleteImage,
    payload:value
    }
    }