---
layout: post
title: Jak mądrzej pisać CSSa, czyli CSS Specificity
author: Radek
categories: bykiwkodzie css strony-www
excerpt: Temat teoretycznie prosty. Teoretycznie...
comments: true
img-thumb: 2020-01-03.png
---

Nauka CSSa nie jest trudna. Proste i porządne strony jesteśmy w stanie napisać po kilku przeczytanych artykułach. W pewnym momencie ludzka mentalność bierze górę nad logiką CSSa i przemawia:

>A ja chcę to sobie utrudnić!

I trzeba kombinować.

Kiedy pracuje się nad nowym projektem to nie ma żadnego problemu. Strona jest gliną którą należy dobrze wyrobić. Nie zawsze po myśli projektanta czy klienta, ale jednak. Więcej pracy jest nad stroną, gdzie coś nadpisujemy. Pojawia się zatem pytanie: jak to zrobić?

### Waga zapisu

W CSSie jest mnóstwo różnego rodzaju możliwości wywoływania elementów celem nadania im pewnego wyglądu. Jeżeli nie wiesz jak - dobrze Cię tu widzieć! Szukałeś pewnie czegoś zupełnie innego, ale skoro już tu trafiłeś… oto i metody:

- poprzez id - znak: `#`,
- poprzez klasy - znak: `.`,
- poprzez znaczniki - czyli `a`, `ul`, i mnóstwo innych,
- poprzez atrybuty - fajna sprawa! Za pomocą `[href*=’radektynudziarzu’]` można ukryć wszystkie linki zawierające taką frazę,
- poprzez pseudoklasy oraz pseudobloki - o tym pisałem [na blogu dawno temu]({{site.baseurl}}/wpisy/pseudoklasy_oraz_pseudoelementy/).

Czym się różni klasa od id? Czy są różnice w znacznikach a klasach? O tym też pisałem! Blog co prawda zamienia się w małe kółko wzajemnej adoracji - ale czy nie fajnie mieć wszystko pod ręką? [Tutaj więcej informacji]({{site.baseurl}}/wpisy/klasa_id_tag/).

Dobrze, co z tą wagą? To dość prosta sprawa: są metody stylizowania na bardzo szeroką skalę. Są i takie, które trafią do jednego elementu na milion. Jak je wyłapać?

Pomyślmy… chcemy nadać inny wygląd wszystkim linkom. Łatwo: w CSSie nadamy nowe wartości dla znacznika `a`. A jeżeli zależy nam na wszystkich elementach, które posiadają id o wartości `subscribe-link`? Zatem napisać będzie należało `#subscribe-link`. Okej, a teraz chcemy nadać wygląd na elementom takim, które posiadają nadaną klasę `read-more`. Proste: `.read-more` Zamieszanie, co? W tym szaleństwie jest metoda.

Zakres stylów nadanych poprzez znacznik jest bardzo duży. Obejmuje wszystkie elementy na stronie. Czy nie podobnie będzie z pseudoelementami? Jak najbardziej! ID znowu będzie celowało w jeden element na stronie - zatem różnica jest spora (przypominam - id można nadać wyłącznie raz na danej stronie!). Klasy dotyczą wielu elementów na stronie, ale nie wszystkich - podobnie jak pseudoklasy.

Z tego wszystkiego wyżej bardzo łatwo wyciągnąć wnioski: style nadane przez znacznik będą z pewnością zastąpione przez style z klas bądź id. Aby było to łatwiej pojąć, warto zerknąć na przykład:

```html
<style>
li{
    color: red;
}

.menu-item{
    color: blue;
}

#home-link{
    color: orange;
}
</style>

<ul>
 <li id=”home-link”>Home</li>
 <li>About us</li>
<li style=”color: pink”>Our Projects</li>
 <li class=”menu-item”>Contact</li>
</ul>
```

Pierwszy tekst - ten z `#home-link` będzie miał kolor pomarańczowy. Powód, że kolor będzie taki a nie inny jest bardzo prosty: waga id jest większa od wagi znacznika. Drugi tekst? Nie ma ani klasy, ani id - zatem kolor będzie czerwony. Ostatni tekst - to oczywiste: niebieski.

Co z elementem z listy posiadającym style inline? To ważne. Style inline są największej wagi. Warto mieć to na uwadze - nie jest to najczęściej wykorzystywana metoda, ale *bije* na głowę pozostałe.  

A co jeżeli jest więcej znaczników niż jeden? Zaczynają się schody. W tym może pomóc taka mała grafika - ustali ona kolej działania danych zasad:

![Obrazek przedstawia kolejność oraz wagę danych elementów w CSS]({{site.baseurl}}/img/post-img/2020-01-03/css-specificity-tabelka.png)

Wagę danego zapisu warto sobie jakoś określić. Tłumacząc czym jest CSS Specificity używam do tego takiego zapisu: [inline, id, klasa, znaczniki]. Jaka będzie waga `#home .menu-link:hover`? Należy pamiętać, że suma poszczególnych selektorów wyznacza wagę. Identyfikator jest jeden, jest jedna klasa oraz pseudoklasa. Waga zatem wyniesie [0,1,2,0], ponieważ klasy oraz pseudoklasy sumujemy.

