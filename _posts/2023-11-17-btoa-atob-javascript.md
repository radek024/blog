---
layout: post
title: Praktyczne zastosowania btoa i atob w JavaScript
author: Radek
categories: strony-www javascript
excerpt: Szyfrowanie, przechowywanie danych w localStorage i generowanie seedów - wszystko w jednym artykule!
comments: true
img-thumb: 2023-11-17.png
---

Kiedyś, kiedy zaczynałem działanie wokół stron internetowych miałem jeden projekt, którego używam właściwie do dzisiaj - w nieco zmienionej formie, ale jednak. Była to forma strony startowej, na podstawie której mogłem wyklikać jakieś konkretne zakładki, których używam najczęściej. 

Takich projektów powstało trzy. Same strony wspominam dobrze - to były proste, ale fajne, praktyczne rzeczy, których mogę swobodnie używać. Projekty te fajnie dokumentowały mi moje postępy wiedzy. I tak jak pierwszy projekt był dostosowany tylko do mojego monitora, tak ostatni już był responsywny - używał flexboxa, posiadał także informację o aktualnym czasie i tak dalej. 

Potrzeba jest matką wynalazków. Strony te były wygodne, ale w momencie gdybym chciał coś zmienić, to nie mogłem tego zrobić bez ingerencji w kod. Wszystko działało ręcznie. Uznałem jednak, że taki stan jest akceptowalny i od dobrych kilku lat działam z wykorzystaniem takiej formy właśnie. 

### Rola `atob` oraz `btoa` w Javascript

Cała myśl o powrocie do rzeczy pojawiła się wraz z pomysłem na generowanie hashu na potrzeby jakiegoś projektu. Samo generowanie hashu jest możliwe do napisania w JS i uważam, że nie jest to coś nie do zrealizowania. Aby jednak oszczędzić czas, to działanie takie wykorzystuje realizuje `atob` oraz `btoa`. Funkcje te odpowiednio szyfrują oraz rozszyfrowują wartość podaną w argumencie. Hash taki jest wygodny, bo dane są chronione w podstawowy sposób, są łatwiejsze w przekazywaniu, a zepsucie czegokolwiek jest zwyczajnie trudniejsze.

`btoa` ma jednak ograniczenia. Wiąże się to ze znakami diakrytycznymi. W naszym języku występuje pewne bardzo polskie zdanie, to jest: Zażółć gęślą jaźń. Jest to zdanie zawierające wszystkie polskie *ogonki*. Przy próbie utworzenia z nich hasha zwrócony zostanie błąd. Całość wynika z faktu, że metody wcześniej wymienione w swoim działaniu obejmują wyłącznie znaki, które są reprezentowane przez pojedynczy bajt. A jak dobrze wiemy, polskie znaki - podobnie jak np.: emoji są reprezentowane jako złożone ciągi, które nie mają swojego odwzorowania w podstawowym ciągu znaków (ASCII). Dla przypomnienia - tabela kodów ASCII poniżej.




Tylko jak połączyć projekt strony startowej oraz tych dwóch funkcji? Otóż: na podstawie hasha można modyfikować stronę. Hash może zawierać strukturę danych, która spłaszczona do ciągu znaków posiada unikalną reprezentację aktualnej konfiguracji dla strony startowej. Rzecz jest o tyle wygodna, że taką reprezentację mogę przechowywać w np.: localStorage lub w samej aplikacji, a jak zmienię linki - to zapisać nowo utworzonego hasha. Dzięki temu taka strona startowa może być konfigurowalna czy też dostępna w konkretny sposób dla użytkownika z dowolnego urządzenia. Brzmi super, nie?


### Rozwiązanie problemu kodowania znaków dla `btoa`

Posiadając wiedzę o ograniczeniach `btoa` oraz `atob`, oraz potencjalny plan na ich wykorzystanie, należy dać krok wstecz - a więc odpowiednio przygotować dane do dalszego operowania na nich. Wiemy zatem, że `btoa` nie operuje na wszystkich znakach. Zadaniem na chwilę obecną jest zatem przejście do standardu, który zapewni wsparcie. Tutaj udostępniam rozwiązanie prosto z MDN, które skutecznie pozbawi nas tego kłopotu:

