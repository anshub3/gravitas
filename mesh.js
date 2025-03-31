class Mesh{
    constructor(originX, originY, gridSize=50){
        this.originX = originX; //x coordinate of origin
        this.originY = originY; //y coordinate of origin
        
        this.top = - canvas.height/2;
        this.bottom=canvas.height/2;;
        this.left=-canvas.width;
        this.right=canvas.width;


        this.gridSize = gridSize;
    }

    draw(ctx){
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 1;

        //ctx.save();
        //ctx.translate(this.originX, this.originY);

        
        for (let x=0; x<=this.right; x+=this.gridSize){
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
        for (let x=0; x>=this.left; x-=this.gridSize){
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        for (let y=0; y<=this.bottom; y+=this.gridSize){
            ctx.beginPath();
            ctx.moveTo(this.left, y);
            ctx.lineTo(this.right, y);
            ctx.stroke();
        }
        for (let y=0; y>=this.top; y-=this.gridSize){
            ctx.beginPath();
            ctx.moveTo(this.left, y);
            ctx.lineTo(this.right, y);
            ctx.stroke();
        }

        //for thicker lines for x and y axes
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.left, 0);
        ctx.lineTo(this.right, 0);
        
        ctx.moveTo(0, this.top);
        ctx.lineTo(0, this.bottom);
        ctx.stroke();
        

        //ctx.restore();
    }
}