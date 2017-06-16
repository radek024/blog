---
layout: post
title: Jak zacząć tworzenie stron WWW?
author: Radek
categories: html css strony-www
excerpt: Takie tworzenie stron WWW nie charakteryzuje się typowym podejściem.
comments: true
img-thumb: 2017-06-16.png
---

Pytania oraz tematy związane z pierwszymi krokami w tworzeniu stron internetowych to temat rzeka. Zawsze są podzielone stanowiska co do tego, jak to należy zrobić; jedni każą natychmiast brać się za projekty, drudzy za poczytanie czegoś, trzeci doradzają uczestnictwo w bootcampie. Jako że jakiś czas temu miałem dużo pracy z dokumentami tekstowymi, zauważyłem pewną prawidłowość: owe **dokumenty to nic innego jak strony internetowe**.

Czy tak nie jest? Strony WWW to po prostu plik odtwarzany przez przeglądarkę wraz z odpowiednim formatowaniem. Wystarczy spojrzeć na #bykiwkodzie. Jest to rozwiązanie korzystające ze statycznych plików - wpisy powstają tutaj jako pliki tekstowe korzystające z Markdown. Udogodnienia jakie oferuje Jekyll pozwalają na odpowiednie ich wystylizowanie i dostarczenie w ciekawszej formie dla odbiorcy.

**Dlatego też uważam, że przed właściwym podejściem do kodowania stron WWW powinno uczyć się odpowiedniego formatowania dokumentów.**

We wcześniej wspomnianej pracy nad plikami wykorzystałem Google Docs. Jest to narzędzie oferowane za darmo przez Google, dodatkowo pliki utworzone w tym edytorze są utrzymywane za darmo na serwerach firmy. To naprawdę kawał dobrej aplikacji która (moim zdaniem) przegoniła MS Office Word. W pracy nad natrafiłem na pewne schematy; duża część materiały wymagała monotonnych działań, to jest formatowania tekstu. Musiałem nadać danej sekcji dokumentu nagłówki, następnie dodać krótki opis, ładnie go pokolorować, dodać listę linków oraz wkleić kilka przezabawnych obrazków - i tak kilka razy. W pewnym momencie okazało się, że ilość materiału jest całkiem spora i aby ułatwić sobie nawigowanie po pliku włączyłem sobie **Konspekt** (*Narzędzia > Konspekt dokumentu*), który zdecydowanie skrócił mój czas poruszania się po pliku.

### Outline

W pewnej chwili zauważyłem swego rodzaju prawidłowość; po nadaniu nagłówków dla materiałów **Konspekt niczym się nie różnił od outline'u, który znamy ze stron internetowych**. Dzięki odpowieniu podziałowi dokumentu byłem w stanie dotrzeć do interesującej części strony - tak samo powinno być z outlinem - podobnie jak w stronach każda jej część powinna być w jakiś sposób opisania, dzięki czemu jest nam zdecydowanie łatwiej poruszać się po witrynie. Dzięki zastosowaniu nagłówka w tym momencie sygnalizuję odbiorcy, że w tym miejscu skupiam się na omówieniu pewnej treści.

### Semantyka dokumentu

Dzięki odpowiedniemu zatytułowaniu dokumentu Konspekt działał prawidłowo. Jaki ma to związek z semantyką? Otóż: dokumenty nie są tak rozbudowane jak strony WWW. Nie posiadamy identycznej możliwości nadawania charakteru danej treści, ale są narzędzia które możemy wykorzystać: nagłówki to najważniejsza ich część. Są pogrubienia, kursywa, lista punktowana i numerowana oraz wiele innych. Dzięki nim możemy nadać naszego tekstowi charakter - ale nie stanowią one wartości *stricte* semantycznej. Dodatkowo nie mamy możliwości zaplanowania tego, co i gdzie może się znaleźć. Udogodnienia te mają za zadanie **zwrócić uwagę czytelnika**.
Na tym etapie dokument nie różni się za wiele od strony internetowej. I w sumie dobrze sformatowany dokument może stać się dobrze zaprojektowanym plikiem HTML. Mimo to, chcąc nie chcąc czarno-biały schemat jest nudny i często zależy nam na wysokiej atrakcyjności produktu. W grę wchodzi **estetyka dokumentu**.

### Estetyka dokumentu

**Hulaj dusza, piekła nie ma.** Taki właśnie komunikat mógłby się pojawiać przed użyciem Comic Sans w dokumencie. Przy poprawianiu dokumentu pod względami stylistycznymi w sumie nie mamy ograniczeń; możemy zmieniać kolor tła, tekstu, wielkość czcionki, jego wyjustowanie, wcięcia i setki innych atrybutów. To właśnie ten krok przybliża nas zdecydowanie do stron. Podczas gdy zmiana koloru, rodziny oraz wielkości czcionki to jedno z pierwszych zastosowań CSSa w naszych witrynach, tak w dokumencie to walka o utrzymanie czytającego.

