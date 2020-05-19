const app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'com.2fdevs.videogular']);

app.service('myService', function() {
    this.skills = {
        beginner: [
            {
                title: 'Tailpress',
                description: {
                    text: "Hows your tail press? I love learning tricks outside of the park and then bringing them to actual features. Try this the next time you ride.\n\n" +
                        "Tail presses are a super simple trick if you follow the right steps and have good body positions. The camber profile you have will also play a part in doing tail/ nose presses and butter. I'm using a traditional camber board. Its called the 149 Chillum from @telossnowboards. Def scope out their selection my doods.",
                    prerequsites: '',
                    steps: [
                        "One of the most important parts about a tail press other than the tail press its self is staying balanced and riding straight. If you want to translate this trick into a rail or box, you have to be in a balanced position, so you don't fall off the rail. Take your lead shoulder, hips, and board, and make sure they are all pointed in the same direction.",
                        "Shift your center of mass pack your back binding by flexing your back knee, pushing your hip and spine back towards the tail. This combination of movements will help get the nose of your board to rise. Remember, keep your shoulders pointed down the fill to prevent unwanted rotation.",
                        "You will need to experiment with step 2 to find out how far you can/need to go. In the early stages of learning a tail press, hold this position for a 3 count. After you are killing it, try holding this for a 5 or 10 count. This will really test your balance and ensure you have the right positions.",
                        "If you want a bit of a challenge, try swinging your hips and back foot. This will make the tail press a bit harder and develop your skill/ balance. This is a fun little challenge.",
                        "When you want to end the tail press, you can either pop or shift back to a centered position."
                    ]
                },
                video: 'videos/beginner/tailpress.mp4'
            },
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
                title: 'Backside Boardslide (box)',
                description: {
                    text: "Are you struggling with Backside Boardslide? Boardslides are a fundamental freestyle trick, and everyone needs one.\n\n" +
                        "TB's Quick Tip... While in the middle of the board slide, your weight has to be even between your toes and heels. If you're applying pressure to the back of your boots or high backs, you have a greater chance of slipping out. Be A BOSS, and don't do that. haha",
                    prerequsites: "",
                    steps: [
                        "About 15 ft before the rail, line yourself straight with the rail. Don't take 10,000 little turns before the feature. By taking a bunch of turns, you end up killing to much speed, and you confuse your body on what's the right position.",
                        "As you're riding up the lip of the jump, lean on your heelside edge and turn about 15 degrees. This will help create the 90-degree rotation you will need for the board slide. You want to rotate 90 with your hips and lower body only.",
                        "As you're landing in the board slide, keep your lead shoulder pointed at the end of the rail and your weight balanced between your heels and toes. When you encounter fear in this position, your body's natural reaction is lean back, and that's the worst thing you can do in this situation.",
                        "Keep your core tight to remain in the position for the duration of the feature. Also, keep your eyes at the end of the feature.",
                        "2 feet from the end of the rail, extend your knees and rotate your hips to align back with your shoulders.",
                        "Ride Away Like A BOSS!"
                    ]
                },
                video: 'videos/beginner/backside_boardslide_box.mp4'
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
            },
            {
                title: 'Frontside 5050 Frontside 360',
                description: {
                    text: "Got frontside 360s out of a rail? Save this post, so the next time you ride, you can try this one. Thanks to the @Fun_Size_Crew for making this fire setup!",
                    prerequsites: "Frontside 5050, Frontside 360's, and frontside 360s with a massive ollie.",
                    steps: [
                        "I like doing frontside 360's out from a frontside 5050. I feel that I can lock onto the rail easier and get set up for the three out better. Do the f/s 5050 and absorb the landing.",
                        "After getting locked onto the rail, stay low because your next movement will be the pop and rotation.",
                        "As you're getting close to the end of the rail, begin driving your lead shoulder in the frontside direction. While you're rotating your shoulders, let the nose of your board ride off the feature while retracting your lead knee. The retraction of the lead knee will build up pressure on your board like you're doing a crazy ollie. This specific rail doesn't have a huge drop-off, so you need to create the air yourself.",
                        "Next, explode off the rail and then continue the frontside rotation. The biggest struggle with doing this trick is not looking over your lead shoulder. The more you look over your shoulder, the quicker the rotation will be.",
                        "As you get to the 270 marks, you may need to accelerate the lower body to get your board around. You can accelerate the rotation of the board by rotating your hips or using a scissor movement with your legs. The scissor movement means pushing your back foot 45-90 degrees and pulling your lead foot 45-90 degrees. Rewatch the video and study this part as needed. It's ok if you lead your shoulders slightly behind.",
                        "As your board is now pointed down the hill, absorb the impact. Your upper body will want to catch up to the upper body, but control that so you don't over-rotate once you've hit the ground. You'll notice I jam my toeside edge in to prevent that unwanted rotation.",
                    ]
                },
                video: 'videos/intermediate/5050_frontside_360.mp4'
            }
        ],
        advanced: [
            {
                title: 'Laid out Tamedog',
                description: {
                    text: "This trick is not easy, and that's the exact reason why I wanted to learn them. I love challenging myself; I'll scroll through Instagram and find a #DreamTrick, and focus all my energy into learning that trick.",
                    prerequsites: '',
                    steps: [
                        "As you approach the transition of the jump, keep your lead shoulder, board, and hips pointed at the jump. Also, bend your knee and be prepared to boost!",
                        "As you're getting closer to the lip of the jump, shift your weight back and then rapidly forward over your nose. You must focus on popping then rotating. Most snowboarders who struggle with this only focus on the rotation, not the pop, then rotate.",
                        "I like to throw the trick and leave the jump about 6 inches to 1 foot before the lip. If you wait too long, you wont have enough pop. If you go to early, you minimize the air, and you may hit your head on the jump.",
                        "I like to project my body up in the air and delay the actual flip. I delay the flip by not tucking my shoulder under my body and staring at the landing with my eyes. I'm looking at the landing, determining how I can wait before driving the flip. I didn't have time to hold this flip, but the concept can be used on large jumps.",
                        "Drive your lead shoulder down past your nose and keep driving until you spot the landing. As you spot the landing, determine how much more you need to drive/rotate. The goal is to landing in a stacked position and eyes looking over your nose. If you reach for the ground, you go down.",
                        "Ride Away and keep killing it!"
                    ]
                },
                video: 'videos/advanced/tamedog.mp4'
            },
            {
                title: 'Backflip',
                description: {
                    text: "When you build a jump, you have to backflip it, right? Here's some more clips from the jump build. Next on the list is hitting a rail and then finding some other creative ways to snowboard without the resorts.",
                    prerequsites: '',
                    steps: [
                        "Hit the jump a few times so you know the speed and how it feels. This jump didn't need much speed and had a smooth lip allowing me to mostly dictate the amount of the pop.⁠",
                        "The two most important parts about the backflip are body positions and commitment. The commitment starts with the run-in and continues until the trick is landed. I like using strong body positions to help keep me committed. I know if I'm lined upright, and in a strong stance, it's easier for me to commit.⁠",
                        "As you're riding in, keep your shoulders, hips, and board stacked while your center of mass is in the center of the board. This body position is strong, and again will help you commit.",
                        "As you're riding into the jump, bend your knees so you can pop like a boss. Keep your chest relatively verticle and your eyes looking at the lip.⁠",
                        "As you go up the face of the jump, extend your knees. You wanna pop and then throw the flip. This tactic will help you get enough power to flip and prevent you from hitting your head on the jump. Focus on being patient and then flipping. A lot of snowboarders focus on the flip and get wrecked, don't let that be you.",
                        "As you leave the lip of the jump, drive your head back to initiate the flip. I like to retract my knees almost immediately so I can grab my snowboard.",
                        "As you're in the air, continue the rotation by looking for the landing. Now, the bigger the jump, the less hard you have to drive your head.",
                        "Spot the landing and then either hold the grab or open up to slow down. Next, pull your legs down and touch the snow. Absorb the impact as much as possible."
                    ]
                },
                video: 'videos/advanced/backflip.mp4'
            },
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
        ],
        home: [

        ]
    };
});

app.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

app.controller('homeCtrl', ['$scope', '$sce', 'myService', function($scope, $sce, myService) {



    $scope.myIndex = 0;

    $scope.updateIndex = function(level, i) {
        
        $scope.myIndex = i;
        $scope.selectedSkillLevel = myService.skills[level];
        $scope.activeLevel = level;

        // source should be an array of objects with src and type
        const videoPath = $scope.selectedSkillLevel[i].video;

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

    // Configuration for video player
    $scope.config = {
        sources: [
            {
                src: $sce.trustAsResourceUrl($scope.selectedSkillLevel[0].video), 
                type: 'video/mp4'
            },
        ],
        theme: {
            url: 'https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css'
        }
    };

}]);
