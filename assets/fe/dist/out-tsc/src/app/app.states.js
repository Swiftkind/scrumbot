"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layouts_utils_1 = require("app/utils/layouts.utils");
var scrumboard_component_1 = require("app/components/containers/scrumboard/scrumboard.component");
var issueboard_component_1 = require("app/components/containers/issueboard/issueboard.component");
var login_component_1 = require("app/components/forms/login/login.component");
// let CREATE_TEAM_STATE: Object[] = [
//     {
//         name: 'create-team',
//         url: '/create',
//         views: ContentOnly(CreateTeamComponent),
//     }
// ]
// let JOIN_TEAM_STATE: Object[] = [
//     {
//         name: 'join-team',
//         url: '/join',
//         views: ContentOnly(JoinTeamComponent),
//     }
// ]
var HOME_STATE = [
    {
        name: 'scrumboard',
        url: '/',
        views: layouts_utils_1.ContentOnly(scrumboard_component_1.ScrumboardComponent),
    }
];
var ISSUES_STATE = [
    {
        name: 'issuesboard',
        url: '/issues',
        views: layouts_utils_1.ContentOnly(issueboard_component_1.IssueboardComponent),
    }
];
var LOGIN_STATE = [
    {
        name: 'login',
        url: '/login',
        views: layouts_utils_1.ContentOnly(login_component_1.LoginComponent),
    }
];
exports.APP_STATES = {
    otherwise: '/',
    states: [].concat(
    // CREATE_TEAM_STATE,
    //       JOIN_TEAM_STATE,
    HOME_STATE, ISSUES_STATE, LOGIN_STATE)
};
//# sourceMappingURL=app.states.js.map