def on_button_pressed_a():
    basic.show_icon(IconNames.SQUARE)
    linebeacon.start_with_device_message("014ff0e715", "1a2b3c4d5e6f70809010a0b0c0")
    linebeacon.stop()
input.on_button_pressed(Button.A, on_button_pressed_a)
