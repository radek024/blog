---
layout: post
title: Automatyzacja pracy z użyciem Google Sheets
author: Radek
categories: offtopic 
excerpt: Wykorzystamy arkusze do czegoś innego aniżeli sumowania liczb.
comments: true
img-thumb: 2023-05-26.png
---

Sztuczna inteligencja w ostatnim czasie dość bezpardonowo mówi nam, że nie ma sensu programować czegoś tysięczny raz. Zamiast tego, wystarczy napisać zapytanie i w rezultacie otrzymać gotowe rozwiązanie problemu, chociażby w postaci niedużej aplikacji.

Niestety, ale (jeszcze) te rozwiązania są na tyle niedoskonałe, że opracowanie takiej aplikacji może być dość trudne. Przykładowo zaproponowane rozwiązanie wymaga jeszcze hostingu oraz utrzymania. Umiejętność programowania jest zatem nadal ważna, ale czy zawsze potrzebna? Im dłużej klikam w komputery, tym bardziej odnoszę wrażenie, że nie. Wiele rzeczy możemy upraszczać z wykorzystaniem narzędzi pośrednich, czyli na przykład za pomocą Zapiera. Za jego pomocą jesteśmy w stanie automatyzować dużo działań. Podobnie jest z Google Sheets, który będzie dzisiaj bohaterem wpisu.

### Jakie narzędzia do automatyzacji pracy?

Tak jak wspomniałem wcześniej, dobrym narzędziem do automatyzacji pracy może być Zapier - z jego wykorzystaniem możemy wysyłać cykliczne maile, reagować na podstawie wykonanych akcji (na przykład: nowa wiadomość na Slacku) czy czasu (każdego drugiego dnia miesiąca wykonaj…). Przykładowo, ja używam Zapiera do mojego zestawienia wydatków, który notabene wykorzystuje arkusz w Google Sheets. 

Automatyzacja zadań w Zapierze to nie jedyna rozwiązanie. Proste, systemowe operacje możemy opierać na cronie, który uruchamiany będzie zamieniał nam nazwy zdjęć tak, aby posiadały przedrostek z datą. 

Innym, ciekawym narzędziem jest make. Podobnie jak Zapier pozwala na automatyzację pracy, ale w mojej ocenie jest mniej intuicyjny. W przeciwieństwie do pierwszego nie operujemy na liście kroków, a piaskownicy, gdzie musimy pilnować, czy flow automatyzacji jest dla nas jasny.

Kolejnym narzędziem, które pozwoli nam zautomatyzować pracę jest IFTT. W porównaniu do trzech poprzednich jest najprostszy, ale też posiada najwięcej ograniczeń. Jako że zazwyczaj skalujemy narzędzia, to nie polecam IFTT ze względu na ograniczenia właśnie.

Jako wisienkę na torcie pozostawiam Google Sheets. Wbrew pozorom arkusz może być narzędziem w automatyzacji pracy. Google Sheets posiada kilka ciekawych funkcji, które pozwalają na wykorzystanie go nie, tylko aby przeliczyć kolumnę cyfr, ale także w sposób zaawansowany operować na zbiorach danych.

### Google Sheets vs Microsoft Excel — co lepsze?

Zanim przejdziemy do projektu, należy to podkreślić: Google Sheets nie jest rozwiązaniem idealnym. Ma jednak sporo plusów: jest za darmo, umożliwia łatwe udostępnianie pliku innym, nie wymaga licencji. W porównaniu do lokalnie zainstalowanego Microsoft Excel nie jest tak wydajny. Do weryfikacji, czy Google Sheets jest równie elastyczny co Microsoft Excel można wykorzystać duży (jak na zwyczajne potrzeby — powiedzmy 20 megabajtowy) plik, który zaimportujemy do programu. 

