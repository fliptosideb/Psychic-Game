        var comChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let wins = 0;
        let losses = 0;
        let tries = 9;
        var comGuess = comChoice[Math.floor(Math.random() * comChoice.length)];

        document.onkeyup = e => {
            var userGuess = e.key;
            if (e.keyCode <= 64 || e.keyCode >= 91) {
                alert('Please guess a letter')
                return null
            } else {
                document.querySelector('#user').innerHTML = userGuess;
                document.querySelector('#com').innerHTML = '';
            }
            // document.querySelector('#com').innerHTML = comGuess;
            if (userGuess === comGuess) {
                wins++;
                alert('You win!');
                document.querySelector('#com').innerHTML = comGuess;
                document.querySelector('#wins').innerHTML = wins;
                tries = 9;
            } else if (tries === 0) {
                losses++;
                alert('You are a loser!');
                document.querySelector('#com').innerHTML = comGuess;
                document.querySelector('#losses').innerHTML = losses;
                tries = 9;
                document.querySelector('#left').innerHTML = tries;
            } else {
                alert('Wrong!')
                tries--;
                document.querySelector('#left').innerHTML = tries;
            }}