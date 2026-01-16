/* Copyright (c) 2026 Isaac Ip All rights reserved
 *
 * Created by: Isaac Ip
 * Created on: Jan 2026
 * This program sends a signal to another microbit
 */

// variables
const servoNumber1 = robotbit.Servos.S1
radio.setGroup(196)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// When a number is received
radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber == 11) {
        robotbit.Servo(servoNumber1, 16) // move servo to 16° if 11 is received
    }
    if (receivedNumber == 22) {
        robotbit.Servo(servoNumber1, 106) // optional: handle 22 if needed
    }
})
