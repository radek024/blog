---
layout: post
title: Animacja piszącego się kodu w CSS krok po kroku
author: Radek
categories: css strony-www
excerpt: Prosty przykład możliwości animowania skomplikowanych rzeczy w CSS
comments: true
img-thumb: 2023-06-23.png
faq:
    - query:
        question: "Jak animować elementy w CSS? "
        answer: "Do tworzenia animacji w CSS można użyć właściwości animation oraz transition."
    - query:
        question: "Jak umieścić kod na stronie?"
        answer: "Kod na stronie można umieścić w tagu code. Jeżeli chcesz zachować formatowanie, użyć tagu pre."  
---

Wiele rzeczy, które możemy robić w CSS kiedyś było totalnie niemożliwe. Wyobrażacie sobie sytuację, w której musicie środkować rzeczy za pomocą właściwości `top` oraz `left`, dodając przy okazji `transform`? Zakładam, że tak - ta metoda ma pewne zastosowania, których trudno się wyzbyć, nawet jeżeli mamy i flexboxa, i grida. Stosowanie pierwszego ze sposobów środkowania elementów nie wyklucza jednak faktu, że teraz jest o wiele łatwiej o takie rzeczy bezpośrednio w CSS - bez hakowania zasad pisania kodu.

To samo mamy z animacjami. Bardziej lub mniej skomplikowane jesteśmy w stanie opanować za pomocą samego CSS. Niezależnie czy będzie to `transition` czy `animation`, to nie musimy już używać jQuerowego `animate` czy `setInterval` w JS, aby przemieszczać elementy po ekranie. Dzisiaj bierzemy na tapet fajny przykład zastosowania animacji. Jest to samopiszący się kod, który pokazuje się nam na ekranie. Nie jest to jednak samopiszący się kod na zasadzie znak po znaku - będzie linia po linii. Tak, jak kiedyś uruchamiały się nam systemy, wskakując linijka po linijce z nową informacją. Inspirację z takiej animacji zaciągnąłem z GitHuba, który łączy animację działającego kodu z tłem, dając fajny efekt.

![Grafika przedstawia inspirację do wpisu - animacja z Githuba]({{site.baseurl}}/img/post-img/2023-06-23/gh-animation.gif)

Oto i pierwszy gif na blogu. Po tylu latach.. W ramach wpisu odwzorujemy sobie sposób “pisania się” kodu - pozostała animacja może być pracą domową dla każdego dzielnego czytającego. Osoba, która się podejmie dokończenia ma ode mnie kebaba - potrzebuję tylko działającego dema na codepenie. Radzę się spieszyć - ilość kebabów ograniczona (zaktualizuję wpis, jeżeli ktoś się podejmie).

### Przygotowanie do animacji w CSS

Przede wszystkim, musimy się zastanowić, jakich danych potrzebujemy. Przede wszystkim - będzie to kod, który musi zachować swoje formatowanie. Dalej - style, które zostaną zaaplikowane do takiego kodu. Ostatecznie, potrzebujemy animacji, która nam wykona przejście z punktu początkowego do końca.

A więc - uzyskanie kodu nie jest dużym problemem. Warto zadbać, aby był wystarczająco długi, a także aby nie miał charakteru bezsensowanie zlepionych znaków. Na potrzeby dema napisałem do ChatGPT z zapytaniem o przykładowy kod w JS - nie wygląda źle, ale jest dość długi, zatem oszczędzam wklejenia do czytającym tutaj.

Jak uzyskać efekt kodu? Cóż, tutaj jest kilka ważnych rzeczy, przede wszystkim: niezależnie jak długi jest to kod, to wymaga pewnego kroju pisma - to jest monospace. Ten rodzaj fontu charakteryzuje się stałą szerokością znaków. Jako ciekawostkę mogę podać fakt, że monospace był przydatny w czasach, kiedy rozdzielczość była słaba - o wiele łatwiej prezentuje się znak na określonym obszarze (co notabene można zasymulować w `canvas` w JS), jeżeli jest zachowany w prymitywnej formie (bez ogonków i tak dalej). Kod zapisany w monospace charakteryzuje te samo położenie znaków w linii. Dzięki temu łatwo powiedzieć, że błąd jest w 20 linii po 34 znaku. Tego efektu potrzebujemy.

Zachowania odstępów jest dla nas również kluczowe. Wcięcia pozwalają na łatwą identyfikację działań obejmowanych przez klamry w kodzie. W kodzie będziemy dążyli do ich zachowania.

