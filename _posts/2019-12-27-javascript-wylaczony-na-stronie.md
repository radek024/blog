---
layout: post
title: Strona odcięta od JavaScript - co teraz?
author: Radek
categories: bykiwkodzie js
excerpt: Strona bez JavaScript? Coś nietypowego...
comments: true
img-thumb: 2019-12-27.png
---

Strona internetowa. Jak dobrze wiemy, strona składa się z mnóstwa ilości znaków w różnej formie. Organizując je możemy wydzielić kilka rzeczy. I tak oto pisząc stronę najczęściej dzielimy ją na następujące części:
HTML,
CSS,
JavaScript,
zasoby (obrazki, filmy, muzyka).

Co je charakteryzuje? HTML odpowiada za treści, CSS za wygląd, JS - za mechanikę strony. Czy to nie idealny podział? Wszystko ma swoje miejsce! Takie coś już dawno zostało zauważone. Określa się to mianem **progressive enhancement**.

Zastanawiając się nad uszczupleniem witryny, można usunąć wiele rzeczy. W istocie dla użytkownika najważniejsza powinna być treść strony. Jak często się o tym zapomina - wie każdy webdeveloper. Poczynając od nagłówków wykonanych za pomocą obrazka (bez żadnego wsparcia!), przez brak responsywności na “syn sąsiada zrobił wszystko w tym klikanym i działa”!

I w całym tym zamieszaniu zapomina się o treści. Coraz więcej budowanych stron nie jest w stanie działać bez CSSowych haków czy też JavaScriptu. To proces nie do zatrzymania, ponieważ to nie opłacalne. Skoro są możliwości (nawet mniej *legalne*), należy z nich korzystać.

Należy się zatem pogodzić z faktem nie-budowania stron idealnych, ponieważ trudność jaka idzie za tym jest za duża. Stąd osobiście widzę tutaj możliwość spróbowania się w nietypowych warunkach. Dzisiaj na warsztacie przeglądarka. Każda przeglądarka. Bez wielkich różnic. No - z wyłączonym JavaScriptem. Ale to za chwilę.

### Budowanie strony wraz z JavaScriptem

JS ułatwia wiele rzeczy na stronie. Hamburger menu, slajdy, różnego rodzaju interakcje z użytkownikiem. Jest bardzo powszechną pomocą w tworzeniu witryny. Jako, że łatwo przedstawić będzie działanie JavaScriptu na prostym menu, zbudujmy takowe.

