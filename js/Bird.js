class Bird {
    static START_POS_Y = 360;
    static GRAVITY = 2;
    static JUMP_SPEED = 7;
    static MAX_SPEED_Y = {
        UP: 10,
        DOWN: 12
    };
    static x = 30;
    visible = true;
    pressedKeyUp = false
    speedY = Bird.GRAVITY;

    constructor({ domElement = document.querySelector('#bird0.bird'), y = Bird.START_POS_Y, keyCode = 32 }) {
        this.y = y;
        this.domElement = domElement;
        const { width, height } = domElement.getBoundingClientRect();
        this.size = {
            width,
            height
        };

        document.addEventListener('keydown', e => {
            if (e.keyCode == keyCode) this.pressedKeyUp = true;
        })

        document.addEventListener('keyup', e => {
            if (e.keyCode == keyCode) this.pressedKeyUp = false;
        })
    }

    update() {
        this.speedY += Bird.GRAVITY;
        if (this.pressedKeyUp) this.speedY -= Bird.JUMP_SPEED;

        if (this.speedY > Bird.MAX_SPEED_Y.UP) this.speedY = Bird.MAX_SPEED_Y.UP;
        if (this.speedY < -Bird.MAX_SPEED_Y.DOWN) this.speedY = -Bird.MAX_SPEED_Y.DOWN;

        this.y += this.speedY;
        if (this.y + this.size.height >= MAIN_HEIGHT) this.gameOver();
    }

    render() {
        this.domElement.style.top = px(this.y);
        this.domElement.style.left = px(Bird.x);

        const deg = Math.acos(speedX / (Math.hypot(speedX, this.speedY))) * 180 / Math.PI;
        this.domElement.style.transform = `rotate(${this.speedY < 0 ? -deg : deg + 15}deg)`;
    }

    gameOver() {
        this.visible = false;
    }

    collisionDetect() {}

    up() {
        console.log("up");
    }

    down() {
        console.log("down");
    }
}