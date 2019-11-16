$(document).data("initialWizard", $("#yourWizard").clone(true));


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
    } else if(level == 2){
        setTimeout(resetPage, 3000);
        setTimeout(levelTwoText, 3000);
    } else if(level == 3){
        setTimeout(resetPage, 5000);
        setTimeout(levelThreeText, 5000);
    } else if(level == 4){
        setTimeout(resetPage, 5000);
        setTimeout(levelFourText, 5000);
    } else if(level == 5){
        setTimeout(resetPage, 10000);
        setTimeout(levelFiveText, 10000);
        
    }
    console.log("Level: " + level);
}

//FUNCTIONS

function getInput(){
    var userString = $("input.code-input").val();
    userString = userString.replace(/ /g,'');
    console.log(userString);
    switch(userString){
        case 'System.out.print("HelloWorld!");':
            animateLevelOne();
            level++;
            break;
        case "total=apple+mead;" || "total=mead+apple;":
            animateLevelTwo();
            level++;
            break;
        case "warrior.walk();":
            animateLevelThree();
            level++;
            break;
        case "array.sort();":
            animateLevelFour();
            level++;
            break;
        case "keys[index].unlock();" :
            animateLevelFive();
            level++;
            break;
        default:
            $("#speech-bubble-text").empty().text("Wrong Answer!");
            $("#speech-bubble-area").removeClass("hidden");
            break;
    }
    runLevels();
    
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

// Level Three - Instantiating Object and Functions
function levelThreeText(){
    // lesson area
    $(".lesson-heading").text("Level 3: Objects and Functions");
    $(".lesson-text").text("In this level you will notice there is a Warrior object created for you. The dot operator, '.', can be used to call functions on objects. \n Example: warrior.run(); \n Use the dot operator on your warrior object to call the walk() function.")
    // console area
    var warrior = $("<p></p>").text("Warrior warrior = new Warrior(new Level());").addClass("double-indent");
    var comment = $("<p></p>").text("// Use the dot operator on your warrior object to call the walk() function. ").addClass("double-indent");
    $("#coding-text").empty().append(warrior).append(comment);

}
function animateLevelThree(){
    var leftMargin = 0;
    $("#speech-bubble-text").empty();
    $("#speech-bubble-area").addClass("hidden");
    for(var i = 0; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}

// Level Four - Arrays
function levelFourText(){
    $("#uncompleted-bridge-area").removeClass("hidden");
    $("#reverse-bridge-area").removeClass("hidden");
    // lesson area
    $(".lesson-heading").text("Level 4: Arrays");
    $(".lesson-text").text("An array is a data structure that holds a bunch of similar objects. Your warrior has an array of different sized blocks. Use to .sort() function on the array to complete the first half of the bridge and walk across the level.");
    
    // console area
    var warrior = $("<p></p>").text("Warrior warrior = new Warrior(new Level());").addClass("double-indent");
    var bridge = $("<p></p>").text('String[] array = {"medium-block","small-block","large-block"};').addClass("double-indent");
    var comment = $("<p></p>").text("// Call the .sort() function on the array object.").addClass("double-indent");
    $("#coding-text").empty().append(warrior).append(bridge).append(comment);
}
function animateLevelFour(){
    $("#uncompleted-bridge-area").addClass("hidden");
    $("#completed-bridge-area").removeClass("hidden");
    // 1
    $("#warrior-image").animate({"margin-left": "75px"});
    // 2
    $("#warrior-image").animate({"margin-left": "150px"});
    // 3
    $("#warrior-image").animate({"margin-top": "339px"});
    $("#warrior-image").animate({"margin-left": "207px"});
    
    // 4
    $("#warrior-image").animate({"margin-top": "286px"});
    $("#warrior-image").animate({"margin-left": "264px"});
    
    // 5
    $("#warrior-image").animate({"margin-top": "231px"});
    $("#warrior-image").animate({"margin-left": "324px"});
    
    // 6
    $("#warrior-image").animate({"margin-left": "381px"});
    // 7
    $("#warrior-image").animate({"margin-left": "443px"});
    $("#warrior-image").animate({"margin-top": "286px"});
    // 8
    $("#warrior-image").animate({"margin-left": "500px"});
    $("#warrior-image").animate({"margin-top": "339px"});
    // 9
    $("#warrior-image").animate({"margin-left": "600px"});
    $("#warrior-image").animate({"margin-top": "400px"});

    $("#warrior-image").animate({"margin-left": "700px"});
    $("#warrior-image").animate({"margin-left": "800px"});
    $("#warrior-image").animate({"margin-left": "900px"});

    
}

// Level Five - For Loop
function levelFiveText(){
    $("#door-area").removeClass("hidden");
    $("#keys-area").removeClass("hidden");

    // lesson text
    $('.lesson-heading').text("Level 5: For Loops");
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

function animateLevelFive(){

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
    var leftMargin = 0;
    
    $("#keys-area").addClass("hidden");
    $("#door-area").addClass("hidden");

    for(var i = 0; i < 10; i++){
        $("#warrior-image").animate({"margin-left": (i*100)});
    }
}

// Level Six - While Loop

// Level Seven - 

// Level Eight - 

// Level Nine - 

// Level Ten - 

$(document).data("initialWizard").replaceAll("#yourWizard");