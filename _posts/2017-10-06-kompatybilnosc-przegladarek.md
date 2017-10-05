---
layout: post
title: Wsparcie dla przeglądarek
author: Radek
categories: bykiwkodzie css strony-www
excerpt: Support 'em all!
comments: true
img-thumb: 2017-10-06.png
---

Często podróżując po sieci można spotkać powiedzenie:

> Kto stoi w miejscu, ten się cofa.

Czy nie niesie ono ze sobą prawdy? Wystarczy tylko spojrzeć; metoda tworzenia layoutów za pomocą `float: left` odchodzi do lamusa na rzecz *flexboxa*. *Flexboxa* w tworzeniu stron goni *grid*, i tak wszystko ciągnie się dalej.

Przeglądarka przed obsługą nowych funkcji musi zostać zaktualizowana. Co jeżeli tak się nie stanie, a my chcemy iść z technologią do przodu ? Mamy kilka wyjść które możemy zastosować:
- użycie prefixów, czyli nie wprowadzonych w pełni funkcji w danej przeglądarce,
- zastosowanie komunikatu do użytkownika o zmianie przeglądarki,
- dołączenie plików umożliwiających prawidłowe wyświetlenie strony,
- użycie formuły `@supports`.

Pierwsze oraz drugie rozwiązanie nie wymaga zbyt dużo wysiłku - często prefixy można zainstalować jako dodatek do edytora, są do tego odpowiednie wtyczki itd. Komunikaty posiadają natomiast taką formę:

```html
<!--[if lt IE 8]>
 <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]--> 
```

