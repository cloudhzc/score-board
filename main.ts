let a = 0
let b = 0
basic.showString("Scoreboard")
basic.forever(function () {
    basic.pause(200)
    basic.showString(""+(a))
    basic.showString(":")
    basic.showString("" + (b))
    basic.pause(200)
    basic.clearScreen()
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
    a++
})
input.onButtonPressed(Button.B, function () {
    b++
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("New round!")
    a = 0
    b = 0
})