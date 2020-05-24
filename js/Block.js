class Block {
    static widthBetween = 250;
    static heigthBetween = 250;
    x = MAIN_WIDTH;
    y;
    height;
    visible = true;

    constructor() {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('block');
        document.querySelector('main').appendChild(this.domElement);
    }

    update() {
        this.x -= speedX;
        if (this.x + 100 <= 0) this.visible = false;
    }

    render() {
        this.domElement.style.height = px(this.height);
        this.domElement.style.top = px(this.y);
        this.domElement.style.left = px(this.x);
    }

    removeElement() {
        this.domElement.remove();
    }
}

class BlockTop extends Block {
    constructor() {
        super();
        const MIN_HEIGHT = 150;
        this.y = 0;
        this.height = Math.floor(Math.random() * (MAIN_HEIGHT - MIN_HEIGHT * 2 - Block.heigthBetween) + MIN_HEIGHT);
    }
}

class BlockBottom extends Block {
    constructor(blockTop) {
        super();
        this.y = blockTop.height + Block.heigthBetween;
        this.height = MAIN_HEIGHT - this.y;
    }
}