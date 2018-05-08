app.controller('SkillsController',['$scope',function($scope){
    $scope.skills = [
        {
            title: 'Front-End Development',
            level: 75
        },
        {
            title: 'Back-End Development',
            level: 80
        },
        {
            title: 'Database Development',
            level: 70
        },
        {
            title: 'Linux Administration',
            level: 85
        },
        {
            title: 'API Development',
            level: 60
        },
        {
            title: 'Responsive Design',
            level: 85
        }
    ];
    $scope.programmingSkills = [
        {
            title: 'Laravel',
            level: 80,
        },
        {
            title: 'CodeIgniter',
            level: 80
        },
        {
            title: 'AngularJS',
            level: 75
        },
        {
            title: 'FeathersJS',
            level: 65
        },
        {
            title: 'Bootstrap',
            level: 80
        },
        {
            title: 'Wordpress',
            level: 75
        }

    ];
}]);
