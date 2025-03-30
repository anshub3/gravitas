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

        this.orbitRadius = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y, this.radius, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
        
    }

    /*update(){
        this.angle *= Math.PI/100;
        this.angle += this.velocity;
        if (this.angle >= 360){
            this.angle = 0;
        }
        this.x += this.velocity * Math.cos(this.angle);
        this.y -= this.velocity * Math.sin(this.angle);

        this.draw(ctx);
    }*/
    update(ctx) {
        // Convert angle to radians
        let radianAngle = this.angle * (Math.PI / 180);

        // Update position based on circular orbit
        this.x = centerX + this.orbitRadius * Math.cos(radianAngle);
        this.y = centerY + this.orbitRadius * Math.sin(radianAngle);

        // Update angle (increase for counterclockwise motion)
        this.angle += this.velocity;

        this.draw(ctx);
    }

    
}