```js
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

// Usage
bytesToBase64(new TextEncoder().encode("a Ā 𐀀 文 🦄")); // "YSDEgCDwkICAIOaWhyDwn6aE"
new TextDecoder().decode(base64ToBytes("YSDEgCDwkICAIOaWhyDwn6aE")); // "a Ā 𐀀 文 🦄"
```

Na podstawie tych dwóch funkcji oraz sposobu ich wywoływania (który też można ograć osobnymi funkcjami) mamy pełne rozwiązanie. 

A jak rozwiązać wątek JSONa i sprowadzania go do stringa? Tutaj mamy proste rozwiązanie: za pomocą `JSON.stringify()` oraz `JSON.parse()` tworzymy lub spłaszczamy strukturę danych. 

### Przykładowa implementacja

Dobrze, skoro mamy wszystko - możemy działać. Na potrzeby wpisu przetworzymy, a następnie zapiszemy w localStorage dane zawarte w jakiejś strukturze. Wracając do przykładu z początku - lecimy z przykładową stroną startową. JSON wraz z przykładowymi danymi niech wygląda następująco:

```js
{
 "tiles": [{
      "tileTitle": "Facebook",
      "tileIcon": "icon-facebook-squared",
      "tileLink": "https://www.facebook.com",
      "tileColor": "#000"
     },
     {
      "tileTitle": "Gmail",
      "tileIcon": "icon-mail-alt",
      "tileLink": "https://mail.google.com",
      "tileColor": "#000"
     }
 ],
 "bookmarks": [{
      "bookmarkName": "Mapy Google",
      "bookmarkLink": "https://www.google.pl/maps"
     },
     {
      "bookmarkName": "Dysk Google",
      "bookmarkLink": "http://drive.google.com/"
     },
     {
      "bookmarkName": "Codepen - radek024",
      "bookmarkLink": "https://codepen.io/radek024"
     },
     {
      "bookmarkName": "Kalendarz Google",
      "bookmarkLink": "https://calendar.google.com/calendar/r"
     }
 ]
}
```

Co możemy zrobić, aby osiągnąć zamierzony cel? Na podstawie listy kroków będzie nam łatwiej:
* Sprawdzić, czy istnieje wartość w zmiennej w localStorage.
* Jeżeli tak, to koniec, trud skończon. Jeżeli nie - przejść do kolejnego kroku.
* Podaną wartość zamienić na płaską strukturę.
* Zmienić kodowanie tak, aby było możliwe do zaszyfrowania w Base64.
* Zapisać do zmiennej w localStorage.

Pierwsze dwa kroki są potrzebne, chociażby ze względu na ograniczenie wykonywania kodu oraz ewentualne nienadpisywanie zmodyfikowanej konfiguracji. Rzecz podzielmy na sensowne funkcje:
`checkAndStoreData(data)` - sprawdza, czy dane już istnieją w localStorage. Jeśli nie, to spłaszcza dane, koduje je do Base64 i zapisuje w localStorage pod określonym kluczem.
`retrieveData()` - sprawdza, czy dane istnieją w localStorage. Jeśli tak, to pobiera zakodowane dane, dekoduje je z Base64 i zwraca oryginalne dane. W przeciwnym razie zwraca null.
`isDataPresent()` - czy dane istnieją w localStorage.
`flattenData(data)` - spłaszcza dane do postaci JSON za pomocą JSON.stringify.
`encodeToBase64(data)` - koduje dane do Base64.
`decodeFromBase64(base64)` - dekoduje dane z Base64.
Dzięki całości kod jest bajecznie prosty:

```js
class LocalStorageManager {
  constructor(key) {
    this.key = key;
  }

  checkAndStoreData(data) {
    if (this.isDataPresent()) {
      console.log("Wartość już istnieje w localStorage. Koniec.");
      return;
    }

    const flattenedData = this.flattenData(data);
    const base64EncodedData = this.encodeToBase64(flattenedData);

    localStorage.setItem(this.key, base64EncodedData);
    console.log("Dane zostały zapisane do localStorage.");
  }

  retrieveData() {
    if (!this.isDataPresent()) {
      console.log("Brak danych w localStorage.");
      return null;
    }

    const base64EncodedData = localStorage.getItem(this.key);
    const decodedData = this.decodeFromBase64(base64EncodedData);
    
    console.log("Dane zostały pobrane z localStorage:");
    console.log(decodedData);
    
    return decodedData;
  }

  isDataPresent() {
    return localStorage.getItem(this.key) !== null;
  }

  flattenData(data) {
    return JSON.stringify(data);
  }

  encodeToBase64(data) {
    const bytes = new TextEncoder().encode(data);
    return bytesToBase64(bytes);
  }

  decodeFromBase64(base64) {
    const bytes = base64ToBytes(base64);
    return new TextDecoder().decode(bytes);
  }
}

function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
}

// Przykładowe dane
const exampleData = {};

const localStorageManager = new LocalStorageManager("bwk_content");
localStorageManager.checkAndStoreData(exampleData);

const retrievedData = localStorageManager.retrieveData();

```

I całą obsługę mamy złapaną - super rzecz, nie? Poza obsługą strony startowej widać w tym sporo możliwości. Rzecz nie jest jednak kompletna. Czego brakuje? Przede wszystkim, to obsługi podawania własnego seeda dla konfiguracji. No i wstawienia tego do samej aplikacji.

### Przykładowe zastosowanie Base64 oraz localStorage

Zaszyfrowane w Base64 dane przechowywane w localStorage mogą być używane w różnych kontekstach, w zależności od potrzeb aplikacji. Dobrym przykładem jest to, co zostało zrobione w ramach wpisu, ale wcale nie gorszym - generowanie seedów dla gier. W Minecrafcie na podstawie seeda generowany był świat - i to co do zasady, to tutaj też się sprawdzi. Kolejny przykład - koszyki w sklepie. Dane te mogą być przechowywane, podobnie jak ustawienia użytkownika (takie jak tryb nocny/dzienny). 

**Jakich danych nie należy w taki sposób przechowywać?** To również ważne. Chodzi o to, aby do konkretnych potrzeb używać konkretnych rozwiązań. **Takie narzędzie nie będzie skuteczne dla przechowywania haseł, kluczy API, czy strategicznych informacji o użytkowniku.** LocalStorage służy do przechowywania informacji bardzo podstawowych i warto zadbać o taki stan. Brak localStorage nie powinien wpływać na stabilność aplikacji. W naszym przypadku - możemy uruchomić podstawową konfigurację, co chroni przed wysypaniem się całości. Nie będzie tak w przypadku, gdzie użytkownik podaje swoją datę urodzenia - takie dane nie powinny trafiać do localStorage.

{% include content_note.html info="Warto pamiętać, że localStorage może przyjąć aż do 5 megabajtów danych, co w przypadku tego rodzaju informacji stanowi bardzo dużo miejsca. LocalStorage w pewnych przypadkach możemy skutecznie uruchomić w miejsce cookiesów, które mieszczą o wiele mniej informacji" %}

### Podsumowanie

Wracając do początku artykułu: w ten oto sposób mogę wrócić do projektu i napisać do jeszcze raz - znowu zgodnie z dobrymi praktykami, obowiązującym stylem oraz możliwością konfiguracji. Jak jednak widać, rzecz może mieć zdecydowanie szersze rozwiązanie. Stąd też pomysł na wpis. LocalStorage czy `btoa` mogą mieć o wiele więcej zastosowań. Przykładowo, `btoa` w łatwy sposób pozwoli na przechowywanie akcji z kodu ASCII. Opcje zastosowania można na luźno mnożyć. Mam nadzieję, że rzecz będzie przydatna i dla Was!
