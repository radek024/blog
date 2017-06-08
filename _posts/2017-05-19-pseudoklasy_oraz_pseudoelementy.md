---
layout: post
title: Pseudoelementy oraz pseudoklasy
author: Radek
categories: bykiwkodzie css
excerpt: Pseudoelementy oraz pseudoklasy to ważny element stron internetowych. Czym jednak są, do czego służą i czym się różnią? Dlaczego warto je poznać nieco lepiej i w jaki sposób mogą pomóc nam kodować kolejne projekty?
comments: true
---
Pseudoelementy oraz pseudoklasy to ważny element stron internetowych. Czym jednak są, do czego służą i czym się różnią? Dlaczego warto je poznać nieco lepiej i w jaki sposób mogą pomóc nam kodować kolejne projekty?
Warto na początku wspomnieć o tym, że **pseudoklasy oraz pseudoelementy to nie to samo**. Wydaje się, że w sumie to obojętne, jak to nazywamy - przecież i tak wywołujemy je w CSS. No właśnie; zarówno pseudoelementy, jak i pseudoklasy tworzy się w CSS.

```css
p:last-child{
font-size: 16px;
font-style: italic;
}
```

To jest pseudoklasa. Do czego mogą posłużyć? Mianowicie - czasami mamy za zadanie wystylizować np.: ostatnie elementy nieco inaczej. Nie byłoby to możliwe, jeżeli nie użylibyśmy pseudoklasy `:last-child`. W tym momencie osoba, która jeszcze nie działała na pseudoklasach puka się w głowę i mówi: *przecież mogę dodać dodatkową klasę do ostatniego elementu - i załatwiam sprawę. Szach mat!*
Takie rozwiązanie ma sens! Do momentu w którym masz za zadanie napisać szablon do np.: Wordpressa i tam link do ostatniego artykułu ma być szary, podczas gdy pozostałe są czerwone. Wtedy jak najbardziej możesz utrudnić sobie kod, tworząc w PHP warunek, który wyświetli blok z tą klasą do ostaniego linku... lub wykorzystać pseudoklasę, dzięki czemu Twój kod w PHP będzie łatwiejszy i czytelniejszy. `:last-child` to nie jedyna pseudoklasa, istnieje ich bardzo dużo:

<dl class="terms-list">
<dt class="term-title">:hover</dt>
<dd class="term-description">Służy do stylizowania elementu, jeżeli kursor znajduje się nad nim(czyt.: jest najechany).</dd>
<dt class="term-title">:active</dt>
<dd class="term-description">Jeżeli element jest kliknięty, wtedy aplikowane są style właśnie z tej pseudoklasy.</dd>
<dt class="term-title">:lang(attr)</dt>
<dd class="term-description">Stylizuje dany element pod warunkiem, że element posiada atrybut `lang` z wartością `attr`.</dd>
<dt class="term-title">:nth-child(2n+1)</dt>
<dd class="term-description">Taki zapis wystylizuje każdy nieparzysty element.</dd>
</dl>
To są wyłącznie cztery przykłady. Z pierwszym z pewnością mogliście się spotkać w praktyce. Jego użycie pozwala na poinformowanie użytkownika, że najechał na element, który może mieć jakieś znaczenie - najczęściej to adresy. Życie bez pseudoklas byłoby o wiele cięższe.
- - -
OK, a czym są w takim razie pseudoelementy? Są to w najłatwiejszy sposób mówiąc bloki, które tworzymy w CSS. Pseudobloki, które wykorzystujemy najczęściej to `::after` oraz `::before`. Zastosowań jest bardzo dużo - jedno z nich to tworzenie tzw. "clearfixów" do elementów. Inne to chociażby tworzenie niestandardowych punktów listy, umieszczanie ikon, które są dekoracją. W przykładowych kodach na tej witrynie również są pseudoelementy - wykorzystuję je tutaj aby uzyskać [nierówne krawędzie elementów](https://codepen.io/radek024/pen/xRJvVQ).
Dużą zaletą pseudobloków jest to, że nie tworzymy zbędnego kodu HTML. A co jeżeli ktoś lubi zbędny kod HTML? Tworzenie pustych bloków w takim razie może być OK - ale nie szanujemy w takim razie zasady *progressive enhancement*. Owe bloki to nic innego jak dekoracja strony, więc należy do warstwy CSS. Osobiście nie widzę logicznego wytłumaczenia dla takiego działania. Przez to strona posiada krótszy kod, a tym samym zyskujemy na czasie ładowania strony. Jak wygląda clearfix poprzez pseudoelementy?
```css
.about-us:after{
content: "";
display: block;
clear:both;
}
```
Dzięki takiemu zapisowi nie musimy tworzyć zwykłego bloku w HTML. Często można taki kod wykorzystać wielokrotnie - używając dodatkowo preprocesorów jesteśmy w stanie zaoszczędzić dużo czasu(chociażby poprzez załączanie tego samego kodu). Ale wracając; czy przykład podany wyżej jest poprawny? Wcześniej użyte zostały dwa dwukropki, a teraz jeden. Odpowiedź brzmi: tak, obie formy są akceptowalne, z tym że wersja z pojedyńczym dwukropkiem jest akceptowana przez starsze przeglądarki. Jaki system przyjąć? Dzięki podwójnym dwukropkom łatwo odróżnimy pseudoklasę od pseudoelementu, a pojedyńczym - uzyskujemy wsparcie wsteczne. Wybór należy do Ciebie.

Podsumowując: pseudoklasy pozwalają na dotarcie do elementów HTML i wystylizowanie ich, a pseudoblokom zawdzięczamy często schludniejszy kod HTML. I na koniec przydatne linki:

- [Pseudoklasy na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes)
- [Pseudoelementy na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-elements)
- [Pseudoklasa `:not()` w praktyce](https://codepen.io/radek024/pen/RRJwKR)
- [Przykład użycia pseudobloków](https://codepen.io/radek024/pen/vgrrBv)
