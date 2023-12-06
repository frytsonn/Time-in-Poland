function odliczanie()
    {
        var dzisiaj = new Date();

        var dzien = dzisiaj.getDate();
        if(dzien<10) dzien = "0" + dzien
        var miesiac = dzisiaj.getMonth()+1; //jeden potrzebne jest po to żeby syczeń był 1 a nie 0 (bez +1 styczeń miałby numer 0 ponieważ w programowaniu numerujemy od zera)
        if(miesiac<10) miesiac = "0" + miesiac
        var rok = dzisiaj.getFullYear();

        var godzina = dzisiaj.getHours();
        if(godzina<10) godzina = "0" + godzina  // dodawanie 0 przed pojedynczymi cyframi
        var minuta = dzisiaj.getMinutes();
        if(minuta<10) minuta = "0" + minuta
        var sekunda = dzisiaj.getSeconds();
        if(sekunda<10) sekunda = "0" + sekunda

        document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;

        setTimeout("odliczanie()",1000) // setTimeout odświeża stronę a 1000 to czas co ile (czas musi być podany w milisekundach) czyli co sekunde będzie odświerzanie
    }