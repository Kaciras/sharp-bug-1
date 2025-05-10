import sharp from "sharp";

await sharp("tile.png").avif().toFile("图片1.avif");
console.log("First outputted");

await sharp("tile.png").avif().toFile("图片2.avif");
console.log("Second outputted");