Co do styli - mamy dużą dowolność. Każdy koloruje składnię tak jak lubi, ja na potrzeby wpisu pominę ten proces i skupię się na stylach samych w sobie.

### Piszemy i animujemy kod!

Posiadając kod, możemy go umieścić w bloku. Na sam początek dobrze jest ogarnąć zachowanie odstępów. Czy dodawanie sztywnych tabów jest dobrym rozwiązaniem? Moim zdaniem - nie do końca. Wyobrażacie sobie animację 20 snippetów kodu i wstawianych na sztywno tabów? Trudny temat. HTML i CSS przychodzą nam jednak z pomocą poprzez tag `pre`. Tag ten zawiera w sobie wszystkie znaki białe, które są umieszczone między znacznikiem otwierającym a zamykającym. Na podstawie tego znacznika możemy umieścić kod z zachowaniem znaków. Warto jednak zaznaczyć, że dodatkowe łamanie linii i inne zmiany w znakach białych będą tu widoczne. Dobrze wkleić już sformatowany kod. Tag `pre` ignoruje również HTML i go generuje - co swoją drogą ma swoje plusy - więc obranie HTMLa sprawi, że otrzymamy wyrenderowany kod, a nie jego składowe. Do przedstawiania HTMLa warto używać encji.

Nie zapominać można o semantyce. Chociaż mogłoby się wydawać, to kod również stanowi część semantyki naszej strony - nawet jeżeli jest przykładem. Przed tagiem `pre` warto dodać tag `code`. Kod będzie mógł wyglądać następująco:

```html
<code><pre>function startRightHere(let args) { ... }
</pre>
</code>
```

Mamy złapany fragment - super. Teraz musimy tylko złapać logikę jego animacji. Kod skacze od dołu do góry - musi być zatem w jakiś sposób przetrzymywany poza widocznym obszarem. Następnie, za pomocą animacji następuje przeniesienie o konkretny fragment względem osi Y. Wygląda na to, że musimy nadać szerokość oraz ukyć kawał kodu. Aby to zrobić, konieczne jest osadzenie ekstra bloku w htmlu - zarówno `code`, jak i `pre` nie mogą stanowić bazy do schowania kodu.

```html
<div class="code-animation"><code><pre>function startRightHere(let args) { … }
</pre>
</code>
</div>
```

I kod CSS:

```css
.code-animation {
max-height: 400px;
height: 100%;
overflow-y: hidden;
}
```

Czy ustawiamy maksymalną wysokość bloku na 400 pikseli, chowając resztę kodu. Nietrudno się domyśleć, że pozostały fragment będzie animowany. A za pomocą czego możemy animować? Tutaj nie ma wielu możliwości - transform będzie najwygodniejszy. Za pomocą translateY warto zerknąć ile kodu możemy przesunąć. Używamy procentów, ponieważ wówczas jest łatwiej o zachowanie relacji. Użycie pikseli sprawi, że jeżeli kod będzie dłuższy, to nie będzie animował się do końca. Style dotyczące animacji musimy nadać na `code` - to on będzie zmieniał swoje położenie względem okna. Idąc dalej, efekt skakania kodu osiągniemy za pomocą `steps` (za MDN: [animation-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)).

Całość będzie wyglądała zatem następująco:

```css
.code-animation code {
  background: transparent;
  transition: 0.2s;
  animation: slideCode 8s both steps(18);
  display: block;
  color: #fff;
}
```

Klatki `slideCode` zawierają przejście translateY. Magia dzieje się sama. Po dodaniu kilku linijek CSS mamy następujący efekt:

![Grafika przedstawia gotowe rozwiązanie]({{site.baseurl}}/img/post-img/2023-06-23/ready-animation.gif)

Po dodaniu styli wygląda to serio fajnie - a jeżeli ktoś dołoży fragment, który jest jeszcze widoczny w Githubie - efekt może być naprawdę przyjemny. Oczywiście rozwiązań może być kilka. Jedni wezmą i pójdą na łatwiznę, korzystając z GSAPa, inni - ogarną to za pomocą scrolla, inni przez IntersectionObserver. Kod, który oddaje działanie wpisu jest dostępny na [codepenie](https://codepen.io/radek024/pen/KKrpZLj).

### Podsumowanie

Wpis krótki, ale myślę że ciekawy - sposobów na wykorzystanie takiej animacji jest kilka. Co więcej, warto zerknąć na to robi GitHub na swoich stronach. Sporo ciekawych i ładnych animacji.

Przypominam o konkursie na kebaba. Do kolejnego razu!