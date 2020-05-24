const FPS = 60,
    speedX = 5,
    { width: MAIN_WIDTH, height: MAIN_HEIGHT } = document.querySelector('main').getBoundingClientRect(),
    birds = [
        new Bird({ domElement: document.getElementById('bird1') }),
        new Bird({ keyCode: 38 })
    ];

let blocks = [];
addBlocks();

const timer = setInterval(() => {
    if (blocks[blocks.length - 1].x + Block.widthBetween <= MAIN_HEIGHT) addBlocks();
    blocks.forEach((block) => {
        block.update();
        block.render();
        if (!block.visible) block.removeElement();
    });
    blocks = blocks.filter(block => block.visible);

    let allUnvisible = true;
    birds.forEach(bird => {
        bird.update();
        bird.render();
        if (bird.visible) allUnvisible = false;
    });
    if (allUnvisible) {
        clearInterval(timer);
        alert("Game Over");
    };
}, 1000 / FPS);