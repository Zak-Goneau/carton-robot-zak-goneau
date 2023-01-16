let opened = -90
let closed = -270
basic.forever(function () {
	
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, opened)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, closed)
    basic.pause(1000)
})
