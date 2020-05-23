app.controller('homeCtrl', ['$scope', '$sce', 'myService', function($scope, $sce, myService) {

    // Configuration for video player
    $scope.config = {
        theme: {
            url: 'https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css'
        }
    };

    // Update index
    $scope.updateIndex = function(level, i) {
        
        // Set params
        $scope.myIndex = i;
        $scope.selectedSkillLevel = myService.skills[level];
        $scope.activeLevel = level;

        // Set local storage
        localStorage.setItem('lastViewed', JSON.stringify({
            level: level,
            index: i
        }));

        // source should be an array of objects with src and type
        const videoPath = $scope.selectedSkillLevel[i].video;
        $scope.config.sources = [
            {
                src: $sce.trustAsResourceUrl(videoPath), 
                type: 'video/mp4'
            }
        ];

    };

    // Set all values
    $scope.skills = myService.skills;

    // Show last viewed
    let lastViewed = localStorage.getItem('lastViewed');
    if (lastViewed) {
        lastViewed = JSON.parse(lastViewed);
        $scope.updateIndex(lastViewed.level, lastViewed.index);
    } 
    else {
        $scope.updateIndex('beginner', 2);
    }

    // Transform search values into a single array
    $scope.searchValues = []
        .concat(
            myService.skills.beginner.map((val, i) => {
                return {
                    title: val.title,
                    index: i,
                    level: 'beginner'
                };
            })
        )
        .concat(
            myService.skills.intermediate.map((val, i) => {
                return {
                    title: val.title,
                    index: i,
                    level: 'intermediate'
                };
            })
        )
        .concat(
            myService.skills.advanced.map((val, i) => {
                return {
                    title: val.title,
                    index: i,
                    level: 'advanced'
                };
            })
        )
        .concat(
            myService.skills.home.map((val, i) => {
                return {
                    title: val.title,
                    index: i,
                    level: 'home'
                };
            })
        );

    // Update the selected from the search
    $scope.onSelect = function(val) {
        $scope.updateIndex(val.level, val.index);
    }

}]);