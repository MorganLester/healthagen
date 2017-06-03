

app.controller('MenuController', function($scope, $route, $location) {
    
    $scope.closeMenu = function () {
        $('.mp-pusher').removeClass('mp-pushed');
        $('.mp-overlay').hide();
    };

    $scope.close = function () {
        $('.mp-pusher').removeClass('mp-pushed');
        $('.mp-overlay').hide();
        $('body').removeClass('annotate');
    };

    $scope.annotate = function () {
        $('body').toggleClass('annotate');
    };
});

app.controller('HeaderController', function($scope, $route, $location) {

    $scope.bodyClass = function (getClass) {
        $('body').removeClass('body-assessment');
        $('body').addClass('body-' + getClass);
    };

    $scope.hamburger = function () {
        if ( $('.mp-pusher').hasClass('mp-pushed') ) {
            $('.mp-pusher').removeClass('mp-pushed');
            $('.mp-overlay').hide();
        } else {
            $('.mp-overlay').show();
            $('.mp-pusher').addClass('mp-pushed');
        }
    };
});

app.controller('annotationController', function($scope) {

    $scope.annotate = function () {
        $('body').removeClass('annotate');
    };
});

app.controller('NavbarController', function($scope, $route, $routeParams, $location, customersService) {
    $scope.patient = {};
    $scope.historyNav = false;
    $scope.conditionsNav = false;
    $scope.medsNav = false;
    $scope.goalsNav = false;
    $scope.assessmentsNav = false;
    $scope.proceduresNav = false;
    $scope.vitalsNav = false;
    $scope.docsNav = false;
    
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    };

    $scope.title = $route.current.title;

    init();

    function init() {

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);

            for ( var i = 0; i < $scope.patient.hotspots.length; i++ ) {
                if ( $scope.patient.hotspots[i].flag == 'history' ) {
                    $scope.historyNav = true
                } else if ( $scope.patient.hotspots[i].flag == 'conditions' || $scope.patient.hotspots[i].flag == 'diagnoses' ) {
                    $scope.conditionsNav = true 
                } else if ( $scope.patient.hotspots[i].flag == 'meds' || $scope.patient.hotspots[i].flag == 'allergies' ) {
                    $scope.medsNav = true
                } else if ( $scope.patient.hotspots[i].flag == 'goals' || $scope.patient.hotspots[i].flag == 'playlists' ) {
                    $scope.goalsNav = true
                } else if ( $scope.patient.hotspots[i].flag == 'assessments' ) {
                    $scope.assessmentsNav = true
                } else if ( $scope.patient.hotspots[i].flag == 'vitals' || $scope.patient.hotspots[i].flag == 'labs' ) {
                    $scope.vitalsNav = true
                } else if ( $scope.patient.hotspots[i].flag == 'procedures' || $scope.patient.hotspots[i].flag == 'immunizations' ) {
                    $scope.proceduresNav = true
                } else if ( $scope.patient.hotspots[i].flag == 'docs' ) {
                    $scope.docsNav = true
                }
            }
        }
    }


});

app.controller('titleController', function($scope, $route, $log) {
    $scope.$on('$routeChangeSuccess', function() {
        $scope.title = $route.current.title;
    });
});

app.controller('bodyController', function($scope, $route, $log) {
    $scope.$on('$routeChangeSuccess', function() {
        $('body').removeClass('body-assessment body-messages');
        $scope.bodyClass = $route.current.bodyClass;
    });
});

app.controller('OverlayController', function($scope) {

    $scope.closeOverlay = function () {
        $('.mp-pusher').removeClass('mp-pushed');
        $('.mp-overlay').hide();
    };
});

