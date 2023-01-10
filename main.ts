radio.onReceivedNumber(function (receivedNumber) {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(300)
    }
})
let angle = 0
let opened = 95
let closed = 175
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, input.lightLevel())
})
basic.forever(function () {
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
    if (input.isGesture(Gesture.ThreeG)) {
        music.playMelody("C D G F E D F C ", 268)
    }
})
