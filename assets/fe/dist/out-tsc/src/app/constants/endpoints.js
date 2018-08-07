"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var team_id = 'TBQPB0RMJ';
exports.GET_LOGS = function () { return '/api/scrum/'; };
exports.GET_ISSUES = function () { return '/api/scrum/issues/'; };
exports.GET_TEAM_MEMBERS = function () { return '/api/accounts/users/' + team_id + '/'; };
exports.GET_TEAM_PROJECTS = function () { return '/api/accounts/projects/' + team_id + '/'; };
exports.UPDATE_ISSUE_STATUS = function (id) { return '/api/scrum/update_status/' + id; };
exports.UPDATE_ISSUE_DEADLINE = function (id) { return '/api/scrum/update_deadline/' + id; };
exports.LOGIN_USER = function () { return '/api/accounts/login/'; };
//# sourceMappingURL=endpoints.js.map