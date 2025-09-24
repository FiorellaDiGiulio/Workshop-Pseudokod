// Uppgift Students first grade
// MÅL: Räkna ut slutbetyget utifrån provresultat och inlämnade projekt.
// INPUTS: Vilka variabler som kommer till funktionen och vilken typ dehar – tex: exam: positivt heltal.
// RETURN: Vad ska skickas tillbaka efter beräkning eller behandling avinputs och vilken typ har den – tex. result: decimaltal.
// STEG 1: Beskriv nu i tur och ordning (STEG 2, osv.) hur koden logiskt ska fungera för att lösa uppgiften - tänk som ett bakrecept – och gör det tydligt. Spara allt i GitHub, rotera driver och gå vidare med nästa uppgift!

// 100, om betyget för tentan är mer än 90 eller om antalet genomförda projekt är fler än 10.
// 90, om betyget för tentan är mer än 75 och antalet genomförda projekt är minst 5.
// 75, om betyget för tentan är mer än 50 och antalet genomförda projekt är minst 2.
// 0, i alla andra fall.

Funktion slutbetyg (exam,projects)
Om exam > 90 eller project > 10 då
returnera: 100

Om exam > 75 och projects > 5 då 
returnera: 90

Om exam > 50 och projects > 2 då
returnera: 75 

return: 0


//Uppgift 2: Centry from year 8kyu
//: Det första århundradet sträcker sig från år 1 till och med år 100, det andra århundradet - från år 101 till och med år 200, etc.

Funktion århundrade (år)
Om århundradet = året/100
OM år / 100 = 0 
