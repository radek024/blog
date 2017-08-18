---
layout: post
title: Poznaj czytnik kanałów
author: Radek
categories: offtop strony-www
excerpt: Wszystkie portale które obserwujesz w jednym miejscu!
comments: true
img-thumb: 2017-08-18.png
---

Bardzo często spotykam się z takimi słowami:

>Ciekawy artykuł, chętnie go przeczytam! W sumie to portal mi się podoba, dodam do zakładek…

I tutaj kończy się przygoda z taką stroną. **Kto przegląda zakładki?** Mi się zdarzyło kilka razy, ale tylko ze względu na sprzyjające warunki. Nudziło mi się (i nie była to wcale lekcja angielskiego), a posiadałem połączenie Wi-Fi. Wtedy też uznałem, że sposób czytania treści w taki sposób (poprzez zakładki) jest bardzo niewygodny. Przełączanie się pomiędzy stronami już stanowiło problem. I mam tu na myśli przeskakiwanie w obrębie portalu. Przechodzenie z portalu na portal było jeszcze bardziej uciążliwe.

Przeglądając strony można napotkać się na takie pojęcia jak **RSS** czy **Atom**. W dużym uproszczeniu są to standardy, które umożliwiają pokazanie treści danej witryny. Atom jest nowszym rozwiązaniem, które jest nieco lepiej zbudowane. RSS oraz Atom nieco się różnią, ale w swoich założeniach służą do tego samego: **ułatwienia przeglądania sieci**.

### Przykłady występowania RSS oraz Atoma

Wydawać się może, że RSS oraz Atom umarły śmiercią naturalną. Nic bardziej mylnego! Moim zdaniem zostały one zepchnięte na dalszy plan ze względu na sieci społecznościowe. Wiele portali posiada własnego Facebooka czy Twittera, gdzie użytkownicy są informowani o nowościach na stronie portalu. Problemem jest to, że treści z tego typu gigantów nie zawsze mogą do nas dotrzeć. Zbyt dużo materiałów prowadzi do nadawania priorytetów danym informacjom, przez co może nas ominąć jakiś nowy wpis. Mogę to potwierdzić - prowadzę fanpage który nie posiada dużej ilości odbiorców, a mimo to nie każdy wpis nie trafia do pełnej liczby odbiorców lajkujących stronę.

Porównując dalej, RSS można traktować jako własną telegazetę. Z tą różnicą, że na treści telegazety nie mamy wpływu. I źródeł, z których mamy okazję czytać jest zdecydowanie o wiele więcej.

Idealnym miejscem gdzie można spotkać RSSa/Atoma są wszelkiego rodzaju blogi. Wpisy, które się w nich pojawiają są idealnym materiałem na treści do czytnika. I to chyba ich najpopularniejsze rozwiązanie. Dzięki nim nie musimy przechodzić na strony naszych ulubionych blogów (czy też portali), aby móc przejrzeć najnowsze treści. Innym, całkiem ciekawym wykorzystaniem jest… lista subskrypcji na YouTube. Możemy ją wyeksportować do `.xml`, dzięki czemu lista nowych filmów będzie się pojawiała na liście.

