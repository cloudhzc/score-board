let player1score = 0
let player2score = 0
basic.showString("Scoreboard")
basic.forever(function () {
    basic.showString((player1score)+':'+(player2score))
    basic.clearScreen()
    basic.pause(950)
})
input.onButtonPressed(Button.A, function () {
    control.inBackground(function() {
        player1score++
        //按钮A按下时玩家1分数+1
    })
})
input.onButtonPressed(Button.B, function () {
    control.inBackground(function() {
        player2score++
        //按钮B按下时玩家1分数+1
    })
})
input.onButtonPressed(Button.AB, function () {
    control.inBackground(function() {
        player1score = 0
        player2score = 0
        //按钮A+B按下时玩家1、2分数清零
    })
    basic.showString("New-round!")
})