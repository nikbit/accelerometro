input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.acceleration(Dimension.Z))
})
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.Z),
    1023
    )
})
