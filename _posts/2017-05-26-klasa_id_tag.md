---
layout: post
title: Klasy, ID oraz nazewnictwo
author: Radek
categories: strony-www css
excerpt: W CSS mamy kilka, jak nie kilkanaście sposobów na wystylizowanie elementu. Przykładami tego..
comments: true
img-thumb: 2017-05-26.png
---


W CSS mamy kilka, jak nie kilkanaście sposobów na wystylizowanie elementu. Przykładami tego są chociażby:


- znaczniki,
- klasy,
- ID,
- inline,
- atrybuty.


I rzecz jasna najpopularniejsze rozwiązanie to klasy. Dlaczego nie znaczniki lub też ID? Zanim to się okaże jasne, warto krótko opisać każdą z metod - wady oraz zalety.

### Znaczniki

Za pomocą znaczników zdecydowanie najłatwiej jest stylizować. Aby nadać jakieś cechy danemu elementowi, należy go po prostu podać:

```css
a{
 text-decoration: none;
 font-size: 22px;
}
```

Czy są zalety takie rozwiązania poza szybkością implementowania go? Trudno powiedzieć; dużo zależy od stylu, jaki przyjęliśmy wraz z podjęciem pracy nad projektem. Na tej stronie używam znaczniki celem stylizowania strony, ale nie bez powodu - chciałem zachować jak najbardziej naturalny układ pliku markdown, na którym to opieram wpisy (Markdown to pewnego rodzaju stylizowanie pliku za pomocą specjalnych zestawów znaków - coś na styl BBCode, niegdyś tak popularnego na forach). Style te są jednak ustalone według pewnego schematu i te, które używam wyłącznie we wpisach (a tak jest przy chociażby nagłówkach w artykule) są efektem dziedziczenia po klasach. Ogólnie jednak rzecz biorąc rozwiązanie wykorzystujące wyłącznie znaczniki jest raczej odrzucane ze względu na to, że stylizujemy każdy z nich na stronie. Powyższy kod wystylizuje wszystkie odnośniki. A co jeżeli chcemy wystylizować w taki sposób wyłącznie znaczniki w menu? Musimy to jakoś oznaczyć - tutaj wchodzą w grę **klasy**.


### Klasy

Klasy to najbardziej powszechne rozwiązanie w stylizowaniu stron internetowych. Możemy je wykorzystać w projekcie dowolną ilość razy.

```css
.menu-item{
 text-decoration: none;
 font-size: 22px;
}
```

Teraz każdy element z klasą `menu-title` będzie posiadał cechy zawarte w klamerkach. I tak oto w prosty sposób określiliśmy, że zależy nam wyłącznie na elementach menu... no właśnie nie do końca. Przecież taka klasa może zostać nadana do np.: autora wpisu. Czy jest to OK? Kłania się tutaj pojęcie **semantyki nazewnictwa**. Czym to jest?

