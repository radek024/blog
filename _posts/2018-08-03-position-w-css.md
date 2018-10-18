---
layout: post
title: Pozycjonowanie w CSS
author: Radek
categories: bykiwkodzie strony-www css
excerpt: O position słów kilka.
comments: true
img-thumb: 2018-08-03.png
---
﻿Tworzenie stron internetowych nie jest szczególnie trudne w obecnych czasach. Do wyboru mamy mnóstwo możliwości: możemy kodować strony za pomocą grida, flexboxa, floatów, frameworków (czyli tak naprawdę gotowych rozwiązań korzystających z ww. narzędzi) czy nawet - o zgrozo - tabel. Rzecz jasna wybór będzie nie zawsze ten sam, ponieważ strona stronie nie równa i często różne witryny będą wykorzystywały różne konfiguracje.
Należy jednak podkreślić, że nie zawsze tak było. Nie ma w tym tajemnicy - flexbox czy grid nie należą do starych rozwiązań. Uznajmy że mamy rok 2006. Wtedy kodowanie było trudniejsze. Jedną z metod rozmieszczania elementów na stronie było użycie `position`, o którym dzisiaj mowa.

### Rola `position`

Skoro już wiemy że `position` niegdyś służyło do tworzenia stron możemy trochę rozwinąć ten temat. To było dość wygodne rozwiązanie; wystarczyło odpowiednio pociąć szablon strony internetowej wykonany w programie graficznym. Następnie należało odpowiednio go rozmieścić według wytycznych w szablonie. Wtedy pisanie stron internetowych wyglądało jak budowanie z klocków. Swoją drogą: to stąd pochodzi powiedzenie “pociąć layout” - teraz już raczej nie stosujemy takiej praktyki.

