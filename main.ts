let encender = ""
let myImage: Image = null
let imaAP: Image = null
let serial1 = ""
basic.forever(function () {
    encender = "encender"
    myImage = images.iconImage(IconNames.Heart)
    imaAP = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    serial1 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (serial1 == encender) {
        myImage.showImage(0)
    } else {
        imaAP.showImage(0)
    }
})
