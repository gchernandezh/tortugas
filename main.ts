basic.forever(function () {
    while (input.temperature() < 26) {
        basic.showNumber(input.temperature())
        basic.showString("T. baja")
        music.playTone(988, music.beat(BeatFraction.Breve))
    }
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.showString("T. alta")
        music.playTone(131, music.beat(BeatFraction.Breve))
    }
    basic.showNumber(input.temperature())
    basic.showString("T. Normal")
})
