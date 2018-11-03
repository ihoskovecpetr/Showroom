const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
document.getElementById("root").style.display = "none";

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

const gravity = 1;
var friction = 0.95;
var extraFriction = 1;
// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('click', event => {
    
    extraFriction = 0.5;
for (var i = 1; i < 99; i++) {
    console.log(i)
    setTimeout(function(){c.globalAlpha -= 0.01}, (20 * i));
}

    setTimeout(
        function(){  
            for (var i = 0; i < 50; i++ ) {
                ballArray[i].y = canvas.height - ballArray[i].radius
            }
            document.getElementById("platno").style.display = "none";
            document.getElementById("root").style.display = "block";
                }, 1900);
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
console.log("resize funguje")
    init(); 
})

// Objects
function Ball(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color

    this.update = function() {
        if (this.y + this.radius + this.dy > canvas.height) {
        this.dy = -this.dy * friction * extraFriction;
        } else {
            this.dy += gravity;
        }
        
        if (this.x - this.radius <= 0 || this.x + this.radius > canvas.width ) {

        this.dx = -this.dx;
        }
        //console.log(this.dy)
        this.x -= this.dx;
        this.y += this.dy;
         this.draw()
    }

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

}



// Implementation
var ball;
var ballArray = [];


function init() {

    c.clearRect(0, 0, canvas.width, canvas.height)
    ballArray = []

    for (var i = 0; i < 50; i++) {
        var radius = Math.floor((Math.random() * 20) + 5)
        var x = radius + (Math.floor(Math.random() * canvas.width) - (2 * radius))
        var y = radius + Math.floor((Math.random() * canvas.height - (2 * radius)))
        var dx = Math.floor(Math.random() * 10)
        var dy = Math.floor(Math.random() * 10)
        var color = colors[Math.floor(Math.random() * 4)]
        ball = new Ball( x, y, dx, dy, radius, color);
        ballArray.push(ball)
    }

    console.log(ballArray)

}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)


    //c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // objects.forEach(object => {
    // });
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].update()
    }
    c.font="30px Georgia";
    var gradient=c.createLinearGradient(80,0,300,0);
    gradient.addColorStop("0","red");
    gradient.addColorStop("0.5",'#7ECEFD');
    gradient.addColorStop("1.0","magenta");
    c.fillStyle=gradient;
    c.fillText("Click Anywhere!",10,canvas.height/2 - 15);

}

init();
animate()
