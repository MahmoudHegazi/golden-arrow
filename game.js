var guide = document.querySelector('#guide');
var endimage = document.querySelector('#endimage');
var endimage1 = document.querySelector('#endimage1');
var warriror_message = document.querySelector('#wmessage');
var monster_message = document.querySelector('#mmessage');

var chat = document.querySelector('#chat');
var score = document.querySelector('#score_text');
var champ = document.querySelector('#champ');
const steps = document.querySelectorAll('.step');
const gamecontainer = document.querySelector('#game_area');
const fight_image = document.querySelector('#fightimage');
let score_index = 0;


const coin_sound = () => { const coin = document.getElementById("coin_audio"); coin.play(); };




function myFunction(event) {

  if (score_index > 3) {
    champ.src = 'https://i.stack.imgur.com/1dpmw.gif';
       
       document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'https://www.animatedimages.org/data/media/574/animated-monster-image-0030.gif';

     warriror_message.textContent = "Warrior: That's what I need sad selecton Power Level: 2";
      monster_message.textContent = "Monster: KIll KILL Woooh..";
    })
  }
  if (score_index > 100) {

       warriror_message.textContent = "Warrior: That's what I need sad Happy Kid Power Level: 3";
      monster_message.textContent = "Monster: LoL Kid I will Eat You OssssHii..";

      
    champ.src = 'images/kid.gif';
    
           document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/source.gif';
    })
  }
  
  if (score_index > 200) {
    champ.src = 'images/giphy.gif';
    
    
     document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/2bb7edcbd6c291285718bfee6683978f.gif';
    })
    
           warriror_message.textContent = "Warrior: That's what I need Cute Dpg Power Level: 4";
      monster_message.textContent = "Monster: come give me a Huge..";
  }
  
  if (score_index > 300) {
    champ.src = 'Mario-run-gif-transparent-background-Album-on-Imgur.gif';
    
         document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/ddayurp-7dbc0555-e00b-4110-b211-f5eb897f304a.gif';
    })
    
               warriror_message.textContent = "Warrior: . .... OH Yess!  That's what I need sad Super Mario Power Level: 5";
      monster_message.textContent = "Monster: I Do not care I can see you,...woooooo!..";
  }
  
  if (score_index > 400) {
    champ.src = 'images/b483fbd97d362cf.gif';
    
         document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/giphy.webp';
    
  })
                 warriror_message.textContent = "Warrior: . ....Ohhh  Monster!  I got it Dargon Ball Power  Level: 6";
      monster_message.textContent = "Monster: LOL you are Young Dragon ball I will eat you Im real dragon";
  }
  
  if (score_index > 500) {
    champ.src = 'images/486032322edeb35.gif';
    
             document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/giphy (1).webp';
  })
                   warriror_message.textContent = "Warrior: . ....Wait Your Are Dead Monster!   Dargon Ball Power Level: 7";
      monster_message.textContent = "Monster: ...wooOOOOOOOOOzzzz!!.";
  }
  if (score_index > 600) {
    champ.src = 'images/456fa6338d253558efb390bb76f04c0b5e884ec1_00.gif';
    
             document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/tumblr_nq7ymstGxa1tgzy56o1_r2_540.gif';
  })
  }
  

  if (score_index > 700) {
  
    champ.src = 'images/Hu7zbsE.gif';
    
             document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/nirah-______-rath-testbob3.gif';
  })
  
                       warriror_message.textContent = "Warrior: what I can do Now With this large monster Level: 8";
      monster_message.textContent = "Monster:...wOOOshhhhhhw!!..";
  }
    /* new level */
  if (score_index > 800) {
    champ.src = 'images/YMotbZs.gif';
    
     document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/6b36efdf9f15b7ff394f8a37c255545c.gif';
  })
                     warriror_message.textContent = "Warrior: what I can do Now With this large monster Level: 9";
      monster_message.textContent = "Monster: You Strong But Still Not stronger than me";
  }
  
  /* new level */
  
  if (score_index > 900 ) {
    champ.src = 'images/ZDcX.txt';
    
             document.querySelectorAll('.monster').forEach( (mon) => { 
    mon.src = 'images/Chaos_Agares.gif';
  })
                       warriror_message.textContent = "Warrior: Ultimate Power Nothing Can top it : 10";
      monster_message.textContent = "Monster: OMG Dragon Ball Power I can not Fight you I'm scarry ,...dZwZZw!!..";
  }  

    

  if (score_index === 1500 ) {
      gamecontainer.style.display = "none";
      endimage.style.display = "block";
      endimage1.style.display = "block";
      endimage1.style.height = "100px";
      endimage1.style.width = "100px";
      guide.textContent = "You Have Earned The Golden Arrow"
  }
  drop_coins();
     event.target.appendChild(champ);
  // check if there a coin
  
   if (event.target.className == 'monster') {
   
   // ---- Advanced Part The Fight --- ---
   

    
    
    // attack function
function attack(champion, monster) {
   let monster_power = monster.getAttribute('data-power');
   let monster_health = monster.getAttribute('data-health');
   let monster_exp = monster.getAttribute('data-exp');
   let monster_lvl = monster.getAttribute('data-level');
   let champ_power = champion.getAttribute('data-power');
   let champ_health = champion.getAttribute('data-health');
   let champ_exp = champion.getAttribute('data-exp');
   let champ_lvl = champion.getAttribute('data-level');
   

function show_fight() {

// fight part

fight_image.style.display = 'block';
fight_image.src = 'images/ParallelForcefulBream-small.gif';

warriror_message.textContent = 'Champion: Ok Take This Bad Monster';
   monster_message.textContent = '';

function hide_fight_champ() {
fight_image.src = '';
fight_image.style.display = 'none';

}

setTimeout(hide_fight_champ, 2100);


// show monster take damge

function show_damge_move() {
fight_image.src = 'images/tenor.gif';
fight_image.style.display = 'block';
chat.textContent = 'Game: Foooooo';
monster_message.textContent = '';
warriror_message.textContent = '';
}
setTimeout(show_damge_move, 2101);

// show monster damged

function monster_got_damge() {
fight_image.src = 'images/fire.gif';
fight_image.style.display = 'block';
chat.textContent = '';
monster_message.textContent = 'Monster: OHHHH fire fire  Why .....';
warriror_message.textContent = '';
}
setTimeout(monster_got_damge, 3500);

function end_fight_turn() {
fight_image.src = '';
fight_image.style.display = 'none';

chat.textContent = '';
monster_message.textContent = '';
warriror_message.textContent = '';

     
}
setTimeout(end_fight_turn, 7000);

//
}


// this fight when monster die

function show_fight_death() {

// fight part

fight_image.style.display = 'block';
fight_image.src = 'images/qjG20k.gif';

monster_message.textContent = '';
warriror_message.textContent = 'Champion: Now You Will Dead Bye Bye';

function make_monster_dead() {
fight_image.src = '';
fight_image.style.display = 'none';
monster_message.textContent = 'Monster: OMG I can not Belive Im Dead..';
warriror_message.textContent = '';
}

setTimeout(make_monster_dead, 9000);


// show monster take damge


function end_fight_turn1() {
fight_image.src = '';
fight_image.style.display = 'none';
chat.textContent = '';
monster_message.textContent = '';
warriror_message.textContent = '';

}
setTimeout(end_fight_turn1, 9001);

//
}

   
      
   if ((champ_power * 2) - (monster.getAttribute('data-health') - champ_power)  <= 0 ) {
   

     chat.textContent = 'monster is dead';
     event.target.remove();
   } else {

// if the campion killed the monster append champion to start and give exp
   if(     ((champ_power * 2) - ((champ_power * 2)  - (monster.getAttribute('data-health') - champ_power))) <= 0) {
   
        // make the attack on monster before kill him
     // https://j.gifs.com/qjG20k.gif
     
     // show the second action which kill the monster 
    show_fight_death();
    

     chat.textContent = 'monster is dead';
     monster.remove();
     document.querySelectorAll('.step')[0].appendChild(champ);
     score_index += 3;
     score.textContent = score_index;
     
   }
// if the champ still alive prepear for the next attack

   if(     ((champ_power * 2) - ((champ_power * 2)  - (monster.getAttribute('data-health') - champ_power))) > 0) {
   
 

     
     monster.setAttribute('data-health', (event.target.getAttribute('data-health') - champ.getAttribute('data-power')));
     
     // show the champion while hit monster
     
    show_fight();
     
     // now monster still alive and going to attack 9301 is what takes
     // to finish the show_fight function
     function attack_monster() {
     //chat.textContent = 'monster alive and going to attack';

     // now show the monster when attack champion
     


// show monster take damge

function monster_attack_move() {
fight_image.src = 'images/vAXTNzQ.gif';
fight_image.style.display = 'block';
   monster_message.textContent = 'Monster: OK You Will Cry Now Champion';
   warriror_message.textContent = '';
   chat.textContent = '';
}
setTimeout(monster_attack_move, 100);

// show monster damged

function monster_damge_move() {
fight_image.src = 'images/vAXTNzQ.gif';
fight_image.style.display = 'block';
   monster_message.textContent = 'Monster: This IS My Ultimate Attack';
   warriror_message.textContent = '';
   chat.textContent = '';
}
setTimeout(monster_damge_move, 3000);



function champ_take_damg() {
fight_image.src = 'images/ScornfulAnchoredAvians-small.gif';
fight_image.style.display = 'block';
   monster_message.textContent = '';
   warriror_message.textContent = 'Champion: OHHH We take Damge Together becuase we are friends ';
   chat.textContent = '';
}
setTimeout(champ_take_damg, 3001);



function end_fight_turn1() {
fight_image.src = '';
fight_image.style.display = 'none';

chat.textContent = '';
monster_message.textContent = '';
warriror_message.textContent = '';

}
setTimeout(end_fight_turn1, 5800);


     }
     setTimeout(attack_monster, 7001);
   }
   
   
   }
   
   
    
  
   }
   

   
   
   function fight() {
    attack(champ, event.target);

    let new_monster_health = event.target.getAttribute('data-health');
    let the_monster_power = event.target.getAttribute('data-power');
    let the_monster_exp = event.target.getAttribute('data-exp');
    let new_champ_health = champ.getAttribute('data-health');
    let new_champ_exp = champ.getAttribute('data-exp');
    let new_champ_power = champ.getAttribute('data-power');
    
       


   }
   
    fight();
     //gamecontainer.style.opacity = '.2';
     //chat.textContent = "OH: Monster Killed You  got score: " + score_index;
     //endgame();
     
   }
   
  if (event.target.className == 'coin') {
  let parent = event.target.parentNode;
  event.target.remove();
  parent.appendChild(champ);
  // add 1 to score
  score_index += 1;
  



    chat.textContent = "Greate: You Found a Coin your Score " + score_index;
  score.textContent = score_index;
    
  } else {
    drop_monster();
  }
 
  //event.target.style.background = 'white';
  
}
function drop_coins() {
  coin_sound();
  let first = Math.floor((Math.random() * 33) + 0);
  let newimage = document.createElement('img');
  newimage.className = 'coin';
  newimage.src = 'images/1456110_56f42.gif';
  newimage.style.width = '50px';
  newimage.style.height = '50px';
  steps[first].appendChild(newimage);
  steps[first].style.background = "white";
  steps[first].appendChild(newimage);
  steps[first].style.background = "white";
  
  


}



