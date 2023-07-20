import { Routes } from "@angular/router";
import { miscRoutes, otherRoutes } from "./miscroutes.rtl";
import { objectToVals, parseRouteSpec, parseRoutes, routeSpec } from "./utils.rtl";
import { PlaceholderPageComponent } from "src/app/pages/placeholder-page/placeholder-page.component";
import { VersatileboxComponent } from "src/app/comps/versatilebox/versatilebox.component";
import { VersatilePageComponent } from "src/app/comps/versatile-page/versatile-page.component";
import { HomePageComponent } from "src/app/comps/home-page/home-page.component";

export const NavBarRoutes: routeSpec[] = [
    {
        label:'Home',
        route:'',
        component:HomePageComponent
    },
    {
        label:'Menu (A wood)',
        children:[
            {
                label:'Path 1 (More Travelled By)',
                route:'https://youtu.be/dQw4w9WgXcQ',
            },
            {
                label:'Path 2 (Less Travelled By)',
                route:'https://youtu.be/xvFZjo5PgG0'
            }
        ]
    },
    {
        label:`Robert Frost Poems`,
        children:[
            {
                label:`Stopping by...`,
                route:`https://www.poetryfoundation.org/poems/42891/stopping-by-woods-on-a-snowy-evening`
            },
            {
                label:`The road not taken`,
                route:`https://www.poetrybooks.co.uk/blogs/news/poem-a-day-the-road-not-taken`
            }
        ]
    }
]
export const footerRoutes:routeSpec[] = [
    
]
export function getAllRoutes():Routes{
    const routes = parseRoutes(NavBarRoutes)
    routes.push(...footerRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...objectToVals(otherRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    routes.push(...miscRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)));
    routes.push({
        path:'**',
        redirectTo:''
    })
    return routes
}
