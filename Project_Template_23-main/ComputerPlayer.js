class ComputerPlayer {
    constructor (x, y, width, height) {
        var options = {
            isstatic: true 
        };
        this.body = Bodies.rectangle(x, y, width, height, options); 
        this.width = width;
        this.height = height; 
        

        world.add (world, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        imagemode(CENTER);
        

        pop();
    }
}