Jako projektujący mamy wpływ na to, jak treść zostanie przedstawiona pod względem kodu. Aby projekt łatwo było można rozpoznać nawet po dłuższym czasie od jego napisania, stosuje się nazwy klas w taki sposób, aby można było bez problemu ponownie się odnaleźć. Nazywanie klas odpowiednio ułatwia pracę w dużym stopniu. I nie tylko klas w sumie - wszystkie elementy(w tym zmienne w JSie, ID oraz inne atrybuty dobrze opisane stanowią połowę suckesu całego projektu). Tutaj klas używam chociażby w `body` - abym mógł wystlizować odpowiednio inne elementy witryny w zależności od jej rodzaju. Istnieje kilka szkół nazwewnictwa odnośnie kodu CSS - chociażby BEM czy Atomic CSS. Fajna seria dot. tej kwestii powstała na portalu [Na Frontendzie](https://nafrontendzie.pl/metodyki-css-1-oocss/).

Klasy możemy używać wielokrotnie, możemy również przypisywać ich kilka do dokumentu. Należy jednak mieć na uwadze, że co za dużo to nie zdrowo. Jeżeli okaże się, że kod HTML tworzony przez nas posiada zbyt dużo klas w elemencie, to takie zjawisko nazywa się **classitis**. Z reguły kod CSS takiej strony można napisać o wiele lepiej. Przypadłość ta jest częsta u początkujących.

### ID

ID do stylizowania na stronie możemy wykorzystać wyłącznie raz na stronie. W teorii.

```css
#menu{
 width: 100%;
 height: 60px;
 border-bottom: 2px solid #D9A8DD;
}
```

W praktyce wygląda to następująco: jeżeli użytkownik w jednym pliku nada blokowi dwa razy ID o takiej samej nazwie, oba zostaną wystylizowane. I zaczynają się schody: dlaczego tak jest, jeżeli ID można użyć wyłącznie raz, dlaczego stylizują się oba itd. Stylizowanie za pomocą ID jest mało popularne. Wystarczy spojrzeć na frameworki CSS: osobiście nie widziałem, aby jakiś wykorzystywał ID w przykładach używanego kodu (mam tu na myśli stylizowanie).

Rezultatem tego wszystkiego jest niemal całkowite wyparcie ID ze stylizowania. Co w przypadku jeżeli będziemy potrzebowali drugi raz takiego samego elementu? Możemy naginać zasady, ale na rękę będzie to tylko nam. Strona powinna być **skalowalna**.

### Inline
Jeszcze nie spotkałem z poważnym projektem witryny, który posiada wyłącznie style inline. Jak to wygląda?
```html
<style>
 .menu{
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #D9A8DD;
 }
</style>
<!-- [...] -->
<nav class="menu">
<ul style="padding: 0;">
  <li>
   <a href="adres.html" style="color: red;">
    Odnośnik
   </a>
  </li>
  <li>
   <a href="adres.html" style="color: red;">
    Odnośnik
   </a>
  </li>
</ul>
</nav>
```

Po prostu mówiąc: cechy nadajemy poprzez artybut `style` w znaczniku lub poprzez umieszczony w kodzie znacznik `style`. Zaleta tego rozwiązania jest conajmniej jedna: nie ma pliku CSS, który musiałby być pobrany z serwera. Wad jest dużo więcej: brak skalowalności, trudność w edycji stylów, nieschludny kod HTML, brak poszanowania zasady *progressive enhancement*. Czasami używa się tego rozwiązania przy używaniu różnego rodzaju CMSów; tam, gdzie treść się zmienia(np.: zdjęcie do listy artykułów), to z reguły tam właśnie wartości podaje się nie inaczej jak przez inline. Należy również podkreślić, że szablony maili posiadają style inline - w tym przypadku jest to powszechna praktyka.

### Atrybuty
Atrybuty to naprawdę ciekawa sprawa. Przyjrzyjmy się im bliżej:

```css
[class^=box]{
  width: 250px;
  height: 250px;
  background-color: red;
}
```

Stylizowanie poprzez atrybuty jest całkiem rzadko stosowane. Dotyczy ono głównie powtarzalnych elementów, gdzie wykorzystanie tego sposobu daje znaczącą wygodę. Powszyższy przykład kodu wykorzystuje właściwość, która wystylizuje wszystkie elementy, których klasy zaczynają się od wyrażenia "box". Stąd obecne w frameworkach, gdzie niektóre elementy potrzebują tych samych stylów, a różnią się wyłącznie częścią klasy. Jeżeli jednak dodajemy ten sam atrybut (czy też atrybuty, które zaczynają się od pewnego podobnego ciągu znaków) okazać się może, że ten sposób zdecydowanie przyśpieszy proces tworzenia stylów. Należy jednak pamiętać że tak podany styl będzie miał wpłw na wszystkie elementy posiadające klasę zaczynającą się od "box" (więc jeżeli chcemy zastosować style wyłącznie w jakimś obszarze, warto to zaznaczyć porzez np.: zastosowanie klasy, która jest elementem nadrzędnym). Zapisów warunkowych jest bardzo dużo, podałem jeden przykład. Możemy również stylizować elementy, które zawierają, kończą się, zawierają spacje pomiędzy sobą itd. Dodatkowo warto dodać, że zapisy te można łączyć. Dobrze opisało to [CSS Tricks](https://css-tricks.com/attribute-selectors/) w jednym z swoich ciekawych artykułów. Może mały challenge? Kto wykorzysta możliwie największą ilość zapisów w jednym divie? Chętnych proszę o danie znać w komentarzu - a coś się wymyśli. ;)

### A teraz o wszystkim zapomnij

`!important` to narzędzie, które pozbawi Cię nerwów, straty czasu oraz przedewszystkim kontroli nad danym atrybutem w stylach. `!important` pozwala na natychmiastowe stylizowanie danego elementu bez obaw o dziedziczenie, specyficzność CSS czy inne, nadpisane style. Jeżeli zaczniesz stylizować z użyciem ww. artybutu, okaże się że naprawdę skrócisz pracę nad projektem - ale w razie rozbudowy np.: witryny praca nad nią będzie prawdziwą udręką. Dlatego też `!important` nie powinno się stosować. Wyrażenie te uniemożlwia nadania innych stylów, niezależnie czy użyjesz do stylizowania styli inline, klas czy ID. Istnieje pewna niepisana zasada: *jeżeli nie jesteś w stanie zrobić czegoś za pomocą wyłącznie dziedziczenia w CSS, oznacza to że nie jesteś wystarczająco dobry*. Osobiście odpuszczam wyłącznie w jednym przypadku: podczas dostylizowania gotowych już szablonów na CMS - mam na myśli tutaj już takie szablony, gdzie zaaplikowanie styli może być naprawdę trudne, tymbardziej jeżeli posiadamy dwadzieścia jeden tysięcy trzydzieści siedem miejsc, gdzie takie style mogą być dodane, ale rzecz jasna nie działają (ponieważ nadpisują je inne wtyczki czy inne dodatki). Dlatego też `!important` **należy mieć gdzieś w tyle głowy, ale nie oznacza to, aby takiego rozwiązania używać powszechnie** (najlepiej szukać rozwiązania tak długo, aż się je znajdzie).

### Podsumowanie

Osobiście gorąco polecam i zalecam stosowanie klas. Jest to rozwiązanie najlepsze spośród dostępnych. Czasami jednak łatwiej jest zastosować np.: style inline (często w motywach do CMS korzysta się z artybutu `style`) i nie ma problemu, aby ich użyć - ale pamiętajmy, aby jak największą całość trzymać w osobnym pliku. Jeżeli dodamy do tej kwestii [pseudobloki i pseudoklasy](https://radek024.github.io/blog/bykiwkodzie/css/2017/05/19/pseudoklasy_oraz_pseudoelementy/) otrzymamy wtedy podstawę obecnego stylizowania stron internetowych.


Do całości dorzucam jeszcze link(i):

- [Progressive Enhancement – zapomniany fundament](http://webroad.pl/inne/3722-progressive-enhancement-zapomniany-fundament) autorstwa Comandeera
- [Metodyki CSS](https://nafrontendzie.pl/metodyki-css-1-oocss/) za portalem [nafrontendzie](https://nafrontendzie.pl)
- [Stylizowanie za pomocą artybutów - CSS Tricks](https://css-tricks.com/attribute-selectors/)
