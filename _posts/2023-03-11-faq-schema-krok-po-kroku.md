---
layout: post
title: Jak dodać FAQ Schema do bloga? Poradnik krok po kroku
author: Radek
categories: seo strony-www
excerpt: Poradnik krok po kroku jak dodać elementy rozszerzone do portalu internetowego.
comments: true
img-thumb: 2023-03-17.png
faq:
    - query:
        question: "Jak dodać FAQ Schema bez wtyczek?"
        answer: "Dodanie FAQ Schema zależy od rodzaju narzędzia, które używasz w swoim portalu. Dla Wordpressa można do tego wykorzystać np.: ACF."
    - query:
        question: "Gdzie mogę znaleźć przykładowy JSON z FAQ Schema?"
        answer: "Przykładowy JSON zawierający FAQ Schema można znaleźć na stronie schema.org, definiującej strukturę takich danych jak FAQ Schema".  
---

Zarządzanie treściami w internecie bywa trudne. W dobie wszechobecnego nasilania się bodźców należy sięgać po różne narzędzia. Co mają do dyspozycji blogi? Na pewno metod jest kilka:
* aktywnie udostępniając treści w wielu mediach,
* pisać teksty używając słów kluczowych,
* dbać o optymalizację strony, zapewniając szybki dostęp do treści,
* jasno pisać i przekazywać informacje wprost.

A to z pewnością nie wszystkie. Te, które wskazałem łączy jeden aspekt — nie są techniczne. Niedużym nakładem możemy jednak sprawić, że rozwój tego, co tworzymy pchniemy krok ku technice właśnie — dzięki elementom rozszerzonym. FAQ Schema to przykład takiego elementu. 

### Co to jest FAQ Schema?
Ogólnie rzecz biorąc, elementy rozszerzone (w tym przypadku: FAQ) to z reguły rodzaj JSONa, który zawiera pytania oraz odpowiedzi na pytania w kontekście artykułu lub strony, na której jest zamieszczony. W ten sposób użytkownik może poznać treść na potencjalnie interesujące go pytanie w sposób bezpośredni. Może mieć miejsce również sytuacja, gdzie odpowiedź pasuje dokładnie do rzeczy, jaką pyta odwiedzający stronę. Czy nie fajnie mieć odpowiedź od ręki? W ramach przykładu — na frazę “oprawki do okularów męskie” możemy trafić na taki element rozszerzony:

![Grafika przedstawia przykład implementacji FAQ Schema]({{site.baseurl}}/img/post-img/2023-03-11/przyklad-faq-schema.png)

Pytanie *Jakie są kształty okularów korekcyjnych?* jest dostępne wraz z odpowiedzią z wyników wyszukiwania.
 
Skoro wiemy czym jest FAQ Schema i jak wygląda, warto przejść do tego, jak jest zbudowane — następnie zmierzymy się z tym tutaj, na blogu.

### Jak prawidłowo zbudować FAQ Schema?

Z pewnością budowanie takiej rzeczy za każdym razem nie jest najwygodniejsze i nie należy do dobrych pomysłów. Generowanie takiego JSONa ręcznie za każdym razem *nie należy do zalecanych praktyk*, a powodów jest mnóstwo: bardzo łatwo o pomyłkę poprzez literówkę, niedomknięcie nawiasu czy brak przecinka. W sieci istnieje kilkadziesiąt generatorów, które to zrobią za nas — autorów. Nie zawsze jest to jednak wygodne, a sposób rozwiązania tego problemu samemu może być łatwiejszy aniżeli się wydaje. Jak wygląda zatem taka struktura?

```js
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Jak założyć bloga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To bardzo prosta rzecz. Wystarczy, abyś wiedział, jak obsłużyć komputer."
      }
    }, {
      "@type": "Question",
      "name": "Czy pisanie tekstów jest trudne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pisanie tekstów bywa trudne, szczególnie kiedy nie wiesz, co chcesz napisać."
      }
    }]
  }
```

Jak widać, w tagu `script` umieściliśmy dwa pytania, na podstawie których przeglądarka może udostępnić elementy rozszerzone. Nie jest to skomplikowana struktura: oznaczamy typ, treść pytania, a następnie umieszczamy odpowiedź. FAQ Schema to zatem bardzo fajna rzecz do rozpoczęcia przygody z elementami rozszerzonymi na blogu czy portalu internetowym. W jaki sposób dodać FAQ Schema do strony? Przejdźmy do praktyki.

### Dodanie FAQ Schema do strony internetowej

Aby umieścić elementy rozszerzone na portalu internetowym, możemy skorzystać z kilku sposobów. Tym najłatwiejszym jest wygenerowanie elementu rozszerzonego oraz umieszczenie go w kodzie. Takie rozwiązania można bardzo łatwo znaleźć w sieci. Dla CMS pokroju Wordpressa są narzędzia, które to umożliwiają — Yoast ma taką funkcję wbudowaną w FAQ List w Gutenbergu. Jako że my jesteśmy ambitni i nie zależy nam na dodawaniu elementów, z których niekoniecznie będziemy w pełni korzystać — napiszemy rozwiązanie od zera. Nie zawsze mamy do dyspozycji Wordpressa, a optymalizacja jest kluczowa dla portali internetowych — oszczędzamy zatem zasoby, które ładujemy w obrębie portalu. Rozwiązanie, które będę wdrażał będzie miało zastosowanie dla tego bloga, który napisany jest w Jekyllu (Ruby).

