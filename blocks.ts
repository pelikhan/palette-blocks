/**
 * Modify the color palette on the fly
 */
//% icon="\uf042" color="#b38c22"
namespace palette {
    /**
     * Sets a color in the palette
     */
    //% blockId=palettesetcolorhue block="set palette color $index to hue $col=colorWheelPicker"
    //% index.min=0 index.max=1 index.defl=1
    export function setColorHue(index: number, col: number) {
        const colors = palette.getCurrentColors();
        colors.setColor(index, wheel(col));
        palette.setColors(colors);
    }

    function wheel(wheelPos: number): number {
        wheelPos = 255 - wheelPos;
        if(wheelPos < 85) {
            return color.rgb(wheelPos * 3, 255, 255 - wheelPos * 3);
        }
        if(wheelPos < 170) {
            wheelPos -= 85;
            return color.rgb(255, 255 - wheelPos * 3, wheelPos * 3);
        }
        wheelPos -= 170;
        return color.rgb(255 - wheelPos * 3, wheelPos * 3, 255);
    }
}