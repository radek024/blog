---
layout: post
title: Usprawienie bloga z wykorzystaniem ChatGPT - praktyczny przykład
author: Radek
categories: offtopic strony-www
excerpt: Kilka słów odnośnie możliwości wykorzystania ChatGPT w poprawie wydajności bloga.
comments: true
img-thumb: 2023-04-14.png
---
Cały Internet już od dłuższego czasu huczy o tym, jak dobrym i niezawodnym narzędziem jest ChatGPT. Czy faktycznie jest czym się interesować? Z pewnością sposób przetwarzania informacji osiągnął kolejny poziom. Odpowiedź możemy dostać bezpośrednio do zadanego pytania. Rodzi to pewne naturalne obawy, ale generalnie jest to krok w ciekawą stronę.

### Czym jest ChatGPT?
Dla osób, które do tej pory nie miały okazji korzystać z ChatGPT śpieszę z kilkoma słowami wyjaśnienia. Narzędzie udostępnione przez Open AI pozwala na zadanie pytania w języku naturalnym, a następnie zwrócenie w klarowny sposób (a na żądanie — jeszcze bardziej klarowny) odpowiedzi, która kontekstem będzie zgodna z treścią zawartą w pytaniu. Po drugiej stronie ekranu, mimo że odpowiedź wydaje się być napisana przez człowieka wcale taka nie jest — jest to zbitek pasujących do siebie wyrazów, które powstały jako wynik przetworzenia dużej (i to nie są wielkości rzędu wyłożenia dyskietkami boiska do piłki nożnej, a o wiele większe) ilości tekstów.

Sam ChatGPT nie jest też żadną rewolucją w branży AI - jest to kolejny z wielu modelów, który - w tym konkretnym przypadku - jest trenowany pod kątem języka naturalnego. Przykładem modelu alternatywnego może być Midjourney czy też Copilot.

ChatGPT w chwili pisania artykułu ma wiedzę opartą do roku 2021. Pytania ponad ten czas będą albo mieszanką posiadanej już wiedzy, albo pewnego rodzaju halucynacją.  Odpowiedź na pytanie o ubiegłoroczne (a więc 2022) Oscary jest jawnym kłamstwem:

![ChatGPT podający niewłaściwą odpowiedź dotyczącą Oscarów]({{site.baseurl}}/img/post-img/2023-04-14/gpt-klamstwo.png)

**ChatGPT nie należy zatem traktować jako sposób na rozwiązanie wszystkich problemów.** Mimo że wygląda rzetelnie i odpowiada jak człowiek — to zlepek pasujących do siebie (według algorytmów) danych.

### ChatGPT a programowanie

W Internecie łatwo znaleźć komentarze oraz artykuły o tym, że programowanie właśnie zostało zagrożone przez sztuczną inteligencję. I uwaga — to jest prawda, jeżeli założymy, że ograniczamy się do programowania które opiera się na funkcjach liczących, czy podane jako argument wartości mogą stanowić trójkąt.

Rzeczywiste programowanie wymaga jednak kontekstu — i to bardzo szerokiego. Ilość informacji, którą należałoby dać jako dane wejściowe oraz czas poświęcony może być porównywalny z czasem poświęconym na zakodowanie rzeczy do zrobienia. Należy pamiętać, że to, co zwraca model może być totalnym bełkotem, który wygląda całkiem spójnie. Kod napisany przez AI w Pythonie, który zmieni nam tekst według szyfru Cezara ma przykładowo (celowo wprowadzone przez GPT) dwa błędy:

```python
def cezar_szyfruj(tekst, klucz):
    zaszyfrowany_tekst = ""
    for litera in tekst:
        if litera.issupper():
            zaszyfrowana_litera = chr((ord(litera) + klucz - 65) % 26 + 65)
        elif litera.isslower():
            zaszyfrowana_litera = chr((ord(litera) + klucz - 97) % 26 + 97)
        else:
            zaszyfrowana_litera = litera
        zaszyfrowany_tekst += zaszyfrowana_litera
    return zaszyfrowany_tekst
```

