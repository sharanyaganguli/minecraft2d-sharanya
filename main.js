var canvas= new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

block_width= 30;
block_height= 30;

player_object= "";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
     fabric.Image.fromURL(get_image, function(Img){
         block_object= Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
         block_object.set({
             top: player_y, left:player_x
         });
         canvas.add(block_object);
     });
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
   
    key_pressed= e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey== true && key_pressed == "80"){
        block_width= block_width + 10;
        block_height= block_height+ 10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
        console.log("p and shift pressed together");
    }

    if (e.shiftKey== true && key_pressed == "77"){
        block_width= block_width - 10;
        block_height= block_height- 10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
        console.log("shift and m pressed together");
    }

    if (key_pressed== "38"){
        Up();
        console.log("up");
    }

    if (key_pressed== "40"){ 
    Down();
    console.log("down");
    }

    if (key_pressed== "37"){
        Left();
        console.log("Left");
    }

    if (key_pressed== "39"){
        Right();
        console.log("right");
    }

    if (key_pressed == '67'){
        new_image('cloud.jpg');
        console.log("c");
    }

    if (key_pressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }

    if (key_pressed == "71"){
        new_image("ground.png");
        console.log("g");
    }

    if (key_pressed== "76"){
        new_image("light_green.png");
        console.log("l");
    }

    if (key_pressed== "82"){
        new_image("roof.jpg");
        console.log("r");
    }

    if (key_pressed== "84"){
        new_image("trunk.jpg");
        console.log("t");
    }

    if (key_pressed== "85"){
        new_image("unique.png");
        console.log("u");
    }

    if (key_pressed== "87"){
        new_image("wall.jpg");
        console.log("w");
    }

    if (key_pressed== "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }

    

}
function Up(){
    if(player_y>=0)
    {
        player_y= player_y- block_height;
        console.log("block height="+ block_height);
        console.log("when up key is pressed, x= "+player_x+", y= "+ player_y);
        canvas.remove(player_object);
        player_update();

    }
}

function Down(){
    if(player_y<=500){
        player_y= player_y + block_height;
        console.log("block height= "+block_height);
        console.log("when down key is pressed, x= "+ player_x+", y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Left(){
    if(player_x>=0){
        player_x= player_x- block_height;
        console.log("block height= "+ block_height);
        console.log("when left key is pressed, x= " + player_x+", y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function Right(){
    if(player_x<=900){
        player_x= player_x+ block_height;
        console.log("block height= "+ block_height);
        console.log("when right key is pressed, x= " + player_x+", y= "+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

