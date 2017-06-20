let express = require('express');
let loremIpsum = require('lorem-ipsum');

let application = express();

         


application.get('/lorem',function(request, response){
    response.use( loremIpsum({
    count: 3                      // Number of words, sentences, or paragraphs to generate. 
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
  , sentenceLowerBound: 5         // Minimum words per sentence. 
  , sentenceUpperBound: 10        // Maximum words per sentence. 
  , paragraphLowerBound: 5        // Minimum sentences per paragraph. 
  , paragraphUpperBound: 7        // Maximum sentences per paragraph. 
  , format: 'html'               // Plain text or html 
  , random: Math.random           // A PRNG function. Uses Math.random by default 
  , suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS. 
}))
    
});

application.listen(3000, function(request, response){  
    console.log('server is running!')


});

