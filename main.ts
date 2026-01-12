/* Copyright (c) 2026 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Jan 2026
 * This program sends a signal to another microbit
*/
radio.setGroup(196)
input.onButtonPressed(Button.A, function() {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})