input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    linebeacon.startWithDeviceMessage(
    "014ff0e715",
    "1a2b3c4d5e6f70809010a0b0c0"
    )
    linebeacon.stop()
})
