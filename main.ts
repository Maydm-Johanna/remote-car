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
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "right") {
        backward_motor_1()
        forward_motor_2()
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (receivedString == "left") {
        forward_motor_1()
        backward_motor_2()
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "back") {
        backward_motor_1()
        backward_motor_2()
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (receivedString == "stop") {
        both_motors_stop()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        both_motors_stop()
        basic.clearScreen()
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
let red = 255
let green = 5
let blue = 5
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenUp)) {
        radio.sendString("forward")
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendString("right")
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendString("left")
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("back")
    } else {
        radio.sendString("stop")
    }
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    red,
    green,
    blue
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    red,
    green,
    blue
    )
})
