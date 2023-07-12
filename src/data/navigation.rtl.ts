import { Routes } from "@angular/router";
import { miscRoutes, otherRoutes } from "./miscroutes.rtl";
import { objectToVals, parseRouteSpec, parseRoutes, routeSpec } from "./utils.rtl";
import { PlaceholderPageComponent } from "src/app/pages/placeholder-page/placeholder-page.component";

export const NavBarRoutes: routeSpec[] = [
    {
        label:'Home',
        route:'',
        component:PlaceholderPageComponent
    }
]
export const footerRoutes:routeSpec[] = [
    
]
export function getAllRoutes():Routes{
    const routes = parseRoutes(NavBarRoutes)
    routes.push(...footerRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...objectToVals(otherRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    return routes
}