Z mojej perspektywy obecność FAQ jest potrzebna tylko dla postów — i to wybranych. Obecnie na blogu jest około 30 wpisów i jeżeli nie dodam do nich pytań, to nie chcę, abym posiadał na stronie pusty element. Ponadto, chciałbym dodać dowolną ilość pytań dla konkretnego wpisu. To nie koniec - pytania dodaję w wygodnej dla mnie formie, a nie przez kopiowanie kodu. Posiadając zatem założenia co do tego, jak powinno działać dodawanie pytań możemy przejść do implementacji.

### Implementacja FAQ Schema na stronie internetowej

Przechodzimy do konkretów. Po pierwsze - jako, że pracuję na Jekyllu, to wiem, że przy publikacji każdego wpisu muszę dodać pewne metadane:

```yaml
layout: post
title: Wprowadzenie do dostępności cyfrowej stron internetowych
author: Radek
categories: wcag strony-www
excerpt: Okoliczności, w których korzystamy z Internetu są różne - portale są ten same. Czy zawsze wygodne dla odbiorcy?
comments: true
img-thumb: 2023-02-17.png
```

To metadane dla ostatniego wpisu dotyczącego dostępności cyfrowej. Z mojej perspektywy to dobre miejsce na to, aby dodać tutaj pytania, które później wykorzystam w FAQ. Projekt elementu rozszerzonego może być następujący:

```yaml
faq:
 - query:
    question: "Czym jest WCAG?"
    answer: "WCAG to zestaw wytycznych, które określają dobre praktyki w zakresie tworzenia dostępnych cyfrowo portali internetowych."
 - query:
    question: “Jakie mamy poziomy kryteriów WCAG?”
    answer: "Mamy 3 poziomy kryteriów: poziomy A, AA oraz AAA różnią się zaawansowaniem oraz specyfiką, dzieląc w ten sposób wytyczne."  
```

A więc mamy element `faq`, na który składa się dwa razy `query`, podzielone na `question` oraz `answer`. Żadna trudność - dane są dobrze ułożone, a więc praca na nich będzie łatwa. Do utworzenia tego elementu użyłem [kolekcji](https://dev.to/this-is-learning/yaml-collections-sequences-and-mappings-4meb). W Wordpressie możemy swobodnie zastosować ACFa do budowy takiej struktury.
Mając opanowaną strukturę, wróćmy jeszcze raz do struktury FAQ w JSON. Główna zawartość nie jest dla nas istotna - chodzi nam przede wszystkim o nagłówek oraz element kończący. Potrzebujemy zatem tej części:

{% raw %}
```js
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```
{% endraw %}

`mainEntity` będzie elementem, który będziemy uzupełniać. Do tego posłuży nam instrukcja `for`:

 {% raw %}
```ruby
{% for item in page.faq %}
 {
  "@type": "Question",
  "name": "{{item.query.question}}",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "{{item.query.answer}}"
    }
  } {%if forloop.index != page.faq.size%},{% endif %}
 {% endfor %}
```
{% endraw %}

Mamy zdefiniowaną pętlę która wykonuje się tyle razy, ile mamy pytań. Warto pamiętać, że przecinki po pytanie występują tylko gdy istnieje kolejne pytanie - dlatego też pojawianie się przecinka jest tutaj kontrolowane. I tak oto utworzyliśmy definiowalny element rozszerzony dla byków w kodzie!

### Jak zweryfikować FAQ Schema?

Aby mieć pewność co do tego czy dobrze zdefiniowaliśmy element rozszerzony, możemy sprawdzić jego działanie w specjalnym walidatorze dostępnym tutaj:  https://validator.schema.org/. Po dodaniu kodu (co rekomenduję bardziej - jeżeli nie mamy pewności co do kodu, lepiej sprawdzić fragment, aniżeli publikować z pełną parą co udało się napisać) pojawi się nam okno z wynikami:


![Grafika przedstawia prawidłowo zaimplementowany FAQ Schema]({{site.baseurl}}/img/post-img/2023-03-11/faq-schema-prawidlowa-struktura.png)

Celowo popsuję JSONa - sprawdźmy, co wtedy. 

![Grafika przedstawia nieprawidłowo zaimplementowany FAQ Schema]({{site.baseurl}}/img/post-img/2023-03-11/faq-schema-blad.png)

Walidator wyłapał moją literówkę — a więc mamy złapany błąd, który mógłby nam umknąć.
Aby sfinalizować pracę, to osobiście wydzielam plik, w którym trzymam FAQ Schema dla wpisu, tym samym trzymając porządek w strukturze pliku.

{% raw %}
```ruby
 {% include faq_schema.html %}
```{% endraw %}

### Podsumowanie

Implementacja FAQ Schema to nie najtrudniejsze zadanie, z jakim możemy się spotkać przy rozbudowie portalu internetowego. Należy jednak pamiętać, że to mała kropla drąży skałę — krok po kroku możemy zbudować bogaty w elementy rozszerzone portal, który będzie łatwy w obsłudze nie tylko na etapie odwiedzania portalu, ale także w wynikach wyszukiwania. 
