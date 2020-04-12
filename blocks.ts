/**
 * Modify the color palette on the fly
 */
//% icon="\uf042" color="#b32246"
//% weight=80
namespace palette {
    /**
     * Sets a color in the palette
     */
    //% blockId=palettesetcolorhue block="set palette color $index=colorindexpicker to hue $hue=colorWheelPicker"
    //% index.min=0 index.max=1 index.defl=1
    //% weight=100
    export function setColorHue(index: number, hue: number) {
        setColor(index, wheel(hue));
    }

    /**
     * Sets a color in the palette
     */
    //% blockId=palettesetcolorrgb block="set palette color $index=colorindexpicker to $rgb=colorsrgb"
    //% index.min=0 index.max=1 index.defl=1
    export function setColor(index: number, rgb: number) {
        const colors = palette.getCurrentColors();
        colors.setColor(index, rgb);
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