[Menu jest dostępne na codepen.](https://codepen.io/radek024/pen/gObrgEG)

I oto menu. Niecałe 200 linijek kodu sprawia, że używanie strony jest znacznie przyjemniejsze. Zanim przejdziemy dalej, chciałbym wskazać na linie mogące być problemem - skąd i dlaczego takie coś się bierze?

W klasie `.page-nav` używam następującej sekwencji:
```css
.page-nav {
   line-height: 60px;
}
```

Właściwość `line-height` to nic innego jak interlinia, czyli odległość między wierszami. W tej klasie ustawiam ją na `60px` , czyli na wysokość menu. Jakie wnioski z tym idą? Tekst jest wyśrodkowany względem pionu. Ten prosty zapis sprawia, że nie ma potrzeby martwić się o takie coś jak dobrze wyglądające linki w menu.

```css
.toggle-menu {
  cursor: pointer;
  flex: 0;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
```

Kolejna ciekawa sekwencja. Co się tu dzieje? Otóż: `.toggle-menu` nie jest nam potrzebne w zwykłym, pełnym menu. Na to wskazuje sam CSS. **Nie jest to jednak zwykłe ukrycie elementu.** Jest to ukrycie, które jest dostępne. O tym więcej można poczytać tutaj: [klik!](https://a11yproject.com/posts/how-to-hide-content/)

```css
.menu-list.open + .toggle-menu{}
```

A to? To… też bardzo ciekawy zapis. Rzecz jasna kluczowe są dwie rzeczy, to jest klasa `.open` oraz symbol plusa. Jeżeli uruchomimy menu, w jednej chwili działa CSS zapisany pod tą sekwencją. Symbol plusa oznacza, że odwołujemy się do elementu obok.

Z plusem można robić bardzo dużo ciekawych kombinacji w CSS. Szkoda, że nie ma o nim dużej świadomości, ponieważ często potrafi ułatwić pracę - szczególnie w sytuacjach, gdzie dostęp do HTMLa mamy utrudniony. Załóżmy następujący scenariusz: jest artykuł do wystylizowania. Każdy kolejny paragraf po podtytule artykułu jest do przeredagowania. Musi być napisany większym fontem i innym kolorem. Szybki zapis:

```css
h3 + p {/*tutaj dzieje się cała magia!*/}
```

I ot - problem wystylizowania danej sekcji z głowy!

```css
  .page-title {
    order: 2;
  }
```

*Last but not least.* Gdzieś pomiędzy kodem można było trafić na słowo kluczowe `order`. Dzięki niemu możemy ustalać położenie elementu, o ile używamy `display:flex`.

### A co jeżeli…

...wyłączymy JavaScript? Używając strony na urządzeniu o niskiej rozdzielczości możemy mieć poważny problem. Nie mamy dostępu do menu, efektem czego strona jest prawie martwa. Warto zatem zapewnić coś co sprawi, że problem ustąpi.

Niestety, codepen (a o [zaletach posiadania konta](https://radek024.github.io/blog/bykiwkodzie/html/css/strony-www/2017/06/02/zaloz_codepena/) na takim portalu pisałem) nie będzie wdzięcznym środowiskiem dla pisania strony bez wsparcia JavaScript. Dlatego też kod związany z menu kopiuję do pliku `.html`. Na co dzień jestem jednak leniwy i lubię organizować moją pracę w taki sposób, abym miał jak najwięcej z głowy. Dlatego też przy pisaniu strony od zera korzystam z magicznego szablonu zwanego [initializr](http://www.initializr.com/). Tam wybieram sobie czego potrzebuję na dzień dobry przy stronie i pobieram gotowy plik. Z initializr korzystałem też w [mojej książce](https://helion.pl/ksiazki/bootstrap-tworzenie-wlasnych-stylow-graficznych-radoslaw-gryczan,bootgr.htm). Pobieram przykładową stronę o następującym schemacie:

![Obrazek przedstawia konfigurację pobieranej paczki z initializr]({{site.baseurl}}/img/post-img/2019-12-27/ustawienia-initializr.png)

Jak widać - dość surowo. Nie ma ostrzeżeń co do starszych wersji przeglądarek (a o tym jak pisać strony tak, aby było jak najbardziej bezpiecznie pisałem m.in. [tutaj](https://radek024.github.io/blog/bykiwkodzie/css/strony-www/2017/10/06/kompatybilnosc-przegladarek/)). Brakuje też GA czy favicon - ale dzisiaj to wszystko tylko dla przykładu. Zależy nam na uniezależnieniu naszej strony od JSa.

Zanim zaczniemy rozpisywać co trzeba zrobić aby tak się stało, warto zerknąć na kod. Na samym początku jest bardzo ciekawa linijka:

```html
<html class="no-js" lang="">
```

I tutaj zaczyna się nasza przygoda. Linijkę skopiowałem z pliku źródłowego(pamiętać o uzupełnieniu atrybutu `lang`!), jeżeli jednak chciałbym to zrobić z poziomu przeglądarki (dokładniej: narzędzi deweloperskich) całość prezentuje się tak:

```html
<html class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths" lang="">
```

Jest różnica, nie? To robi nam JS. A dokładniej - `modernizr`. To plik z instrukcjami, który bada możliwości przeglądarki. Jeżeli dostęp do JSa jest - klasa `.no-js` jest wyrzucona, a w jej miejsce dodawane są technologie, które przeglądarka obsługuje.  W przeciwnym razie klasa zostaje. I tutaj zaczyna się właściwa część artykułu.

### Obsługa strony z wyłączonym JavaScript

Jak wyłączyć JS w przeglądarce? Jeżeli mamy zamiar napisać stronę bez jego działania, to fajnie byłoby, aby nie sprawiał trudności poprzez normalnie funkcjonowanie.

Aby JavaScript nie mącił, możemy się go pozbyć na dwa sposoby:
- systemowe wyłączenie,
- usunięcie plików JavaScript z projektu.

Oczywiście pierwsza metoda jest tą wygodniejszą - wystarczą bowiem dwa kliknięcia. Przechodzimy do *Narzędzi deweloperskich* za pomocą klawisza `F12`, a następnie - nic innego nie robiąc - klikamy `F1`. **Uwaga:** mam włączony ciemny motyw - natywnie jest włączony motyw jasny. W pokazanym oknie konfiguracji, na samym jej dole będzie taka część strony:

![Obrazek przedstawia konfigurację pobieranej paczki z initializr]({{site.baseurl}}/img/post-img/2019-12-27/wylaczenie-js-chrome.png)

Wystarczy kliknąć *Disable JavaScript*. Witaj w niemal niedostępnym Internecie!

Dobrze, mamy gotowe środowisko. Teraz należy przejść do strony.

Po przejściu na rozdzielczość, gdzie menu zmienia się do postaci klikalnej listy nie trudno zauważyć, że przycisk nie działa. JavaScript został wyłączony w przeglądarce. Jak widać - nawigowanie po stronie jest zupełnie niemożliwe.

Jako autor menu wiem, że te rozwija się zaraz po dodaniu klasy `.open` do znacznika `ul`. Czy zatem nie będzie najłatwiej dodać tę klasę i zakończyć temat wyłączonego JavaScript w przeglądarce? Nie, oczywiście że nie! Dodanie klasy sprawi, że menu będzie zawsze otwarte po wejściu na stronę. Niezależnie czy JS jest włączony czy nie, niezależnie również do tego, czy chcemy mieć dostęp do menu. Warto zatem znaleźć złoty środek.

Kiedy uczyłem się podstaw responsywności, menu było pierwszą rzeczą z jaką się konfrontuje rzeczywistość. Było też dość trudne, ponieważ dodawało bardzo dużo co do strony - z kilku elementów w jednej szerokości robi się lista zajmująca część ekranu. Czy to nie będzie wyjściem tutaj? Menu jest jednak wrażliwym elementem, dlatego warto sprawdzić kilka rzeczy:
- czy nowy blok czegoś nie przysłoni?
- czy menu nie ma nadane gdzieś w kodzie `position: fixed`?
- czy warto było szaleć tak?
- czy zastosowany kod nie rozwali strony w dalszych częściach?

Pytanie pierwsze jest bardzo zasadne. Każda osoba, która projektuje strony internetowe zdaj sobie sprawę z tego, że przysłonięcie bądź ukrycie czegoś ma duży wpływ na stronę jako-taką. Na ogół nazywamy to [responsywnością](https://radek024.github.io/blog/bykiwkodzie/css/2017/09/15/responsive-web-design/) - ale nie tutaj. Responsywność na ogół to efekt zbioru metod w CSSie, które zmieniają układ strony na wygodny w odbiorze na danym urządzeniu, czasem poprzez ukrycie czegoś. Zanim zaczniemy coś ukrywać, czyniąc stronę bardziej dostępną (czyli działającą bez JavaScript), warto wiedzieć co będzie ukryte. Jako że działamy na przykładzie - nie mamy potrzeby niczego zmieniać, ponieważ poza menu nie mamy treści.

Drugie pytanie. Tutaj jest znacznie łatwiej znaleźć odpowiedź. O tym [jak działa `position` w CSS](https://radek024.github.io/blog/bykiwkodzie/strony-www/css/2018/08/03/position-w-css/) już pisałem, zatem na szybko: jeżeli nawigacja będzie miało nadane `position: fixed`, to duża część ekranu będzie cały czas zakryta poprzez menu. Warto sprawdzić kod. Nasze menu nie ma takiej sekwencji kodu, zatem nie ma potrzeby tego zmieniać.

Tak, warto było szaleć tak.

Dalej: strona na ogół powinna być skalowalna. Po to używa się klas, aby móc je zastosować po raz drugi. Nierzadko na stronie jest więcej niż jedno menu - tak, lista kategorii czy paginacja to również nawigacja! Z tego powodu warto się zastanowić czy przypadkiem  zmiana zastosowana dla jednego elementu nie wpłynie negatywnie na drugi. Tak może być! Szczególnie jeżeli do kodowania mamy slider lub inny pop-up. Należy mieć to na uwadze. My mamy dość łatwo, ponieważ to nadal przykład.

Wystarczy jednak gdybań. Zajmijmy się konkretami. Co teraz należy zrobić? Napisać jakiś CSS, dzięki któremu wszystko będzie działać. I - uwaga - będzie śmiesznie. Ten CSS już jest!

```css
  .menu-list.open {
    transform: unset;
    z-index: 1;
  }
```

Ot, magiczne linijki. Teraz dopiszmy kilka znaków:

```css
  .menu-list.open, .no-js .menu-list {
    transform: unset;
    z-index: 1;
  }
```

Trud tak właściwie skończon. Kwestia dopisania takiej sekwencji jeszcze w miejscach, tam gdzie jest klasa `.open`. Aby menu nie zajmowało bardzo dużo przestrzeni, zmniejszam interlinię:

```css
  .menu-list.open + .toggle-menu, .no-js .menu-list + .toggle-menu{
    transition: .2s;
    background-color: #ddd;
  }

  .no-js .menu-list .menu-item{
    line-height: 0.5;
  }
```

Na tym polega sukces pisania dobrego CSSa. Reguły są uniwersalne i przejrzyste, co w skutkuje bardzo łatwym dopieszczaniem kodu. Można uznać, że przykład jest bardzo trywialny - ale czy na pewno? Za wszystkim stoi na początku wspominany *progressive enhancement*. Gdyby JS obsługiwał wszystko co związane z wyświetlaniem menu, korekcja nie byłaby taka prosta.

### Podsumowanie

Ten artykuł był z pewnością nietypowy. Główna treść zamyka się w niemal tysiącu znaków. Czy w takim razie reszta to zanudzanie? Moim zdaniem nie. Przy pisaniu stron - szczególnie kiedy nie zna się podstaw (przykład: wiem jak budować strony za pomocą buildera w Wordpressie!) trudno o takie rozwiązania na dzień dobry. Niestety… to duża strata dla nas, użytkowników. Stąd taki długi wstęp - przy tworzeniu stron kluczowe jest pisanie kodu, którego da się użyć, a nie takiego, gdzie te same instrukcje są wywoływane osobno.

Stąd praca domowa: pobrać dowolny element działający za pomocą JavaScript na stronie i dopisać do niego funkcjonalność tak, aby śmigał po wyłączeniu go. Czy zadanie jest trudne? To się okaże. Do dyspozycji pozostają komentarze - zachęcam do ich użycia!
