---
layout: post
title: Ten tytuł to nie przypadek - Open Graph Protocols
author: Radek
categories: strony-www social-media
excerpt: Ten opis to również nie przypadek, jak to zrobić?
comments: true
img-thumb: 2017-07-07.png
---

Codziennie widzimy w Internecie setki reklam, niezależnie od tego czy posiadamy AdBlocka, czy też nie. Są one ukryte pod każdym rodzajem treści jakie spotkamy w sieci: artykuły, filmy, podcasty, rekomendacje na forach (szczególnie jeżeli skupiają się one na jakiejś specjalizacji lub marce). Jest to zjawisko oczywiste, ponieważ każdy chce ugryźć kawałek swojego rynku. Jednym wychodzi to lepiej, drugim gorzej. Co do tego mają jednak strony?

Wbrew pozorom bardzo dużo. Jeszcze przed rozpoczęciem jakichkolwiek prac nad witryną musimy sobie zdać sobie sprawę, że ogromny wpływ na dobre zdanie marki ma to, jak reprezentuje się w sieci. Ale to chyba oczywiste? Przy stronach internetowych o wizerunku decyduje czy strona jest responsywna, czy jest estetyczna z punktu graficznego, czy treści są ciekawe dla użytkownika docelowego. Postawmy się w pozycji klienta. Jeżeli coś nas zainteresowało, jesteśmy skłonni do udostępnienia takiej zawartości w social-mediach, które z kolei są zaniedbywane. A posiadamy tyle możliwości w tej dziedzinie!

Mowa o **Open Graph Protocol**. Jest to zbiór określonych reguł dla znacznika `meta`, które pozwalają na poprawę lub zmianę tego, co widzi użytkownik podczas udostępniania strony w m.in. portalach społecznościowych. Podczas tego artykułu postaram się wyjaśnić w jaki sposób można zaimplementować jego podstawowe funkcje.

### Znaczniki regulujące wygląd treści

Jak już wspomniałem, wygląd strony w mediach społecznościowych możemy określić za pomocą znacznika `meta`, który znajduje się w `head`, tak jak pozostałe znaczniki tego typu. Na początku podam wzór ogólny:

```html
<meta property="og:wlasciwosc" content="wartosc" />
```

W taki sposób tworzymy znaczniki. Właściwości do wykorzystania jest bardzo dużo, ale ze względu na popularność Facebooka skupimy się wyłącznie na nim. Nie oznacza to jednak, że możemy ignorować inne portale. Po prostu schemat często się powtarza i bezsensownym jest tłumaczeniem tego samego dwadzieścia razy. Przy projektowaniu treści pod OGP (skrót od Open Graph Protocol) należy pamiętać o kliencie docelowym. Przykładem tego może być Twitter. Jest to powszechne narzędzie do komunikacji używane przez polityków. Jeżeli zatem projektujemy stronę z naciskiem na treści tego typu, należy mieć na uwadze wygląd treści na tym portalu społecznościowym.

Wróćmy jednak do właściwości. Oto lista najbardziej podstawowych:

<dl>
  <dt>og:url</dt>
  <dd>jako wartość umieszczamy link bezpośredni. Powinien być jak najbardziej bezpośredni, aby czytelnik trafił na podstawową wersję strony.</dd>
  <dt>og:title</dt>
  <dd>jeżeli uznamy, że tytuł strony może nie przyciągnąć uwagi, za pomocą tej właściwości jesteśmy w stanie go zmienić</dd>
  <dt>og:description</dt>
  <dd>opis umieszczonej strony. Może być to wstęp do artykułu lub treść zachęcająca odbiorcę do odwiedzenia witryny. Jeśli tytuł będzie długi, wpis nie zostanie ukazany (dot. głównie telefonów)</dd>
  <dt>og:image</dt>
  <dd>obrazek jako motyw przewodni udostępnionej strony</dd>
</dl>

Za pomocą tych znaczników jesteśmy w stanie zdecydowanie poprawić odbiór naszej strony.

### OGP w praktyce

