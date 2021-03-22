def on_received_number(receivedNumber):
    pins.servo_write_pin(AnalogPin.P0, receivedNumber)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    radio.send_number(0)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

radio.set_group(1)