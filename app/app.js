﻿
var app = angular.module('patientsApp', ['ngRoute', 'ngAnimate', 'mgcrea.ngStrap', 'ui.bootstrap', 'ui.utils', 'ngGrid', 'ngTable', 'ngTagsInput', 'checklist-model', 'truncate', 'placeholders', 'timer', 'ngRange', 'ngSanitize']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/patient-history/:patientID',
            {
                controller: 'HistoryController',
                templateUrl: 'app/partials/patient-history.html',
                title: 'Patient History',
                bodyClass: 'profile'
            })
        .when('/conditions-diagnoses/:patientID',
            {
                controller: 'ConditionsController',
                templateUrl: 'app/partials/conditions-diagnoses.html',
                title: 'Conditions & Diagnoses',
                bodyClass: 'profile'
            })
        .when('/meds-allergies/:patientID',
            {
                controller: 'MedsController',
                templateUrl: 'app/partials/meds-allergies.html',
                title: 'Meds & Allergies',
                bodyClass: 'profile'
            })
        .when('/tasks-playlists',
            {
                controller: 'TasksController',
                templateUrl: 'app/partials/tasks-playlists.html',
                title: 'Tasks & Playlists',
                bodyClass: 'tasks-playlists'
            })
        .when('/vitals-labs/:patientID',
            {
                controller: 'VitalsController',
                templateUrl: 'app/partials/vitals-labs.html',
                title: 'Vitals & Labs',
                bodyClass: 'profile'
            })
        .when('/goals-playlists/:patientID',
            {
                controller: 'GoalsController',
                templateUrl: 'app/partials/goals-playlists.html',
                title: 'Goals & Playlists',
                bodyClass: 'profile'
            })
        .when('/assessments/:patientID',
            {
                controller: 'AssessmentsController',
                templateUrl: 'app/partials/assessments.html',
                title: 'Assessments',
                bodyClass: 'profile'
            })
        .when('/procedures-immunizations/:patientID',
            {
                controller: 'ProceduresController',
                templateUrl: 'app/partials/procedures-immunizations.html',
                title: 'Procedures & Immunizations',
                bodyClass: 'profile'
            })
        .when('/docs',
            {
                controller: 'DocsController',
                templateUrl: 'app/partials/docs.html',
                title: 'Docs',
                bodyClass: 'profile'
            })
        .when('/tasks',
            {
                controller: 'TasksController',
                templateUrl: 'app/partials/tasks.html',
                title: 'Tasks',
                bodyClass: 'tasks'
            })
        .when('/overview',
            {
                controller: 'TasksController',
                templateUrl: 'app/partials/overview.html',
                title: 'Today\'s Hotspots',
                bodyClass: 'overview'
            })
        .when('/all-patients',
            {
                controller: 'AllPatientsController',
                templateUrl: 'app/partials/all-patients.html',
                title: 'All Patients',
                bodyClass: 'all-patients'
            })
        .when('/live-style',
            {
                controller: 'StyleController',
                templateUrl: 'app/partials/live-style-guide.html',
                title: 'Live Style Guide'
            })
        .otherwise({ redirectTo: '/all-patients' });
});
