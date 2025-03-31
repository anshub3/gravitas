//set up canvas
const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.85;


//context API
const ctx = canvas.getContext('2d');


centerX = canvas.width/2;
centerY = canvas.height/2;

ctx.translate(centerX, centerY); 

//create a cartesian mesh
let mesh = new Mesh(0, 0, 25);

//const orbitRadius = 200;

//create sun,earth
const sun = new CelestialBody(0, 0,50, 100, 0, 0,"yellow");
const earth=new CelestialBody(0, 200, 10, 10, 1, 5,"#1e90ff"); //"#44bbff");





//animate
function animate(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.85;
    
    centerX = canvas.width/2;
    centerY = canvas.height/2;
    ctx.translate(centerX, centerY);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    mesh.draw(ctx);
    
    sun.update(ctx);
    earth.update(ctx);

    requestAnimationFrame(animate);

}

animate();