Osoby posiadające doświadczenie w programowaniu będą w stanie wyłapać te błędy, początkujący z kolei mogą mieć problem. Przyczynić ku temu może się np.: brak znajomości podstaw kryptografii, tablicy ASCII bądź samego języka programowania. Te rzeczy teoretycznie może nam wytłumaczyć ChatGPT, ale w praktyce nie musi być to informacja rzetelna, szczególnie wraz ze wzrostem poziomu skomplikowania.

Czy w takim razie jest sens wykorzystywania ChatGPT to kodowania? Pewnie, że tak. Przed rozpoczęciem takich działań warto jednak podkreślić:

musisz znać rzeczy związane z tym, co chcesz osiągnąć. Jeżeli nie wiesz, jak ma wyglądać efekt końcowy - AI się nie domyśli.
kod nie jest napisany w sposób logiczny. Kod może realizować pewną logikę (poprawność trójkąta, szyfr Cezara), ale sam w sobie nie ma kontekstu — sposób zapisu kodu wynika z posiadanych danych, a nie sensu pod kątem np.: dalszej rozbudowy.
kontekst jest bardzo istotny. Wygenerowanie kodu do aplikacji pisanej od zera (z własnym frameworkiem lub pokątną logiką) będzie trudne, ponieważ ChatGPT nie ma wiedzy na ten temat. Możliwe jest jednak napisanie zapytania SQL do bazy Wordpressa.

### Baza do wykorzystania ChatGPT do poprawy bloga

Posiadając tło jak należy traktować ChatGPT możemy przejść do bloga. Założenie, jakie postawiłem sobie przed praktyką działania to skala działania (nie może być to wielka rzecz), nie może być to także poprawa tekstu. Ponadto zależało mi na realizacji rzeczy, który może obrazować praktyczne wykorzystanie w artykule, który nie ma miliona znaków. Z drugiej strony obowiązują mnie pewne ograniczenia, ponieważ blog jest utrzymywany na GitHubie, więc nie mam możliwości korzystania z niestandardowych bibliotek. Jeżeli jest zatem możliwość ograniczenia się do podstawowych metod, tym lepiej dla mnie.

Świadom technicznego wybrakowania bloga pod wieloma kwestiami uznałem, że możemy poprawić ten stan. Jako że artykuły piszę w markdown, to aby zadbać o bloga pod kątem wydajności artykułów musiałbym dodawać sporo ekstra atrybutów. Tego ręcznie robić nie chcę, z pomocą zatem przychodzi ChatGPT.

Jednym z prostych sposobów na zwiększenie wydajności strony internetowej jest zastosowanie lazyloadingu. Jeżeli wpis zawiera sporo grafik (lub innych multimediów - dalej będę stosował uproszczenie), to nie wszystkie musimy ładować bezpośrednio do artykułu - to strata zasobów. Aby dodać lazyloading do wpisu, który tworzę w Jekyllu, to do każdej grafiki musiałbym dopisać `{:loading=”lazy”}` - jest to rzecz, którą można zautomatyzować.

