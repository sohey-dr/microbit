let v = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    linebeacon.startWithDeviceMessage(
    "014ff0e715",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
    basic.pause(5000)
    basic.pause(5000)
    basic.clearScreen()
    linebeacon.stop()
})
input.onButtonPressed(Button.B, function () {
    for (let i = 0; i <= 20; i++) {
        v = i + 1
        if (v % 3 == 0 && v % 5 == 0) {
            basic.showString("Fizz Buzz")
        } else {
            if (v % 3 == 0) {
                basic.showString("Fizz")
            } else {
                if (v % 5 == 0) {
                    basic.showString("Buzz")
                } else {
                    basic.showNumber(v)
                }
            }
        }
    }
})
