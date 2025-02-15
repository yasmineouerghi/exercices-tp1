function startGame() {
    alert("Bienvenue dans le jeu du chiffre caché !");

 
    let difficulty = chooseDifficulty();


    let settings = getGameSettings(difficulty);
    let secretNumber = generateRandomNumber(settings.range);
    let attempts = settings.attempts;

    playGame(secretNumber, attempts, settings.range);
}

function chooseDifficulty() {
    let difficulty;
    while (true) {
        difficulty = prompt("Choisissez un niveau de difficulté : Facile, Intermédiaire, Difficile").toLowerCase();
        if (["facile", "intermédiaire", "difficile"].includes(difficulty)) {
            return difficulty;
        }
        alert("Veuillez entrer une difficulté valide !");
    }
}


function getGameSettings(difficulty) {
    const levels = {
        "facile": { attempts: 10, range: 50 },
        "intermédiaire": { attempts: 7, range: 100 },
        "difficile": { attempts: 5, range: 200 }
    };
    return levels[difficulty];
}


function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}


function playGame(secretNumber, attempts, range) {
    alert(`J'ai choisi un nombre entre 1 et ${range}. Vous avez ${attempts} tentatives pour le deviner !`);

    for (let i = 0; i < attempts; i++) {
        let guess = parseInt(prompt(`Tentative ${i + 1}/${attempts} : Entrez un nombre entre 1 et ${range}`), 10);

      
        if (isNaN(guess) || guess < 1 || guess > range) {
            alert("Veuillez entrer un nombre valide !");
            i--; 
            continue;
        }

        
        if (guess === secretNumber) {
            alert(`Bravo ! Vous avez trouvé le nombre caché (${secretNumber}) en ${i + 1} tentatives ! 🎉`);
            return replayGame();
        } else if (guess < secretNumber) {
            alert("C'est plus grand !");
        } else {
            alert("C'est plus petit !");
        }
    }

    alert(`Dommage ! Le nombre caché était ${secretNumber}. `);
    replayGame();
}

function replayGame() {
    let playAgain = confirm("Voulez-vous rejouer ?");
    if (playAgain) {
        startGame();
    } else {
        alert("Merci d'avoir joué ! À bientôt ! ");
    }
}


startGame();



 