W tym momencie Google Sheets może złapać laga. Plik, zanim zostanie przetworzony potrzebuje czasu, a po przetworzeniu — może być trudny do czytania, a co mowa do pracy. Nie powinien jednak stanowić wyzwania dla Excela, który jako aplikacja jest przystosowany do pracy na plikach także większych. Niemniej, aby Excel mógł zostać zainstalowany musimy go zakupić. W przypadku gdy chcemy wykorzystać Arkusze Google, to wystarczy mieć konto w ekosystemie Googla. To duży plus dla Arkuszy.

Na potrzeby przykładowej automatyzacji wybieram zatem Arkusze, przede wszystkim ze względu na:
* darmowe rozwiązanie: jeżeli gdzieś możemy przyoszczędzić kilka złotych, to chętnie to robię.
* łatwe operowanie: gdybym miał modyfikować arkusz przez komórkę, to o wiele wygodniej jest to robić w Arkuszach. Ponadto nie potrzebuję aplikacji, abym mógł plik edytować — wystarczy przeglądarka.
* dostęp do informacji: na moim telefonie mogę podpiąć ikonę bezpośrednio do pliku. Dla formatu xlsx byłoby trudniej, ponieważ musiałbym trzymać plik lokalnie. Nie miałbym również wcale pewności co do aktualności danych. 

W założeniach nie porównuję wersji sieciowej Excela. Niestety, ale pakiet biurowy online oferowany przez Microsoft nie przemawia do mnie. Gdybym miał opierać moją pracę dyplomową na sieciowym pakiecie biurowym, to byłby to Google Docs. Gdybym nie miał dostępu do desktopowej aplikacji Worda, to pracę na 99% pisałbym w LaTeX. Sieciowa wersja posiada wiele ograniczeń, interfejs wokół narzędzi regularnie się zmienia, co absolutnie nie przemawia do mnie za tym narzędziem.

### Założenia co do automatyzacji

Dla osób, które znają mnie także z innych rzeczy jak #bykiwkodzie czy strony internetowe wiedzą, że lubię zbierać monety. W sumie to mam to w opisie. 

Zbieranie monet to jest tak potężna dziedzina, że czasami trudno się połapać, jak możemy dzielić monety. Najprostszy podział, który może przyjść do głowy to kraj oraz nominał. Niestety, ale się nie sprawdza — półgroszy nie ma już w obiegu, a Unia Polski z Litwą nie istnieje od dobrych kilku lat. Taki podział się nie sprawdzi. Im dalej zapuścimy się w tematy zbierania monet, tym więcej informacji zbieramy. Nie chcąc się rozpisywać: monety możemy podzielić na te, które są w obiegu, które były i które z definicji nie są. Ta ostatnia grupa nas interesuje — należą do niej bowiem monety bulionowe.

Monety bulionowe to charakterystyczny typ monet, ponieważ mimo posiadania (zazwyczaj) nominału, to składają się zazwyczaj ze złota. Ceny na aukcjach, na których można licytować takie monety są silnie zależne od aktualnego kursu kruszcu. Dobrze byłoby zatem orientować się mniej więcej jaką wartość monety stanowi wyłącznie złoto. Sama moneta będzie odrobinę droższa ze względu na narzut wynikający ze sprzedaży, jej popularność na rynku oraz stan zachowania, niemniej podstawę ceny będzie stanowiła wartość zawartej w niej złota.

Aby posiadać na bieżąco informację na temat wartości ceny złota, musimy mieć kilka podstawowych informacji:
* jaka jest bieżąca cena złota?
* jaka moneta nas interesuje?
* jaka jest zawartość złota w monecie?

Na podstawie tych informacji możemy określić, ile jest wart sam kruszec w monecie. Sprawdzanie tych informacji w sposób ręczny jest męczące — nie pamiętam wagi, próby złota, ceny próby złota. Abym sprawdził taką cenę, musiałem mieć kalkulator i kilka portali, z których pobierał konkretne informacje.

Dzięki arkuszowi oszczędzam czas oraz mogę go łatwo rozbudowywać (np.: tworzyć przy okazji katalog).  

