class CelestialBody{
    constructor(x=canvas.width /2 ,y=canvas.height/2, radius=10, mass=100, velocity=0, angle=0, color){
        this.x=x;
        this.y=y;

        this.velocity = velocity;
        this.mass=mass;
        this.radius=radius;
        this.color = color;
        this.angle = angle;

        this.draw(ctx, color);

        console.log(this.x, this.y);

        this.orbitRadius = Math.sqrt((this.x) ** 2 + (this.y ) ** 2);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
        
    }

    
    update(ctx) {
        // Convert angle to radians
        let radianAngle = this.angle * (Math.PI / 180);

        // Update position based on circular orbit
        this.x = this.orbitRadius * Math.cos(radianAngle);
        this.y = this.orbitRadius * Math.sin(radianAngle);

        // Update angle (increase for counterclockwise motion)
        this.angle += this.velocity;

        this.draw(ctx);
    }

    
}