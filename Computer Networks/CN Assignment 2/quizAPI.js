const express = require('express');
const fs = require('fs');


function shuffle(array) {
    // Loop through the array from the end to the beginning
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at positions i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const app = express();

app.get('/questions/:filename', (req, res) => {
    const filename = req.params.filename;
    const amount = parseInt(req.query.amount) || 1;

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            res.json({ status : -1 , description : 'Error Reading From file, Check if the filename is entered properly and try again.' });
            return;
        }

        const lines = data.split('\n');
        let questions = [];

        
        //read questions
        for (let i = 0; i < lines.length; i += 6) {
            let question = lines[i].trim();
            let options = lines.slice(i + 1, i + 5).map(option => option.trim());

            const answer = options[0];
            options = shuffle(options);

            questions.push({ question, options, answer });
        }


        //shuffle questions
        questions = shuffle(questions);


        //splice questions
        if (amount > questions.length){
            res.json({ status : 1, description : 'Not enough Questions in file. Try again.'});
            return;
        }
        questions.splice(amount);
        

        res.json({ status : 0 , description : 'OK' , topic : '4.1' , amount: amount,  questions : questions});
        return;
    });
});


app.listen(3000, () => console.log('Server running on port 3000'));
console.log('Enter /questions/quiz.txt to run API\n');
console.log('Add query ?amount=[value] to customize number of MCQs\n');