### Automatyzujemy proces

Działajmy! Na potrzeby wpisu będziemy analizować dwie ładne monety bulionowe:
austriacki dukat (1915 rok - nowe bicie, waga 3,49g, próba złota: 986),
filharmonik wiedeński (1/10 oz, waga 3,11g, próba złota: 999).

Te dane mamy na sztywno. Uncja złota to również stała wartość — dokładnie 31,1034768 grama. Wyznaczając wagę złota za gram oraz uwzględniając próbę, łatwo otrzymamy wartość samego kruszcu. Dążymy do takiego układu:

![Grafika przedstawia układ graficzny gotowego projektu]({{site.baseurl}}/img/post-img/2023-05-26/arkusz-google-sheets-image.png)

W miarę estetycznie, informacje przekazane jasno. Ustalmy dalsze elementy, których potrzebujemy:
grafik przedstawiających wizerunek monety (tak, to jest możliwe!),
cena kursu USD/PLN,
cena złota. 

Grafiki są najłatwiejsze — te możemy pobrać z wyników wyszukiwania. Formuła, która zapisze nam wrzucony do arkusza adres jako grafikę jest następująca

```
=IMAGE(https://i.imgur.com/mHh7EEm.png)
```

Jakie proste, nie? Nie musimy mieć nawet gdzie trzymać grafik — wystarczy je wrzucić na imgur.

Lecimy dalej z tematami — kursy walut. Po szybkiej analizie okazuje się, że Google sam je udostępnia — a służy do tego formuła `GOOGLEFINANCE`. Dzięki podaniu argumentu `"CURRENCY:USDPLN"` otrzymujemy na zwrotce wartość dolara w przeliczeniu na złotówki. W ten sposób mamy zebrane dwa na trzy założenia. 

Ostatnie, a więc cena złota nie jest aż tak oczywiste. Niestety, tu nie mamy gotowej funkcji. Cenę możemy mieć poprzez API, ale to trudne - i wymaga programowania. Na wielu stronach ta informacja widnieje ot tak, więc pomyślałem - kurcze, może udałoby się to pobierać po prostu ze strony? 

Proces pobierania strony (a właściwie treści z niej) fachowo nazywa się scrapowaniem. Jest to bardzo ciekawy proces i warto się w niego zagłębić. Upraszczając, scrapowanie w kontekście www polega na odpytywaniu konkretnej strony i pobieraniu jej treści. Na podstawie tego możemy zbierać wiele informacji, np.: średnia cena samochodu konkretnej marki. Rzecz jasna my niczego nie porównujemy (chociaż jest tutaj na to miejsce — ceny złota mogą się wahać na różnych portalach), więc skupmy się na pobraniu danych. Po ich pobraniu możemy je przedstawić w arkuszu.

Jako-tako nie mamy żadnej bazy danych, zatem danych nie możemy przechowywać. Do scrapowania treści z portalu użyjemy wbudowanej formuły - `IMPORTXML`, której działanie opiera się na wskazaniu adresu strony oraz jej konkretnego elementu w DOM. W ten sposób posiadamy aktualną cenę oraz z głowy mamy proces przetrzymywania informacji.

Dane przedstawione w wygodny dla nas sposób znajdują się na stronie https://www.dailymetalprice.com/. Włączam w takim razie narzędzia deweloperskie oraz kopiuję położenie ceny złota.

![Grafika przedstawia kopiowanie XPath na potrzeby użycia w Google Sheets]({{site.baseurl}}/img/post-img/2023-05-26/google-sheets-xpath.png)

Po pobraniu danych posiadam cenę, ale nie jest ona sformatowana. Posiada kropkę jako znak rozdzielający liczby całkowite a dziesiętne, jest znak dolara — nie da się takiej wartości mnożyć. Działam zatem dalej nad formułą. Krok po kroku wygląda tak:

