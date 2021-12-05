input.onButtonPressed(Button.A, function () {
    BitBuggy.forward()
})
input.onButtonPressed(Button.AB, function () {
    BitBuggy.brake()
})
input.onButtonPressed(Button.B, function () {
    BitBuggy.back()
})
BitBuggy.init_wheel(AnalogPin.P0, AnalogPin.P2)
let strip = neopixel.create(DigitalPin.P1, 2, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
})

