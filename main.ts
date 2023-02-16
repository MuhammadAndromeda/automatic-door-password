input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Password == Entry) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(3000)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    Entry = "" + Entry + "B"
})
let Entry = ""
let Password = ""
Password = "ABBAB"
Entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
	
})
