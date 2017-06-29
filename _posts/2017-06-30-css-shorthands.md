---
layout: post
title: CSS Shorthands
author: Radek
categories: css strony-www bykiwkodzie
excerpt: Pierwszy krok do optymalizacji kodu CSS.
comments: true
img-thumb: 2017-06-30.png
---

Przy każdej stronie, którą mamy okazję tworzyć posiadamy wiele możliwości ułatwiających jej stylizowanie. Najbardziej oczywistym ułatwieniem jest stosowanie oddzielnego pliku. Wyobraźmy sobie sytuację, gdzie musimy każdy element stylizować w pliku HTML. Niezła mordęga, no nie?

Idąc tym tropem, używanie klas również jest sporym ułatwieniem. Przemyślane ułożenie ich na stronie oraz odpowiednie użycie nazw toruje drogę innym ludziom, którzy ewentualnie będą wprowadzać zmiany oraz nam, jeżeli wrócimy do projektu.

Co dalej? Pod uwagę możemy wziąć sposoby układania *layoutu* strony. Ochoczo poznajemy `float: left` oraz `clearfix`a, a dalej frameworki CSS oraz `flexbox`. W tym momencie projektowanie stron nabiera rozmachu.

Oceniając projekty, które czasami mi się trafia zauważam w nich pewną prawidłowość: często w tych wszystkich ułatwieniach omijany jest jeden krok, tytułowe **CSS Shorthands**. Dzięki nim kod staje się krótszy, a przy okazji szybszy do napisania.

Nie jest jednak tak, że są one zaniedbane.Często wykorzystuje się je przy właściwościach `margin` oraz `padding` w następujący sposób:

```css
.element{
margin: 10px auto;
padding: 1px 2px 3px 4px;
}
```

To nic innego jak *shorthandy*. W `margin` stosujemy identyczne wartości dla górnego oraz dolnego marginesu, zaś dla lewej i prawej strony nadajemy automatycznie margines. Dla właściwości `padding` nadajemy po kolei 1 piksel dla górnego marginesu wewnętrznego, 2 piksele dla prawej strony bloku, 3 piksele dla dołu oraz 4 piksele dla lewej strony. Zastosowanie takiej formy wpisywania właściwości pozwoliło na zamianę czterech linii pliku  CSS w jedną. Nie jest w tym nic odkrywczego, czyż nie?

Okazuje się jednak, że nie tylko właściwości podane powyżej można zapisać w krótszy sposób. Do tego również dąży ten wpis: poznanie oraz utrwalenie innych właściwości, które można zapisać za pomocą jednej linii.

### Background

Pierwszy z nich to `background`. Tutaj właściwości jest o wiele więcej, dlatego też wskażę przykład praktyczny:

```css
body{
background: rgb(255,0,0) url("../img/background.jpeg") no-repeat no-repeat center center/cover;
}
```

W takim zapisie chowamy właściwości `background-image`, `background-repeat-x`, `background-repeat-y`, `background-position-x`, `background-position-y` oraz `background-size`. Czy to nie jest szybsze? Oczywiście że tak!

Przy używaniu takiego zapisu należy pamiętać, że właściwości składające się na ten skrót nie zawsze zadziałają pojedynczo. Jeżeli dodamy sobie `background-color` przed `background` to taki styl nie zostanie zaaplikowany. Jeżeli nam na nim zależy, możemy go wstawić po *shorthandzie*, albo jako jego składnik. Tak jest ze wszystkimi właściwościami, więc warto to mieć na uwadze przy kodowaniu. Piszę o tym ze względu na to, że często ludziom zdarza się popełnić następujący błąd:

```css
body{
background-size: cover;
background: url(‘sciezka/do/obrazka.png’);
}
```

Później rodzą się pytania dlaczego to nie działa. Teraz już wiemy, że to nie będzie funkcjonowało, ponieważ właściwość `background` nadpisuje swoje dziecko (czyli `background-size`) domyślną wartością.

### Border

Nie jest to jednak jedyny *shorthand*. Innym znanym skrótem jest `border`.

```css
.menu-link{
border: 3px solid #1E4B22;
}
```

Taki zapis stylizuje szerokość (3 piksele), rodzaj obramowania (linia ciągła), oraz kolor (odcień zielonego). Dotyczy to wszystkich czterech boków bloku o podanej klasie. Sprawa jest bardzo ułatwiona; pisanie czterech takich samych zapisów nie należałoby do przyjemnych z punktu pisania styli.

### Font

Innym, chyba najmniej używanym skrótem jest ten dotyczący czcionki, jego rozmiaru itd.:

```css
.post-excerpt{
font: italic 700 .8em/1.2 Arial, sans-serif;
}
```

Tłumaczy się to następująco: rodzaj czcionki (`font-style`), waga (`font-weight`), rozmiar (`font-size`), interlinia (`line-height`), jej nazwa oraz rodzina (`font-family`). W takim zapisie z sześciu linii w CSS tworzy się jedna. Wyobraźmy sobie sytuację, gdzie w pliku CSS piszemy te wartości trzy razy. Nie musimy być mistrzem z matematyki, aby wywnioskować, że takim zapisem z osiemnastu linii robimy tylko trzy. To dużo, szczególnie jeśli do tego dołożymy możliwości oferowane przez `margin`, `padding`, `border` oraz `background`. Biorąc pod uwagę te właściwości, będzie zdecydowanie więcej zaoszczędzonych linii w arkuszach styli.

### Inne shorthandy

Podobnie do wcześniej wymienionych zachowuje się właściwość `border-radius`. Ona również przyjmuje dane w postaci *shorthandów*:

```css
.social-panel{
border-radius: 0 50% 50% 0;
}
```

Tutaj zaokrąglamy tylko niektóre elementy: lewy górny róg oraz lewy dolny pozostają nienaruszone. Dzięki takiemu zapisowi zaokrągliliśmy tylko prawe rogi bloku o klasie `.social-panel`. Rzecz jasna jeżeli zamiast zer zostawilibyśmy wyłącznie 50%, wtedy blok przyjąłby formę koła lub elipsy (w zależności od jego wymiarów).

Pisząc kod w CSS wykorzystujący flexboxa również korzystamy z *shorthandów*:

```css
.block{
flex: 1 0 25%;
display: flex;
flex-flow: column wrap;
}
```

Skupmy się na pierwszym zapisie; zawiera on w sobie właściwości `flex-grow`, `flex-shrink` oraz `flex-basis`. Ostatnia linia natomiast zawiera w sobie `flex-direction` oraz `flex-wrap`. I tutaj znowu; zamiast pięciu linii kodu piszemy dwie. Flexbox różni się jednak nieco od poprzednich przykładów, jest bardziej skomplikowany. Zauważyłem, że dużo osób używających flexboxa nie idzie w kierunku używania skróconych wersji, a tych dłuższych. Moim zdaniem są one bardzo wygodne podczas nauki, ale nie później, gdzie już mamy przyswojoną wiedzę na ten temat.

### Podsumowanie

Nie są to jedyne shorthandy. Zakładam, że jest ich o wiele więcej, ale ze względu na ich powszechność zapomina się o ich pierwotnych formach. Z pewnością istnieją zapomniane, na przykład `list-style` - nie spotkałem się chyba nigdy w praktyce z takim shorthandem i nie uważam, aby był szczególnie praktyczny. Shorthandy często są niedoceniane. Może najwyższa pora aby zmienić nawyki i zacząć pisać krótszy kod CSS?
