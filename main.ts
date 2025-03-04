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
// S2 motor on driver right side of robot
function forward_motor_2 () {
    hummingbird.setRotationServo(FourPort.Two, -100)
}
// S1 motor on driver left
function forward_motor_1 () {
    hummingbird.setRotationServo(FourPort.One, 100)
}
// Update the radio group number to a new number. No one else should have the same number as your code.
radio.setGroup(6)
hummingbird.startHummingbird()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("back")
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendString("right")
    } else if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendString("left")
    } else if (input.isGesture(Gesture.ScreenUp)) {
        radio.sendString("forward")
    } else {
        radio.sendString("stop")
    }
})
