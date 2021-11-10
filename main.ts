// Noen referanser:
// 
// https://no.villagemonkland.org/Scoprire-se-un-Anno--Bisestile-3996
// 
// https://cathedralcollege.org/kak-vischitivat-visokosnie-godi-5575
// 
// https://no.ourschoolpreschool.org/481372-how-to-determine-whether-a-ESQQPW
// 
// https://www.programiz.com/c-programming/examples/leap-year
// 
// Video fra NTNU:
// 
// https://www.youtube.com/watch?v=nZCRwhgcnug
// 
// Det er mange slike videoer under samme adressen.
// 
// Diskusjon:
// 
// https://no.atomiyme.com/vet-du-hvor-mange-dager-i-et-skuddaar/
// 
// God resurs med pseudokode og flytskjema.(Blir nok brukt flere ganger).
// 
// https://www.tutorialspoint.com/learn_c_by_examples/leap_year_program_in_c.htm
// 
// Denne har multiple eksempler i multiple programmeringsspråk:
// 
// https://www.geeksforgeeks.org/program-check-given-year-leap-year/
// 
// Nok en god resurs som muligens blir benyttet:
// 
// https://www.educba.com/leap-year-program-in-python/
// 
// Muligens innloggingstjenete:
// 
// https://www.educba.com/leap-year-program-in-python/
input.onButtonPressed(Button.A, function () {
    tall_a_input = tall_a_input + 1
    tall_a_input = tall_a_input % 10
    basic.showNumber(tall_a_input)
})
// Tanken er å vise et nytt symbol for hver beregning / test. På den måten ser en hvorfor tallet var et skuddår eller ikke.
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
        // ikke leap year
        tst_tall_mulig_skuddaar01 = 0
    }
    if (tst_tall_mulig_skuddaar01 == 1) {
        // Tallet er et skuddår.
        basic.showIcon(IconNames.Yes)
    } else {
        // Dessverre, testen feilet.
        basic.showIcon(IconNames.No)
    }
})
/**
 * Startet med oppgave 4 for øving 2. Tanken var å unngå å lagre tall som string og så hente ut tallet med noen funksjoner. (unngå disse str2num, num2str o.l.)
 * 
 * Med microbit er det utfordrende å vise informasjon på et skjermbilde så en unngår "scrolling". Derfor benyttes en del symboler og ventetegn.
 * 
 * Tanken er at hvert tall (årstall har fire siffer. 
 * 
 * 1000-plass, 100-plass, 10-plass or 1-plass
 * 
 * Hvert siffer får da en vekt og til sammen lages tallet med å legge 
 * 
 * sammen del-tallene.
 * 
 * Oppgave 4 passet da godt som eksperiment da dette krever 4 siffer. Oppgaven kunne blitt laget mer generisk med løkker som legger inn faktor basert på hvor mange siffer som oppgis, men det ble ikke gjort siden årstall skal ha 4 siffer. (bør ha i alle fall). Ble eksperiementer med å snu tallet, 1454 skrives slik 4541
 * 
 * Da kunne tall 1 i løkken ganges med 10^0 og så neste tallet med 10^1 osv.
 * 
 * På den måten kan en enkelt telle siffer og antall vekt-tall. Alternativt kunne en telle antall siffer, starte med 10ânt siffer og telle nedover med :10 eller * 0.1.
 * 
 * Men ingen av de idene ble tatt noe videre, da årstall som sagt har 4 siffer.
 * 
 * On shake og trykke på logo ble lagt inn fordi det var tungvint å taste inn siffer ved hver kjøring, og en slipper å endre kode for hver gang.
 * 
 * On shake legger inn et vilkårlig tall fra 400 BC til 2401 AD, men det er ingenting i veien for andre tall. NB før år 1582 var det annen skuddårsberegning enn i 2021.
 * 
 * Se de andre kommentarene for mer informasjon. NB.  Det kan hende en må vise javascript for å se kommentarene. Makecode har en egen evne å gjemme kommentarer når en beveger seg mellom blokkode og javascript.
 */
input.onButtonPressed(Button.B, function () {
    if (tellantallsiffer == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showNumber(tellantallsiffer)
    } else {
        tall_aar = tall_aar + tellantallsiffer
        basic.showNumber(tellantallsiffer)
        basic.showNumber(tall_aar)
        tellantallsiffer = tellantallsiffer * 0.1
    }
})
// Alternativ til å legge inn tallet slik som i oppgave 1 - 3
input.onGesture(Gesture.Shake, function () {
    tall_aar = randint(tall_aar_min, tall_aar_max)
    basic.showNumber(tall_aar)
})
// Logo viser om dagens dato er skuddår.
// Med en enhet som kunne lest inn klokken kunne denne, vist dagens info.
// RTC-modul må sjekkes ut.
// Innholdet i tall_år kan testes med A+B
// 2024 er et skuddår.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tall_tst_skuddaar01 = 2021
    tellantallsiffer = 1000
    tall_aar = 2024
})
/**
 * Skuddårsberegning. (Se javascript-koden for å se mange referanser og flere kommentarer)
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
let tall_a_input = 0
let tellantallsiffer = 0
let tall_aar = 0
let tst_tall_mulig_skuddaar01 = 0
let tall_aar_max = 0
let tall_aar_min = 0
let tall_tst_skuddaar01 = 0
let rulle0_9 = 0
tall_tst_skuddaar01 = 0
tall_aar_min = -500
tall_aar_max = 2401
tst_tall_mulig_skuddaar01 = 2401
tall_aar = 2021
tellantallsiffer = 1000
// A blar gjennom 0- 9
// 
// B lagrer tallet og * med 1000
// 
// A blar på nytt
// 
// B lagrer tallet og * med 100
// 
// A blar gjennom 0 - 9
// 
// B lagrer tallet og * med 10
// 
// A blar gjennom 0 - 9
// 
// B lagrer tallet og * med 10
// 
// Fire tall så vises tallet
// 
// Teller er blitt 4.
// 
// Logo tar vare på tallet og setter teller til 0
basic.forever(function () {
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    basic.pause(2)
})