app.controller('ConditionsController', function($scope, $routeParams, customersService) {
    // $scope.patients = [];
    $scope.conditions = [];
    $scope.diagonses = [];
    $scope.patient = {};
    $scope.selectedCondition = [];
    
    init();

    function init() {
        // $scope.patients = customersService.getPatients();
        $scope.conditions = customersService.getConditions();
        $scope.diagnoses = customersService.getDiagnoses();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }

    $scope.orderby = 'title';
    $scope.reverse = false;

    $scope.setOrder = function (orderby) {
        if ( orderby === 'asc' ) 
        {
            $scope.reverse = false;
        }
        if ( orderby === 'desc' )
        {
            $scope.reverse = true;
        }
        if ( orderby === 'risk' )
        {
            $scope.orderby = orderby;
        }
    };

    $scope.gridConditions = { 
        data: 'conditions',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '40%'},
                {field: 'tests', displayName: 'Tests', width: '15%'},
                {field: 'notes', displayName: 'Notes', width: '15%'},
                {field: 'risk', displayName: 'Risk Level', width: '30%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedCondition,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-conditions.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
                     '</div>'
    };

    $scope.gridDiagnoses = { 
        data: 'diagnoses',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'date', displayName: 'Date', width: '20%'},
                {field: 'code', displayName: 'Code', width: '20%'},
                {field: 'description', displayName: 'Description', width: '60%'}
        ],
        enableRowSelection: false,
        rowHeight: 48,
        enableRowSelection: false
    };

});

app.controller('MedsController', function($scope, $routeParams, customersService) {
    $scope.medications = [];
    $scope.patient = {};

    init();

    function init() {
        $scope.medications = customersService.getMedications();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }

    $scope.orderby = 'title';
    $scope.reverse = false;

    $scope.setOrder = function (orderby) {
        if ( orderby === 'asc' ) 
        {
            $scope.reverse = false;
        }
        if ( orderby === 'desc' )
        {
            $scope.reverse = true;
        }
    };

});

app.controller('GoalsController', function($scope, $routeParams, customersService) {
    $scope.patient = {};

    init();

    function init() {
        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }
});

app.controller('HistoryController', function($scope, $routeParams, customersService) {
    $scope.patient = {};

    init();

    function init() {
        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }
});

app.controller('VitalsController', function($scope, $routeParams, customersService) {
    $scope.vitals = [];
    $scope.labs = [];
    $scope.patient = {};
    $scope.selectedVital = [];
   
    init();

    function init() {
        $scope.vitals = customersService.getVitals();
        $scope.labs = customersService.getLabs();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }

    $scope.gridVitals = { 
        data: 'vitals',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '50%' },
                {field:'result', displayName:'Result', width: '10%'},
                {field: 'range', displayName:'Healthy Range', width: '15%'},
                {field:'date', displayName:'Date', width: '15%'},
                {field:'source', displayName:'Source', width: '10%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedVital,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-vitals.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
                     '</div>'           
    };

    $scope.gridLabs = { 
        data: 'labs',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '50%'},
                {field:'result', displayName:'Result', width: '10%'},
                {field: 'range', displayName:'Healthy Range', width: '15%'},
                {field:'date', displayName:'Date', width: '15%'},
                {field:'source', displayName:'Source', width: '10%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedVital,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-lab.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
                     '</div>'
    };

});

app.controller('AssessmentsController', function($scope, $routeParams, customersService) {
    $scope.problems = [];
    $scope.patient = {};
    $scope.selectedProblem = [];

    init();

    function init() {
        $scope.problems = customersService.getProblems();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }

    $scope.gridProblems = { 
        data: 'problems',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '50%'},
                {field:'encounter', displayName:'Encounter', width: '15%'},
                {field: 'assessment', displayName:'Assessment', width: '35%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedProblem,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-problems.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
                     '</div>'
    };
});

