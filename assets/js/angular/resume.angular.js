app.controller('ResumeController',['$scope',function($scope) {
    $scope.experience = [
        {
            date: '2015 - 2016',
            position: 'Back-End Developer',
            company: 'Tech Depot',
            city: 'Dipolog City',
            country: 'Philippines',
            description: 'Responsible for leading and assisting web development efforts from project discussion, planning to implementation.',
        },
        {
            date: '2011 - 2012',
            position: 'Computer Specialist',
            company: 'LVS Computers',
            city: 'Dipolog City',
            country: 'Philippines',
            description: 'Responsible for computer resource managment, including but not limited to maintaining hardware and software systems. Operated independently to ensure that software system were up-to-date.'
        }
    ]

    $scope.education = [
        {
            date: '2012 - 2016',
            course: 'Information Technology',
            school: 'STI College',
            address: 'Dipolog City',
            country: 'Philippines',
            description: 'One of the leading software development student in the Campus, joined Regional competition and won the championship in Programming Regional Competition, participated in National Programming competition, recieved the Programmer of the year award, lead software development efforts in both capstone and thesis projects.',
        },
        {
            date: '2000-2003',
            course: 'Secondary Education',
            school: 'Zamboanga National High School',
            address: 'Dipolog City',
            country: 'Philippines',
            description: 'Active in Scihnece related subjects'
        }
    ];
}]);
