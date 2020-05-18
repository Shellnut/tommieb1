const app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'com.2fdevs.videogular']);

app.controller('homeCtrl', ['$scope', '$sce', function ($scope, $sce) {

    // Configuration for video player
    $scope.config = {
        preload: 'none',
        sources: [
            {
                src: $sce.trustAsResourceUrl('videos/beginner/1_frontside_180.mp4'), 
                type: 'video/mp4'
            },
        ],
        theme: {
            url: 'https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css'
        }
    };

    $scope.beginnerIndex = 0;

    $scope.updateBeginnerIndex = function(i) {
        $scope.beginnerIndex = i;
        console.log('beginner index:', $scope.beginnerIndex);
        
        // source should be an array of objects with src and type
        const videoPath = $scope.beginner[i].video;

        console.log(videoPath);

        $scope.config.sources = [
            {
                src: $sce.trustAsResourceUrl(videoPath), 
                type: 'video/mp4'
            }
        ];

    }

    $scope.hello = 'Hello world!';

    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];
  
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  
    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  
    $scope.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };

    $scope.beginner = [
        {
            title: 'Frontside 180',
            description: {
                text: "Are you READY to get really good at frontside 180's? Here's the deal...Save this video, study it, and come back to this post if you're struggling to land this trick.",
                prerequsites: '',
                steps: [
                    "The Wind-up...Watch how I wind-up my shoulders about 25 degrees then throw the trick. This movement is essential to become familiar with because this can lead to bigger tricks like 540s, 720s, and beyond." + '\n\n' +
                    "BONUS: This trick is one of the more straightforward trick because your eyes will stay locked onto the landing like a missile. It's less intimidating because you see where you're going to land before taking off.",
                    "Simultaneously as you throw the shoulders, you will need to bend the knees and then extend the knees to create pop. Keep in mind that you wanna keep the spine upright as much as possible. This will help your body stay upright and not lean too far over your toes or heels.",
                    "The timing of when you pop and throw the trick is essential. My shoulders are driving the rotation, and the knees are giving me the hang time to complete the front side 180. As soon as my shoulders are about 50-90 degrees past the nose of my snowboard, I tighten my core and let the lower body follow the rest of the body.",
                    "As I'm in the air, I'm bringing my knees up towards my shoulder to allow for more hang time, and I can also determine where/when to land.",
                    "Time to finish the trick. Drive your back shoulder/hip and board, pointing directly where you want to land. Remember you are landing switch... A helpful reminder is to land with your weight centered and knees bent equally. The funniest thing is when I do this trick off a big jump, cliff, or side hit. I literally tell myself knees out and center. This helps me be more confident in landing switch."
                ]
            },
            video: 'videos/beginner/1_frontside_180.mp4'
        },
        {
            title: 'Backside 180',
            description: {
                text: "Are you READY to get really good at frontside 180's? Here's the deal...Save this video, study it, and come back to this post if you're struggling to land this trick.",
                prerequsites: '',
                steps: [
                    "The Wind-up...Watch how I wind-up my shoulders about 25 degrees then throw the trick. This movement is essential to become familiar with because this can lead to bigger tricks like 540s, 720s, and beyond." + '\n\n' +
                    "BONUS: This trick is one of the more straightforward trick because your eyes will stay locked onto the landing like a missile. It's less intimidating because you see where you're going to land before taking off.",
                    "Simultaneously as you throw the shoulders, you will need to bend the knees and then extend the knees to create pop. Keep in mind that you wanna keep the spine upright as much as possible. This will help your body stay upright and not lean too far over your toes or heels.",
                    "The timing of when you pop and throw the trick is essential. My shoulders are driving the rotation, and the knees are giving me the hang time to complete the front side 180. As soon as my shoulders are about 50-90 degrees past the nose of my snowboard, I tighten my core and let the lower body follow the rest of the body.",
                    "As I'm in the air, I'm bringing my knees up towards my shoulder to allow for more hang time, and I can also determine where/when to land.",
                    "Time to finish the trick. Drive your back shoulder/hip and board, pointing directly where you want to land. Remember you are landing switch... A helpful reminder is to land with your weight centered and knees bent equally. The funniest thing is when I do this trick off a big jump, cliff, or side hit. I literally tell myself knees out and center. This helps me be more confident in landing switch."
                ]
            },
            video: 'videos/beginner/2_backside_180.mp4'
        },
        {
            title: '5050 Frontside 180',
            description: {
                text: "Are you READY to get really good at frontside 180's? Here's the deal...Save this video, study it, and come back to this post if you're struggling to land this trick.",
                prerequsites: '',
                steps: [
                    "The Wind-up...Watch how I wind-up my shoulders about 25 degrees then throw the trick. This movement is essential to become familiar with because this can lead to bigger tricks like 540s, 720s, and beyond." + '\n\n' +
                    "BONUS: This trick is one of the more straightforward trick because your eyes will stay locked onto the landing like a missile. It's less intimidating because you see where you're going to land before taking off.",
                    "Simultaneously as you throw the shoulders, you will need to bend the knees and then extend the knees to create pop. Keep in mind that you wanna keep the spine upright as much as possible. This will help your body stay upright and not lean too far over your toes or heels.",
                    "The timing of when you pop and throw the trick is essential. My shoulders are driving the rotation, and the knees are giving me the hang time to complete the front side 180. As soon as my shoulders are about 50-90 degrees past the nose of my snowboard, I tighten my core and let the lower body follow the rest of the body.",
                    "As I'm in the air, I'm bringing my knees up towards my shoulder to allow for more hang time, and I can also determine where/when to land.",
                    "Time to finish the trick. Drive your back shoulder/hip and board, pointing directly where you want to land. Remember you are landing switch... A helpful reminder is to land with your weight centered and knees bent equally. The funniest thing is when I do this trick off a big jump, cliff, or side hit. I literally tell myself knees out and center. This helps me be more confident in landing switch."
                ]
            },
            video: 'videos/beginner/3_5050_frontside_180.mp4'
        }
    ]

}]);
