/* Copyright (c) 2026 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Jan 2026
 * This program sends a signal to another microbit
 */

// variables
let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
const servoNumber1 = robotbit.Servos.S1
radio.setGroup(196)
music.setVolume(255)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(11)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.show()
    music.play(music.stringPlayable("G - G - G - - - ", 800), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.B, function () {
    radio.sendNumber(22)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    music.play(music.stringPlayable("C5 - C5 - C5 - - - ", 800), music.PlaybackMode.UntilDone)
})
