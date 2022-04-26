let a = 0
let b = 0
basic.showString("Scoreboard")
basic.forever(function () {
    basic.showString((a)+':'+(b))
    basic.clearScreen()
    basic.pause(1000)
})
input.onButtonPressed(Button.A, function () {
    control.inBackground(function() {
        a++
    })
})
input.onButtonPressed(Button.B, function () {
    control.inBackground(function() {
        b++
    })
})
input.onButtonPressed(Button.AB, function () {
    control.inBackground(function() {
        a = 0
        b = 0
    })
    basic.showString("New round!")
})