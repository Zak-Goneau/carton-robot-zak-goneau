radio.onReceivedNumber(function (receivedNumber) {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
let angle = 0
let opened = 95
let closed = 175
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    angle = pins.map(
    input.lightLevel(),
    0,
    255,
    opened,
    closed
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    pins.servoWritePin(AnalogPin.P0, input.lightLevel())
})