Na korzyść przychodzi fakt, że Jekyll umożliwia tworzenie dodatkowej zawartości na podstawie własnych warunków. Jest to możliwe za pomocą [Generatorów](https://jekyllrb.com/docs/plugins/generators/). Dodanie reguły odpowiedzialnej za lazyloading będzie w takim razie możliwe.

Wyzwania, jakie stoją przede mną to brak konkretnej wiedzy o Ruby oraz Jekyllu. Szablon bloga sprawdza mi się mimo upływu czasu, nie mam potrzeby jego rozbudowy. Nie pisałem nigdy skomplikowanego kodu w Ruby od zera. Widząc przykładowy kod jestem w stanie powiedzieć, za co odpowiada, ale nie daję sobie ręki uciąć, że napisałbym taki od zera. Szczęśliwie mam środowisko deweloperskie, więc mogę testować do woli.

Posiadamy w takim razie zdefiniowane silne oraz słabe strony realizacji — możemy przystąpić do wykorzystania ChatGPT.

### Realizacja lazyloadingu za pomocą ChatGPT

Zacznijmy od czystego arkusza, zadając wiadomość z zapotrzebowaniem na kod, który zrealizuje nam uruchomienie lazyloadingu.

```
Napisz kod, który zrealizuje lazyloading na blogu.
```

![Próba zero realizacji zamierzonego kodu]({{site.baseurl}}/img/post-img/2023-04-14/lazyloading-proba-0.png)

Odpowiedź nie jest zadowalająca. Przede wszystkim, już na dzień dobry widzę, że rzecz jest realizowana po stronie JavaScript. Te rozwiązanie mnie nie zadowala, bo widzę, że muszę dodawać klasę do każdego elementu — a w markdown nie jest to wygodne. Ponadto URL grafiki muszę podawać przez atrybut data. To rozwiązanie jest niewygodne pod bloga, który działa na Jekyllu.

Podejście drugie:

```
Popraw kod, uwzględniając, że wpis na blogu jest pisany w markdown
```

![Próba pierwsza realizacji zamierzonego kodu]({{site.baseurl}}/img/post-img/2023-04-14/lazyloading-proba-1.png)

I tutaj popełniam pierwszy błąd - wiem, że nie chcę tego rozwiązania w JavaScript, a tego nie zaznaczam. **Określiłem niepełny kontekst.** Dla mnie to rzecz oczywista, ale nie dla ChatGPT. Dodajmy zatem informację o tym, że nie potrzebujemy JS, a blog jest oparty na Jekyllu.

```
Podaj alternatywne rozwiązanie bez użycia JS, mając na uwadze, że blog jest oparty o Jekylla.
```

Odpowiedź jest następująca:

![Próba druga realizacji zamierzonego kodu]({{site.baseurl}}/img/post-img/2023-04-14/lazyloading-proba-2.png)

Nie chcemy zewnętrznych pluginów. **Co więcej, takiego pluginu nie ma.** Wracamy do punktu wyjścia - mamy problem. Na zapytanie:

```
Takiego pluginu nie ma. Podaj alternatywne rozwiązanie, niezależne od pluginu.
```

ChatGPT zwraca informację o możliwości zastosowania JS, a po jej wykluczeniu — o użyciu artybutu `loading` w HTMLu. Jesteśmy w kropce? Niekoniecznie. Mamy przecież wiedzę, jak budowany byłby przykładowy zapis używający lazyloading:

```md
![Alternatywny opis]({{site.src}}){:loading=”lazy”}
```

To w takim razie chcemy, aby do każdej grafiki dołączyć taki zapis. Wiemy, że nie stosujemy klasycznego HTMLa oraz nie chcemy realizować tego za pomocą extra klasy czy atrybutu. Ze względu na swoją specyfikę, jesteśmy w stanie wyłapać wszystkie grafiki we wpisach za pomocą regex:

![Regex, który znajdzie grafiki w formacie markdown na blogu]({{site.baseurl}}/img/post-img/2023-04-14/lazyloading-proba-regex.png)

Idąc w dalszą konwersację z ChatGPT, mam wiedzę, że nawet poprawiony (a więc taki, który np.: uwzględnia formaty plików) może zostać wykorzystany w sposób niezgodny z przeznaczeniem. Jest to jednak warunek brzegowy - rzecz raczej się nie stanie, musiałbym sabotować własnego bloga.

Posiadając regex, możemy go wykorzystać do wyłapania grafik we wpisie w Jekyllu.

![Regex do wyłapania grafik we wpisie]({{site.baseurl}}/img/post-img/2023-04-14/gpt-klamstwo-2.png)

ChatGPT podaje kod, ale nie spełnia on dodatku (pluginu) do działającego bloga.

W tym momencie z ChatGPT zaczyna się batalia oraz powtarzanie kroków. Tak prosta realizacja przerasta możliwości sztucznej inteligencji. Po kilkunastu krokach i podaniu zapytania:

```
Dodaj do grafik zapisanych we wpisach, które są zapisane w formacie markdown atrybut loading="lazy"  tylko i wyłącznie na podstawie regex, bez stosowania kramdown, nokogiri
```

Zwrócony jest kod, który… nie działa. Dodaje zapis loading=lazy, ale zaraz za obrazkiem. Szybko jednak poprawiam rzecz i we wpisach grafiki udaje się ładować za pomocą lazyloadingu, bez ingerencji JS. Kod jednak można uprościć - kod z 30 linijek schodzi do 13. W efekcie otrzymujemy taki zapis:

```ruby
module Jekyll
    class LazyLoadImages < Generator
      safe true
      priority :low
  
      def generate(site)
        site.posts.docs.each do |post|
          post_output = post.content.gsub(/(?<!`)!\[(.*?)\]\((?!.*loading=)(.*?)\)(?!{.*`)/m, "![\\1](\\2){:loading='lazy'}")
          post.content = post_output
        end
      end
    end
  end
```
Trud skończon. Z poprawą jednej linijki udało się osiągnąć zamierzony efekt.

### Wnioski z używania ChatGPT

Na prostym przykładzie dość obrazowo widać, jak precyzyjnie trzeba określać założenia, które ma spełniać wygenerowany kod. Na przyczynę serii niepowodzeń nie obwiniam prymitywnego sposobu generowania, ale także brak precyzyjnego opisu — ten mimo wszystko powstaje w trakcie. W efekcie osiągamy zakładany wynik, ale z pewnością łatwiej moglibyśmy to osiągnąć sięgając po gotowe rozwiązania - a te na pewno istnieją. ChatGPT nie udostępni jednak bezpośredniego linka do źródła.  A jeżeli już, to linki mogą nie działać - tak było w tym przypadku.

![Regex do wyłapania grafik we wpisie - druga próba]({{site.baseurl}}/img/post-img/2023-04-14/lazyloading-proba-regex-2.png)

Same rozwiązanie jest prymitywne także pod kątem sposobu dodawania atrybutu. Gdyby portal nie był odpowiednio administrowany, a wpisy nie kontrolowane - taki kod mógłby stanowić łatwy przyczółek do trollowania w markdown. Przy obecnych założeniach, gdzie na bloga dodaję wpisy tylko ja, a całość ogranicza mi GitHub, zatem nie mam takich obaw. W przeciwnym razie możliwe byłoby użycie rozwiązań alternatywnych. 

Kiedy dodawałem kod do wpisu w markdown, to plugin wyłapał obecność bloku obrazka także w przykładach. Kod wymagał zatem poprawy przed publikacją wpisu - a więc jest skalowalny (w podstawowym stopniu - z wykorzystaniem nokogiri problemu by nie było).

Czy łatwiej będzie napisać nową metodę, która będzie odpowiadała za autoryzację użytkownika poprzez token z użyciem ChatGPT? Pewnie tak, ale nie należy zakładać, że metoda będzie napisana w pełni przez model. Na początku wspominałem także o tym, że istnieją alternatywne rozwiązania, takie jak Copilot - to jest model który mógłby lepiej wykonać pracę, jaka została tutaj założona, niemniej dostęp nie jest tak powszechny - stąd użycie ChatGPT jako przykładu.

### Podsumowanie

A więc od dzisiaj na blogu mamy lazyloading! Nie jest on wdrożony w pełni, a pracy jeszcze jest dużo, niemniej postawiliśmy pierwszy krok.

Wpis nie został napisany przez AI, ale plugin - owszem.

Jak Wam udało się wykorzystać AI do automatyzacji procesów czy codziennej pracy? Czekam na Wasze komentarze.