Jeżeli przeglądarka jest przestarzała (tutaj: starsza od Internet Explorer 8), na stronie wyświetli się taki komunikat. Jest on w żywcem wzięty z [initializr](http://www.initializr.com/), czyli najłatwiej rzecz ujmując “bazy” pod stronę internetową.

### Modernizr

Warto nadmienić, że istnieją również pliki JavaScript, które pozwalają czytać stronę internetową w bezpiecznym trybie starszym przeglądarkom. Jeden z nich to [html5shiv](https://github.com/aFarkas/html5shiv), który jest częścią [modernizr](https://modernizr.com). Dzięki niemu możemy bez żadnych obaw pisać strony semantyczne. W razie wykrycia starej przeglądarki, skrypt uruchamia się i tworzy bloki, które przez nowsze przeglądarki są uznawane za semantyczne, a przez starsze - nie są uznawane wcale. Na tym polega przydatność tego rodzaju skryptów - przeglądarka, w której nie zostały zaimplementowane semantyczne znaczniki może rozwalić stronę na części, ponieważ np.: znacznik `article` nie jest rozumiany jako blok, a jako jakiś przypadkowy ciąg liter. Ponadto jeżeli w `html` jest ciąg wielu klas - istnieje bardzo duże prawdopodobieństwo, że to również zasługa modernizr. Klasy te możemy wykorzystać jako bazę do układania strony. Jeżeli w `html` jest klasa `flexbox` - na spokojnie możemy kodować stronę w oparciu o flexboxa. Modernizr jest standardem i należy go stosować.

### Tryb quirks

Co jakiś czas musi dojść do bardziej odważnego kroku w branży. Tak było w tworzeniu stron internetowych - gdzieś mniejwięcej w czasie kiedy udostępniony został IE6 był bardzo duży problem z renderowaniem stron internetowych. W sieci wisiało bardzo dużo witryn przestarzałych technologicznie. Postanowiono wtedy utworzyć (a raczej wydzielić) **tryb quirks**, który pozwolił na generowanie stron według starych standardów. Dzięki temu stare witryny są prawidłowo wyświetlane. Nowe natomiast są generowane według obecnych reguł.

Tryb Quirks uruchomi się automatycznie jeżeli nie dodamy `doctype` do naszej strony. Poza trybem quirks istnieją również dwa inne tryby:
- w pełni zgodny ze standardami - uruchamia się on w razie prawidłowego zakodowania strony,
- niemal w pełni zgodny ze standardami - *almost standard*.

Tryb standardowy wyświetla stronę w prawidłowym schemacie. Większość stron jest wyświetlana w *standards mode*.

Aby sprawdzić w jakim trybie wyświetlana jest strona należy wkleić następujący kod do konsoli na danej stronie internetowej:

``` js
(document.compatMode==='CSS1Compat'?'Standards':'Quirks') + ' mode.'; 
```

W konsoli otrzymamy komunikat w jakim trybie jest wyświetlana strona. Jak widać - dobre wyświetlanie stron nie leży wyłącznie w interesie osób tworzących strony WWW.

### Reguła `@supports`

CSS sam w sobie dostarcza często rozwiązanie problemu łatania starszych przeglądarek - jest to reguła `@supports`, która pozwala na zachowanie kompatybilności wstecznej bez dodatkowych plików. Schemat, który musi spełniać zapytanie jest następujący:

``` css
@supports(warunek){
/* css dla którego warunek jest spełniony */
}
```

Ze względu na ilość nowych funkcji jaka jest implementowana w CSS, `@supports` jest bardzo atrakcyjnym narzędziem.

Uznajmy, że mamy za zadanie napisanie prostego menu - będzie się ono składało wyłącznie z pięciu elementów, które muszą być wyśrodkowane pionowo i poziomo. Wysokość menu jest stała - wynosi 60px. Przy 600px szerokości ekranu menu musi się pokazywać w formie listy pionowej. Tak wygląda kod HTML:

``` html
<nav class="menu">
  <ul class="menu-list">
    <li class="menu-item">
      <a href="page-1.html" class="menu-link">Link 1</a>
    </li>
    <li class="menu-item">
      <a href="page-2.html" class="menu-link">Link 2</a>
    </li>
    <li class="menu-item">
      <a href="page-3.html" class="menu-link">Link 3</a>
    </li>
    <li class="menu-item">
      <a href="page-4.html" class="menu-link">Link 4</a>
    </li>
    <li class="menu-item">
      <a href="page-5.html" class="menu-link">Link 5</a>
    </li>
  </ul>
</nav>
```

Zajmijmy się kodem CSS. Jak najłatwiej będzie okodować takie menu? Obecnie najłatwiej będzie to wykonać za pomocą flexboxa. Przyjmijmy jednak starszy sposób - lepiej wspierany. Zróbmy to za pomocą `float`’ów. Na początek wyzerujmy `margin` i `padding` oraz zmienimy `box-sizing` na `border-box`:

``` css
*, *::before, *::after{
  box-sizing: border-box;
}

body, .menu-list{
  margin: 0;
  padding: 0;
}
```

Dalsze style będą łatwe do zrozumienia, więc po prostu je zarzucę:

``` css
.menu{
  width: 100%;
  min-height: 60px;
  border-bottom: 3px solid #bada55;
}

.menu-list{
  list-style: none;
  min-height: 60px;
}

.menu .menu-list .menu-item{
  float: left;
  width: 20%;
  text-align: center;
}

.menu-item .menu-link{
  line-height: 60px;
}
```

W taki sposób zrobiliśmy menu. Ale czy na pewno?

Podczas tworzenia zapomniałem o bardzo ważnej rzeczy - nie wyczyściłem `float:left`, przez co później mogę mieć problemy z innymi elementami strony. Przykładowy `cleafix` - bo tak to się nazywa - zrobiłem analogicznie jak w [tym wpisie](https://radek024.github.io/blog/bykiwkodzie/css/2017/05/19/pseudoklasy_oraz_pseudoelementy/).

``` css
.menu-list::after{
  display: block;
  content: "";
  clear: both;
}
```

OK. I tak oto zrobiliśmy proste menu. Teraz zadbajmy o jego [responsywność](https://radek024.github.io/blog/bykiwkodzie/css/2017/09/15/responsive-web-design/):

``` css
@media screen and (max-width: 600px){
  .menu .menu-list .menu-item{
    float: none;
    width: 100%;
  }
}
```

Nie jest to jednak idealne rozwiązanie. Wykorzystujemy hacka - `line-height` pozwala na określenie wysokości linii tekstu. My tutaj użyliśmy go jako właściwości do wyśrodkowania elementów pionowo. Jest to z pewnością rozwiązanie solidne, które będzie wyświetlało się we właściwy sposób niezależnie od wersji przeglądarki. Niemniej jest to tak paskudne, że całość prosi się o napisanie tego za pomocą flexboxa. Ponadto gdybym nie pamiętał o wyzerowaniu `margin`esów oraz `padding`ów wysokość menu mogłaby być inna. I co ważne - *stabilne* rozwiązanie jest zapewnione poprzez zapisanie starszej metody jako ogólnej - inaczej można napotkać problemy. Dodajmy zatem takie rozwiązanie, ale tylko wtedy gdy `display: flex` jest wspierany. Będzie to wyglądało tak:


``` css
@supports (display: flex){
  .menu-list{
    background: #ddd;
    display: flex;
    text-align: center;
    vertical-align: middle;
    align-items: center;
  }

  .menu .menu-list .menu-item{
    flex: 1;
  }

  @media screen and (max-width: 600px){
    .menu-list{
      flex-direction: column;
    }

    .menu .menu-list .menu-item{
      margin: 10px 0;
    }
  }
}
```

Kruci, zdecydowanie lepiej. `.menu-list` posiada dodatkowo tło - aby była pewność, że reguły działają. Ponadto dodałem margines dla `.menu-item`, który jest wyłącznie zmianą stylistyczną - tej nie było wcześniej, ponieważ `line-height` ją zapewnił. Rozwiązanie z flexem jest ponadto o tyle lepsze, ponieważ pozwala na łatwe rozbudowanie menu o kolejny odnośnik. W rozwiązaniu z `float:left` będzie należało zmienić szerokość bloków.

Warto pamiętać o kodowaniu w takiej formie. Na początku implementujemy starsze rozwiązanie, a dopiero pod warunkiem kompatybilności z przeglądarką dodajemy “bardziej prawidłowy” kod CSS.

`@supports` pozwolił nam na implementację tego rozwiązania bez obaw o to z jakiej przeglądarki użytkownik korzysta. Jeżeli zdecydowalibyśmy się wyłącznie na flexboxa, istniałoby ryzyko że menu się po prostu posypie. Tutaj mamy pewność że wszystko będzie dobrze.

Co jeśli przeglądarka jest na tyle stara, że nie rozumie tej reguły? Co wtedy ze stylami które są wewnątrz niej? Zostaną one po prostu zignorowane. Jeżeli dodamy do całości jeszcze prefixy zapewniamy naprawdę porządną strukturę menu.

Całe menu jest dostępne pod tym adresem: [kliknij, aby przejść do menu](https://codepen.io/radek024/pen/XeggJZ).

### Caniuse

Aby stwierdzić, czy rzeczywiście potrzebujemy dodatkowego kodu w `@supports` możemy sprawdzić jak przeglądarki radzą sobie z danymi właściwościami w CSSie. Nie mamy obaw jeżeli chcemy zapisać `color: red` - tutaj jesteśmy pewni że wszystko zadziała poprawnie. Natomiast jeżeli chcemy użyć właściwości `display: grid` możemy mieć jakieś wątpliwości.

Aby było nam łatwiej kodować strony internetowe możemy sprawdzić jakie właściwości są obecnie zaimplementowane  w przeglądarce. Istnieje do tego specjalny portal - [caniuse.com](https://caniuse.com/)

Dla `display: grid` otrzymamy następujące wyniki:

![Zrzut ekranu przestawiający kompatybilność przeglądarek dla CSS Grid]({{site.baseurl}}/img/post-img/2017-10-06/fot01.png)


Ten sposób wyświetlania elementów obsługuje 73% przeglądarek(jeżeli weźmiemy pod uwagę prefixy). Czy to jest dużo? Moim zdaniem nie. Dobrze byłoby aby dana technologia była obsługiwana przez 95-98% przeglądarek. Stąd też jeżeli pokusimy się o budowę w oparciu o CSS Grid warto dodać regułę `@supports`, zapewniając tym samym kompatybilność.

### Podsumowanie

Jak widać strony internetowe posiadają bardzo szeroki wachlarz możliwości jeśli idzie o wsparcie starszych przeglądarek. Często należy dostosować stronę do wymagań klienta - a jednym może być kompatybilność z chociażby IE 6 - chociaż dzisiaj przy zdrowych zmysłach podjęcie się takiego czegoś jest istnym szaleństwem. :) Posiadając jedną taką ilość narzędzi mamy naprawdę rzetelne zaplecze, które należy wykorzystać.

Warto zajrzeć:
- [Menu oparte o regułę @support](https://codepen.io/radek024/pen/XeggJZ),
- [Caniuse](https://caniuse.com/),
- [nieco więcej na temat trybu quirks](https://www.quirksmode.org/css/quirksmode.html).
