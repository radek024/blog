---
layout: post
title: Responsive Web Design
author: Radek
categories: bykiwkodzie css
excerpt: Czym jest RWD?
comments: true
img-thumb: 2017-09-15.png
---

Czym jest RWD? Jest to skrót od wyrażenia *Responsive Web Design*. Jak to przetłumaczyć? Tutaj odpowiedzi jest tyle, ile artykułów na ten temat. ;) W dużym uproszczeniu jest to przystosowanie strony internetowej pod względem oglądania treści na różnego rodzaju urządzeniach: komórkach, telefonach, tabletach i tak dalej.  Po co komu takie cuda?

Żyjemy coraz szybciej, zależy nam na łatwym dostępie do wszystkich treści nawet na kamieniu - dlatego też w obecnych czasach **wszystkie** strony powinny być responsywne. Dajmy na to, #bykiwkodzie są jak najbardziej responsywne. Dzięki temu wpisy wygodnie się czyta zarówno na komputerze, jak i komórce.

### Zasada mobile first oraz content first

Ekrany jakie mamy do dyspozycji są jednak nieco różne od siebie. Wszak monitor  komputera jest w stanie pomieścić o wiele więcej informacji aniżeli ekran komórki. Stronie która jest bogata w treści, trudno o umieszczenie wszystkiego na jednym wyświetlaczu. Jak zatem ułożyć stronę, aby można było udostępnić jak najwięcej informacji dla odbiorcy?

Stąd bierze się pojęcie *mobile first*. Jest to swego rodzaju system regulujący schemat budowania strony. W swoich założeniach zaleca on budowanie strony od wersji mobilnej, tak aby inni użytkownicy również mieli dostęp do informacji w wygodnej formie. Jest to dobre rozwiązanie, ponieważ np.: w razie problemu załadowania styli w pełni mamy pewność, że strona wyświetli się w odpowiedni sposób.

OK. To bardzo dobrze, że strona wyświetla się nam w prawidłowy sposób na kilku rozdzielczościach. Łatwo jest jednak zauważyć, że często strony przyjmują podobne schematy. Doskonałym przykładem jest tutaj menu - jest ono chowane i zamiast niego pojawia się tak zwany *hamburger menu*. Powodów dla których stosowana jest taka praktyka nie należy długo szukać - menu nie jest na tyle ważne, aby zajmowało dużą część dostępnego ekranu na urządzeniach o mniejszych wyświetlaczach. Ważniejsza jest treść strony. Czy w takim razie powinniśmy tworzyć strony pod względem układania ich elementów? Nie lepszym wyjściem jest postawienie na jej treść? Przecież po to właśnie przychodzi użytkownik. Stąd też pojawiło się określenie *content first*. Jest ono spokrewnione z *mobile first*, ale lepiej oddaje logikę budowania dobrych stron.

A jak osiągnąć responsywność strony? Robimy to poprzez style:
```css
@media screen and (max-width: 450px){
body{
  background-color: red;
}
}
```
Tutaj utworzyliśmy style, które ustawią kolor tła na czerwony, jeżeli szerokość ekranu będzie równa maksymalnie 450 pikseli. Analogicznie jest z innymi responsywni elementami.

###  Viewport

Przygoda z responsywnością nie kończy się stricte tutaj. Aby wszystko działało, musimy dodać jeszcze tak zwany *viewport*:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
Jest to podstawowy i bardzo powszechny zapis umieszczany w `head`. Wartość `width` określa szerokość strony(czyli `device-width`), a `initial-scale` - jej przybliżenie, w tym przypadku jest to standardowe wyświetlanie strony bez zooma.

Bardzo często można się spotkać z użyciem `maximum-scale` oraz `minimum-scale`. Ich stosowanie jest złą praktyką. Określają one maksymalne oraz minimalne przybliżenie jakie użytkownik może ustawić na stronie. Do naszego interesu nie należy ograniczanie możliwości odwiedzającego stronę.

Poza zaaplikowaniem styli w pliku CSS możemy dodać responsywność za pomocą atrybutu `media` w znaczniku `link`:

```html
<link rel="stylesheet" media="min-width: 760px" href="computer-styles.css" />

```

Te style załadują się przy szerokości ekranu wynoszącej co najmniej 760px. Dzięki tej metodzie dodawania styli responsywnych odchudzamy główny plik CSS i mamy pewien ład w plikach. Nie jest to jednak powszechna praktyka - odwiedzający ma do załadowania wtedy kilka plików CSS, a nie jeden. Ponadto style z reguły nie są na tyle ciężkie, aby podział był konieczny.

Na tym opiera się całość działania stron responsywnych.

### Ogólnie o responsywności

Tworzenie stron nie responsywnych jest złe; całkiem niedawno [Android wyprzedził Windowsa](http://gs.statcounter.com/press/android-overtakes-windows-for-first-time) w rankingu systemów operacyjnych w Internecie. Android jest systemem przeznaczonym przedewszystkim dla smartfonów - a za tym idzie konieczność przystosowania swoich witryn do urządzeń. Jeżeli zatem mamy tworzyć własne strony jako responsywne to warto przygotować sobie schemat, który to ułatwi. Jak wiadomo - responsywność tak naprawdę to obecnie podstawa, więc z pewnością jest przygotowane coś, co pozwoli na mniejsze tracenie czasu nad pisaniem kodu - tą rzeczą są frameworki CSS. Jednym z najpowszechniejszych jest **[Bootstrap](http://getbootstrap.com)**, który można spotkać praktycznie wszędzie. Swego czasu nawet [naskrobałem nieco więcej na jego temat](https://goo.gl/sus928). Powstaje zatem pytanie - czy warto uczyć się jak działa RWD, jak pisać kod responsywny oraz kilku innych rzeczy skoro mamy Bootstrapa i inne frameworki CSS?

Oczywiście, że tak! Ba, **RWD powinno być pierwszą rzeczą, jaką napotkamy zaraz po projektach w HTML i CSS**. Dzięki poznaniu RWD jesteśmy w stanie o wiele szybciej załapać każdy framework CSS za jaki się weźmiemy. Są one oparte na niczym innym, jak właśnie na znaczniku `media`. I jest to ważne - jeżeli zaczniemy od frameworka, nie będziemy wiedzieli jak dostosować szablon strony pod swoje potrzeby. Dlatego też zanim zaczniemy naukę Bootstrapa, Foundation czy jeszcze innego narzędzia, skupmy się na RWD.

### Podsumowanie

Moim zdaniem RWD to naprawdę przyjemna rzecz. Jako kodujący stronę czuję, że mam wpływ na elementy, ich pozycję na stronie, mogę zmienić ich wysokość oraz szerokość. To w pewnym sensie budujące, ponieważ pozwala łatwo zauważyć efekty. Uważam, że nauka RWD jest łatwa i - jak wspomniałem - to podstawą tworzenia stron.

*Fajnie fajnie, ale skąd się uczyć?* Osobiście uważam, że warto się skupić na tych oto linkach:
- [Responsive Web Design Tutorials](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g9Vh9MAA-XKnfJsWZnPZFw) autorstwa The Net Ninja
- [PSD to Responsive Website Tutorial autorstwa The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9j-0YIv3EDq58-B1yZWvw8_)
- [Jak stworzyć stronę w Responsive Web Design? autorstwa Damiana Wielgosika(kodu.je)](https://www.youtube.com/watch?v=H7LUUsbpbrg)

Miłego kodowania!
