input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tall_tst_skuddaar01 = 2021
})
input.onGesture(Gesture.Shake, function () {
    tall_aar = randint(tall_aar_min, tall_aar_max)
    basic.showNumber(tall_aar)
})
input.onButtonPressed(Button.AB, function () {
    if (tall_aar_min % 4 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        tst_tall_mulig_skuddaar01 = 1
    } else {
        basic.showIcon(IconNames.No)
        tst_tall_mulig_skuddaar01 = 0
    }
    if (tall_aar_min % 4 == 0) {
        basic.showIcon(IconNames.Diamond)
        tst_tall_mulig_skuddaar01 = 1
    } else {
        basic.showIcon(IconNames.No)
        tst_tall_mulig_skuddaar01 = 0
        if (tall_tst_skuddaar01 % 1 == 0) {
        	
        }
    }
})
let tall_aar = 0
let tst_tall_mulig_skuddaar01 = 0
let tall_aar_max = 0
let tall_aar_min = 0
let tall_tst_skuddaar01 = 0
tall_tst_skuddaar01 = 0
tall_aar_min = -500
tall_aar_max = 2401
tst_tall_mulig_skuddaar01 = 2401
basic.forever(function () {
	
})
