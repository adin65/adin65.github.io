var app = angular.module("projectApp", []);
app.controller("projectCtrl", function($scope) {

        $scope.projectList = [
            {
                "name": "Campfire - Web App",
                "link": "projects/campfire",
                "image": "/images/campfireLogo.png",
                "description": "A web application to create immersive story-telling experiences."
            },
            {
                "name": "Epsilon - Web App",
                "link": "projects/epsilon",
                "image": "/images/epsilonLogo.png",
                "description": "A web application to help startups set up and get ready for their business."
            },
            {
                "name": "Import Track Times Macro",
                "link": "projects/trackTimesMacro",
                "image": "/images/trackTimesLogo.png",
                "description": "A Microsoft Excel script that automates the process of importing subway track work data."
            },
            {
                "name": "Maintenance Notification Creation Tool",
                "link": "projects/maintenanceNotif",
                "image": "/images/maintenanceLogo.png",
                "description": "A web app that creates and sends email notification about scheduled maintenance window on indicated time."
            },
            {
                "name": "Momeca - Discord Chat Bot",
                "link": "projects/momeca",
                "image": "/images/momeca.png",
                "description": "A Discord bot that stores image links and replies those images to text channel when you tell it to."
            },
            {
                "name": "Shoop - Android App",
                "link": "projects/shoop",
                "image": "/images/shoop.png",
                "description": "A shopping application that provides different functionality depending on the three different roles of a user: admin, employee and customer."
            }
        ];
        
        $(document).ready(function() {  
            $scope.speak = function() {
                $(".speech").animate({
                    width: "show",
                },"slow");
            }  
            $scope.unspeak = function() {
                $(".speech").animate({
                    width: "hide"
                },"slow");
            }

        });  
});
