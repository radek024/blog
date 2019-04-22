---
layout: post
title: Gradienty w CSS
author: Radek
categories: css strony-www
excerpt: 2009 is now, bro.
comments: true
img-thumb: 2019-04-26.png
---

Nic nie trwa wiecznie. Łatwo możemy to zauważyć chociażby w modzie, gdzie trendy zmieniają się co jakiś czas. Nie inaczej jest z informatyką. Tutaj dobrym przykładem są [wykresy](https://www.tiobe.com/tiobe-index/) ukazujące jakie języki programowania były popularne 2-3 lata temu.

Zmiany również dotyczą stron. Dzisiaj tematem przewodnim są gradienty - nie da się nie zauważyć coraz większego nacisku na pastelowe przejścia. Czy nie głośną zmianą był [redesign](https://www.wirtualnemedia.pl/artykul/instagram-z-nowym-logo-i-zmienionym-interfejsem-wideo) loga Instragrama? Coraz więcej projektów bierze pod uwagę gradient jako istotna część wizualna nie tylko witryny, ale - jak wcześniej - także loga, czy całego systemu graficznego.

Jako osoba w internecie działająca już od 10 lat(tak, dekadę temu zacząłem się udzielać w sieci, sic!) pamiętam gradienty i ich falę. Mocne przejścia, trudna czytelność tekstu znajdującego się na takim gradiencie oraz brak wyczucia przywołuje na myśl fora, gdzie było do wyboru kilkanaście motywów kolorystycznych, usebary oraz wszelkiego rodzaju animacje Flash. Teraz gradient przybierają znacznie inną formę: często wysublimowane, delikatne oraz dopasowane czynią stronę milszą w odbiorze. Czasy złych gradientów najwyraźniej się skończyły na dobre.

### Czym jest gradient?

Dobrze, gradienty gradientami, ale co to tak naprawdę jest? Najłatwiej ujmując jest to połączenie co najmniej dwóch kolorów za pomocą przejścia, które miesza owe kolory. Gradientem, który możemy spotkać na co dzień jest na przykład tęcza.

![Obrazek przedstawia tęczę]({{site.baseurl}}/img/post-img/2019-04-26/tecza.png)

Łatwo zauważyć, że żółty przechodzi w zielony, który to przechodzi w niebieski, a następnie w czerwony i tak dalej.

Aby jednak się nie rozpędzać, warto podkreślić, że mamy dwa rodzaje gradientów w CSS, to jest **liniowy**(`linear-gradient`) oraz **promieniowy**(`radial-gradient`). Jak wygląda przykładowy zapis?

Duża część kodu jest zrealizowana za pomocą [codepena](https://radek024.github.io/blog/bykiwkodzie/html/css/strony-www/2017/06/02/zaloz_codepena/): kliknij [tutaj, aby przejść](https://codepen.io/radek024/pen/gyKavo).

### Gradient liniowy

W jaki sposób tworzymy zatem gradienty na stronach internetowych? To proste: za pomocą CSSa.

```css
.gradient{
  background-image: linear-gradient(red, blue);
}
```

Taki zapis utworzy nam przejście z czerwonego do niebieskiego. Warto zauważyć: gradient ten tworzy się z góry(zaczynając się od czerwonego) do dołu(kończy się na niebieskim). Możemy to zmienić, wpisując przed kolorami jedną z opcji, które zadziałają w następujący sposób:
- `to left` - przejście niebieskie z lewej do prawej o kolorze czerwonym,
- `to right` - przejście czerwone z lewej do prawej o kolorze niebieskim,
- `to bottom` - przejście czerwone z góry do dołu o kolorze niebieskim(czyli standardowe),
- `to top` - przejście niebieskie z góry do dołu o kolorze czerwonym.


Rzecz jasna możemy łączyć te opcje. I tak możemy zrobić `to left bottom` - jak widać, wyborów ustawienia takiego gradientu jest baardzo dużo. A i to nie koniec, ponieważ równie dobrze możemy wykorzystać słowo kluczowe `deg`, przed którym wstawiamy wartość. `to left bottom` odpowiada `225deg`.

Czy na pewno? Tak, ale tylko w określonym przypadku. Powyższe zapisy będą sobie równe wtedy i tylko wtedy, gdy wymiary elementu który tak stylizujemy(tj. wysokość oraz szerokość) będą sobie równe.

![Obrazek przestawia rozejście się gradientu w zależności od rozmiarów bloku]({{site.baseurl}}/img/post-img/2019-04-26/rozejscie-gradientu.png)

Spójrzmy na obrazek. Obrót jest identyczny(to jest 45 stopni), ale zielone pola, które zostały utworzone nie są sobie równe. Jeżeli zastąpimy czerwony blok gradientem łatwo wywnioskować, że rozłożenie kolorów w prostokącie nie będzie takie samo jak w kwadracie. Warto o tym pamiętać. Przedstawienie tego w praktyce jest pokazane na przykładzie pierwszym: [klik](https://codepen.io/radek024/pen/gyKavo).

Mogą się pojawić pytania o to, dlaczego zastosowany został `background-image`, a nie `background-color`, albo po prostu `background`. Otóż: dla przeglądarek gradient jest niczym innym jak obrazkiem. Może to wywołać zdziwienie, ale patrząc na to ze strony technicznej - nie jest to po prostu swego rodzaju grafika wektorowa, która jest ograniczona przez pewien obszar? Dlatego też jest to obrazek. `background` można użyć jak najbardziej, ale wtedy nie mamy możliwości ustawienia m.in. `background-color`. Eliminujemy sobie zatem wsparcie dostarczane przez przeglądarkę.

Podczas definiowania gradientu napisałem, że wykorzystuje on co najmniej dwa kolory. Nic nie stoi na przeszkodzie, żeby użyć na przykład pięć kolorów:

```css
.multicolor-gradient{
  background-image: linear-gradient(red, blue, yellow, black, green);
}
```

Teraz jeszcze dodać obrys - niech będzie 3px, dopisać *Metin2 player* po prawej stronie i… stop. Wszak 2019 to nie 2009.

Okej. Wiemy już, że możemy kontrolować kąt przejścia, kolory oraz ich ich ilość. Ponadto mamy także wpływ na to, jaką część przejścia będzie zajmował dany kolor. Wróćmy zatem do przejścia posiadającego pięć kolorów.

Uznajmy, że zależy nam na żółtym kolorze. Chcemy, aby zajmował jak najwięcej miejsca. Jeżeli chcemy, aby któryś z kolorów zajmował więcej przestrzeni, musimy po kolorze dać skąd i dokąd barwa ma zajmować miejsce. Weźmy pod uwagę taki kod:

```css
.custom-multicolor-gradient{
  background-image: linear-gradient(red 10%, blue 20%, yellow 25% 85%, black 90%, green 100%);
}
```

Jak zrozumieć taki zapis? Zobaczmy na czerwony. Zajmuje on pierwsze 10% miejsca, a później przechodzi w niebieski. Kolory te posiadają jedną wartość: jest to miejsce, gdzie osiągają właściwy kolor. Czerwony jest trochę w innej sytuacji, ponieważ przed nim nie ma kolorów - zatem jest on od początku, aż do wyznaczonego miejsca.

Inaczej sprawa ma się z żółtym. Posiada dwie wartości, a przejścia przy nim są zdecydowanie krótsze. Pierwsza z wartości wyznacza początek, a druga koniec koloru. Pomiędzy 20 a 25 procentem przestrzeni zachodzi przejście. Analogicznie z drugim końcem. Łatwo to stąd wywnioskować, że jeżeli nie chcemy przejścia, koniec pierwszej barwy i początek kolejnej musi mieć tą samą wartość. Dzięki tej opcji łatwo możemy zrobić *hamburger menu*, które jest pokazane w przykładzie III: [klik](https://codepen.io/radek024/pen/gyKavo).

We wszystkich przykładach używam zapisu słownego, ale równie dobrze może być to zapis szesnastkowy, rgb czy hsl.

### Gradient promienisty

Skoro omówiliśmy gradient liniowy, pora na kolejny. Gradient promienisty zachowuje się tak jak liniowy, tyle że teraz przejście rozchodzi się względem pewnego punktu, określonego za pomocą atrybutów.

```css
.custom-radial-gradient{
  background-image: radial-gradient(red, blue);
}
```

Warto zaznaczyć, że kolory będą się rozchodziły od pierwszego do ostatniego. W zależności od wymiarów elementu, gradient będzie miał kształt koła lub elipsy. Rzecz jasna możemy to kontrolować:

```css
.custom-radial-gradient{
  background-image: radial-gradient(circle at 30px 30px, red 10px, blue 30px);
}
```

Tutaj nie dość, że ustawiliśmy gradient o kształcie koła, to na dodatek jest on przemieszczony o 30px w lewo oraz w dół. Przejście z czerwonego do niebieskiego zachodzi na 20px przestrzeni pomiędzy kolorami. Jeżeli zależałoby nam na elipsie, możemy ustawić `ellipse` zamiast `circle`.

Co więcej: możemy kontrolować jak bardzo szeroki lub też jakie położenie ma mieć gradient. Możemy to robić za pomocą następujących opcji:
* `closest-side` - przejście będzie się rozchodziło do najbliżej krawędzi,
* `farthest-corner at x y` - przejście będzie się rozchodziło do najdalszej krawędzi o współrzędnych `x` i `y`,
* `closest-side at x y` - przejście rozchodzi się do najbliższej strony przy krawędzi `x` i `y`.

Praktyczne objaśnienie zawiera przykład czwarty: [klik](https://codepen.io/radek024/pen/gyKavo).

Poza tymi opcjami gradient działa na zasadach podobnych do liniowego - przejdźmy zatem do innych zastosowań gradientu, które mogą okazać się bardzo przydatne.

### Gradient jako filtr do tła

Jak wiemy, aby zastosować gradient w tle należy wykorzystać `background-image`. A nawet podstawowe kursy wskazują, że tło może stanowić więcej niż jeden obrazek. W połączeniu z gradientem możemy trochę je podrasować, nie martwiąc się o wsparcie oraz o wersję pierwotną grafiki.

```css
.przyklad1{
  background-image: linear-gradient(rgba(222, 132, 93, 0.3), rgba(255, 255, 255, 0.1)), url(‘adres_obrazka’);
}
.przyklad2{
  background-image: linear-gradient(rgba(2,155,193,0.3) 25%, rgba(255, 255, 255, 0.1)), url(‘adres_obrazka’);
}
```

W taki oto sposób tło w `.przyklad1` ma ładne, czerwone tło, natomiast w `.przyklad2` widoczny jest niebieski cień na zdjęciu. Im więcej prób, tym ciekawsze efekty - warto spróbować. Wizualizację przedstawia przykład piąty: [klik](https://codepen.io/radek024/pen/gyKavo).

Swoją drogą, czy to nie jest dobre zadanie do przerobienia w JS - za pomocą znacznika `input[type=range]` dla kolejnych kolorów w RBG zmienić przejście między kolorami. Ktoś się podejmie? ;)

### Powtarzanie gradientu

Inną, dość ważną cechą gradientu jest jego powtarzalność. CSS nie odstaje w tej kwestii i za pomocą jednej linijki również nasze przejście będzie powtarzane:

```css
.repeating-gradient{
  background-image: repeating-linear-gradient(45deg, transparent 0px 45px, #1D81AD 45px 90px, #B86E99 90px 135px);
}
```
Taki wzorek będzie nam się powtarzał co… właśnie, co ile? Łatwo możemy to obliczyć za pomocą podanych w zapisie wartości. Zaczyna się od przezroczystości, która jest szeroka na 45px. Kolejna barwa(możemy podejrzewać że to coś niebieskiego, ponieważ to te wartości są dominującymi) będzie miało twardą krawędź i identyczną szerokość. Analogicznie kolejny kolor. Szybka matematyka: 3*45=135, co potwierdza się z końcem ostatniej linii. Zdecydowanie łatwiej będzie to sobie wyobrazić za pomocą pratyki, która znajduje sie na snippecie - link był już podany wyżej.

Powtarzalność gradientu daje nam bardzo duże możliwości. Za jego pomocą możemy uzyskać bardzo ciekawe, geometryczne tła. Galerię takich prac zebrała Lea Verou pod [tym](https://leaverou.github.io/css3patterns/) adresem.

### Inne zastosowania gradientów

Zaskoczeni? Gradienty mają naprawdę wiele pól, gdzie mogą się popisać. Możemy wyłącznie za ich pomocą tworzyć różne, kolorowe tła:

```css
.example{
  background-image: linear-gradient(217deg, rgba(25, 228, 32, 0.8), rgba(25, 127, 96, 0) 70.71%), linear-gradient(127deg, rgba(170, 25, 90, 0.8), rgba(0, 55, 19, 0) 70.71%), linear-gradient(336deg, rgba(65, 4, 55, 0.8), rgba(20, 67, 25, 0) 70.71%);
}
```

W taki oto sposób mamy ładne tło, które możemy zmienić na inny odcień w razie potrzeby(to przecież wyłącznie parametry) i nakładać na dowolne bloki, ponieważ nie jest to grafika rastrowa - a zatem nie dostajemy *artefaktów* w razie zmiany skali.

Kolejny przykład wykorzystania gradientów - w sumie to nie tylko ich, mogą być przecież i obrazki - to tekst , którego kolor ustalamy za pomocą gradientu. Zerknijmy na kod:

```css
.text-filledby-gradient{
  background-image: linear-gradient(330deg, #FD11AF 0%, #DDA0BC 25%, #98FDFA 50%, #BBCC9A 75%, #BCAD97 100%);
  -webkit-background-clip: text;
  color: transparent;
}
```

Pierwsza linijka - jasna sprawa, gradient który przechodzi przez jakieś kolory. Magia dzieje się dopiero dalej. `background-clip` to właściwość definiująca w jaki sposób tło będzie działało w danym bloku. Tutaj chcemy aby tło zostało wyświetlone tylko na tekście znajdującym się w bloku Nie bez powodu mamy `color: transparent`: dzięki temu zapisowi widzimy gradient, który *de facto* teraz stanowi kolor naszego tekstu.

### Przykład: userbar

Dajmy się ponieść nostalgii. Jak wygląda typowy userbar? To wąski pasek z tekstem na jakimś tle, któremu towarzyszą co najmniej dwa gradienty: pierwszy odpowiada za linie, które są na całej szerokości paska, drugi zaś za eliptyczne rozjaśnienie góry lub dołu grafiki. Kolejny gradient może znaleźć się w tle.

![Obrazek przedstawia userbar, który został wykonany w CSS.]({{site.baseurl}}/img/post-img/2019-04-26/userbar.png)

Ktoś chętny? Zapraszam do użycia ( ͡° ͜ʖ ͡°)


Dobrze, zatem jedziemy z tematem. HTML będzie bardzo biedny: tak naprawdę wystarczy nam jeden element: `div.userbar`. W CSS ustalmy podstawowe parametry:
```css
.userbar{
  width: 350px;
  height: 19px;
  border: 1px solid #ddd;
  text-align: right;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  font-family: monospace;
  padding-right: 10px;
  line-height: 19px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
```

Tłumacząc po kolei: wysokość oraz szerokość to standardowe wymiary userbaru. Dodałem delikatne obramowanie, które pozwoli nam na odizolowanie grafiki od tła. Tekst ustawiłem z prawej, dodając 10px marginesu wewnątrz, dzięki czemu nie będzie on przyklejony zupełnie z prawej strony. Ponadto wszystkie litery są drukowane - to popularne rozwiązanie. `line-height` ustawiłem taką samą jak wysokość, dzięki czemu tekst jest wyśrodkowany w pionie. Zastanawiać może ostatnia linia w CSS - to obrys liter.

Teraz pora na gradienty. Nie podkreśliłem tego wcześniej, ale kolejność podawania jest bardzo ważna. To, co będzie podane jako pierwsze, będzie na wierzchu, a to, co ostatnie - na końcu. Zerkając na gradient, z pewnością jako pierwszy podamy białą, ledwo co widoczną łunę nad grafiką. Następnie będzie to szereg pasków ustawionych pod kątem. Na samym dole będzie żółto-niebieskie tło, czyli kolory które są charakterystyczne dla bloga.

```css
.userbar {
  background-image: radial-gradient(ellipse at 50% 0, rgba(255, 255, 255, 0.4) 50%, transparent 90% 100%),
    repeating-linear-gradient(135deg, transparent, rgba(0, 0, 0, 0.2) 0px 1px,transparent 1px 5px),
    linear-gradient(#ffa726 0 30%, #003459 70% 100%);
}
```

I oto mamy: zaczynamy od `linear-gradient` - jest to elipsa, wyśrodkowana w poziomie, w pionie zaś na samej górze. Aby nie dawać zupełnie białego tła, użyty został zapis `rgba`, który poza ustaleniem koloru, pozwala na wskazanie przezroczystości. Przejeżdża przez niemal całą wysokość.

Dalej wstawiony został gradient który się powtarza - to linie, które przechodzą przez całą grafikę. Mają szerokość 1px, są ustawione pod kątem 135 stopni i występują co 5px.

Ostatnim gradientem jest liniowy, który zaczyna się od żółtego i kończy się na niebieskim. Kolory te zajmują odpowiednio 30% przestrzeni w górnej i dolnej części grafiki, a pomiędzy nimi kolory przenikają się, tworząc przejście.

Tak prezentuje się userbar na żywo: [klik](https://codepen.io/radek024/pen/BEVGBR).

Tak oto zrobiliśmy prosty userbar. Czy to było trudne? Moim zdaniem nie - szczególnie jeśli uważnie czytaliście artykuł. Dobrym sposobem na potrenowanie gradientów jest właśnie tworzenie prostych grafik, które je wykorzystują. Może to najwyższy czas, aby wrócić do userbarów właśnie? :D

### Podsumowanie

Przygotowując się do tego artykułu, nie sądziłem że będzie zawierał aż tak dużo tekstu. Jak widać - gradienty nie są tematem prostym i wymagają sporo uwagi. Całe szczęście istnieje mnóstwo narzędzi, które pomagają nam w tworzeniu gradientów. Nie zmienia to jednak faktu, że należy rozumieć to czego się używa - a w tym właśnie ma pomagać ten artykuł.

Może znacie ciekawe przykłady wykorzystania gradientów? Piszcie w komentarzach! :D
