function backward_motor_1 () {
    hummingbird.setRotationServo(FourPort.One, -100)
}
function both_motors_stop () {
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
}
function backward_motor_2 () {
    hummingbird.setRotationServo(FourPort.Two, 100)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        forward_motor_1()
        forward_motor_2()
    } else if (receivedString == "right") {
        forward_motor_1()
        backward_motor_2()
    } else if (receivedString == "left") {
        backward_motor_1()
        forward_motor_2()
    } else if (receivedString == "back") {
        backward_motor_1()
        backward_motor_2()
    } else if (receivedString == "stop") {
        both_motors_stop()
    } else {
        both_motors_stop()
    }
})
function forward_motor_2 () {
    hummingbird.setRotationServo(FourPort.Two, -100)
}
function forward_motor_1 () {
    hummingbird.setRotationServo(FourPort.One, 100)
}
radio.setGroup(1)
hummingbird.startHummingbird()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("back")
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendString("right")
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendString("left")
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.ScreenUp)) {
        radio.sendString("forward")
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else {
        radio.sendString("stop")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
