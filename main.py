hummingbird.start_hummingbird()

def on_forever():
    if hummingbird.get_sensor(SensorType.DISTANCE, ThreePort.TWO) < 20:
        hummingbird.set_rotation_servo(FourPort.ONE, 0)
        hummingbird.set_rotation_servo(FourPort.TWO, 74)
    else:
        hummingbird.set_rotation_servo(FourPort.ONE, 74)
        hummingbird.set_rotation_servo(FourPort.TWO, -74)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)
