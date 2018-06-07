
// class Fighter{
//     constructor(name, attack, defense, stamina){
//         this.name = name;
//         this.attack = attack;
//         this.defense = defense;
//         this.stamina = stamina;
//         this.wins = 0;
//         this.losses = 0;
//         this.draws = 0;
//         //this.totalfights = 0;
//         //this.kos = 0;
//     }
//     getstats(){
//         console.log("Fighter : " + this.name);
//         console.log("Attack Skill : " + this.attack);
//         console.log("Defense Skill : " + this.defense);
//         console.log("Fitness Skill : " + this.stamina);
//         console.log("Fight Record : " + this.wins + " Wins / " + this.losses + " Losses / " + this.draws + " Draws ");

//     }

// }





// class Fight{
//     constructor(fighter1, fighter2){
//         this.fighter1 = fighter1;
//         this.fighter2 = fighter2;
//         var totalHealth1 = 10;
//         var totalHealth2 = 10;
//         var damage1 = 0;
//         var damage2 = 0;
//         var stamina1 = fighter1.stamina;
//         var stamina2 = fighter2.stamina;
//     var rounds = 5;
//     }

//     fight(rounds){
//         for (i = 0; i < rounds; i++){

//         }
//     }

//     roundaction(){

//     }



// }


// var buakaw = new Fighter("Buakaw Banchamek", 15, 12, 8);
// buakaw.getstats();

// var pacquiao = new Fighter("Manny Pacquiao", 10, 16, 9);
// pacquiao.getstats();

console.log("THE MATCH BEGINS!!!!")
    var skillsA = 10;
    var skillsB = 10;
    var stamina = 10;
    var staminaB = 10;
    var healthA = 15;
    var healthB = 15;
    var randomA;
    var randomB;
    var pointsA;
    var pointsB;
    var roundResult
    var final;
    var roundN = 5;
    

for (i= 0; i<roundN; i++){
    if (healthA > 0 && healthB > 0){
        stamina = stamina - i;
        console.log("_____________________________________");
        console.log("_____________________________________");

        console.log("Round : " + (i + 1));
        randomA = Math.random();
        randomB = Math.random();
        pointsA = (2 *(randomA * skillsA) + ((healthA * skillsA) / 10) + ((stamina * skillsA)/10))/3;
        pointsB = (2 *(randomB * skillsB) + ((healthB * skillsB) / 10) + ((stamina * skillsB)/10))/3;
        roundResult = pointsA - pointsB;
        console.log(randomA);
        console.log(pointsA);
        console.log(pointsB);
        console.log("result " + (roundResult));

        if (roundResult > 7){

            healthB = 0;
            final = " KO ";
            console.log("           FIGHTER_B IS KNOCKED OUT!!!!!!");
        } else if (roundResult > 5){
            console.log("           FighterA dominates this round");
            healthB = healthB -8;

        } else if (roundResult > 1){
            console.log("           FighterA wins this round");
            healthB = healthB - 3;
            healthA = healthA -1;
        } else if (roundResult > -1){
            if ((roundResult < 0.01) && (roundResult > -0.01)){
                final = " KO ";
                healthB = 0;
                healthA = 0;
                console.log("           OMG, ITS A DOUBLE KNOCK OUT!!")
            
            } else{
                console.log("           Balanced Round");
                healthB = healthB -2;
                healthA = healthA -2;
                }
        } else if (roundResult > -5){
            healthB = healthB -1;
            healthA = healthA -3; 
            ko = true;
            console.log("           FighterB wins this round");
        } else if (roundResult > -7){
            healthA = healthA -8;
            console.log("           FighterB dominates this round");
        } else {
            healthA = 0;
            console.log("           FIGHTER_A IS KNOCKED OUT !!!!!");
            final = " KO ";
        }
        console.log("FighterA health : " + healthA);
        console.log("FighterB health : " + healthB);
        };


    };
    console.log("=====================================")

    switch(true){
        case (final != " KO "):
            if (healthA <= 0 || healthB <= 0){
                final = " TKO ";
            } else if ((healthA > 1.5*healthB) || (healthB > 1.5*healthA)){
                final = " Unanimous Decision "; 
            } else {
                final = " Split Decision";
            }
    }
    switch(true){
        case (healthA == healthB):
                if ((healthA == 0) && (healthB == 0)){
                     console.log("           Both fighters pass out!!!!")
                }
                console.log("           The Match ends as a draw!");
                break;

        case (healthA > healthB):
                 //console.log("FighterB cant fight no longer!");
                console.log("           AND THE WINNER BY " + final + " IS..... FIGHTER_A !!!!");
                 break;

        case (healthB > healthA):
            //console.log("FighterA cant fight no longer!");
            console.log("           AND THE WINNER BY " + final + " IS..... FIGHTER_B !!!!");
                break;
    
        default:
            console.log("           The fight ends as a no contest!");

    }

