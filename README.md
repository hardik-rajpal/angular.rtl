# Template Specific Instructions
Steps to use the template:
- [ ] Clone the template locally
- [ ] Replace angular.rtl with your project's name across the following files:
    1. index.html
    2. I swear I thought there were gonna be more files.
- [ ] Modify the `baseurl` in deploy.ps1 (bash alternative yet to be provided)
- [ ] Have a look at the `styles.css` to use the many classes to your advantage.
# Template Documentation
## Deployment
1. To generate files for deployment, open up a terminal in the folder containing this README file and run
`bash deploy.sh https://www.isid.ac.in/~testdeploy`, replacing `https://www.isid.ac.in/~testdeploy` with
the URL where the site is to be deployed.
2. Once this command succeeds, copy the files and folders from the folder called `deploy` to the folder called
`public_html` in the server.
3. A modification to the server to redirect any URLs not found to the 404.html page for our site specifically is necessary.

# Updates
## To Existing pages
1. Updates to existing pages such involving text and images can be accomplished by navigating to the 
relevant file in the `src/data` folder and updating the content in the JSON dictionaries.
2. Note that any new images are to be placed in the assets folder (or a subdirectory) and its path
used in the appropriate data file.
### Components
#### Paraspec
Paraspec components are meant to render paragraphs, images, lists and links. The only allowed combinations of fields being used at once are:
- text
- list
- image
- text and image
- list and image
- internalLink
The reverse field (set to true or false) handles the layout of images when they are together with a list or a text.

Ex: The following paraspec will fail to render the list because list and text together are not allowed:
```
{
    text:`Sample text`,
    list:[
        `item 1`,
        `item 2`
    ]
}
``` 
Instead, use the following code:
```
{
    text:`Sample text`
},
{
    list:[
        `item 1`,
        `item 2`
    ]
}
```
### Navigation
There are two aspects to navigation
1. Telling the framework that you want a particular URL to route to a particular page
2. Writing links in other pages that be used to route that URL.

#### Navigation Bar
The `NavBarRoutes` in `data/navigation.ts` handle 1 and 2 the moment you update them. They are used by the function `getAllRoutes` to 
setup the URL to page mapping by the framework and used by the
navbar component to render the navigation bar.

The `footerRoutes` work similar, displaying the routes in the footer.

The `personRoutes` list routes for individual faculty pages.

The `otherRoutes` are dicussed later.

These routes are lists of a an object type `routeSpec` Its fields 
are described below:

```
{
    label:`The label displayed when this route is rendered`,
    route:`The path at which this page is shown`,
    children:[
        //other routeSpec objects. When children are given,
        //the component field is not used. And the button
        //in the navbar displays a dropdown of the routes
        //corresponding to the children.
    ],
    component:TheComponentWhichRendersThePage
    //this component field is not used
    //if children are supplied.
}

```
Note that you can have routeSpecs where neither `children` nor 
`component` are specified if the `route` is an external link, 
ex:

```
{
    label:`Discussion Papers`,
    route:`https://ideas.repec.org/s/alo/isipdp.html`
}
```
The `getAllRoutes` function also uses routes called `miscRoutes`;
these are from the `miscroutes.ts` file. These are routes not mentioned
in the `NavBarRoutes`, `footerRoutes`, `otherRoutes` and `personRoutes`.
That means that only (1) has been done for these routes; they exist
in the website but are not made visible to the client anywhere.

To use these routes (or any of the other routes), we can either

1. (Recommended) Use an anchor tag in the text field of a paraSpec (or some other
component where text is allowed):
```
You can find the past phd students here:
<a href="misc/pastphdstudents">
    Past Phd Students
</a>
```
Note that `misc/pastphdstudents` is the value of the `route:` field the routeSpec
that establishes that `misc/pastphdstudents` must display the `PastPhdStudentsComponent`
in the `miscroutes.ts` file.

2. In a paraSpec, we can use the `internalLink` field:
```
{
    text:`You can find the past phd students here:`
},
{
    internalLink:miscRoutes['pastPhdStudents']
}
```
Here, we have passed the entire `routeSpec` related to the past PhD students page 
to the internalLink field. We could also duplicate information (thought this is
not preferred as the updates will have to be more carefully done):
```
{
    text:`You can find the past phd students here:`
},
{
    internalLink:{
        route:'misc/pastphdstudents',
        component:PastPhdStudentsComponent,
        label:'Past Phd Students'
    }
}
```
## New Pages
The site also allows you to create new pages
without going into the intricacies of Angular and HTML.

You simply have to add a new entry to `othersData`, located in
the `otherspage.ts` file.
Have a look at the page at `http://localhost:4200/misc/others/demo` to 
see how this will be rendered.

For example, say I want to add a new page discussing something about
COVID-19. This is what the othersData dictionary will look like:
```
export const othersData:othersSpec = {
    demo:{
        ...
        //pre existing code for demo page
    },
    //the `key` = covid19 makes sure that
    //the path misc/others/covid19 routes to
    //a page where the the data listed below is
    //displayed
    covid19:{
        title:`New Page about COVID-19`,
        groups:[
            //groups conveying info about COVID-19
            //look at the groups in the demo page
            //to understand how they are used
            //and rendered.
        ]
    }
}

```
# AngularRtl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
