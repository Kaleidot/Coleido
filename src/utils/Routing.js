import history from "../config/history";

/**
 * Abstracts the routing for ERAMIS, where programmatic navigation is needed.
 * Uses the hash router from the history package under the hood.
 */
export default class Routing {
    // Handles programmatic navigation
    static goTo(route) {
        history.push(route);
    }

    static path(...paths) {
        // console.log("route: " + "/" + paths.join("/"));
        return "/" + paths.join("/");
    }

    /**
     * Breaking up routes with depth (ie DASHBOARD.TWO_DIGIT_FOR) could work,
     * but tends to make code verbose if you intend to go beyond 2 levels.
     *
     * Keeping everything on the same level also makes it easier to build deep
     * parametric routes, like /dashboard/4for/:fourDigitFORCode/applied-measures
     */

    static ERROR = "error";
    static COLEIDOMV = "coleidomv";
}
