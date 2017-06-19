let express = require('lorem-ipsum'),
output = loremIpsum({
    count: 3                      // Number of words, sentences, or paragraphs to generate. 
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
  , sentenceLowerBound: 5         // Minimum words per sentence. 
  , sentenceUpperBound: 10        // Maximum words per sentence. 
  , paragraphLowerBound: 5        // Minimum sentences per paragraph. 
  , paragraphUpperBound: 7        // Maximum sentences per paragraph. 
  , format: 'html'               // Plain text or html 
  , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default. 
  , random: Math.random           // A PRNG function. Uses Math.random by default 
  , suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS. 
});


let application = express();

application.use(express.static('public'));          


application.get('/lorem',function(request, response){
    response.send('');
    
});

application.listen(3000, function(request, response){  
    console.log('server is running!')


});

