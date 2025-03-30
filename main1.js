class CelestialBody {
    constructor(x = canvas.width / 2, y = canvas.height / 2, radius = 10, mass = 100, velocity = 0, angle = 0, color = "white") {
        this.x = x;
        this.y = y;
        this.velocity = velocity;  // Corrected from "speed"
        this.angle = angle;  // Angle in degrees
        this.mass = mass;
        this.radius = radius;
        this.color = color;
        this.orbitRadius = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();
    }

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

// Set up canvas
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.85;

const ctx = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Create Sun and Earth
const sun = new CelestialBody(centerX, centerY, 50, 100, 0, 0, "yellow");
const earth = new CelestialBody(centerX, centerY - 200, 10, 10, 1, 0, "#1e90ff");  // Velocity = 1

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sun.draw(ctx);
    earth.update(ctx);  // Earth moves in an orbit

    requestAnimationFrame(animate);
}

animate();
