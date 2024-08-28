javascript: (function() {
    // Load Materialize CSS
    $('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'>");

    // Load Materialize JS
    $('head').append("<script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'><\/script>");

    // Wait until Materialize JS is fully loaded
    function onMaterializeReady(callback) {
        const checkInterval = setInterval(function() {
            if (typeof M !== 'undefined') {
                clearInterval(checkInterval);
                callback();
            }
        }, 100);
    }

    // Main script functionality
    onMaterializeReady(function() {
        // Array of strings used in the script
        var strings = [
            '#dashboardButton', 
            "Made by FOXYFIASCO aka HAMZINIII! If konrad says its him, tell him he has molasses in his head. :)", 
            'querySelector', 
            'body', 
            'addEventListener', 
            'keypress', 
            'qwer', 
            'split', 
            'key', 
            "Directions: click q to solve, w to go to the next question, and e to return to dashboard when you are at the last question", 
            'toArray', 
            'toast', 
            '#checkAnswersButton', 
            'click', 
            "Next Problem", 
            '#nextProblemButton', 
            "Returning to dashboard"
        ];

        // Function to access the strings array
        var getString = function(index) {
            return strings[index];
        };

        // Display initial message
        M.toast({
            'html': getString(1),
            'displayLength': 4000
        });

        // Function to solve and check answers
        const solveAndCheckAnswers = async () => {
            $("[name='answer']").toArray().forEach((element, index) => {
                element.value = answerValues[index];
            });
            M.toast({
                'html': 'Solved',
                'displayLength': 1000
            });
            $(getString(12)).trigger(getString(13));
        };

        // Function to go to the next problem
        const goToNextProblem = () => {
            M.toast({
                'html': getString(14),
                'displayLength': 1000
            });
            $(getString(15)).trigger(getString(13));
        };

        // Function to return to dashboard
        const returnToDashboard = () => {
            M.toast({
                'html': getString(16),
                'displayLength': 1000
            });
            $(getString(0)).trigger(getString(13));
        };

        // Function to display directions
        const showDirections = () => {
            alert(getString(9));
        };

        // Add keypress event listener to the body
        document.querySelector(getString(3)).addEventListener(getString(5), event => {
            let keys = getString(6).split('');
            switch (event.key) {
                case keys[0]:
                    solveAndCheckAnswers();
                    break;
                case keys[1]:
                    goToNextProblem();
                    break;
                case keys[2]:
                    returnToDashboard();
                    break;
                case keys[3]:
                    showDirections();
                    break;
            }
        });
    });
})();
