import { PlaceholderPageComponent } from "src/app/pages/placeholder-page/placeholder-page.component";
import { miscRoutes } from "./miscroutes.rtl";
import { VersatilePageSpec, dictionaryToRouteList, routeSpec } from "./utils.rtl";


export type othersSpec = {[key:string]:VersatilePageSpec};

export const miscData: othersSpec = {
    demo: {
        title: 'Demo Article for New Pages',
        groups: [
            {
                title: 'Flashbox content',
                paragraphs: [
                    {
                        text: 'Content with a title field and text shows up like this.The title for this is \'Flashbox content\''
                    }
                ]
            },
            {
                paragraphs:[
                    {
                        text:`Content without a title is rendered like this, without a box.`
                    }
                ]
            },
            {
                title:'This is a title with no paragraphs field.',
                paragraphs:[]
            },
            {
                paragraphs:[
                    {
                        text:`These are paragraphs listed below the titled group without paragraphs. Create lists like this:`
                    },

                    {
                        list:[
                            `Item 1`,
                            `Item 2`,
                            `Item 3`
                        ]
                    },
                    {
                        text:`A link to an internal route can be created like so:`
                    },
                    {
                        internalLink:{
                            label:'Home',
                            component:PlaceholderPageComponent,
                            route:''
                        }
                    },
                    {
                        text:`Or by using the route object, if you know where it is in the code`
                    },
                ]
            }
        ]
    }
}