**Czym jest zatem np.: pogrubienie danego tekstu w dokumencie?** Jest to zabieg stylistyczny czy też semantyczny? W stronach użycie pogrubienia może być wykonane na kilka sposobów:
- za pomocą znacznika `b`,
- za pomocą znacznika `strong`,
- za pomocą atrybutu `font-weight` w CSS.
W dokumencie pogrubienie traktowałbym jako użycie atrybutu `font-weight`, wszak zmieniamy tylko kontur liter. Z drugiej strony pogrubienie nie jest używane ot tak o - często podkreśla ono coś, co autor pragnie przekazać ponad inne treści. Dobrze widoczna jest tutaj niedoskonałość dokumentów. Są one nieco płytsze od stron WWW, przez co łatwiej jest nauczyć się odpowiednio tworzyć dokumenty aniżeli witryny.
Jeżeli zależy nam na odbiorcy, chcemy aby tekst czytało się lekko oraz szybko. Z tego powodu dobór odpowiednich komponentów jest bardzo ważny; przy stronach nie jest inaczej. Dochodzi kwestia *responsive web design* - czyli konieczność myślenia dobrego prezentowania treści w różnych rozdzielczościach oraz ułożenie dokumentu, gdzie w plikach tekstowych często wykorzystujemy nic innego jak... **tabele**. I w sumie tabele jako możliwość ułożenia elementów to nic złego w pliku tekstowym (osobiście nie mam nic przeciwko temu), tak przy stronach jest to stanowczo zła praktyka, ponieważ łamie zasady semantyki. W plikach tekstowych często spotykam się z tabelami jako szansą na ciekawsze zaprojektowanie dokumentu - stąd interpretacja tabeli pod względem estetycznym.

### Źle sformatowany dokument

Ile razy otrzymujemy plik `.doc`, który nie zawiera tekstu tylko np.: wklejone screenshoty zawierające treść? Osobiście spotykałem się z taką praktyką kilkanaście razy. Jest to rzecz jasna bardzo niewygodne. Często nie używa się listy, która jest zastępowana poprzez umieszczanie treści czy też odnośników pod sobą za pomocą klawisza `enter`. Nieczytelna ze względów zaprojektowania oraz rozmiaru czcionka jest również często problematyczna. Czy ktoś kiedykolwiek słyszał o stosowaniu nagłówków treści w dokumencie?
Jak widać, nie tylko strony internetowe borykają się z problemami związanymi z odpowiednim wykorzystaniem odpowiednich narzędzi. Są to kwestie które należy krytykować i poprawiać, ponieważ dzięki temu jesteśmy w stanie poprawić czytelność dokumentów. Tym samym możemy poprawić czytelność stron internetowych; na przykład nie zależy nam na jaskrawym kolorze czcionki na jasnym tle. Co więcej: błędy zarówno na stronach jak i dokumentach często są bardzo podobne (przykładem czego może być nieśmiertelny `br` jako sposób przedstawiania listy czegośtam stronie).

### Kompromis pomiędzy stronami a dokumentem - `Markdown`

**Markdown** to najprościej ujmując zbiór zasad stylizowania tekstu, który można przekształcić na stronę WWW lub zwyczajny dokument. Można tutaj się odnieść do m. in. BB Code, który kiedyś królował na forach internetowych. Tekst umieszczano w różnego rodzaju tagach, przez co był formatowany. W Markdown jest podobnie; poprzez odpowiednie użycie znaków możemy pisać *kursywą* lub **pogrubieniem**. Jekyll (a za tym idzie #bykiwkodzie) wykorzystuje Markdown do tworzenia treści na stronach o niego opartych, zatem wpis ten jest napisany za pomocą Markdown, co można zobaczyć w [kodzie źródłowym bloga](https://github.com/radek024/blog/tree/master/_posts).

Dlaczego jest kompromisem? To całkiem jasne: plik `.md` może stanowić część strony, jak i niezależny dokument. Wystarczy go przekonwertować i otrzymujemy treść jaką potrzebujemy. Poza tym bardzo dobrze obrazuje podobieństwo plików tekstowych do strony, ponieważ w obu przypadkach stosujemy bardzo podobne rozwiązania. Markdown sam w sobie jest ciekawy i warto go poznać chociażby dla własnej wygody, szczególnie jeżeli dużo piszemy. Nie wymaga on używania myszy, ponieważ całość formatowania wykonujemy za pomocą ciągu znaków, co pozwala na sprawniejsze tworzenie artykułów czy wpisów.

### Podsumowanie

Zanim zaczniemy brać pierwsze projekty stron internetowych może warto otworzyć sobie dokument tekstowy z jakąś treścią? Może warto cofnąć się o generację do tyłu i raz na jakiś czas kupić gazetę, aby zobaczyć w jaki sposób gazety, a następnie artykuły są podzielone na części poprzez prawidłowe użycie nagłówków? Solidna praca przy formatowaniu dokumentu z pewnością pozwoli przygotować się do pisania strony WWW.