app.controller('ProceduresController', function($scope, $routeParams, $http, customersService) {
    $scope.patient = {};
    $scope.procedures = [];
    $scope.immunizations = [];
    $scope.selectedProcedure = [];
    $scope.selectedImmunization = [];

    init();

    function init() {
        $scope.procedures = customersService.getProcedures();
        $scope.immunizations = customersService.getProcedures();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }

    $scope.gridProcedures = { 
        data: 'procedures',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '85%'},
                {field: 'total', displayName: 'total', width: '15%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedProcedure,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-class="{yellow: row.getProperty(\'title\') === \'Screen Clinical Depression\'}"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                           '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                           '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-procedures.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
                     '</div></div>'
    };

    $scope.gridImmunizations = { 
        data: 'immunizations',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '85%'},
                {field: 'total', displayName: 'total', width: '15%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedImmunization,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-class="{yellow: row.getProperty(\'title\') === \'Screen Clinical Depression\'}"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                   '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                   '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-immunizations.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
             '</div></div>'
    };


});

app.controller('DocsController', function($scope, customersService) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
});

app.controller('MessagesController', function($scope, $routeParams, customersService) {
    $scope.patient = {};
    $scope.patients = [];
    $scope.messages = [];
    $scope.thisOne = 1;

    init();

    function init() {
        $scope.messages = customersService.getMessages();
        $scope.patients = customersService.getPatients();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 1;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }
    }

    $scope.tabs = [
      {
        "title": "Patients",
        "template": "app/partials/tabs/messages-patients.html",
        "content": "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica."
      },
      {
        "title": "Staff",
        "content": "Staff content..."
      }
    ];

    $scope.tabs.activeTab = 0;

});

app.controller('WatchlistController', function($scope, customersService) {
    $scope.patients = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
    }

    $scope.foldWatchlist = function (index) {
        var getTile = index;
        $('#tile-watchlist-' + getTile).find('.tile-inner').toggleClass('white');
    };
 
});

app.controller('TasksController', function ($scope, $http, $filter, customersService) {
    $scope.patients = [];
    $scope.playlists = [];
    $scope.day = '';
    $scope.getManager = '';
    $scope.getDoctor = '';
    $scope.doctors = [];
    $scope.snoozeButtons = false;
    $scope.managers = ['(You)'];
    $scope.placeholder = 'Find Tasks...';
    $scope.getGender = '';
    $scope.genders = [];

    init();

    function init() {
        $scope.patients = customersService.getPatients();
        $scope.playlists = customersService.getPlaylists();
    }

    $scope.snooze = function(day) {
        angular.forEach($scope.patients, function(patient) {
            if (patient.checked == true) {
                patient.tasks.time = day;
            }
        });
    };

    $scope.archive = function() {
        for (var i = $scope.patients.length - 1; i >= 0; i--) {
            if ($scope.patients[i].checked == true) {
                $scope.patients.splice(i, 1);
            }
        }
    };

    $scope.$watch( "patients" , function(n,o){
        var truedat = $filter("filter")( n , {checked:true} );
        $scope.snoozeButtons = truedat.length;
    }, true );

    $scope.checkAllToday = function() {
        if ($scope.selectedToday) {
            $scope.selectedToday = true;
            $scope.snoozeButtons = true;
        } else {
            $scope.selectedToday = false;
            $scope.snoozeButtons = false;
        }
        angular.forEach($scope.patients, function(patient) {
            if (patient.tasks.time == 'Today') {
                patient.checked = $scope.selectedToday;
            }
        });
    };

    $scope.checkAllTomorrow = function() {
        if ($scope.selectedTomorrow) {
            $scope.selectedTomorrow = true;
            $scope.snoozeButtons = true;
        } else {
            $scope.selectedTomorrow = false;
            $scope.snoozeButtons = false;
        }
        angular.forEach($scope.patients, function(patient) {
            if (patient.tasks.time == 'Tomorrow') {
                patient.checked = $scope.selectedTomorrow;
            }
        });
    };

    $scope.checkAllTwo = function() {
        if ($scope.selectedTwo) {
            $scope.selectedTwo = true;
            $scope.snoozeButtons = true;
        } else {
            $scope.selectedTwo = false;
            $scope.snoozeButtons = false;
        }
        angular.forEach($scope.patients, function(patient) {
            if (patient.tasks.time == '2 Days from now') {
                patient.checked = $scope.selectedTwo;
            }
        });
    };

    $scope.checkAllWeek = function() {
        if ($scope.selectedWeek) {
            $scope.selectedWeek = true;
            $scope.snoozeButtons = true;
        } else {
            $scope.selectedWeek = false;
            $scope.snoozeButtons = false;
        }
        angular.forEach($scope.patients, function(patient) {
            if (patient.tasks.time == 'Next Week') {
                patient.checked = $scope.selectedWeek;
            }
        });
    };

    $scope.removeManager = function ( idx, manager ) {
        $scope.getManager = ''; 
        $scope.managers.splice( idx, 1 );
    };
   
    $scope.removeDoctor = function ( idx, doctor ) {
        $scope.getDoctor = ''; 
        $scope.doctors.splice( idx, 1 );
    };

     $scope.addDoctor = function( doc ) {
        $scope.getDoctor = ''; 
        $scope.doctors = [];
        $scope.getDoctor = doc;
        $scope.doctors.push( doc );
    };

    $scope.addGender = function( gender ) {
        $scope.getGender = ''; 
        $scope.genders = [];
        $scope.getGender = gender;
        $scope.genders.push( gender );
    };

    $scope.removeGender= function ( idx, gender) {
        $scope.getGender = ''; 
        $scope.genders = [];
    };

    $scope.fold = function (index) {
        var getTile = index;
        $('#tile-' + getTile).find('.tile-inner').toggleClass('white');
    };
 
    $scope.foldRollup = function (index) {
        var getTile = index;
        $('#tile-rollup-' + getTile).find('.tile-inner').toggleClass('white');
    };
});

