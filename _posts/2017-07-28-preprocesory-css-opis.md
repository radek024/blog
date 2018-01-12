---
layout: post
title: Preprocesory i ich możliwości
author: Radek
categories: css strony-www
excerpt: Czyli krótki opis funkcji, które usprawnią stylizowanie stron.
comments: true
img-thumb: 2017-07-28.png
---

Tworząc strony WWW po pewnym czasie jesteśmy w stanie tworzyć je w bardzo szybki sposób. Jest to proces w dużej mierze powtarzalny, ponieważ za każdym projektem strony stoi to samo, czyli:

- plik(i) `html`,
- plik(i) `css`,
- plik(i) `js`,
- obrazki, media innego typu(dźwięk, film).

I tak do znudzenia. Zaczynamy tym samym doskonalić sztukę tworzenia stron. Zwracamy uwagę na semantykę, możliwości pseudoelementów czy też na charakter stron. To samo dzieje się z CSSem. Okazuje się, że dany kod możemy napisać krócej. Tutaj nie musimy dopisywać klasy, a `!important` schodzi na dalszy plan ceną kombinowania - *jakby to zaimplementować*?

W pewnym momencie odkrywamy preprocesory. Okazuje się, że pisanie stron można ułatwić jeszcze bardziej! Funkcje, które oferują nam te narzędzia sprawiają, że odkrywamy fun na nowo i często dajemy się ponieść fali. W jaki sposób? Chociażby dzieleniem wszystkiego na pliki, używaniem nazbyt dużej ilości zmiennych czy tworzeniem długich ścieżek dostępu do danego elementu w CSS.

Nie jest jednak tak, że dostępny mamy wyłącznie jeden preprocesor. To by było niezdrowe; gdy posiadamy wyłącznie jedno narzędzie w danej branży jego autor wie, że nie musi się martwić o swoją pozycję. Tym samym albo nie wprowadza w nim żadnych zmian, albo robi co chce. Przecież nikt mu nie dorównuje możliwościami, więc po co się *produkować*?

W kwestii preprocesorów mamy do wybrania wiele opcji: SASS, LESS, Stylus, PostCSS to najpopularniejsze z nich. Jaki wybrać? Jaki jest najbardziej popularny? Jaki jest najłatwiejszy do nauki? Który z nich poprawi naszą wydajność w tworzeniu stron?

Odpowiedzi jest tyle, ile osób korzystających z tych narzędzi. Dużo zależy od tego, na jaki się trafi. Przed wybraniem preprocesora należy nieco poczytać o jego możliwościach. Wiele z nich jest wspólnych. Jako przewodni wybiorę SASS (czy też SCSS). **Nie będzie to jednak poradnik jak zainstalować SASSa czy jakikolwiek inny preprocesor.** To raczej wstęp oraz opis możliwości takich narzędzi.

### Zmienne

Jedną z kilku możliwości oferowanych przez preprocesory to zmienne. W zależności od preprocesora definiuje się je inaczej. W SASSie wygląda to tak:

```css
/*definiujemy zmienne*/
$base-color: #BADA55;
$menu-link: #FEDCBA;

body{
   background-color: $base-color;
}
```
Jest to szczególnie wygodnie kiedy mamy ustaloną paletę barw. Dzięki temu możemy się do niej odwołać poprzez zmienne. Nie jest to jednak rewolucyjna zmiana w *workflow*, ponieważ zmienne w CSS (co prawda od niedawna) jako tako istnieją.

```css
:root{
  --base-color: #BADA55;
  --menu-link: #FEDCBA;
}

body{
  background-color: var(--base-color);
}
```

Problemem ze zmiennymi w CSSie jest taki, że nie wspierają ich starsze przeglądarki. Mamy jednak wiele rozwiązań:
poczekać na zwiększenie udziału przeglądarek wspierających te rozwiązanie,
używać zmiennych z CSS w preprocesorach (nie są do końca wspierane, więc te rozwiązanie raczej nie ma sensu),
zastosować regułę `@support` - o niej będzie kiedyś osobny na #bykiwkodzie,
pozostać przy podawaniu wartości przy każdym z elementów oddzielnie.

