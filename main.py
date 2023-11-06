from microbit import *

while True:
    try:
        comando = uart.readline().decode().strip()

        if comando == "encender_todos_los_leds":
            display.show(Image.ALL_ON)
    except Exception as e:
        pass
