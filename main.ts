input.onButtonPressed(Button.A, function () {
    Vstup = "" + Vstup + "A"
})
input.onButtonPressed(Button.B, function () {
    Vstup = "" + Vstup + "B"
})
input.onGesture(Gesture.Shake, function () {
    houkání = 0
    basic.showIcon(IconNames.Angry)
    while (houkání == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
let houkání = 0
let Vstup = ""
let Heslo = "ABAB"
basic.forever(function () {
    if (Heslo == Vstup) {
        control.reset()
    }
})
