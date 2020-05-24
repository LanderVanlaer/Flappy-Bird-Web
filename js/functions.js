const px = e => `${e}px`;
const deg = e => `${e}deg`;
const hex = e => `${e}deg`;
const addBlocks = () => {
    blocks.push(new BlockTop());
    blocks.push(new BlockBottom(blocks[blocks.length - 1]));
}