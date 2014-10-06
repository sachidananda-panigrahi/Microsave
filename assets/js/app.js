(function(){
    var data = {
        navigationLinkNames:['Home','About Us','Blog','Contact Us'],
        searchNavigation:['Sectors we work in','Services','Clients','Research & Reports'],
        images:{
            slider:['images/sliderimg.jpg','images/sliderimg1.jpg','images/sliderimg2.jpg','images/sliderimg3.jpg','images/sliderimg4.jpg']
        },
        price: 4.5,
        description: 'dksajd jdkajdsjd dsajd',
        email: 'sachin@weboapps.com',
        password: 'sachin123'
    }
    var app = angular.module('microSave',[]);
    app.controller('navLinkController',function(){
        this.linkName= data.navigationLinkNames;
    });
    app.controller('searchLinkController',function(){
        this.searchLink= data.searchNavigation;
    });
    app.controller('sliderController',function(){
        this.sliderImages= data.images.slider;
    });
    app.controller('formController', ['$scope','$http','$location', function($scope, $http ,$location) {
        $scope.formSubmit = function() {
            if(data.email == $scope.user.email && data.password == $scope.user.passwd){
                $location.path('/login')
            }
        };
    }]);

})();
