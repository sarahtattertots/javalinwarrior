import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-levels",
  templateUrl: "./levels.component.html",
  styleUrls: ["./levels.component.css"]
})
export class LevelsComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    var level = 1;
$(document).ready(function(){
    
    var inputHeight = $("#input-area").height();

    for(var i = 0; i < inputHeight/14; i++){
        $("#numbered-lines").append(i);
        $("#numbered-lines").append("<br/>");
    }

    // switch to run each level
    
    $("button.submit").on("click", getInput);
    runLevels();

});

function runLevels(){
    // levels need to:
    //     1. load the text for the console and lesson areas
    //     2. Reset the output area 
    //     3. Set Timeout to wait for animation to run before loading

    if(level == 1){
        levelOneText();
    }else if(level == 2){
        setTimeout(resetPage, 3000);
        setTimeout(levelTwoText, 3000);
    }else if(level == 3){
        setTimeout(resetPage, 3000);
        setTimeout(levelThreeText, 3000);
    }else if(level == 4){
        setTimeout(resetPage, 5000);
        setTimeout(levelFourText, 5000);
    }else if(level == 5){
        setTimeout(resetPage, 5000);
        setTimeout(levelFiveText, 5000);
    }else if(level == 6){
        setTimeout(resetPage, 10000);
        setTimeout(levelSixText, 10000);
    }else if(level == 7){
        setTimeout(resetPage, 15000);
        setTimeout(levelSevenText, 15000);
    }else if(level == 8){
        setTimeout(resetPage, 10000);
        setTimeout(levelEightText, 10000);
    }else if(level == 9){
        setTimeout(resetPage, 3000);
        setTimeout(levelNineText, 3000);
    }else if(level == 10){
        setTimeout(resetPage, 8000);
        setTimeout(levelTenText, 8000);
    }
    console.log("Level: " + level);
}

//FUNCTIONS

