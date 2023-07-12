import { linkSpec } from "./utils.rtl";

export interface headerSpec{
    logo:string;
    title:string;
    subtitle?:string;
}
export interface footerSpec{
    text:string;
    links:linkSpec[]
}
export const headerData:headerSpec = {
    logo:'assets/angular.png',
    title:'Your Site Title',
    subtitle:'Subtitle Goes Here'
}

export const footerData:footerSpec = {
    text:'© Copyrights and site credits',
    links:[
        {
            label:'Email Me',
            target:'mailto:hardikraj08@gmail.com',
            type:'email'
        },
        {
            label:'Home',
            target:'/',
        }
    ]
}