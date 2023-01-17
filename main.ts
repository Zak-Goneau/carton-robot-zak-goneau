let opened = 90
let closed = 270
basic.forever(function () {
    servos.P0.setAngle(opened)
    basic.pause(1000)
    servos.P0.setAngle(closed)
    basic.pause(1000)
})