Aby nie było wyłącznie suchej teorii weźmy pod uwagę przykład: niech będzie to strona dot. kolei. Uznajmy, że właśnie napisaliśmy nudny artykuł i musimy go w jakiś sposób wypromować poprzez media społecznościowe. Tytuł tego artykułu brzmi “Porównanie średniego czasu dotarcia z miasta A do B różnymi środkami transportu”. Pierwszy rzut oka jest bardzo ważny, a co najbardziej rzuca się w oczy? Rzecz jasna obrazek! Weźmy zatem pierwszą lepszą grafikę z portalu stockowego (w tym wypadku użyłem [stocksnap.io](https://stocksnap.io)):

![]({{site.baseurl}}/img/post-img/2017-07-07/fot01.png)

Doskonale komponuje się on w treść artykułu. Obrazek przedstawia pęd, a z tym wiąże się nasz artykuł. Dodatkowo portal skupia się na kolei, dzięki czemu dodatkowo nawiązujemy do tematyki strony. Jak będzie w takim razie wyglądał zapis?

```html
<meta property="og:image" content="train.jpeg" />
```

W taki sposób zapewniliśmy dobrą grafikę w razie udostępnienia wpisu. Ale nie kończymy na tym; to byłoby zbyt łatwe. Tytuł również należy skomponować.

Porównanie średniego czasu dotarcia z miasta A do B różnymi środkami transportu.
Co jest tutaj nie tak? Przede wszystkim długość. Tytuł ma za zadanie - zaraz po obrazku - zatrzymać odbiorcę oraz ukierunkować temat. Sama grafika tego nie zrobi. Skróćmy zatem zapis do takiej formy: “Miasto A - Miasto B. Koleją czy autem?”. Takim nagłówkiem nie tracimy zaufania odbiorcy, ponieważ nie oszukujemy go nim. Często zdarza się, że portale tworzą możliwie najogólniejsze tytuły celem zyskania odbiorcy. Nie jest to jednak odbiorca stały. Wracając jednak do nagłówka; jego zapis w `html` będzie reprezentował się następująco:

```html
<meta property="og:title" content="Miasto A - Miasto B. Koleją czy autem?" />
```

Jak widać, jest bardzo klarowny oraz (w porównaniu do oryginalnego) krótszy. Możemy zatem wykazać się teraz za pomocą właściwości `og:description`. Co możemy w nim umieścić? Możliwości jest bardzo dużo. Przykładami tego są: wstęp artykułu wprost ze strony (odbiorca jest w stanie już na zewnętrznej stronie zapoznać się z pierwszymi słowami wpisu), opis ogólny (czyli skupiający w kilku słowach treść), rozważanie (względem przykładu: “Rower zbyt wolny, samochód zbyt drogi… może pociąg?”) albo atak w stronę użytkownika (jak wcześniej: “A więc jedziesz na LPG… masz ładowarkę do zapalniczek?”). Ostatni jednak nie jest zalecany, chyba że taki jest cel piszącego. Należy jednak liczyć się z konsekwencjami. Dużo rzeczy rozprzestrzenia się poprzez sieć znajomych i należy mieć na uwadze, że jednak niekorzystna opinia może zniechęcić nawet kilkadziesiąt osób. Niekiedy jednak działa to w drugą stronę; ludzie specjalnie wchodzą na stronę, ale z reguły wyłącznie aby atakować autora wpisu. Czy potrzebujemy takich zachowań?

Zaprojektujmy jeden z opisów:

```html
<meta property="og:description" content="Rower zbyt wolny, samochód zbyt drogi… może pociąg?" />
```

I na koniec cały kod:
```html
<meta property="og:title" content="Miasto A - Miasto B. Koleją czy autem?" />
<meta property="og:description" content="Rower zbyt wolny, samochód zbyt drogi… może pociąg?" />
<meta property="og:image" content="train.jpeg" />
```

### Praca nad właściwym wyświetlaniem

Tak oto przystosowaliśmy nasz artykuł pod względem social-media. Sprawdźmy zatem rezultat naszych działań po wklejeniu strony w przeglądarkę:

![]({{site.baseurl}}/img/post-img/2017-07-07/fot02.png)

Co poszło nie tak? No cóż: zdarza się, że nasze dodatkowe dane nie są wzięte pod uwagę. Szczególnie, jeżeli udostępniamy już kiedyś udostępniony wpis. Skutkuje to pobraniem starych wartości. Należy się ich pozbyć. Robimy to za pomocą [Sharing Debugger
![]](https://developers.facebook.com/tools/debug/sharing/). Jest to narzędzie pozwalające aktualizować treści pobierane z witryny. Na stronie wklejamy adres strony a następnie klikamy napis **Scrape Again**, co pozwoli zaktualizować informacje. Czasami należy zrobić to dwa razy - dla pewności że wszystko będzie w porządku.

![]({{site.baseurl}}/img/post-img/2017-07-07/fot02.png)

Jak widać, wszystko jest na swoim miejscu. Taka forma przedstawiania wpisu jest nie dość że ciekawsza, to i również schludniejsza, co również ma pozytywny wpływ na odbiór strony przez potencjalnych odwiedzających.

### OGP a systemy zarządzania treścią

Tutaj mamy dwa wyjścia. Możemy ustawić te treści sztywno, albo można również nieco skonfigurować to, co tworzymy. Posłuże się tutaj Jekyllem oraz Wordpressem. W Jekyllu, na tej stronie obrazki, opis oraz tytuł artykułu ustawiam poprzez YAML:
```YAML
---
title: Ten tytuł to nie przypadek - Open Graph Protocols
excerpt: Ten opis to również nie przypadek, jak to zrobić?
img-thumb: 2017-07-07.png
---
```

Tak prezentują się (wybiórczo) elementy każdego wpisu. Dzięki nim mogę decydować o tym, jaki będzie tytuł danego atrykułu, co będzie zawierał opis i jaki obrazek będzie tym przewodnim. Jeżeli nie uzupełnię  któregoś z pól, nic nie szkodzi - wtedy uruchamiają się inne funkcje, które zrobią to w zamian za te wykorzystane tutaj. Mechanizm jest zatem całkiem prosty.

Jak wyglądałoby to w Wordpressie? Osobiście widzę dwa rozwiązania:
- poprzez właściwości we wpisach oraz artykułach,
- poprzez wtyczkę.

Wordpress jest bardzo rozbudowanym narzędziem. Możliwości rzecz jasna jest o wiele więcej, ale to są (moim zdaniem) najłatwiejsze. I tak dla tytułu pobieralibyśmy tytuł wpisu, opis generowalibyśmy z *zajawki*, a obrazek pobierany by był poprzez tzw. "thumbnail image". Jeżeli jedna z treści byłaby nie odpowiadająca naszym oczekiwaniom, to zawsze możemy wykorzystać [Custom Fields](https://codex.wordpress.org/Custom_Fields) i poprzez te właściwości operować na wpisie.

Wtyczki również oferują takie możliwości, a polecaną przez sam OGP jest [WP Facebook Open Graph protocol](https://wordpress.org/plugins/wp-facebook-open-graph-protocol/). Schemat działania jest bardzo podobny, więc nie będę go opisywał.

### Rezygnacja z OGP

OK, a co jeżeli nie użyjemy tych znaczników? Facebook jest całkiem sprytny w tej kwestii. Pobiera dane z innych znaczników `meta`, co mieliśmy okazję zobaczyć. Tytuł zamiast z `og:title` pobierze `title`, opis zamiast `og:description` pobierze `meta name="description"`, a zamiast ustawionego obrazka w oknie pojawi się pierwszy lepszy z witryny. OGP daje nam nad tym kontrolę. Na przykład dla #bykiwkodzie nie używam wszystkich znaczników, ponieważ ich nie potrzebuję. Jeżeli jednak zależałoby mi na zmianie tych kwestii względem tych standardowych, to wskazanym jest użycie znaczników. Nie używam również `og:url`, ponieważ adresy moich stron są bezpośrednie. Gdybym jednak oparł swojego bloga o jakiś CMS z PHP(lub przesyłał jakieś dane w adresie) to byłoby wskazane. Nie chcemy przecież, aby użytkownik dostał stronę z doczepką od m.in `GET`.

### Podsumowanie

OGP to wierzchołek góry lodowej. Strony z roku na rok stają się coraz bogatsze pod tym względem. Używanie OGP nie boli - to kwestia maksymalnie dwudziestu minut pracy przy stronie (poprzez doczepienie odpowiednich znaczników), a efekty są warte tego czasu. Nic tylko używać. :)
