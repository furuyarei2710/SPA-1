import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Navigate History API
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
// Loading the views inside the route
const router = async () => {
    // Get the views in the server-side before rendering on the webpage
    const routes = [
        {path: "/",view: Dashboard},
        {path: "/posts",view: Posts},
        {path: "/settings",view: Settings}
    ]
    // Test each route for the potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        }
    })
    // Get specified route
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    // Base: not match --> return default path
    if(!match)
        match = {route: routes[0], isMatch: true}
    
    const view = new match.route.view();
    $("#app").innerHTML = await view.getHTML();
}


    
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches(['data-link'])){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})