function getInput(){
    var userString = $("input.code-input").val();
    userString = userString.replace(/ /g,'');
    console.log(userString);
    switch(userString){
        case 'System.out.print("HelloWorld!");': // LEVEL ONE
            if(level == 1){
                animateLevelOne();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "total=apple+mead;": // LEVEL TWO
        case "total=mead+apple;":
            if(level == 2){
                animateLevelTwo();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "inventory={apple,mead};": // LEVEL THREE
        case "inventory={mead,apple};":
            if(level == 3){
                animateLevelThree();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "warrior.walk();": // LEVEL FOUR
            if(level == 4){
                animateLevelFour();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "array.sort();": // LEVEL FIVE
            if(level == 5){
                animateLevelFive();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "keys[index].unlock();" : // LEVEL SIX
            if(level == 6){
                animateLevelSix();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "while(isObstructed==false)": // LEVEL SEVEN
            if(level == 7){
                animateLevelSeven();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "Weaponexcalibur=newWeapon(sword);": // LEVEL EIGHT
                if(level == 8){
                    animateLevelEight();
                    level++;
                    break;
                }else{
                    wrongAnswer();
                    break;
                }
        case "if(isEnemy==true)": // LEVEL NINE
            if(level == 9){
                animateLevelNine();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        case "elseif(isAlly==true)": // LEVEL TEN
            if(level == 10){
                animateLevelTen();
                level++;
                break;
            }else{
                wrongAnswer();
                break;
            }
        default:
            wrongAnswer();
            break;
    }
    runLevels();
    
}

function wrongAnswer(){
    $("#speech-bubble-text").empty().text("Wrong Answer!");
    $("#speech-bubble-area").removeClass("hidden");
}
function rememberSemicolon(){

}

function resetPage(){
    console.log("------Reset--------");
    $("#warrior-image").css("margin-left", "0px");
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    $("#console-input").val('');
    $("#merchant-area").addClass("hidden");
    $("#uncompleted-bridge-area").addClass("hidden");
    $("#completed-bridge-area").addClass("hidden");
    $("#reverse-bridge-area").addClass("hidden");
    $("#keys-area").addClass("hidden");
    $("#door-area").addClass("hidden");
    $("#end-loop").empty();
    $("#sword-area").addClass("hidden");

}

// Level One - Outputs and Comments
function levelOneText(){
    // Lesson Text
    $('.lesson-heading').text("Level 1: System Output");
    $('.lesson-text').text('The most basic sort of java command is printing text. To do this, we use the syntax System.out.print("Hello"). Print the greeting "Hello World!" to the screen.');

    // Console Text
    var comment = $("<p></p>").text('// Use System.out.print("Your message goes here"); to say "Hello World!".').addClass("double-indent");
    $("#coding-text").empty().append(comment);

}

function animateLevelOne(){
    $("#speech-bubble-text").empty().text("Hello World!");
    $("#speech-bubble-area").removeClass("hidden");
}

// Level Two - Adding and Subtracting
function levelTwoText(){
    $("#merchant-area").removeClass("hidden");
    $("#speech-bubble-text").empty().text("Hi Merchant!");
    $("#speech-bubble-area").removeClass("hidden");

    //Lesson Text
    $('.lesson-heading').text("Level 2: Simple Math Operations");
    $('.lesson-text').text("Mathmatics are simple in java! You can add, subtract, divide, and multiply easily using the operators '+', '-', '/', '*'. The merchant is trying to sell you an apple and a bottle of mead. You can use a '=' to assign the sum of these items to the variable total.")

    // Console Text
    var apple = $("<p></p>").text("int apple = 50").addClass("double-indent");
    var mead = $("<p></p>").text("int mead = 75").addClass("double-indent");
    var total = $("<p></p>").text("int total = 0").addClass("double-indent");
    var comment = $("<p></p>").text("// Add the apple and mead together and assign to the total. ").addClass("double-indent");
    var example = $("<p></p>").text("// Example: total = banana + juice; ").addClass("double-indent");
    $("#coding-text").empty().append(apple).append(mead).append(total).append(comment).append(example);
}
function animateLevelTwo(){
    $("#speech-bubble-text").empty().text("Thanks!");

}

// Level Four - Arrays
function levelThreeText(){
    $("#merchant-area").removeClass("hidden");
    // lesson area
    $(".lesson-heading").text("Level 3: Arrays");
    $(".lesson-text").text("Arrays are a data structure that basically act as a collection of objects. It makes it easy to store and manage multiple objects. Declare an array for your inventory to cold and use your apple and mead.")
    // console area
    var comment = $("<p></p>").text("// Delcare an array for your inventory and put the apple and mead within it").addClass("double-indent");
    var example = $("<p></p>").text("// Example: inventory = {banana, juice};").addClass("double-indent");
    var initialization = $("<p></p>").text("Inventory[] inventory = new Inventory[2];").addClass("double-indent");
    
    $("#coding-text").empty().append(comment).append(example).append(initialization);
}
function animateLevelThree(){
    $("#apple").addClass("hidden");
    $("#mead").addClass("hidden");
    $("#speech-bubble-text").empty().text("Items Added!");
    $("#speech-bubble-area").removeClass("hidden");
}

// Level Three - Instantiating Object and Functions
function levelFourText(){
    // lesson area
    $(".lesson-heading").text("Level 4: Objects and Functions");
    $(".lesson-text").text("In this level you will notice there is a Warrior object created for you. The dot operator, '.', can be used to call functions on objects. \n Use the dot operator on your warrior object to call the walk() function.")
    // console area
    var warrior = $("<p></p>").text("Warrior warrior = new Warrior(new Level());").addClass("double-indent");
    var comment = $("<p></p>").text("// Use the dot operator on your warrior object to call the walk() function. ").addClass("double-indent");
    var example = $("<p></p>").text("// Example: warrior.action();").addClass("double-indent");
    $("#coding-text").empty().append(warrior).append(comment).append(example);

}
function animateLevelFour(){
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    for(var i = 0; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}

// Level Five - More Arrays
function levelFiveText(){
    $("#uncompleted-bridge-area").removeClass("hidden");
    $("#reverse-bridge-area").removeClass("hidden");
    // lesson area
    $(".lesson-heading").text("Level 5: More Arrays");
    $(".lesson-text").text("An array is a data structure that holds a bunch of similar objects. Your warrior has an array of different sized blocks. Use to .sort() function on the array to complete the first half of the bridge and walk across the level.");
    
    // console area
    var warrior = $("<p></p>").text("Warrior warrior = new Warrior(new Level());").addClass("double-indent");
    var bridge = $("<p></p>").text('String[] array = {"medium-block","small-block","large-block"};').addClass("double-indent");
    var comment = $("<p></p>").text("// Call the .sort() function on the array object.").addClass("double-indent");
    $("#coding-text").empty().append(warrior).append(bridge).append(comment);
}
function animateLevelFive(){
    $("#uncompleted-bridge-area").addClass("hidden");
    $("#completed-bridge-area").removeClass("hidden");

    $("#warrior-image").animate({"margin-left": "75px"});
    
    $("#warrior-image").animate({"margin-left": "150px"});
    
    $("#warrior-image").animate({"margin-top": "339px"});
    $("#warrior-image").animate({"margin-left": "207px"});
    
    $("#warrior-image").animate({"margin-top": "286px"});
    $("#warrior-image").animate({"margin-left": "264px"});
    
    $("#warrior-image").animate({"margin-top": "231px"});
    $("#warrior-image").animate({"margin-left": "324px"});
    
    $("#warrior-image").animate({"margin-left": "381px"});
    
    $("#warrior-image").animate({"margin-left": "443px"});
    $("#warrior-image").animate({"margin-top": "286px"});
    
    $("#warrior-image").animate({"margin-left": "500px"});
    $("#warrior-image").animate({"margin-top": "339px"});
    
    $("#warrior-image").animate({"margin-left": "600px"});
    $("#warrior-image").animate({"margin-top": "400px"});

    $("#warrior-image").animate({"margin-left": "700px"});

    $("#warrior-image").animate({"margin-left": "800px"});

    $("#warrior-image").animate({"margin-left": "900px"});
}

// Level Six - For Loop
function levelSixText(){
    $("#door-area").removeClass("hidden");
    $("#keys-area").removeClass("hidden");

    // lesson text
    $('.lesson-heading').text("Level 6: For Loops");
    $('.lesson-text').text("A for loop is used to iterate through an array. The index of a for loop is the item number the loop is currently working on. You have an array of keys and one works to allow you to walk through the door. Write the code to select the key at each index and run the .unlock() function");
    
    //console text
    var keys = $("<p></p>").text("Key[] keys = {key1, key2, key3};").addClass("double-indent");
    var comment = $("<p></p>").text("// Call the .unlock() function on each index of the key array in the for loop").addClass("double-indent");
    var example = $("<p></p>").text("// Example: array[index].function();").addClass("double-indent");
    var forloop = $("<p></p>").text("for {int index = 0; i < keys.length; index++){").addClass("double-indent");
    $("#coding-text").empty().append(keys).append(comment).append(example).append(forloop);
    var endloop = $("<p></p>").text("}").addClass("double-indent");
    $("#end-loop").empty().append(endloop);
}

function animateLevelSix(){
    // timing for each element to show the keys being iterated through
    setTimeout(keyOne, 1000);

    setTimeout(keyTwo, 3000);

    setTimeout(keyThree, 5000);

    setTimeout(door,6000);

    setTimeout(walk, 7000);

}
function keyOne(){
    $("#key-1").animate({"margin-left": "160px"}, 1000);
    $("#key-1").addClass("rotated");
    $("#key-1").animate({"margin-left": "0px"},1000);
    $("#key-1").removeClass("rotated", 1000);
}
function keyTwo(){
    $("#key-2").animate({"margin-left": "160px"},1000);
    $("#key-2").addClass("rotated");
    $("#key-2").animate({"margin-left": "25px"},1000);
    $("#key-2").removeClass("rotated", 1000);
}
function keyThree(){
    $("#key-3").animate({"margin-left": "160px"}, 1000);
    $("#key-3").addClass("rotated", 2000);
}
function door(){
    $("#door-image").addClass("reversed", 1000);
}
function walk(){
    $("#keys-area").addClass("hidden");
    $("#door-area").addClass("hidden");

    for(var i = 0; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}

// Level Seven - While Loop
function levelSevenText(){
    $("#speech-bubble-text").empty().text("Any Obstacles?");
    $("#speech-bubble-area").removeClass("hidden");

    // lesson area
    $(".lesson-heading").text("Level 7: While Loops");
    $(".lesson-text").text("This level introduces the while loop, which executes code while a condition is true. There is already a call to make the warrior walk, we just need a function to see if there are no obstacles.")
    
    // console area
    var comment = $("<p></p>").text("// Write a condition to check if isObstructed is false. If this is true our warrior will walk across the screen.").addClass("double-indent");
    var example = $("<p></p>").text("// Example: while(isCondition == false)").addClass("double-indent");
    $("#coding-text").empty().append(comment).append(example);

    var openLoop = $("<p></p>").text("{").addClass("double-indent");
    var code = $("<p></p>").text("warrior.walk();").addClass("double-indent");;
    var endloop = $("<p></p>").text("}").addClass("double-indent");
    $("#end-loop").empty().append(openLoop).append(code).append(endloop);
}
function animateLevelSeven(){
    var leftMargin = 0;
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    for(var i = 0; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}

// Level Eight - Object Instatition
function levelEightText(){
    // lesson area
    $(".lesson-heading").text("Level 8: Object Instantiation");
    $(".lesson-text").text("Our warrior has come a long way and might begin to run into monsters. We should instantiate, or create, a weapon we can carry around for protection. In Java, you need to instantiate objects with a type, name and value. The format for this declaraction is usually: Type name = new Type(value);")
    
    
    // console area
    var comment = $("<p></p>").text("// Create an object of of the weapon type, named excalibur and with the value of sword. The format is Type name = new Type(value). Capitalize the type.").addClass("double-indent");
    var example = $("<p></p>").text("// Example: Weapon mjolnir = new Weapon(hammer);").addClass("double-indent");
    $("#coding-text").empty().append(comment).append(example);
}
function animateLevelEight(){
    $("#speech-bubble-text").empty().append("Excalibur!");
    $("#speech-bubble-area").removeClass("hidden");

    $("#sword-area").removeClass("hidden");
}

// Level Nine - If
function levelNineText(){
    $("#wizard-area").removeClass("hidden");

    // lesson area
    $(".lesson-heading").text("Level 9: If/Else Blocks");
    $(".lesson-text").text("There is an enemy at the end of this level. We need to use an if else block to tell our warrior to fight if theres an enemy in front of him, else he can walk.")
    
    // console area
    var comment = $("<p></p>").text("// Write the code for the if condition checking that isEnemy is true").addClass("double-indent");
    var example = $("<p></p>").text("// Example: if(isAlly == false)").addClass("double-indent");
    $("#coding-text").empty().append(comment).append(example);

    var openLoop = $("<p></p>").text("{").addClass("double-indent");
    var fight = $("<p></p>").text("warrior.fight();").addClass("double-indent");
    var walk = $("<p></p>").text("warrior.walk();").addClass("double-indent");;
    var elseLoop = $("<p></p>").text("}else{").addClass("double-indent");
    var endLoop = $("<p></p>").text("}else{").addClass("double-indent");
    $("#end-loop").empty().append(openLoop).append(fight).append(elseLoop).append(walk).append(endLoop);

}
function animateLevelNine(){
    for(var i = 0; i < 4; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
    setTimeout(fight, 2000);
    setTimeout(deadWizard, 3000);
    setTimeout(finishWalking, 4000);
}
function fight(){
    $("#speech-bubble-text").empty().append("Fight!");
    $("#speech-bubble-area").removeClass("hidden");
}
function deadWizard(){
    $("#wizard-area").addClass("hidden");
}
function finishWalking(){
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    for(var i = 4; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}

// Level Ten - Else If
function levelTenText(){
    $("#wizard-area").removeClass("hidden");
    $("#warden-area").removeClass("hidden");

    // lesson area
    $(".lesson-heading").text("Level 10: Else If Statements");
    $(".lesson-text").text("This level has an enemy and an ally. We want to say Hi! to any allies and fight any enemies. An if/else if blocks lets up run multiple conditions so our warrior successfully navigates to the end!");
    
    
    // console area
    var comment = $("<p></p>").text("// Write the code for the else if condition checking that isAlly is true").addClass("double-indent");
    var example = $("<p></p>").text("// Example: else if(isFriend == true)").addClass("double-indent");
    var ifLoop = $("<p></p>").text("if(isEnemy == true){").addClass("double-indent");
    var fight = $("<p></p>").text("warrior.fight();").addClass("double-indent");
    var endLoop = $("<p></p>").text("}").addClass("double-indent");
    $("#coding-text").empty().append(comment).append(example).append(ifLoop).append(fight).append(endLoop);

    var openLoop = $("<p></p>").text("{").addClass("double-indent");
    var greet = $("<p></p>").text("warrior.greet();").addClass("double-indent");
    var elseLoop = $("<p></p>").text("}else{").addClass("double-indent");
    var walk = $("<p></p>").text("warrior.walk();").addClass("double-indent");;
    var end = $("<p></p>").text("}").addClass("double-indent");
    
    $("#end-loop").empty().append(openLoop).append(greet).append(elseLoop).append(walk).append(end);
}
function animateLevelTen(){
    for(var i = 0; i < 4; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
    setTimeout(fight, 2000);
    setTimeout(deadWizard, 3000);
    setTimeout(walkMore, 5000);
    setTimeout(greet, 8000);
    setTimeout(walkAgain, 10000);

}

function walkMore(){
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    $("#warrior-image").animate({"margin-left": 400});
    $("#warrior-image").animate({"margin-left": 500});
}
function greet(){
    $("#speech-bubble-text").empty().append("Hi Friend!");
    $("#speech-bubble-area").removeClass("hidden");
}
function walkAgain(){
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    for(var i = 5; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}










  }
}
