let sprite = sprites.create(image.create(8, 8))
for(let x = 0; x < sprite.image.width; ++x) {
    for(let y = 0; y < sprite.image.height; ++y) {
        sprite.image.setPixel(x, y, x + y)
    }
}
sprite.setImage(sprite.image
    .doubled().doubled().doubled().doubled())
sprite.x = screen.width / 2;
sprite.y = screen.height / 2;

pause(2000)
// hue
for(let i = 0; i < 16; ++i)
    palette.setColorHue(i, i << 4);

pause(2000)
// hue
for(let x = 0; x < 8; ++x)
    for(let y = 0; y < 8; ++y)
        palette.setColor(x + y, color.rgb(255 - x * 32, 0, y * 32));

