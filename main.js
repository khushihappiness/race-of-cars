canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car_image1="car1.png";
car1_x=10;
car1_y=10;


car2_width=120;
car2_height=70;
car_image2="car image.jfif";
car2_x=10;
car2_y=100;


background_image="race car.jpg";

function add(){

    background_imgTag=new Image();//to add a new image
    background_imgTag.onload= uploadBackground;//uploadBackground is a function
    background_imgTag.src=background_image;//adding the background_image

   car1_imgTag=new Image();
    car1_imgTag.onload= uploadCar1;
    car1_imgTag.src=car_image1;

    car2_imgTag=new Image();
    car2_imgTag.onload= uploadCar2;
    car2_imgTag.src=car_image2;
}
 function uploadBackground(){

    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
 }

 function uploadCar1(){

    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
 }

 function uploadCar2(){

    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car1_height);
 }
 window.addEventListener("keydown", my_keydown);

 function my_keydown(e)
 {

    var keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=="38")
    {
        car1_up();
        console.log("up");
    }

    if (keyPressed=="40")
    {
        car1_down();
        console.log("down");
    }

    if (keyPressed=="37")
    {
        car1_left();
        console.log("left");
    }

    if (keyPressed=="39")
    {
        car1_right();
        console.log("right");
    }
    if (keyPressed=="87")
    {
        car2_up();
        console.log("up");
    }

    if (keyPressed=="83")
    {
        car2_down();
        console.log("down");
    }

    if (keyPressed=="65")
    {
        car2_left();
        console.log("left");
    }

    if (keyPressed=="68")
    {
        car2_right();
        console.log("right");
    }

    if(car1_x>700)
    {
   console.log("car 1 won!!");
   document.getElementById("game status").innerHTML=" Car 1 Won";
    }
else if(car2_x>700)
{
console.log("car 2 won!!");
document.getElementById("game status").innerHTML=" Car 2 Won";
}  

 }
 function car1_up()
 {
  
     if(car1_y>=0)
     {
         car1_y=car1_y-10;
         console.log("when up arrow is pressed,x="+car1_x+"and Y="+car1_y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function car1_down()
 {
 
     if(car1_y<=500)
     {
 
 car1_y=car1_y +10;
 console.log("when down arrow is pressed,x="+car1_x+"and Y="+car1_y);
 uploadBackground();
 uploadCar1();
 uploadCar2();
 
     }
 }
 
 function car1_left()
 {
 
     if(car1_x>=0)
     {
 
         car1_x=car1_x -10;
         console.log("when left arrow is pressed,x="+car1_x+"and Y="+car1_y );
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function car1_right()
 {
 
     if(car1_x<=700)
     {
 
         car1_x=car1_x +10;
         console.log("when left arrow is pressed,x="+car1_x+"and Y="+car1_y );
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }

 
 function car2_up()
 {
  
     if(car2_y>=0)
     {
         car2_y=car2_y-10;
         console.log("when w arrow is pressed,x="+car2_x+"and Y="+car2_y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function car2_down()
 {
 
     if(car2_y<=500)
     {
 
 car2_y=car2_y +10;
 console.log("when s arrow is pressed,x="+car2_x+"and Y="+car2_y);
 uploadBackground();
 uploadCar1();
 uploadCar2();
 
     }
 }
 
 function car2_left()
 {
 
     if(car2_x>=0)
     {
 
         car2_x=car2_x -10;
         console.log("when a arrow is pressed,x="+car2_x+"and Y="+car2_y );
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function car2_right()
 {
 
     if(car2_x<=700)
     {
 
         car2_x=car2_x +10;
         console.log("when d arrow is pressed,x="+car2_x+"and Y="+car2_y );
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }

 