CSS Specitifiy bardzo fajnie obrazuje jak możnie poprawniej pisać CSSa. Wszystko jednak nie ma znaczenia po użyciu `!important`. Należy o tym pamiętać. Użycie tego zapisu łamie zupełnie zasady i żadna waga nie jest w stanie go przebić. Aby nadpisać style nadane oraz zastosowane wraz z `!important` trzeba go użyć po raz drugi. A to potrafi zupełnie namieszać. Pamiętajmy, że dobry kod powinien być przejrzysty - `!important` zupełnie temu przeczy.

Skoro teoria już jest jasna, może warto coś przetrenować?

### Przykład praktyczny

Mamy następujący kod:

```html
<article class="news">
  <header class="news-heading">
    <h1 class="news-title">Nowy artykuł</h1>
    <p class="news-desc">Szybka notka z danego artykułu</p>
  </header>
    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
    <p>Distinctio architecto dolore dolorum cum!</p>
  </p>
  <p>
    Dolorem quisquam architecto aspernatur esse? Repudiandae nesciunt delectus repellat hic?
    <hr>
    <p>Similique consequatur accusamus nesciunt dicta.</p>
    <p>Consequuntur ut incidunt molestiae eaque.</p>
</article>
```
I CSS, którego będziemy analizować w kawałkach:
```css
article{
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2%;
}

.news{
  max-width: 860px;
}
```

Pierwsza konfrontacja. Jaką szerokość będzie miał `article.news`? Waga klasy jest większa od wagi znacznika - zatem szerokości to `860px`. Pozostałe elementy nie są nadpisane, zatem będą obowiązywać zarówno kiedy użyje się klasy. To bardzo wygodne, ponieważ dzięki temu nie ma niepotrzebnego nadpisywania CSSa.

```css
.news-heading .news-title{
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.news-title{
  padding: 10px;
}
```

Określmy wagę następujących zapisów: będzie to odpowiednio [0,0,2,0] oraz [0,0,1,0]. Łatwo zatem wywnioskować, że obowiązujący zapis to ten pierwszy.

Załóżmy jednak, że chcemy nadpisać style nadane przez pierwszy zapis. Aby to zrobić, waga stylów musi być większa aniżeli [0,0,2,0]. Nie mamy do dyspozycji identyfikatora ani możliwości edytowania CSSa. Co teraz? Nadal możemy zrobić to w bardzo łatwy sposób. Wystarczy że do zapisu dołożymy znacznik - efektem czego waga zwiększy się.

```css
header.news-heading .news-title{
  text-transform: capitalize;
}
```

Teraz zamiast wielkich liter uzyskamy kapitaliki. Przykład wydaje się być banalny, ale jeżeli mamy do czynienia z jakimś gigantem i do tego źle napisanym CSSem to dodanie znacznika do zapisu może być wyjściem z opresji.

```css
p{
  font-size: 18px;
  color: blue;
}

p.news-desc{
  font-size: 22px;
  color: green;
}

p:not(.news-desc):hover{
  color: red;
}
```

Tutaj nieco trudniej - ale tylko nieco. Jak sam CSS wskazuje, wszystkie znaczniki `p` mają mieć wielkość czcionki równą `18px` oraz niebieski tekst. I tak będzie - dopóki to wszystko nie zostanie napisane. `p.news-desc` sprawi bowiem, że czcionka będzie większa, a kolor będzie nie niebieski, a zielony.

Trzeci zapis - czy może sprawić problemy? Nie powinien - dotyczy on wszystkich najechanych paragrafów bez klasy `.news-desc`. Jaka będzie specyficzność tego zapisu? Jest jeden znacznik, jest pseudoklasa, jedna klasa - a co z `not`? On nie wpływa na specyficzność zapisu. Zatem wagę będzie można zapisać [0,0,2,1].

W przypadku gdzie w kodzie jest wywołany dwa razy ten sam selektor obowiązywać będzie ten drugi. CSS jest czytany od góry do dołu, zatem logiczne jest że style będące na końcu będą brane pod uwagę jako te właściwe.

### Podsumowanie

CSS Specificity to ważny temat. Kiedy chcemy coś przekazać, staramy się o jasny przekaz. Nie powiemy “byłem w Polsce w ostatni weekend”, ponieważ nie jest to informacja konkretna. Jeżeli powiemy “byłem w polskich górach w ostatnim weekendzie”, sytuacja nieco się poprawia. Tylko jakie góry? Świętokrzyskie? “Byłem w Beskidach w zeszły weekend”. Nie ma potrzeby informować o górach - a przekaz jest oczywisty. Czy analogicznie nie jest z pisaniem stylów?

Chociaż w artykule wspominałem o stylach pisanych inline, nie pokazałem żadnego przykładu opartego o te rozwiązanie. Uważam, że jedną z gorszych decyzji jakie można podjąć podczas pisania strony to stosowanie styli inline. Trudno je zastąpić celem wprowadzenia zmian w wyglądzie. Na plus idzie fakt trzymania wszystkiego w kupie - ale nie po to mamy rozszerzenie `.css`, aby całość mieszać z `.html`, czyż nie?

CSS Specificity nie poświęca się mu dużo czasu, ponieważ z początku nie wydaje się niczym konkretnym. Pisanie CSSa wchodzi w krew bardzo, bardzo szybko. Kiedy jednak mamy większy projekt, to sposób, w jaki został zakodowany CSS jest kluczowy. Odpowiednio napisany sprawi że zamiast wystukania stu pięćdziesięciu dodatkowych linijek do napisania będzie dziesięć.
