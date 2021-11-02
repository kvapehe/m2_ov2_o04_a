/**
 * Skuddårsberegning.
 * 
 * Programmet er slik.
 * 
 * Tast A setter inn et nytt tall.
 * 
 * Tast B, bekrefter sifferet og lar en taste nytt siffer.
 * 
 * Logoen bekrefter tallet, og kan vise inntastet tall. Dersom det er ok, så kan A+B gjøre skuddårstesten.
 * 
 * Et alternativ er å riste enheten, da genereres et tilfeldig tall med reglene fra min og max og så vil A+B igjen utføre testen.
 * 
 * Årstall før 1582 som også er delelig med 100 er skuddår etter de reglene.
 * 
 * Gregorianske og Julianske kalenderen hadde ulike metoder å beregne dager i et år. Kilder på nett vil vise dette om en søker etter årstallet 1582.
 * 
 * Målet med oppgaven var ikke skrive kompakt metode, men lage en som dekker alt mulig, og gi mulige logiske brister.
 * 
 * Ofte kan det være lurt med å sette "flagg" og egentlig burde hver if-test starte med AND og flagg slik at en ikke utfører unødvendige tester, og dette er for så vidt det else if gjør.
 * 
 * Men det kjer i en engang, slik at en ikke nødvendigvis kan se alle steg i denne oppgaven er det gjort et forsøk på å vise resulter fra de ulike stegene og ikke bare godkjent / ikke godkjent på slutten. Det er mange løsinger på oppgaven alt etter om en søker etter skuddår, eller år som IKKE er skuddår.
 */
/**
 * Noen referanser:
 * 
 * https://no.villagemonkland.org/Scoprire-se-un-Anno--Bisestile-3996
 * 
 * https://cathedralcollege.org/kak-vischitivat-visokosnie-godi-5575
 * 
 * https://no.ourschoolpreschool.org/481372-how-to-determine-whether-a-ESQQPW
 * 
 * https://www.programiz.com/c-programming/examples/leap-year
 * 
 * Video fra NTNU:
 * 
 * https://www.youtube.com/watch?v=nZCRwhgcnug
 * 
 * Det er mange slike videoer under samme adressen.
 * 
 * Diskusjon:
 * 
 * https://no.atomiyme.com/vet-du-hvor-mange-dager-i-et-skuddaar/
 * 
 * God resurs med pseudokode og flytskjema.(Blir nok brukt flere ganger).
 * 
 * https://www.tutorialspoint.com/learn_c_by_examples/leap_year_program_in_c.htm
 * 
 * Denne har multiple eksempler i multiple programmeringsspråk:
 * 
 * https://www.geeksforgeeks.org/program-check-given-year-leap-year/
 * 
 * Nok en god resurs som muligens blir benyttet:
 * 
 * https://www.educba.com/leap-year-program-in-python/
 * 
 * Muligens innloggingstjenete:
 * 
 * https://www.educba.com/leap-year-program-in-python/
 */
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(tall_aar)
    // ny test leap year
    if (tall_aar % 400 == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        // leap year
        tst_tall_mulig_skuddaar01 = 1
    } else if (tall_aar % 4 == 0 && tall_aar % 100 != 0) {
        basic.showIcon(IconNames.Diamond)
        // leap year
        tst_tall_mulig_skuddaar01 = 1
    } else {
        // Kommentar
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
        // leap year
        tst_tall_mulig_skuddaar01 = 0
    }
    if (tst_tall_mulig_skuddaar01 == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    tall_aar = randint(tall_aar_min, tall_aar_max)
    basic.showNumber(tall_aar)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tall_tst_skuddaar01 = 2021
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
tall_aar = 2021
basic.forever(function () {
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    basic.pause(2)
})
