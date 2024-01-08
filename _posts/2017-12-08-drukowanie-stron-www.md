---
layout: post
title: Przygotowanie strony do druku
author: Radek
categories: css
excerpt: CSS to nie tylko wygląd strony, ale również wydrukowanych stron internetowych!
comments: true
img-thumb: 2017-12-08.png
---
Czasami musimy coś wydrukować. Uznajmy, że materiały na stronie internetowej są nam koniecznie potrzebne do załatwienia jakiejś ważnej sprawy lub będą nam służyły jako uzupełnienie naszych notatek. Nie będzie działo się nic złego jeżeli notatki te będą brane z wikipedii - ponieważ ta posiada funkcję drukowania od zarania dziejów, ale co jeżeli źródło naszej wiedzy pochodzi z jakiejś innej witryny?

Wtedy jako prowadzący stronę mamy obowiązek przystosować stronę do takiej formy przedstawienia treści. 

> Radek idioto XD 2k17

Tylko kto to robi? :D 

No właśnie nikt - a że temat uważam za ciekawy, to dzisiaj przystosujemy sobie właśnie #bykiwkodzie do takiej formy, aby wydrukowany artykuł wyglądał równie dobrze jak na ekranie komputera.

### Wstęp do stylizowania strony pod kątem druku

Przede wszystkim musimy ustalić kilka rzeczy. Jedną z nich - i to podstawową - będzie czcionka. Tutaj, na blogu używam czcionki Open Sans.I tutaj słów kilka odnośnie czcionek.

Warto wiedzieć, że czcionki dzielimy przede wszystkim na dwa rodzaje: **szeryfową** oraz **bezszeryfową**. Skąd takie nazewnictwo? Chodzi tutaj o ich wygląd. W przeciwieństwie do drugich, te pierwsze posiadają ozdobniki w postaci m.in. ogonków doczepionych do liter. Jakiego rodzaju czcionką jest Lato? Oczywiście że bezszeryfową. Są one lepsze w czytaniu czegoś na wyświetlaczu. Jest to swego rodzaju dogmat, który został już potwierdzony kilkaset razy. Oto niektóre powody dlaczego czcionki rodzaju sans-serif są lepsze dla wyświetlaczy:
- Czcionka szeryfowa może nadać odgórny charakter tekstowi ze względu na zawarte szeryfy,
- Ze względu na możliwą responsywność czcionka szeryfowa jest lepiej skalowalna,
- Bardzo dawno temu: czcionki sans-serif są łatwiejsze do przedstawienia na niskich rozdzielczościach. 

Wyobrażacie sobie dużą ilość tekstu, gdzie użyto serif na niskiej rozdzielczości? Wyglądałoby to słabo. W artykule wydrukowanym nie ma tego problemu, wykorzystamy więc czcionkę szeryfową. Postawmy na Times New Roman - klasykę gatunku. 

Inne modyfikacje czcionki. Tutaj sprawa jest również ważna. Pamiętajmy, że druk nie pozwala na przenoszenie się do stron poprzez kliknięcie linku, a więc należy zredukować kolory. Często również trafia się na strony o białym kolorze czcionki i ciemnym tle - warto pamięć, aby ustawić odpowiednie właściwości. Mamy również niepotrzebne elementy typu menu, jakieś nierówne linie, stopka, komentarze. Należy je także usunąć. 

Dobrze, możemy uznać że kwestia teoretyczna została zakończona. Zacznijmy działać.

### Stylizowanie artykułu

Jak doskonale wiemy, responsywność strony internetowej otrzymujemy poprzez zastosowanie `@media screen..`. Aby określić style dla drukowania WWW używamy następującej sekwencji:

```css
@media print{
/*tutaj dodajemy style*/
}
```

