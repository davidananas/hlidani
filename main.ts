input.onPinReleased(TouchPin.P0, function () {
    houkání = 0
    basic.showIcon(IconNames.Angry)
    while (houkání == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
input.onButtonPressed(Button.A, function () {
    Vstup = "" + Vstup + "A"
})
input.onButtonPressed(Button.B, function () {
    Vstup = "" + Vstup + "B"
})
let Vstup = ""
let houkání = 0
let Heslo = "ABAB"
basic.forever(function () {
    if (Heslo == Vstup) {
        control.reset()
    }
})
