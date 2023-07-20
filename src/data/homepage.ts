import { VersatilePageSpec } from "./utils.rtl";

export const homepageData:VersatilePageSpec = {
    title:'Home',
    groups:[
        {
            title:`Not FA but Reasonable Qs`,
            paragraphs:[]
        },
        {
            title:`What is this?`,
            paragraphs:[
                {
                    text:`This is a website template built on top of Angular.`
                }
            ],
        },
        {
            title:`Why'd you make another Angular template?`,
            paragraphs:[
                {
                    text:`Because this one aims to isolate the HTML,CSS,JS part of the site from the content. I think this makes the setup more accessible to people not willing to interact with the former.`
                }
            ]
        },
        {
            paragraphs:[
                {
                    text:`The site also renders ...`
                }
            ]
        }
    ]
}