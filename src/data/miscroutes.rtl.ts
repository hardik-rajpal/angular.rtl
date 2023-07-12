import { PlaceholderPageComponent } from "src/app/pages/placeholder-page/placeholder-page.component";
import { dictionaryToRouteList, routeSpec } from "./utils.rtl";
import { miscData } from "./miscdata.rtl";
import { MiscPageComponent } from "src/app/pages/misc-page/misc-page.component";
export interface miscRoutesSpec{[key:string]:routeSpec}
export const otherRoutes:{[key:string]:routeSpec} = {
    home:{
        route:'misc/others/home',
        component:PlaceholderPageComponent,
        label:'Home'
    }
    // ...miscOthersRoutes
}
export const miscRoutes = dictionaryToRouteList(miscData,'misc/',MiscPageComponent)