W oparciu o to będziemy tworzyli wygląd naszego drukowanego artykułu. Aby było łatwiej sprawdzić efekty pracy, opierać będziemy się o jeden z artykułów - niech to będzie [pierwszy wpis na #bykiwkodzie]({{site.baseurl}}/wpisy/hello_world/). Posiada on dużo różnego rodzaju treści jeżeli idzie o kod: jest cytat, spis treści, linki, pogrubienia i tak dalej. Ponadto nie jest bardzo obszerny, dzięki czemu nie będziemy musieli żmudnie przewijać kilku stron pod drukowanie.

Aby otrzymać obraz tego, jak będzie wyglądała nasza wydrukowana witryna wystarczy kliknąć `ctrl+p`. Nadmienię, że używam przeglądarki Chrome.

![]({{site.baseurl}}/img/post-img/2017-12-08/fot01.png)

OK, szybki rzut oka na to z czym mamy do czynienia. Przede wszystkim - widzimy niepotrzebne menu oraz to, że wszędzie jest bardzo dużo wolnej przestrzeni. Ponadto cytat może być słabo widoczny, ponieważ kontrast pomiędzy nim a tłem jest nieduży. Jak też założyliśmy, linki są kolorowe. Możemy zatem się wziąć za poprawianie strony.

Najbardziej diametralna zmiana jaka nas czeka dotyczy czcionki - jak ustaliliśmy, będzie to Times New Roman. Pamiętajmy, że całość zapisujemy w `@media print`:

```css
html{
 font-family: ‘Times New Roman’, serif;
}
```

Jeżeli jednak spojrzymy na kod CSS strony, to w kwestii nadania czcionki wykorzystuje shorthand. Wykorzystajmy go również - ustalimy przy okazji wielkość czcionki oraz odstęp między wierszami. Poprawmy zatem powyższy kod:

```css
html{
 font: normal 400 16px/24px 'Times New Roman', sans-serif;
}
```

Dobrze - przy okazji chciałbym wspomnieć o parametrze, który spędza sen z powiek wszystkim zajmującym się typografią. Jest to **interlinia**. Tłumacząc możliwie najprościej jest to odstęp pomiędzy wierszami w tekście. To bardzo ważne, ponieważ dzięki niemu czyta się łatwiej. W tym przypadku zastosowaliśmy typową interlinię - jest to 1.5 wielkości czcionki. To ważne, aby wybrać odpowiednią wartość - dzięki temu zajmiemy mniej stron, a przy okazji nie będziemy męczyć oczu wielkimi przerwami. Wartość 1.5 jest standardową i powszechnie używaną przy tworzeniu dokumentów. 

Aby sprawdzić, jak bardzo ważna jest interlinia utworzyłem codepen, na [którym dobrze to widać](https://codepen.io/radek024/pen/aVMwYE?). 

Spójrzmy szybkim okiem na pierwsze rezultaty:

![]({{site.baseurl}}/img/post-img/2017-12-08/fot02.png)

Okej, tutaj już widzimy pierwsze rezultaty. Bez zbędnego pisania przejdźmy do dalszych działań.

Z pewnością rzeczą której nie potrzebujemy to menu i kilka innych rzeczy. Ukryjmy to przed osobą która będzie chciała wydrukować artykuł:

```css
   nav, footer, .book, .meta, #disqus_thread{
      display: none;
    }
```

Ukryliśmy właśnie nawigację, stopkę strony, informacje dot. kto jest autorem, datę, kategorię. Te ostatnie są raczej dyskusyjne, ale uznajmy je za nie do końca istotne względem całości treści. Po wydruku nie otrzymamy również okienka z komentarzami oraz sekcji powiązanej z książką - one również nie są ważne. 

Zanim przejdziemy dalej, warto zwrócić uwagę na regułę do ukrywania jaką użyłem. Czy `display: none` to nie te diabelskie rozwiązanie? Owszem. Pamiętajmy jednak że ukrywamy tutaj treści dla strony **wydrukowanej**, nie ma zatem tutaj nic złego. Strona wydrukowana różni się od tej online, w tym wypadku chodzi między innymi o czytanie treści przez automaty. Inaczej patrzymy na stronę, ponieważ wtedy nie jest już czymś *z duszą* dla maszyny, a ciągiem znaków. Z `HTML` robi się `T` ;).

Z zrzutu ekranu strony możemy zauważyć, że kolor linków się nie zmienił. Ustalmy go na kolor taki jak tekstu - ale dodajmy też bezpośrednio po nim właściwy odnośnik.

```css
body:not(.main-page) .content a{
        color: #000;
        text-decoration: none;
    }    
    
a:not([href^="#"])::after{
 display: inline-block;
 content: "(" attr(href) ")";
}
```

Tutaj znowu mogą narzucić się pytania: 
- Nie mogłeś użyć `!important`?! Przecież to tak i pójdzie do druku!
- Skąd ten drugi zapis przy `content`?
- Dlaczego `inline-block`?

Zaczynając od `!important` - weźmy pod uwagę, że strona wymaga często specyficznego dostępu do danych właściwości. Czy musimy się o to martwić kiedy konwertujemy stronę do druku? Raczej niekoniecznie... ale pamiętajmy o tym, że strona tak czy siak musi być skalowalna. Co jeżeli pojawi się odnośnik, który będzie należało podkreślić? Taki zapis bezpośrednio odnoszący się do linków będzie zdecydowanie łatwiejszy w zastosowaniu, ale jak już wiemy - niesie za sobą wady. Drugie pytanie jest raczej zbędne i należałoby po prostu dokładnie przeanalizować kod - za pomocą [pseudobloków]({{site.baseurl}}/wpisy/pseudoklasy_oraz_pseudoelementy/) utworzone zostały linki znajdujące się pod linkiem. `inline-block` natomiast pozwala na swodobne przemieszczenie się linku - jeżeli jest za duży to przechodzi do kolejnej linii i nie *ciągnie* za sobą treści oryginalnej linku.

Jeżeli jeszcze raz spojrzymy na zrzut, widzimy tam charakterystyczne dla nagłówków kreski oraz dużą przestrzeń. Czy te cechy są konieczne? Usuńmy je:

```css
.post h3{
 padding: 0;
}
    
.post h3::before{
 content: "";
}
```
Idąc za ciosem - nagłówek dot. spisu treści nadal jest napisany jakimś `sans-serif`. Ponadto czcionka w nim jest nieco mniejsza - bystre oko to zauważy ;). Zmieńmy to:

