---
layout: post
title: Wyróżnianie treści na blogu - ramki
author: Radek
categories: strony-www 
excerpt: Będziemy krok po kroku tworzyć bloki z ramkami, które pozwolą na podkreślenie treści o szczególnym znaczeniu.
comments: true
img-thumb: 2023-09-29.png
---

Content is the king. Ta zasada to podstawa wielu, wielu blogów tworzonych w sieci. No właśnie - wielu. Aby pojawić się wysoko w wynikach wyszukiwania, wystarczy umieścić treści w sieci, które - jak dobrze pójdzie - zostaną wysoko zaindeksowane w wynikach wyszukiwania.

Treści czasem bywają długie, co może niekorzystnie wpływać na czas poświęcony na zapoznanie się z przekazem. Konieczne jest zatem opracowanie treści w taki sposób, aby ich poznawanie było atrakcyjne. Dzisiaj, w ramach comiesięcznego pisania na blogu przejdziemy krok po kroku proces poprawy tego aspektu na bykach w kodzie. Nie przedłużając - dodamy ramki, które pozwolą na umieszczanie w nich treści, które mogą być bardziej istotne od pozostałych.

### Potrzebne informacje

Przy wzbogacaniu bloga o nowe elementy warto pomyśleć o referencjach. Takie odniesienie ułatwia proces twórczy, tym samym przyśpieszając kodowanie całości. Nietrudno o wskazanie takich elementów. Na pierwszy rzut udostępniam fragment strony rządowej - artykuł o dowodzie osobistym:

![Grafika przedstawia ramkę na stronie rządowej]({{site.baseurl}}/img/post-img/2023-09-29/przyklad-ramka-gov.png)

Jak widać, istotna dla wpisu treść została umieszczona w odpowiedniej ramce. Dzięki temu fokus użytkownika jest w istotnym dla całości miejscu. Kolejna referencja - portal mubi.pl oraz informacja o sposobie działania WORDu w Katowicach w trakcie pandemii:

![Grafika przedstawia ramkę na stronie rządowej]({{site.baseurl}}/img/post-img/2023-09-29/przyklad-ramka.png)

Ponownie - informacja jest na tyle widoczna, że z pewnością skupi uwagę czytającego. A jako że w tym roku byłem na pięciu weselach, to ostatni z przykładów - tematyka weselna:

![Grafika przedstawia ramkę na stronie rządowej]({{site.baseurl}}/img/post-img/2023-09-29/przyklad-ramka-link.png)

Jak widać na załączonym obrazku, tutaj mamy nieco inny charakter bloku, ponieważ nie zawiera informacji, a kieruje do innego wpisu. Ważne jest jednak to, że linki również powinny być dostosowane, jeżeli blok będzie miał inne tło aniżeli sam wpis.

--- 

Posiadając referencje, możemy łatwo zdefiniować założenia:
warto zaprojektować kilka rodzajów bloków (informacyjny, zawierający uwagę oraz ostatni - zawierający ostrzeżenie), dzięki czemu kontekst bloku może zostać rozszerzony,
blok powinien być powtarzalny,
 zawartość może zawierać poza tekstem linki, które mogą wymagać dodatkowych styli.

Prosty temat - bierzemy się do pracy.

### Tworzenie elementu

Projekty nie są trudne - bazujemy na treści, więc lecimy bezpośrednio z tematem. Bloki wyglądają następująco:

![Grafika przedstawia ramkę na stronie rządowej]({{site.baseurl}}/img/post-img/2023-09-29/ramka-blog.png)

Kodowania nie mamy wyjątkowo dużo. Kod HTML to właściwie jest jakiś div, do tego nagłówek i cała pozostała treść. Kolor zależy od klasy umieszczonej w kodzie. 

```html
<div class="content-note-box warning" role="note">
    <strong class="content-note-title">Warto wiedzieć</strong>
    <div class="content-note">Dokładnie taki blog może pomóc w rozróżnieniu treści na stronie internetowej. Nieduża zmiana, a wpis może zyskać na atrakcyjności.</div>
</div>
```

I kod CSS: 
```css
.content-note-box {
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  background: #dee3ed;
  --link: #046762;
  --link-visited: #024540;

}

.content-note-box .content-note-title {
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
  color: #5e636e;
}
```

Tak prezentuje się całość. Miejscowo wykorzystuję zmienne w CSS, które stanowią trzon kolorystyczny bloga. Dzięki temu notyfikacja ma spójny charakter wraz z istniejącymi treściami na blogu. 

Należy także pamiętać o dostępności cyfrowej. W tym przypadku mamy zachowaną zgodność dzięki podbiciu kolorów w zmiennych CSS - zmiana tła wpłynęła zatem na kontrast. Ponadto blok ma określoną rolę.

### Zastosowanie w praktyce 

Aby blok działał na zasadzie powtarzalnej treści, konieczne jest zastosowanie sztuczek Jekyllowych. Jako, że mamy trzy rodzaje bloków, a treść się zmienia, można zastosować zmienne (czy też argumenty). Wówczas wywołanie możemy wykonywać na zasadzie:
```ruby
include content_note.html type="warning|alert" info="Zawartość bloku"
```

Prosty schemat. Typy co do zasady wystarczą dwa, bo i tak jeden typ dobrze mieć domyślnie. Taki plik tworzę w takim razie w `includes`. Zawartość bloku mocno się nie zmienia tak naprawdę:

{% raw %}
```html 
<div class="content-note-box warning {%if include.type %}note-{{include.type}}{%endif%}" role="note">
    <strong class="content-note-title">Warto wiedzieć</strong>
    <div class="content-note">{{include.info}}</div>
</div>
```
{% endraw %}


I cyk - możliwe jest użycie bloku w kodzie. Poprzez określenie type blok ma nadany kontekst (z definicji to jest informacja), a tekst zawiera się w atrybucie `info`.

{% include content_note.html info="Warto mieć na uwadze fakt, że nie określona została ani wysokość, ani szerokość bloku. Zawartość jest różna i sztywna matematyka nie byłaby niczym dobrym. <br><br> A HTML działa - wystarczy użyć tagów." %}

Dzięki za przeczytanie wpisu i zapraszam do kolejnych!
