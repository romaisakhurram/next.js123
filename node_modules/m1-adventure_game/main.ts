#! /usr/bin/env node
import inquirer from "inquirer";

class Hero {
    name : string;
    health = 100 ;
    constructor(name : string) {
        this.name = name
    }

 decreaseHealth (){
     this.health -= 20
    }
 increaseHealth (){
     this.health = 100
    }
}

// for Enemy
class Enemy {
    name : string;
    health = 100 ;
    constructor(name : string) {
        this.name = name
    }

 decreaseHealth (){
     this.health -= 20
    }
 increaseHealth (){
     this.health = 100
    }
}

async function main () {
    const { heroName } = await inquirer.prompt([
        {
           type : "input",
           name : "heroName",
           message : "Enter your Hero Name :"
        }
    ])
    const { enemyType } = await inquirer.prompt([
        {
            type : "list",
            name : "enemyType",
            message : "Select the Enemy you fight with :",
            choices : ["Witch" , "Zombie" , "Alien"]
        }
    ])

    const hero = new Hero (heroName);
    const enemy = new  Enemy (enemyType);
   
    console.log(`${hero.name} v/s ${enemy.name}`);
    
    do {
      const { action } = await inquirer.prompt([
        {
            type : "list",
            name : "action",
            choices : ["Attack" , "Defend" , "Range Target" , "Run"],
            message : "Choose the attack type to perform action"
        },
      ]) ;
     
    
     switch (action) 
        {
          case  "Attack":
          const randomNum = Math.random()
         if (randomNum > 0.5) {
             hero.decreaseHealth()
             console.log(`${hero.name} health : ${hero.health}`);
             console.log(`${enemy.name} health :${enemy.health}`);
             if (hero.health <= 0) {
                 console.log("You Loss ! try again");
                 return 
                };            
            } else {
             enemy.decreaseHealth()
             console.log(`${hero.name} health : ${hero.health}`);
             console.log(`${enemy.name} health :${enemy.health}`);
             if (hero.health <= 0) {
                 console.log("Congratulation you won");
                 return
                };
            }
         break;
        }
    } while (true)
}
main();