app.controller('ProfileController', function($scope, $location, $aside, $anchorScroll, customersService) {

    $scope.tabs = [
      {
        "title": "Patient",
        "template": "app/partials/tabs/profile-patient.html",
        "content": "[replaced by template]"
      },
      {
        "title": "Tasks",
        "template": "app/partials/tabs/profile-tasks.html",
        "content": "[replaced by template]"
      },
      {
        "title": "Messages",
        "template": "app/partials/tabs/profile-messages.html",
        "content": "[replaced by template]"
      },
      {
        "title": "Encounter",
        "template": "app/partials/tabs/profile-encounter.html",
        "content": "[replaced by template]"
      }
    ];

    $scope.tabs.activeTab = 0;

    $scope.gotoTop = function () {
        var old = $location.hash();
        $location.hash('top');
        $anchorScroll();
        $location.hash(old);
    };

    $scope.bodyClass = function (getClass) {
        $('body').removeClass('body-messages');
        $('body').addClass('body-' + getClass);
    };

    $scope.openEncounter = function () {
        var myOtherAside = $aside({backdrop: false, placement: 'bottom', animation: 'am-slide-bottom', template: 'app/partials/panels/assessment.html'});
    };

});

app.controller('AllPatientsController', function($scope, customersService) {
    $scope.patients = [];
    $scope.getDoctor = '';
    $scope.doctors = [];
    $scope.getManager = '';
    $scope.managers = ['(You)'];
    $scope.getGender = '';
    $scope.genders = [];
    $scope.placeholder = 'Find Patients...';

    init();

    function init() {
        $scope.patients = customersService.getPatients();
    }

    $scope.removeDoctor = function ( idx, doctor ) {
        $scope.getDoctor = ''; 
        $scope.doctors.splice( idx, 1 );
    };

    $scope.addDoctor = function( doc ) {
        $scope.getDoctor = ''; 
        $scope.doctors = [];
        $scope.getDoctor = doc;
        $scope.doctors.push( doc );
    };

    $scope.addGender = function( gender ) {
        $scope.getGender = ''; 
        $scope.genders = [];
        $scope.getGender = gender;
        $scope.genders.push( gender );
    };

    $scope.removeGender= function ( idx, gender) {
        $scope.getGender = ''; 
        $scope.genders = [];
    };

    $scope.addManager = function( manager ) {
        $scope.getManager = ''; 
        $scope.managers = [];

        if ( manager == 'Miriam') {
            $scope.getManager = '(You)';
        } else {
            $scope.getManager = 'Rosenovich, J.';
        }

        $scope.managers.push( $scope.getManager );
    };
   
    $scope.removeManager = function ( idx, manager ) {
        $scope.getManager = ''; 
        $scope.managers.splice( idx, 1 );
    };

    $scope.fold = function (index) {
        var getTile = index;
        $('#tile-' + getTile).find('.tile-inner').toggleClass('white');
    };
 
    $scope.foldRollup = function (index) {
        var getTile = index;
        $('#tile-rollup-' + getTile).find('.tile-inner').toggleClass('white');
    };
    
    $scope.foldPatients = function (index) {
        var getTile = index;
        $('#tile-patients-' + getTile).find('.tile-inner').toggleClass('white');
    };

    $scope.exceptEmptyComparator = function (actual, expected) {
        if (!expected) {
           return true;
        }
        return angular.equals(expected, actual);
    };

});

