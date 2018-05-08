app.controller('WorkController',['$scope',function($scope){
    $scope.groups = [
        {
            name: 'All',
            tag: 'all',
            class:'active'
        },
        {
            name: 'Graphics',
            tag: 'graphics',
            class: ''
        },
        {
            name: 'HTML',
            tag: 'html',
            class: ''
        },
        {
            name: 'PHP',
            tag: 'php',
            class: ''
        },
        {
            name: 'JavaScript',
            tag: 'js',
            class: ''
        },
        {
            name: 'NodeJS',
            tag: 'nodejs',
            class: ''
        }
    ]
    $scope.portfolio = [
        {
            groups: [
                "all",
                "html",
                "php"
            ],
            image: "assets/images/works/portfolio-1.jpg",
            link: "#",
            title: "Portfolio Title"
        },
        {
            groups: [
                "all",
                "html",
                "js",
                "nodejs"
            ],
            image: "assets/images/works/portfolio-2.jpg",
            link: "#",
            title: "Portfolio Title"
        },
        {
            groups: [
                "all",
                "html",
                "js"
            ],
            image: "assets/images/works/portfolio-3.jpg",
            link: "#",
            title: "Portfolio Title"
        },
    ]
}]);