1. Po wybraniu informacji przez `IMPORTXML` tekst zwrotny jest następujący: `$1965.55`.
2. Muszę usunąć znak dolara — robię to za pomocą `RIGHT`. Posiadam już samą liczbę, to jest `1965.55`.
3. Za pomocą SUBSTITUTE zamieniam kropkę na przecinek. Liczba jest możliwa do wykorzystania w obliczeniach. 

Ta dam — jest cena złota, jest kurs, jest wartość uncji. Pozostaje matematyka; przemnożenie ceny złota na gram, a następnie policzenie ile warty jest kruszec. Po wykonaniu tych akcji (które już pominę), mamy gotowy arkusz, który umożliwia weryfikację ofert, a w rezultacie: decyzję co do podjęcia aukcji dostępnych monet bulionowych. Arkusz rzecz jasna można poszerzać o inne monety - a jest w czym wybierać.

Czy rzecz zawsze będzie działać idealnie? Niestety, takie rozwiązanie ma swoje problemy. Może mieć miejsce sytuacja, w której strona przestanie istnieć. Wówczas należy szukać innego portalu. Możliwe jest również wygaśnięcie obrazków — nie są potrzebne, ale informacja o błędzie nie jest potrzebna tym bardziej. Poza tym takie narzędzie może działać wieki. Trudno tutaj o jakieś inne problemy - generalnie jest to dość proste w działaniu i trudno to zespuć. Może zmienić się format danych - wówczas akcje opisane wyżej mogą być nieskuteczne.

### Automatyzować czy pisać od zera?

Te pytanie można stawiać na początku każdego procesu automatyzacji. Z pewnością mamy zwolenników obu z procesów, a ja dzisiaj jestem po stronie tych automatyzujących.

Przede wszystkim — automatyzacja jest łatwiejsza. Czas poświęcony na budowę takiego arkusza jest o wiele krótszy aniżeli napisanie aplikacji, która będzie robiła to samo. Aplikacja musi być wystawiona na zewnątrz — abym mógł z niej korzystać, muszę ogarnąć jakiś hosting, domenę, ogólnie — sporo rzeczy. Nie mam tego przy utrzymaniu arkusza.

Idąc dalej, to jestem w stanie o wiele łatwiej uzyskać potrzebne informacje. Połączenie się z portalem, który daje informacje o aktualnym kursie złota to złapanie odpowiedniego elementu na stronie. Tak nie jest z budowaniem aplikacji — tutaj dobrze by było znaleźć API, które takie dane udostępni. Później sprawdzić jak i czy mogę się wpiąć. A tutaj mamy to od ręki. 

Automatyzacja ma także swój plus w postaci tego, że nie muszę umieć programować. Proste narzędzia mogę zwyczajnie robić w arkuszach i umiejętność pisania kodu nie jest w tym potrzebna. Znajomość tabel przestawnych, odpowiednich filtrów oraz formuł daje dużo, dużo możliwości.

### Podsumowanie

Taka automatyzacja to może nie zbyt ambitna rzecz — ale dobrze stawiać mniejsze kroki. Arkusze sprawdzają się dobrze także w postaci ankiet. Na takiej zasadzie utrzymuję (już od dość dawna, tj. październik 2021) moją aplikację do weryfikacji wydatków. Formularz pełni rolę frontu, do którego wpisuję informacje o wydatkach. W arkuszu mam dane o wydatkach, a w kolejnych zakładkach — odpowiednio pogrupowane dane. Jedna zakładka z podziałem na miesiące, druga — na kategorie, kolejna wystawia mi dane do Zapiera, który obsługuje miesięczne podsumowania w postaci maila. W ten sposób nie muszę myśleć o synchronizacji danych, o tym czy aplikacja zaraz nie skończy swojego wsparcia, albo że dane będą przetwarzane dodatkowo przez kolejną firmę.

Może wśród czytających są osoby, które realizują podobne rzeczy w arkuszach? Warto się dzielić doświadczeniem! Zachęcam do inspirowania innych w komentarzach.