app.controller('EncounterController', function($scope, $routeParams, $http, customersService) {
    // $scope.patients = [];
    $scope.patient = {};
    $scope.recs = [];
    $scope.questions = [];
    $scope.assessments = [];
    $scope.closeType = true;
    $scope.closed = false;
    $scope.current = false;
    $scope.next = [
        'What do you do to check your <strong>blood sugar</strong>?',
        'Are you experiencing <strong>swelling</strong> or redness in your <strong>limbs</strong>?',
        'Do you have <strong>trouble sleeping</strong>? Sleep Apnea.',
        'What is your <strong>workout</strong> regimen?',
        'Do you have a <strong>family</strong> history of <strong>Diabetes</strong>?'
    ];

    init();

    function init() {
        // $scope.patients = customersService.getPatients();

        var patientID = ($routeParams.patientID) ? parseInt($routeParams.patientID) : 0;
        if (patientID > 0) {
            $scope.patient = customersService.getPatient(patientID);
        }

        $scope.recs = customersService.getRecAssessments();
        $scope.questions = customersService.getQuestions();
        $scope.assessments = customersService.getAssessments();

    }

    $scope.selected = undefined;
    $scope.states = ["What, if anything, do you know about what blood pressure numbers mean?","Do you know your most recent blood pressure?","What has your doctor told you about what your blood pressure should be?","Has your doctor given you a target value for what your blood pressure should be?"];

    $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.showWeeks = false;
      $scope.toggleWeeks = function () {
        $scope.showWeeks = ! $scope.showWeeks;
      };

      $scope.clear = function () {
        $scope.dt = null;
      };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1,
        'show-weeks' : false
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.button = {};

    $scope.gridAllAssessments = { 
        data: 'assessments',
        plugins: [new ngGridFlexibleHeightPlugin(),new ngGridAddClassToLastRow('row-last')],
        columnDefs: [
                {field: 'title', displayName: 'Name', width: '60%'},
                {field: 'category', displayName: 'Category', width: '25%'},
                {field: 'status', displayName: 'Status', width: '15%'}
        ],
        rowHeight: 45,
        selectedItems: $scope.selectedProcedure,
        multiSelect: false,
        enableRowSelection: false,
        rowTemplate:'<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
                   '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
                   '<div ng-cell data-placement="bottom" data-animation="am-slide-bottom" data-template="app/partials/panels/module-procedures.html" bs-aside="aside" data-container=".page-wrapper"></div>' +
             '</div>'
    };

    $scope.minimize = function () { 
        $('.aside').toggleClass('minimized');
        setHeight();
    };

    $scope.swapClose = function () {
        $scope.closeType = !$scope.closeType;
    };

    $scope.stopResumeTimer = function ( sectionId ) {
        if ( $('.stop-resume').text() == 'Start' ) { 
            $('timer')[0].start();
            $('.stop-resume').text( 'Stop' );
            $scope.closeType = true;
        }
        else if ( $('.stop-resume').text() == 'Stop' ) { 
            $('timer')[0].stop();
            $('.stop-resume').text( 'Resume' );
            $scope.closeType = false;
        }
        else {
            $('timer')[0].resume();
            $('.stop-resume').text( 'Stop' );
            $scope.closeType = true;
        }
    };

    // timer
    function startTimer(sectionId) {
        document.getElementById(sectionId).getElementsByTagName('timer')[0].start();
    }

    function stopTimer(sectionId) {
        document.getElementById(sectionId).getElementsByTagName('timer')[0].stop();
    }

    function setHeight() {
        var getHeight = ($('.panel-assessment').height() - 40);

        if ( $('.aside').hasClass('minimized') ) {
            $('.panel-assessment').css({
                '-webkit-transform' : 'translateY(' + getHeight + 'px)',
                   '-moz-transform' : 'translateY(' + getHeight + 'px)',
                    '-ms-transform' : 'translateY(' + getHeight + 'px)',
                        'transform' : 'translateY(' + getHeight + 'px)'

            });
        } else {
            $('.panel-assessment').css({
                '-webkit-transform' : 'translateY(0)',
                   '-moz-transform' : 'translateY(0)',
                    '-ms-transform' : 'translateY(0)',
                        'transform' : 'translateY(0)'
            });
        }
    }

    window.onresize = setHeight;

    $scope.tabs = [
      {
        "title": "Assessments",
        "template": "app/partials/tabs/assessments-recommended.html",
        "content": "[replaced by template]"
      },
      {
        "title": "Problems & Playlists",
        "template": "app/partials/tabs/assessments-all.html",
        "content": "[replaced by template]"
      }
    ];

    $scope.tabs.activeTab = 0;

    $scope.currentOpen = function () {
        $scope.current = true;
        $('.find-question').removeClass('hotbox');
    };

    $scope.currentDone = function () {
        $scope.closed = true;
        $scope.next = [
            'What, if anything, do you know about what <strong>blood pressure</strong> numbers mean?',
            'Has your doctor given you a target value for what your <strong>blood pressure</strong> should be?',
            'What is your <strong>workout</strong> regimen?',
            'Do you have a <strong>family</strong> history of <strong>Diabetes</strong>?',
            'Do you have <strong>trouble sleeping</strong>? Sleep Apnea.'
        ];
        $('#bar-29, #bar-tied-40').addClass('finished');
    };

    $scope.undo = function () {
        $scope.button = {};
        $scope.pressure = {};
        $scope.closed = false;
        $('#bar-29, #bar-tied-40').removeClass('finished');
    };

    $scope.setNo = function () {
        $('#bar-29, #bar-tied-40').addClass('finished finished-problem');
    };

    $scope.closeEncounter = function () {
        $('.panel-assessment').removeClass('minimized');
        $('.panel-assessment').attr('data-state', 'closed');
    };

});

app.controller('StyleController', function($scope, $location, $anchorScroll) {

    $scope.jumpTo = function ( id ) {
        var old = $location.hash();
        $location.hash( id );
        $anchorScroll();
        $location.hash(old);
    };

    $scope.fold = function () {
        $('#tile-00').find('.tile-inner').toggleClass('white');
    };

    $scope.hamburger = function () {
        if ( $('.mp-pusher').hasClass('mp-pushed') ) {
            $('.mp-pusher').removeClass('mp-pushed');
            $('.mp-overlay').hide();
        } else {
            $('.mp-overlay').show();
            $('.mp-pusher').addClass('mp-pushed');
        }
    };

});