```css
.table-content h3{
 font-family: 'Times New Roman', serif;
}

.table-content .content-list{
 font-size: unset;
}
```

Tutaj pojawia się kolejne pytanie: do czego służy `unset`?

`Unset` to jedna z wartości uniwersalnych w CSS. Inną jest na przykład `inherit` lub `initial`. `Unset` wymazuje obecną wartość i pobiera nową od rodzica lub od wartości `initial`, czyli początkowej. Tutaj wracamy do wartości początkowej. Jest to o tyle nietypowa sytuacja, że wielkość początkowa czcionki to 16px, a więc rozmiar czcionki we wpisie będzie identyczny do w artykule.

Ponadto - style dla cytatu są nadal niezmienione. Nie możemy tak tego zostawić?

```css
blockquote{
 font-size: unset;
 color: #000;
 font-style: italic;
}
```
Tutaj podobnie: cytaty mają z reguły nieco większą czcionkę oraz posiadają trudny do odczytania kolor - szczególnie przy druku. Dlatego też kolor przy wydrukowaniu jest po prostu czarny, ale w zamian za to (aby móc odróżnić cytat od tekstu) posiada pozostałość ze strony w postaci cudzysłowów i jest pochylony.

Pogońmy jednak całość i nadajmy style reszcie artykułu w zakresie wyglądu:

```css
div[class^="language"]{
 border: none;
 padding: unset;
}
    
code{
 color: #000;
 padding: unset;
 font-size: 16px;
}
.post h3 code{
 font-size: 1.4em;
 text-transform: lowercase;
 font-weight: 400;
}
    
div.language a::after{
 content: "";
}

.welcome-heading{
 padding-top: 0;
}
    
.container{
 margin-top: 0;
}
```

Tutaj nic nie powinno budzić wątpliwości. 

W taki oto sposób skończyliśmy stylizowanie artykułu na #bykiwkodzie. To naprawdę nie było trudne - a przyczyniliśmy się tym do zwiększenia dostępności strony.


### Podsumowanie
To jednak nie musi być koniec z dostosowaniem drukowania strony internetowej. Co jeżeli chcielibyśmy jeszcze dokładniej to zrobić? 

Do drukowania dokumentów istnieją inne specjalne znaczniki w CSS. Jeden z nich to `@page`, który pozwala na m.in. ustalanie marginesów stronie drukowanej. Opis tego narzędzia można znaleźć na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%40page).

To jak, drukniemy coś dzisiaj? ( ͡° ͜ʖ ͡°)
