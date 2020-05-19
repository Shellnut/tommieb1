const app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'com.2fdevs.videogular']);

app.service('myService', function() {
    this.skills = {
        beginner: [
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
                video: 'videos/beginner/frontside_180.mp4'
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
                video: 'videos/beginner/backside_180.mp4'
            },
            {
                title: '5050 Frontside 180',
                description: {
                    text: "Let's talk about 5050-frontside 180 out.",
                    prerequsites: "You need to be able to do ride switch. If you struggle with switch, hit me up and I'll give you some tips.",
                    steps: [
                        "Lock into the rail and make sure you have a stable platform to push off us. If you're sliding off the side, it will make it hard to pop, rotate and land. Also, keep your eyes at the end of the feature or at the landing (not staring at your feet).",
                        "Wind-up your shoulders about 25 degrees and start to throw the trick at the last 25 percent of the rail.",
                        "Notice how I'm doing an ollie and loading up the tail of my snowboard then releasing the pressure. This will help me get more hang time, thus making the 180 looks smooth. More hang time also enables you to get the rotation around if that's what you struggle with.",
                        "Commit to driving your back shoulder toward the landing. Most people don't finish the trick with their new lead (switch) shoulder, and they keep it at about 45 degrees under rotated. When you under rotate your shoulder, hips, and board, you make it hard to get in a strong position with the weight distributed between both feet.\n\n" + 
                        "**Bonus- You wanna land in a switch strong stance with your spine upright. A few videos back, I posted my morning warm-ups. Use those same drills but do it switch. Game changer for sure.",
                        "Ride away smooth!",
                        "Try this trick on a harder feature to make it more fun!"
                    ]
                },
                video: 'videos/beginner/5050_frontside_180.mp4'
            },
            {
                title: 'Frontside Lipslide',
                description: {
                    text: "In this video, I demonstrate a Frontside lipslide. Do you wanna learn this trick next winter?? If so, save the video, and study it while on the chairlift or the night before you ride.",
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
                video: 'videos/beginner/frontside_lipslide.mp4'
            }
        ],
        intermediate: [
            {
                title: 'Backside Bluntslide Frontside 270',
                description: {
                    text: "Here's a trick that every snowboarder needs to have. Save this video, Study it, and practice this trick until you have it down! I promise, when you do it right, it's one of the best feeling tricks out there.",
                    prerequsites: '',
                    steps: [
                        "Take a small heelside to turn into the rail. This will help you get your front foot over the rail and land on the back foot. This will also help you commit to getting on top of the rail. (Commitment is key).",
                        "Get locked into the feature and make sure about 70% of your weight is on that back leg. With the back leg bent, this will help you pop the 270 out at the end of the rail.",
                        "As soon as you're on the rail, start drifting your eyes, lead shoulders and hip in the frontside direction...But simultaneously keeping your board at 90 degrees to the rail. BONUS TIP, keep your core soft, and it will allow the upper body to spin, and the lower body stays at 90 degrees.",
                        "At the end of the rail, pop and let the lower body/board spin 270 degrees and face downhill. ANOTHER BONUS TIP. The biggest problems snowboarders have is they don't look in the direction they are going. They lock their eyes on the landing and never allow their body to rotate the 270 out. It's essential to lead with the shoulder and eye for that full rotation.",
                        "I like to land with my shoulders, hips, and snowboard pointed down the hill. Notice that I'm not in the back seat, but instead, my weight is stacked evenly between both feet, allowing me to absorb the terrain."
                    ]
                },
                video: 'videos/intermediate/blunt_270.mp4'
            }
        ],
        advanced: [
            {
                title: 'Cartwheel',
                description: {
                    text: "This trick is not easy, and that's the exact reason why I wanted to learn them. I love challenging myself; I'll scroll through Instagram and find a #DreamTrick, and focus all my energy into learning that trick.",
                    prerequsites: '',
                    steps: [
                        "Cartwheels is a simple trick but take's a crazy amount of coordination, timing, commitment, and skills. You need to learn how to pop off your nose, keep your body stacked throughout the rotation and land with both feet at the same.",
                        "I suggest learning these off a catwalk with slow speed into a powder field. Landing into powder is a great option when you're trying something new. Yes, it might be cold, but it will allow you to try this trick a few times without landing on a firm surface.",
                        "The first time you try the cartwheel, keep your body in the stacked position, place both hands on the ground, and allow your body to follow. It is crucial to keep the momentum going until your lead foot hits the ground and keep your arms locked out. If you don't, you will land on your head, not sick. ",
                    ]
                },
                video: 'videos/advanced/cartwheel.mp4'
            }
        ]
    };
});

app.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

app.controller('homeCtrl', ['$scope', '$sce', 'myService', function($scope, $sce, myService) {

    // Configuration for video player
    $scope.config = {
        preload: 'none',
        sources: [
            {
                src: $sce.trustAsResourceUrl('videos/beginner/frontside_180.mp4'), 
                type: 'video/mp4'
            },
        ],
        theme: {
            url: 'https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css'
        }
    };

    $scope.myIndex = 0;

    $scope.updateIndex = function(level, i) {
        
        $scope.myIndex = i;
        $scope.selectedSkillLevel = myService.skills[level];
        $scope.activeLevel = level;

        console.log('myIndex:', $scope.myIndex);
        console.log('selectedSkillLevel:', $scope.selectedSkillLevel);
        console.log('activeLevel:', $scope.activeLevel);
        
        // source should be an array of objects with src and type
        const videoPath = $scope.selectedSkillLevel[i].video;

        console.log('videoPath', videoPath);

        $scope.config.sources = [
            {
                src: $sce.trustAsResourceUrl(videoPath), 
                type: 'video/mp4'
            }
        ];

    }

    $scope.selectedSkillLevel = myService.skills['beginner'];
    $scope.skills = myService.skills;
    $scope.activeLevel = 'beginner';

}]);
