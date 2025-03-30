//set up canvas
const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.85;


//context API
const ctx = canvas.getContext('2d');


centerX = canvas.width/2;
centerY = canvas.height/2;


//const orbitRadius = 200;

//create sun,earth
const sun = new CelestialBody(centerX, centerY,50, 100, 0, 0,"yellow");
const earth=new CelestialBody(centerX, centerY-200, 10, 10, 1, 5,"#1e90ff"); //"#44bbff");

//
function animate(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.85;
    centerX = canvas.width/2;
    centerY = canvas.height/2;
    ctx.clearRect(0,0, canvas.width, canvas.height);

    sun.update(ctx);
    earth.update(ctx);

    requestAnimationFrame(animate);

}

animate();