
// Få tak i knappelementene
const hovedsideKnapp = document.getElementById("Hovedside");
const tryllingKnapp = document.getElementById("Trylling");
const balonggjøglingKnapp = document.getElementById("Balonggjøgling");
const sukkerspinnKnapp = document.getElementById("Sukkerspinn");
const kontaktKnapp = document.getElementById("Kontakt");
const containeridElement = document.getElementById("containerid");
const andini_med_kanin = document.getElementById("div4Id");
const info = document.getElementById("littImfo");
const header = document.getElementById("headerContent");
const element = document.getElementById('div4Id');
const element2 = document.getElementById("headerContent")
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const telefon = document.getElementById("littImfo")
const KontaktIfo2 = document.getElementById("KontaktIfo")
const Ballonggjøgling = document.getElementById("Ballonggjøgling")
const footer = document.getElementById("footer")



    const num1 = "neren";
    const num2 = "anders";
    const num3 = "@";
    const num4 = "try";
    const num5 = "kunst";
    const num6 = "lle";
    const num7 = ".no";
    const kontakt = "kontakt"
    const tegn = ":"
    const mellomroim = " "
    // Kombinerer strenger
    const combined = kontakt+tegn+mellomroim+num2 + num3 + num4 + num6 + num5 + num1 + num7;
    
    // Oppretter et nytt <p> element
    const pElement = document.createElement("p");
    
    // Setter innholdet til den kombinerte strengen
    pElement.textContent = combined;
    
    // Legger <p> elementet til i body av dokumentet
    document.body.appendChild(pElement);

// Initialiser TryllingID til å være skjult
pElement.style.display = "none"
// Initialiser TryllingID til å være skjult
telefon.style.opacity= 0;
TryllingID.style.display = "none";
KontaktIfo2.style.display = "none"
KontaktConteiner.style.display = "none"
Ballonggjøgling.style.display = "none"
hvor_lenge_har_holt_po.style.display = "block"
Sukkerspinnmaskin.style.display = "none"
// Lytte etter klikk på Trylling-knappen for å vise/skjule TryllingID
if (tryllingKnapp) {
    tryllingKnapp.addEventListener("click", function() {
        if (TryllingID.style.display === "none") {
            TryllingID.style.display = "block";
            Bor_du_i_Bergen.style.display = "none"
            KontaktConteiner.style.display = "none"
            footer.style.display = "none"
            Sukkerspinnmaskin.style.display = "none"
            hvor_lenge_har_holt_po.style.display = "block"
            pElement.style.display = "none"
            // header.style.display = "none"
            element.style.opacity = 0;};
            element2.style.opacity = 0;
            telefon.style.opacity= 0;
})}

// Eksempel: Skjul TryllingID og vis andre elementer når Hovedside-knappen trykkes
if (hovedsideKnapp) {
    hovedsideKnapp.addEventListener("click", function() {
        TryllingID.style.display = "none";
        Bor_du_i_Bergen.style.display = "block"
        KontaktIfo2.style.display = "none"
        KontaktConteiner.style.display = "none"
        hvor_lenge_har_holt_po.style.display = "block"
        Sukkerspinnmaskin.style.display = "none"
        pElement.style.display = "none"
        footer.style.display = "block"
        // header.style.display = "block";
        element.style.opacity = 1;  // Gjør elementet usynlig
        element2.style.opacity = 1;
        telefon.style.opacity= 0;
        // Sett andre elementer til synlige etter behov
    });
}


if (kontaktKnapp)
    kontaktKnapp.addEventListener("click", function() {
    telefon .style.opacity = 1
    TryllingID.style.display = "none";
    Bor_du_i_Bergen.style.display = "none"
    hvor_lenge_har_holt_po.style.display = "none"
    footer.style.display = "none"
    Sukkerspinnmaskin.style.display = "none"
    KontaktIfo2.style.display = "block"
    KontaktConteiner.style.display = "block"
    pElement.style.display = "block"
    pElement.style.marginTop= "-40%"

    
    })

    if (balonggjøglingKnapp)
        balonggjøglingKnapp.addEventListener("click", function() {
            (TryllingID.style.display === "none") 
            TryllingID.style.display = "none";
            Bor_du_i_Bergen.style.display = "none"
            KontaktConteiner.style.display = "none"
            TryllingID.style.display = "none";
            KontaktIfo2.style.display = "none"
            footer.style.display = "none"
            Ballonggjøgling.style.display = "block"
            hvor_lenge_har_holt_po.style.display = "none"
            Sukkerspinnmaskin.style.display = "none"
            pElement.style.display = "none"

           
        })

        if(sukkerspinnKnapp)
            sukkerspinnKnapp.addEventListener("click", function(){
                Sukkerspinnmaskin.style.display = "block"
                Ballonggjøgling.style.display = "none"
                TryllingID.style.display === "none"
                TryllingID.style.display = "none";
                Bor_du_i_Bergen.style.display = "none"
                KontaktConteiner.style.display = "none"
                TryllingID.style.display = "none";
                KontaktIfo2.style.display = "none"
                footer.style.display = "none"
                hvor_lenge_har_holt_po.style.display = "none"
                pElement.style.display = "none"
            })