Wracając do tematu; czym się charakteryzowało takie kodowanie? Przede wszystkim wiązało z dużą ilością grafik w witrynie. To było nie do końca korzystne, ponieważ czas ładowania strony (przy ówczesnym łączu) był duży. Ale z drugiej strony layout był niesamowity w swojej oprawie graficznej - i bardzo często trudny do jakichkolwiek zmian funkcyjnych, o responsywności czy też dostępności nie wspominając. Nie każdy element wykorzystywał jednak samo `position`; bloki takie jak `input` korzystały z np.: `background-position`. Dzięki temu było mniej kombinowania: można było tylko zmienić obramowania na zero, a kolor tła w polu formularza ustawić na ten z szablonu lub uczynić przeźroczystym. Przy okazji: w sieci nadal wiszą [poradniki](http://webmade.org/kursy-online/warstwy-kurs-css.php) jak tworzyć takie witryny. Co jeszcze ciekawsze takie strony nadal w sieci działają - serdecznie pozdrawiam chociażby [rpgmaker.pl](http://rpgmaker.pl/) :). Oczywiście nie jest to wzór nowoczesnej strony internetowej, ale działa (w luźnym tego słowa znaczeniu).

Możemy zatem stwierdzić: `position` w CSS pełnił ważną rolę. Czy w obliczu tylu doskonalszych technologii jest nadal ważny? Pewnie! Nadal jest stosowany w wielu miejscach. Często jednak dużo osób ma problem z tą funkcją. Gdzie dać `position: relative`, `position: absolute` czy też coś innego? Zatem: do tłumaczenia!

### `position` w praktyce

Aby zacząć używać tej funkcji CSS należy poznać jej właściwości. Jakie to są? Po kolei to będą:
- `static` - jest to natywna wartość,
- `relative`,
- `absolute`,
- `fixed`,
- `sticky` (nad którą prace trwają).

Ponadto, aby operować wykorzystać w pełni możliwości `position` możemy posłużyć się właściwościami `top`, `right`, `bottom`, `left`. Za co odpowiadają? Przede wszystkim za umieszczenie elementu na stronie. One określają odległość od “natywnego“ położenia.

Jeżeli nie nadamy żadnej właściwości, to standardową wartością dla `position` będzie `static`. Nie charakteryzuje się on żadnym specjalnym zastosowaniem. Czasami się jej jednak używa - na przykład gdy chcemy aby określony element miał właśnie tą wartość podczas gdy pozostałe mają np.: `fixed`.
        Elementy które posiadają wartość `absolute` możemy rozmieszczać na całej stronie, niezależnie gdzie się znajduje. Aby wszystko było jasne, przeanalizujmy mały przykład.

```html
<div class="banner absolute">
  <div class="square"></div>
</div>
```

Kod CSS:

```css
.banner{
  width: 300px;
  height: 150px;
  border: 1px solid #000;
  padding: 20px;
}

.square{
  width: 75px;
  height: 75px;
  border: 1px solid #000;
}

.banner.absolute .square{
  position: absolute;
  top: 10px;
  left: 150px;
  background-color: #eee;
}
```

Wklejając ten kod w dowolny edytor, na przykład do [codepena](https://radek024.github.io/blog/bykiwkodzie/html/css/strony-www/2017/06/02/zaloz_codepena/) dostaniemy kwadracik umieszczony dokładnie 10 pikseli od góry oraz 150 pikseli od lewej strony ekranu. Warto zauważyć jedną rzecz: `div.banner` posiada `padding: 20px;`, czyli wewnętrzny margines. `position:absolute` nie zwraca na to uwagi - element zostaje umieszczony tam gdzie chce osoba która koduje. Czy to nie potężne narzędzie?

Przy użyciu `relative` nasz element będzie się przemieszczał w odległościach mierzonych od jego standardowego położenia. Jak to działa? Podobnie jak wcześniej, weźmy kolejny fragment kodu.

```html
<div class="banner relative">
  <div class="square"></div>
</div>
<div class="banner absolute">
  <div class="square"></div>
</div>
```

Warto zwrócić uwagę: `div.banner.absolute` (z przykładu wcześniej) jest w hierarchii kodu niżej. Kod CSS (tutaj korzystamy również poprzedniego zestawu instrukcji):

```css
.banner.relative .square{
  position: relative;
  top: 10p
  left: 150px;
  background-color: #eee;
}
```

Ten blok zachowa się inaczej; przesunięcie nastąpi, ale w obrębie `div.banner.relative`, a nie całego obszaru strony. Różnica raczej zauważalna? :)

Pozostaje jednak pytanie - **co z `div.banner.absolute`?** Kod został przesunięty nieco niżej, czy to ma wpływ na położenie bloku? Nie. **Blok umiejscowiony z wykorzystaniem `position: absolute` zostanie umiejscowiony tam gdzie zostanie to wskazane, niezależnie od kodu HTML.**

Skoro omówiliśmy już trzy z czterech właściwości, to pora na czwartą. **`position: fixed` charakteryzuje się również stałym położeniem na ekranie, ale nie na stronie.** Łatwo można zauważyć przykłady wykorzystania tej funkcji CSS chociażby tutaj. Wykorzystuję ją do utworzenia *sticky menu*. Nadając `position: fixed; top: 0;` dla `nav.page-navigation` łatwo przylepiam menu do górnej części ekranu. Ponadto często wykorzystuje się tę funkcję do tworzenia pasków dot. np.: plików cookie czy informacji o RODO na dole strony. To dość przydatna funkcja.

Ponadto toczą się dyskusje na temat nowej właściwości, to jest `sticky`. Możemy przeczytać o niej na stronie [W3C Editor’s Draft](https://drafts.csswg.org/css-position-3/#sticky-pos). Element który ma nadane `position: sticky;` po przewinięciu fragmentu strony (określonej na przykład przez `top`) będzie zachowywał się jak po nadaniu `fixed`. Jest [zaimplementowana](https://caniuse.com/#feat=css-sticky) po części w przeglądarkach, ale nadal nie jest to zadowalająca część rynku przeglądarek i warto ostrożnie się z nim obchodzić.

### Warstwy - `z-index`

Jeżeli możemy rozmieszczać elementy na stronie całkowicie dowolnie, może być tak że chcemy zmienić ich pozycję wobec siebie (na przykład chcemy aby jakiś blok był widoczny ponad inny). Do takiego zabiegu stosujemy `z-index`, który jest zwieńczeniem całości pracy nad umiejscowieniem elementów w stronie. Działa to analogicznie jak wszystkie programy graficzne które wykorzystują warstwy. Im wartość jest większa, tym położenie elementu względem warstw jest większe. Czasami `z-index` używa się w różnego rodzaju CSSowych sztuczkach.

Z osobistego doświadczenia radzę zwiększać warstwy co 10 - dzięki temu w razie potrzeby możemy dodać ewentualne inne elementy pomiędzy już istniejące.

### Rola `transform`

Czytający w pewnym momencie mógł się złapać za głowę i pomyśleć coś w stylu

> a od czego mamy `transform` oraz `translate`? Tam jest zdecydowanie łatwiej!

Słusznie - pojęcie tego jak używać transform jest nieco łatwiejsze (a z pewnością ma szersze zastosowanie), ale oba te narzędzia nie są sobie równe. Przede wszystkim `transform` nie ma na celu zmiany położenia elementu na styl tego co `position`. Pierwsze rozwiązanie jest wykorzystywane głównie przy ożywieniu strony - chociażby ruchome paski na samym początku strony to połączenie `transform` oraz `animation`. Aby wykonać takie coś za pomocą `position` konieczna jest ingerencja JavaScript. Tak powstawał na przykład popularny spadający śnieg na wielu stronach. Teraz jest to do wykonania w samym CSS. Wnioski? Odpowiednie użycie `transition` jest wydajniejsze od `position`. O tym dlaczego napisano już między innymi na [sitepoint](https://www.sitepoint.com/atoz-css-translate-vs-position/).

### Środkowanie elementu

Od zawsze problemem w stronach internetowych było środkowanie czegoś. Teraz to raczej błahostka - wystarczy że użyjemy takiego zestawu instrukcji:

```css
display: flex;
justify-content: center;
vertical-align: middle;
align-items: center;
```

I element jest wyśrodkowany. Przed flexboxem to był jednak dylemat. Ale i na to znaleziono sposób! Za pomocą połączenia `position` oraz `transform` możemy również umieścić element na środku:


```css
 position: relative;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
```
Taki zapis wyśrodkowuje element w danym bloku. Aby element został umiejscowiony względem całej strony to wtedy zamiast `position: relative` użyjemy `position: absolute`. Czasami takie rozwiązanie jest lepsze aniżeli flexbox, ponieważ wymaga on wymiarów. Tutaj zmieniamy pozycję bez względu na to czy je mamy, czy też nie.

### Podsumowanie

To jak działa `position` warto wiedzieć. Nauka tej części CSSa nie jest szczególnie trudna, ale wymaga chwili zastanowienia. W razie braku zrozumienia jak ona działa możemy spotkać problemy podczas kodowania strony. Wtedy też zaczynamy działać cuda na kiju, totalnie bez sensu. Korzystajmy z najprostszych rozwiązań! :)

Na koniec linki:
* - [codepen z omawianym przykładem](https://codepen.io/radek024/pen/BPYPqW),
* - [artykuł: transform vs position](https://www.sitepoint.com/atoz-css-translate-vs-position/),
* - [position: sticky w praktyce](https://codepen.io/radek024/pen/LBdLrv).

Do kolejnego wpisu! ^^