Fajnym przykładem wykorzystania RSSa jest projekt [y2rss.com](https://y2rss.com/), który pozwala na słuchanie wszelkiego rodzaju treści z youtube’a na telefonie czy komputerze. W dużym uproszczeniu film jest pobierany przez RSSa i odpowiednio konwertowany.

### Konfiguracja czytnika

Wybór czytnika nie jest łatwym zadaniem. Z moich obserwacji obecnie w tej dziedzinie konkurują głównie dwie aplikacje: **Feedly** oraz **Inoreader**. Używam tej pierwszej - jest całkiem wygodna. Wersja której używam jest darmowa, ale istnieje również wersja płatna poszerzająca działanie owej aplikacji. Jej również użyję do przedstawienia jak dodać swoje portale do czytnika.

Zacznijmy od założenia konta na portalu. Tutaj możliwości jest całkiem sporo. Można to zrobić poprzez zwykłą rejestrację, konto na Facebooku, Google’u, Twitterze… Zdecydowałem się na zwykłe konto. Rejestracja nie jest trudna (jak zwykle zresztą), więc ten krok pominę. Ekran startowy jest mało ciekawy, więc przejdźmy bezpośrednio do dodawania własnych portali.

![Obrazek przedstawia panel "Feeds" w aplikacji feedly]({{site.baseurl}}/img/post-img/2017-08-18/fot01.png)


Po lewej stronie znajduje się mały, szary panel. Kliknijmy w przycisk **Create your first feed**.

![Obrazek przedstawia okno wyszukiwania w feedly]({{site.baseurl}}/img/post-img/2017-08-18/fot02.png)

Po wpisaniu nazwy portalu w okno wyszukiwania powinien się on pojawić. Rzecz jasna mowa tutaj o dużych portalach - takiego #bykiwkodzie tam nie będzie ;).

Poniżej znajduje się lista stron, które pasują do danego zapytania. **Co jeżeli jednak chcemy dodać portal którego nam akurat nie wyszukuje?** Wtedy możemy po prostu w miejsce wyszukiwania podać adres do strony która nas interesuje.

**Nie każda strona posiada jednak RSSa lub Atoma.** Wtedy niestety nie możemy nic z tym zrobić - ewentualnie warto napisać do osoby odpowiedzialnej za witrynę o wdrożenie tej technologii. Warto przy okazji wspomnieć, że wszystkie strony oparte na Wordpressie wykorzystują RSSa natywnie. Co za tym idzie, [prawie 30% całego Internetu jest w zasięgu czytników](https://w3techs.com/technologies/details/cm-wordpress/all/all)! Rzecz jasna ogólny odsetek jest większy, ale to jest podstawa do której możemy na spokojnie się odwołać. Uważam, że to bardzo dużo liczba.

Przejdźmy dalej; **klikając w przycisk “Follow” pojawia się nam takie okno**:

![Obrazek przedstawia tworzenie pierwszej kolekcji w feedly]({{site.baseurl}}/img/post-img/2017-08-18/fot03.png)

Okienko te pozwala na utworzenie tzw. **kolekcji**, które ułatwiają podział treści. Uznajmy, że na potrzeby tego artykułu utworzymy dwie: jedną nazwiemy *telefony*, a drugą - *gotowanie*. Rzecz jasna warto tworzyć kolekcje tematyczne, tak aby łatwiej było nam operować danym obszarem treści.

Do każdej z kolekcji dodajmy po trzy źródła.

![Obrazek przedstawia tworzenie pierwszej kolekcji w feedly]({{site.baseurl}}/img/post-img/2017-08-18/fot04.png)

Tak prezentuje się panel po lewej stronie. Po kliknięciu w dany tytuł kolekcji jesteśmy do niej przenoszeni. Zakładka “All” pozwala na przejrzenie całości obserwowanych przez nas treści. Wygodna sprawa, no nie?

![Obrazek przedstawia utworzoną kolekcję w feedly]({{site.baseurl}}/img/post-img/2017-08-18/fot05.png)

I tak oto możemy korzystać z kolekcji oraz czytnika. Feedly dba o użytkownika i podczas pierwszych kroków w aplikacji pojawia się dużo tooltipów, które pozwalają na zapoznanie się ze środowiskiem.

### Zalety oraz wady korzystania z czytników

Czytniki mają już swoje lata. Czy mimo to są bezużyteczne? Moim zdaniem nie. To naprawdę wygodne narzędzia, które pozwalają na łatwiejszą organizację treści które lubimy. Dzięki feedly nie posiadam tablicy zarzuconej wszelkiej treści wpisami na temat stron internetowych czy informacjami o aktualnościach w mojej okolicy. Jeżeli używamy takiej aplikacji całkiem często możemy w sumie odpuścić Facebooka, jeżeli ten służy nam wyłącznie do obserwowania “co w trawie piszczy”.

Problemem jednak tak starego rozwiązania jest niemal brak interakcji. To moim zdaniem zniszczyło czytniki. Facebook oraz inne media społecznościowe posiadają możliwość komentowania oraz reagowania na dane treści. Takiego czegoś brakuje RSSowi oraz Atomowi. Implementacja tego teraz nie ma jakiegokolwiek sensu, mogłaby być nawet ostatecznym nożem w plecy.

Inną sprawą jest częstotliwość aktualizowania treści. Po dodaniu portalu do jednej z kolekcji aplikacja natychmiast udostępnia zestaw artykułów z danej witryny. Mimo to czas odświeżania jest różny; od kilkunastu minut do nawet kilku godzin. Warto mieć to na uwadze, szczególnie kiedy interesują nas natychmiastowe wiadomości. Z jednej strony mamy pewność, że dana informacja do nas trafi, ale z drugiej - nie zawsze na czas. Osobiście kiedy konfigurowałem RSSa na #bykiwkodzie miałem lekki problem - wpisy pojawiły się, ale prowadziły do złej strony. Po prostu w RSSie generowałem sobie zły adres. Trochę się z tym pomęczyłem, ale się udało - o ile mnie pamięć nie myli, to musiałem poczekać około 4-5 godzin. Tutaj jednak czas oczekiwania był zależny od zmiany konfiguracji pliku, a nie nowego wpisu.

### Podsumowanie

Uważam że czytniki to naprawdę dobra sprawa. Może jednak nie jest tak źle? Osobiście jestem w stanie policzyć na palcach jednej ręki znajomych, które używają tego niedocenionego udogodnienia. Jestem przekonany, że byłoby takich zdecydowanie więcej… gdyby tylko wiedziały o narzędziu, jakim jest czytnik.

A co warto obserwować na czytnikach jeżeli idzie o strony internetowe? Kiedyś napiszę o tym bardzo duży artykuł ( ͡° ͜ʖ ͡°). Póki co zapraszam do innych wpisów - może już na czytniku?