function drop_monster() {
  function check_champ_level() {
    const champion = document.querySelector('#champ');
    return champ.getAttribute('data-level');
    }
  function check_champ_power() {
    const champion = document.querySelector('#champ');
    return champ.getAttribute('data-power');
    }  
  function check_champ_exp() {
    const champion = document.querySelector('#champ');
    return champ.getAttribute('data-exp');
    } 
  function check_champ_health() {
    const champion = document.querySelector('#champ');
    return champ.getAttribute('data-health');
    }    

  let first = Math.floor((Math.random() * 33) + 0);
  let newimage = document.createElement('img');
  newimage.className = 'monster';
  newimage.src = 'https://i.gifer.com/Yecy.gif';
  newimage.style.width = '50px';
  newimage.style.height = '50px';
  
  newimage.setAttribute("data-health", check_champ_power() * 2);
  newimage.setAttribute("data-lvl", check_champ_level());
  newimage.setAttribute("data-power", Math.round(check_champ_power() / 3));
  newimage.setAttribute("data-exp", check_champ_level() * 10);
  steps[first].appendChild(newimage);
  steps[first].style.background = "rgb(255 230 230)";

  


}
steps.forEach( (elm) => {elm.addEventListener('click', myFunction )});







steps.forEach( (elm) => {elm.addEventListener('click', myFunction )});




function endgame() {
setTimeout(function(){ gamecontainer.style.display = 'none' }, 3000);
}


