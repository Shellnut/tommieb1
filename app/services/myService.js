app.service('myService', function() {

    // Parse the instagram data
    function generateFields(data) {
        
        // Extract Intro Text
        const text = data.description
            .split('-')
            .filter(val => val.match(/^[A-Z]/i))
            .filter(val => !val.startsWith('Tip #'))
            .filter(val => !val.toLowerCase().startsWith('bonus'))
            .filter(val => !val.toLowerCase().startsWith('ride away'))
            .join('\n\n');
        
        // Extract Description
        const steps = data.description
            .split('-')
            .filter(val => val.startsWith('1') || 
                val.startsWith('2') || 
                val.startsWith('3') || 
                val.startsWith('4') || 
                val.startsWith('5') || 
                val.startsWith('6') || 
                val.startsWith('7') ||
                val.startsWith('8') ||
                val.startsWith('9') ||
                val.startsWith('10') ||
                val.startsWith('Tip #') ||
                val.toLowerCase().startsWith('bonus') ||
                val.toLowerCase().startsWith('ride away')
            );

        // Extract Hashtags
        const tags = data.description
            .split('-')
            .filter(val => val.startsWith('#'))
            .join('\n');

        return {
            title: data.title,
            description: {
                text: text,
                steps: steps,
                tags: tags
            },
            video: `videos/${data.video}`
        }
    };

    const beginner = instagramData.filter(val => val.skill === 'beginner').map(val => generateFields(val));
    const intermediate = instagramData.filter(val => val.skill === 'intermediate').map(val => generateFields(val));
    const advanced = instagramData.filter(val => val.skill === 'advanced').map(val => generateFields(val));
    const home = instagramData.filter(val => val.skill === 'home').map(val => generateFields(val));

    this.skills = {
        beginner: _.orderBy(beginner, 'title'),
        intermediate:  _.orderBy(intermediate, 'title'),
        advanced:  _.orderBy(advanced, 'title'),
        home:  _.orderBy(home, 'title')
    };
});
