input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Angry)
    for (let index = 0; index < 100; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
input.onButtonPressed(Button.A, function () {
    Vstup = "" + Vstup + "A"
})
input.onButtonPressed(Button.B, function () {
    Vstup = "" + Vstup + "B"
})
let Vstup = ""
let Heslo = "ABAB"
basic.forever(function () {
    if (Heslo == Vstup) {
        control.reset()
    }
})
