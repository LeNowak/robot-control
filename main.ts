input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
function tyl () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(500)
    stop()
}
radio.onReceivedNumber(function (receivedNumber) {
    pins.analogWritePin(AnalogPin.P11, 511)
    pins.analogWritePin(AnalogPin.P15, 511)
    basic.showNumber(receivedNumber)
    if (receivedNumber == 0) {
        stop()
    }
    if (receivedNumber == 1) {
        przod()
    }
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(3)
})
function lewo () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(100)
    stop()
}
function stop () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
input.onButtonPressed(Button.A, function () {
	
})
function przod () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(500)
    stop()
}
function prawo () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(100)
    stop()
}
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