Ciekawie ten problem został rozwiązany [tutaj](https://codepen.io/jakealbaugh/post/css4-variables-and-sass). Nie mieszajmy jednak - zmienne w CSS mimo dopuszczenia przez przeglądarki są problematyczne.

### Nesting stylów

Chyba najpowszechniejszą funkcją preprocesorów to *nesting*. Jest to inaczej zagnieżdżanie, w tym przypadku stylów. Można dzięki temu zaoszczędzić dużo czasu. Przejdźmy od razu do przykładu:

```css
body{
 margin: 0;
 a{
  &:first-child{
    color: green;
  }
 }
}

.about-us .user{
  .user-description{
  padding: 40px;
 }
}
```

Da to identyczne rezultaty jak kod poniżej:

```css
body{
  margin: 0;
}

body a:first-child{
  color: green;
}

.about-us .user .user-description{
  padding: 40px;
}
```

Funkcja ta jest bardzo wygodna i nawet jeżeli nie mamy zamiaru korzystać z innych, to warto wziąć preprocesory pod uwagę wyłącznie z tego powodu.

Zagnieżdżanie kodu może ponieść za sobą pewne konsekwencje, które mogą być bolesne przy drobnych zmianach na *live* (co jest złą praktyką, ponieważ kod na produkcji zaczyna się różnić od kodu będącego w sieci). Mianowicie; jeżeli nie będziemy panowali nad zagnieżdżeniem, złamiemy niepisaną zasadę “do trzech selektorów”. Przy pisaniu kodu CSS bez preprocesorów możemy bez problemu mieć ją na uwadze. Przy stylizowaniu z wykorzystaniem m.in. SASSa zaczynają się schody i można bardzo szybko sprawić, że kod będzie nieco przydługi.

### Funkcja `@import`

`@import` pozwala nam na podział pliku stylów. Dzięki temu nie muszą one zawierać 600 linii w jednym pliku. Jest to bardzo przydatna funkcja, szczególnie jeżeli nie lubimy bałaganu. Rozwiązanie te idealnie sprawdza się przy m.in. projektowaniu strony pod systemy CMS. Wtedy możemy sobie podzielić nasz plik CSS na style ogólne, dotyczące stron statycznych oraz np.: wpisów.

Importowanie plików CSS jest popularne przy różnego rodzaju frameworkach, gdzie ilość stylów jest naprawdę bardzo duża. Wtedy organizacja pracy nie dość że jest łatwiejsza, to ponadto jesteśmy w stanie taki plik łatwo zoptymalizować poprzez dołączenie tylko potrzebnych stylów.

Warto podkreślić, że funkcja `@import` jest natywnie dostępna. Nie jest ona jednak powszechnie wykorzystywana m.in. ze względu na mniejszą wydajność od zwyczajnego `link`. Dlaczego zatem nie dodajemy podzielonych plików stylów za pomocą `link`? Kolejne dobre praktyki mówią o linkowaniu jak najmniejszej liczby plików stylów do pliku `.html`, więc nie stosuje się tak szczegółowego załączenia plików. W preprocesorach dotyczy to wyłącznie wersji produkcyjnej strony. Po przekonwertowaniu plików preprocesora otrzymujemy jeden plik CSS.

### Mixiny

Mixiny to kolejna z funkcji preprocesorów pozwalająca na ułatwienie pracy nad stroną. Często zdarza się nam powtarzać jakiś kod, na przykład `clearfix`. Dzięki mixinowi nie musimy pisać go kilkanaście razy:

```css
@mixin clearfix{
  content: "";
  display: block;
  clear:both;
}

.menu::after, .meta::after{
  @include clearfix;
}
```

Mixiny ponadto mogą przyjmować argumenty, co zwiększa ich możliwości.

```css
@mixin box($width, $height){
  width: $width;
  height: $height;
}

.panel{
  @include box(150px, 400px);
}
```

Funkcje preprocesorów łączone razem pozwalają na jeszcze sprawniejszą pracę; mixiny możemy zapisać do oddzielnego pliku, co pozwoli nam na szybsze znalezienie potrzebnej mieszanki.

CSS nie pozostaje w tyle. Mixiny są w trakcie implementacji pod funkcją `@apply`. Więcej o tym znajdziemy m.in. [tutaj](https://tabatkins.github.io/specs/css-apply-rule/).

### Funkcje

Jeżeli opisane opcje są dla nas niewystarczające, sami możemy coś napisać. Funkcje stoją przed nami otworem!

Same preprocesory oferują gotowe funkcje takie jak `ligthen()`. Ta akurat jest odpowiedzialna za zmianę odcienia danej barwy. Tego rodzaju usprawnień jest dużo. Idealnie nadają się do wykorzystania podczas stylizowania elementów, gdzie `:hover` odgrywa ważną rolę.

Funkcje przydatne są w dużych projektach. Bardzo przykład ich wykorzystania ukazuje prelekcja Uny Kravets - [Building a CSS Game](https://youtu.be/WmVH85G59Lk).

### SASS a SCSS

Kiedy już zaczynamy naszą przygodę z preprocesorem, często pierwszym poleconym jest SASS. Chwilę później pojawia się termin “SCSS”. Co to za cudo?

SCSS to w pewnym sensie bardziej przyjazna odmiana SASSa. Zanim wytłumaczę dlaczego, nadmienię że w tym drugim składnia jest uproszczona do maksimum. W SASSie nie korzystamy że średników na końcu oraz klamerek, a jeżeli chcemy korzystać z zagnieżdżania, musimy pamiętać o odpowiedniej ilości wcięć. W praktyce zatem całość jest nieco utrudniona.

SCSS jest pod tym względem bardziej klasyczny, dzięki czemu o wiele łatwiej go oswoić. Tutaj występują średniki oraz klamerki. Porównajmy kod SASSa oraz SCSSa:

```css
.menu
  box-sizing: border-box
  width: 760px
  margin: 0 auto
  padding: 20px
  background-color: #abdeca
  .menu-list
   list-style-type: none
   display: flex
   justify-content: space-around
    li:first-child .menu-link
    text-decoration: none
```

Identyczny kod w SCSS:

```css
.menu{
  box-sizing: border-box;
  width: 760px;
  margin: 0 auto;
  padding: 20px;
  background-color: #abdeca;
  .menu-list{
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
  li:first-child .menu-link{
    text-decoration: none;
  }
}
```

Różnice są widoczne gołym okiem. Który jest wygodniejszy? Kwestia gustu.

### Podsumowanie

Preprocesory mają jeszcze kilka funkcji, o których nie wspomniałem, na przykład *partials* czy pętle. Nie ma to jednak większego znaczenia, ponieważ są one integralną częścią wcześniej wymienionych narzędzi.

Fakt, że potrafimy już pisać kod CSS nie oznacza przejścia na preprocesory. Warto poznać wszystkie funkcje zanim pójdziemy krok dalej. Nie należy się obciążyć wiedzą i brnąć dalej jeżeli nie jesteśmy pewni niektórych kwestii.
