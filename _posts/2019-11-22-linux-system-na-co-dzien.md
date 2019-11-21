---
layout: post
title: Linux jako system na co dzień
author: Radek
categories: offtopic linux
excerpt: sudo cokolwiekniechtojużsięopublikuje
comments: true
img-thumb: 2019-11-22.png
---

Człowiek z natury przyzwyczaja się do pewnych rzeczy. Pijemy ulubione piwo, jemy w ulubionych knajpach. Mamy upodobane modele myszek, słuchawek czy monitorów. Pisząc strony internetowe korzystamy z najbardziej odpowiadających nam narzędzi.

I tak tworząc różne rzeczy musimy wybierać. Budując komputer możemy łączyć różne produkty, tworząc jednostkę nastawioną do gier lub obróbki zdjęć. Zależy nam na dobraniu najlepszych cech. Są jednak kwestie umykające na tle pozostałych. Co z systemem operacyjnym? Co z tak naprawdę najważniejszym oprogramowaniem naszego komputera? Bezrefleksyjnie sięgamy po Windowsa, zawsze przecież był. I klasycznie nastawiamy się na instalację plików `.exe`, ustawienie tapety, a następnie przeglądanie obrazków w sieci.


Właśnie, sieci… gdzieś pomiędzy kolejną plotką o fatalnym w skutkach rozejściu się najbardziej uroczej pary, a zestawieniem zdjęć przezabawnych kotków, trafią się nieśmiało napisane zdania:

> Czy ktoś poleci mi jakiegoś linuxa? Chciałbym zobaczyć, jak się go używa.

A więc istnieje system inny niż Windows! I ktoś to zauważył. Nie no, to będzie rok Linuxa.

Biorąc jednak sprawę na serio - to pytania jak najbardziej się trafiają. Tak po prostu, ludzie chcą coś zmienić w używaniu swojego komputera. Ale Linux to tajemniczy system. Czy naprawdę trzeba mieć wiedzę super geeka aby działać na Linuxie? Przecież to konsole, jakieś znaczki, `sudo` i nie `sudo`. Narzędzie hakera wypalającego wzrokiem płyty. Na pewno? Czy Linux jest faktycznie narzędziem nieosiągalnym dla zwykłego użytkownika?

Linux to mój system operacyjny od ponad dwóch lat. Dokładniej używam system Ubuntu - w oparciu o niego będę pisał ten artykuł. Nie jestem użytkownikiem znającym system do każdej ścieżki - zakładam też, że nim nie będę. Linux po prostu jest systemem którego używam. Czasami coś koduję, czasami coś napiszę, czasami chcę w coś pograć. Widzę zatem ten system z perspektywy osoby używającej Linuxa jako nie przymusowy, a świadomy wybór. Stąd też artykuł: ludzie boją się Linuxa, nie wiedzą jak go używać. Dlaczego?

### Podstawowe obawy związane z Linuxem

Przyzwyczajenia, o których pisałem z początku mają swoje wady. Mianowicie: strach przed zmianą. Zmiany nie są czymś, co leży w gustach większości. A zmiana systemu to coś naprawdę dużego. Inny proces instalacji, konfiguracji systemu. Do tego jeszcze dochodzi personalizacja pod swoje widzi-mi-się. Dłużną nie pozostaje kwestia kompatybilności czy działania systemu na ogół. Jak to się ma w praktyce?

Przed napisaniem artykułu poprosiłem moją rodzinę oraz znajomych o skorzystanie z Linuxa przez chociażby chwilę. Chciałem się przekonać, czy Linux jest faktycznie systemem gdzie trudno się odnaleźć. Wszystkie osoby na co dzień korzystały z Windowsa i nie miały do tej pory możliwości skorzystania z Ubuntu. Jakie były efekty?

Może to dziwne, ale dla każdego system okazał się bardzo łatwy. Wszystkie używane przeze mnie programy nie różnią się interfejsem od ich Windowsowej wersji. Zmiana tapety czy regulacja rzeczy takich jak dźwięk, kolory nie stanowiły problemu. Dylematem był brak przycisku start. Po chwili jednak każdy kojarzył, jak odpalić listę aplikacji. Czy zatem Linux jest systemem trudnym na co dzień? Pewnie że nie! Po prostu duże przyzwyczajenie do Windowsa sprawia, że nie widzi się za bardzo innego systemu w swojej jednostce. Poniżej jest zrzut ekranu z systemu (Linux Ubuntu) zaraz po jego instalacji.

![Obrazek przedstawia ekran Linux Ubuntu na zaraz po zainstalowaniu systemu]({{site.baseurl}}/img/post-img/2019-11-22/ubuntu-linux-ekran-startowy.png)

Inną sprawą jest instalacja programów. Tutaj często napotykam się z opinią, że bez konsoli to ani rusz - co oczywiście jest wielkim kłamstwem… Na początku warto się zastanowić nad następującą rzeczą: z ilu programów korzysta się na co dzień? Z pewnością jest to przeglądarka. Osobiście używam Spotify. To taki serwis do odtwarzania muzyki. Czasem zdarzy mi się odpalić edytor kodu oraz program do obróbki grafiki. Terminal - faktycznie, używam od czasu do czasu. Suma summarum system potrzebuje około czterech - pięciu aplikacji, aby system stał się używalny.

Żadnej z tych aplikacji nie instalowałem za pomocą terminala. Ubuntu posiada własny zestaw oprogramowania, który można instalować za pomocą aplikacji. Za jej pomocą zainstalowałem po kolei przeglądarkę, aplikację do muzyki, edytor kodu oraz program do obróbki grafiki. To proces szybszy od tego, który ma miejsce w Windowsie - aplikacje wybrałem ze sklepu. Nie musiałem odwiedzać witryn trzecich.

I to nie jest też tak, że na Linuxa jest pięć aplikacji na krzyż. Po prostu nie ma potrzeby, aby instalować ich więcej.

Warto też mieć na uwadze, że coraz większa część tego co robi się na komputerze odbywa się na przeglądarce. Bank, poczta, portale społecznościowe - to wszystko ogarniam w przeglądarce. Osobiście używam również zestawu biurowego - to jest Google Docs. Nie muszę się wówczas martwić o synchronizację plików, czy ich zgodność. Edytor tekstu czy arkusz kalkulacyjny mam zawsze pod ręką. Problem z brakiem zestawu biurowego innego aniżeli Office zostaje rozwiązany.

Niemniej nie ukrywam, że na Linuxa nadal brakuje oprogramowania CAD, czy czegoś więcej do obróbki wideo. Niestety, ale bez większego zagłębienia się w software będzie trudno o coś dobrego dla tego systemu. Podkreślam jednak, że celem artykułu nie jest konieczne przejście na Linuxa, a jedynie otwarcie się na taką możliwość. Kto wie, czy za kilka lat sytuacja się nie zmieni i Linux okaże się interesującym środowiskiem dla architektów czy montażystów?

Kolejny krok. Sterowniki. I tutaj faktycznie mogą zacząć się schody. Należy przyznać, że instalacja drukarki na Windowsie była łatwiejsza. Dodanie drukarkę na Linuxie zajęło mi to dobrą godzinę. Z początku -  problem ze znalezieniem sterowników, następnie z ich instalacją. Koniec końców drukarka była w pełni sprawna, a ja mogłem się z nią łączyć zarówno za pomocą sieci, jak i kabla. Uważam jednak, że bez wiedzy informatycznej miałbym duży problem. Z drugiej strony drukarka nie była najnowsza, więc to również stanowiło część wyzwania. Przy nowej drukarce uważam, że problem byłby znacznie mniejszy. Często wraz z urządzeniem otrzymuje się sterowniki na płycie lub odnośnik do strony producenta wraz z potrzebnymi programami - również na Linuxa.

Okej, a jak to jest z pozostałym sprzętem? Osobiście nie miałem żadnych problemów. System czyta prawidłowo podłączone urządzenia. Korzystam z dwóch monitorów od ponad roku i nie mam żadnych problemów. Karty SD, telefony, myszki i klawiatury połączone przez Bluetooth czy USB działają bez przeszkód.

A `sudo`? Ta tajemnicza komenda, dzięki której wszystko działa? `sudo` to nic innego jak rozwiązanie, które również posiada Windows - czyli “Uruchom za pomocą administratora”. Dzięki niej można przepchać rzeczy, których użytkownik nie może wykonać, ponieważ nie ma odpowiednich praw. `sudo` to skrót od `super user do`. `super user` natomiast to nikt inny jak `root`, czyli administrator systemu.

I na koniec tej części - działanie systemu. Po około 15 latach korzystania z Windowsa (pierwszy kontakt z komputerem w wieku pięciu lat, Windows 98 - pamiętam jakby to było wczoraj) jestem w stanie stwierdzić, że Linux jest pod wieloma względami szybszy. Instalacja aktualizacji to chyba największa różnica. Ile to razy trzeba było zostać po zajęciach, aby upewnić się, że Windows zaraz po instalacji najnowszych łatek nie uruchomi się ponownie… Dostęp do aplikacji po uruchomieniu systemu, ba - samo uruchomienie stanowi różnicę. Dla mnie Linux pod kwestią działania niszczy Windowsa. Zdaję sobie sprawę, że dużą rolę grają podzespoły - biorąc jednak pod uwagę średni zestaw Linux wygrywa. Jeżeli ktoś chce instalować system operacyjny na starym komputerze - dla mnie oczywistym wyborem będzie Linux. Czy koniecznie Ubuntu? Raczej nie, ale to też fajne w Linuxie - ilość dystrybucji jest na tyle duża, że nie będzie problemem znalezienie czegoś stricte pod potrzeby użytkownika. Po stronie Windowsa wybór leży przede wszystkim między Windowsem 7 (premiera ponad 10 lat temu) a Windows 10 (który sprawnie nie będzie działać). A więc - Linux!

W sumie to już mi się nie chce pisać tego artykułu, pograłbym w jakiegoś FPSa. Jak z grami na Linuxie? Oczywiście nie jest tak dobrze jak w Windowsie. Większość tytułów jest wydanych na Windowsa, nieco mniejsza część na Maca. Popularniejsze tytuły posiadają swoje odpowiedniki we wszystkich platformach. Dla tych, które odpowiednich wersji dla Linuxa nie mają - istnieje takie coś jak Wine. To aplikacja, która w pewien sposób emuluje środowisko Windowsa. Nie korzystałem z tego rozwiązania, ale słyszałem o nim pochlebne, jak i mniej zachęcające opinie. Osobiście na potrzeby zagrania w jakąś grę zainstalowałbym maszynę wirtualną - ale Internet jest bogaty i pełen rozrywki. To co oferuje często w zupełności wystarcza.

### Zalety Linuxa

Dobrze. Skoro rzeczy na pozór odstraszające samego użytkownika przed użyciem systemu już za nami - warto się skupić na dobrych stronach. Ta część artykułu może być nieco bardziej informatyczna. Zainstalowany system bowiem działa tak jak powinien. Dopiero z czasem odkrywa się, co można w takim systemie zrobić pod swoje wymagania.

I to bardzo duży plus Linuxa. Personalizacja daje nieograniczone możliwości. I to nie jest personalizacja na kształt tej Windowskiej, gdzie po zainstalowaniu odpowiedniego programu tworzymy nakładkę na coś zastanego. Tutaj system jest modyfikowany na poziomie tego jak ma wyglądać właśnie, bez żadnej ingerencji na poziomie programów trzecich. Idzie za tym dużo większa wydajność. A tematów o tym, jakie środowisko graficzne jest ciekawsze, szybsze, bardziej lub mniej subtelne jest mnóstwo. Równie mnóstwo jest przykładów, które pokazują co można zrobić z wyglądem systemu. Informatycy pokroju

>OSZCZĘDZAJ RAM GDZIEKOLWIEK JESTEŚ

są w siódmym niebie. Osoby ceniące sobie wygląd swojego systemu również.

Często aby dokonać takich zmian, należy wiedzieć coś na temat terminala. Właśnie - terminal, konsola, cmd? Chociaż powszenie używa się ich zamiennie, to (sytuacja ma się podobnie z wyrazami "font" i "czcionka") w razie czego warto wiedzieć co jest czym. Pora na małą dygresję.

Przede wszystkim: konsola to środowisko tekstowe systemu. Za pomocą wykonywanych komend możemy uruchamiać lub zatrzymywać operacje. Aby wejść do konsoli w Linuxie, można użyć skrótu `ctrl+alt+Fx`, gdzie `x` to liczba naturalna z zakresu od 1 do 7. Kombinacja klawiszy wraz z 7 wraca do środowiska graficznego. Terminal natomiast to emulacja konsoli w środowisku graficznym. W Ubuntu odpala się go za pomocą `ctrl+alt+t`. A `cmd`? To skrót do uruchomienia terminalu w Windowsie (w pasku wyszukiwania, bądź aplikacji "Uruchom").

Zatem - używając właściwego słownictwa - terminal czasem jest przydatny. Używanie go czasem ułatwia pewne procesy. Przykładem jest badanie zawartości folderów. Dla mnie o wiele wygodniej jest przeglądać katalogi za pomocą tego narzędzia. Należy wziąć pod uwagę, że terminal to nie tylko narzędzie do operowania *administracyjnego*. Czasem potrzebuję sobie wyświetlić kalendarz z pewnego okresu - i to mi zapewnia terminal. Potrzebujesz się dowiedzieć, jaki dzień tygodnia był 8 lutego 1998 roku? To jedna komenda w Linuxie! Jej efekt przedstawia zrzut ekranu:

![Obrazek przedstawia użycie terminala]({{site.baseurl}}/img/post-img/2019-11-22/kalendarz-terminal-ubuntu.png)

Terminal w Linuxie przyda się również w instalacji rzeczy takich jak `node` i `git`. Czy jest to zatem trudniejsze aniżeli w Windowsie? Nie mogę się z tym zgodzić. Na pewnym etapie nauki informatyki (niezależnie w jakiej gałęzi operujemy) trzeba będzie zapoznać się z terminalem. Z moich doświadczeń - o wiele łatwiej jest działać w Linuxie, aniżeli w Windowsie. Co prawda Windows stara się nadgonić rozwiązania Linuxa, ale prym wiedzie Linux.

### Różnice w Linuxie a Windowsie

Linux i Windows to mimo wszystko dwa różne byty. Warto zatem przyjrzeć się temu, co je dzieli.

Dla mnie największą różnicą jest… Paint. Serio! Do tej pory nie znalazłem jakiegoś dobrego odpowiednika na Linuxie. Do wycięcia czegoś z zrzutu ekranu używam GIMPa. Jest to dość niewygodne. W grę zatem wchodzą różne wtyczki, ale nadal nie potrafią one zastąpić Painta. Poza tym podstawowe aplikacje się uzupełniają.

Struktury systemu są nieco inne. Z czasem idzie się przyzwyczaić - szczególnie jeżeli do operowania na folderach używa się terminala. Niemniej z początku Windows zdaje się być bardziej intuicyjny. Wszystko przychodzi z czasem - a jeżeli idzie o zwykłego użytkownika, to szansa na badanie tego co znajduje się w `mnt`, a co w `home` jest niska.

Kolejny problem to udostępnianie plików pomiędzy systemami. Aby połączyć komputer, na którym jest zainstalowany Linux z komputerem, który działa na Windowsie należy użyć odpowiednich narzędzi. Chociaż czy w 2019 to faktyczny problem? Ilość nośników zewnętrznych, chmury, czy Internet na ogół bardzo niweluje ten dylemat.

Linux może przydać się bardzo jako system rozruchowy. Zanim korzystałem z Linuxa na co dzień zawsze miałem ze sobą pendrive'a wraz z zainstalowanym systemem. Kiedy chciałem skorzystać z komputera nie znając hasła do logowania - używałem Linuxa, zainstalowanego na pendrive. Nie dość, że komputer był do uruchomienia, to i miałem dostęp do plików znajdujących się na dysku. W przeciągu tylu lat, ile mam do czynienia z informatyką - nie spotkałem się z taką formą bazującą na Windowsie. A to bardzo wygodne!

### Własna opinia

Wspominając wcześniej - po 15 latach na Windowsie nie mam problemu z Linuxem. Windows jeszcze nie tak dawno był w moim laptopie systemem obok, teraz - leży odłączony w odmętach dysku. Podczas ponownej instalacji Linuxa uznałem, że go nie potrzebuję. Zaglądałem tam raz na trzy-cztery miesiące, gdzie zamiast systemu witał mnie komunikat o aktualizacjach. Teraz (jak i wcześniej zresztą, z tą różnicą, że działał jeszcze GRUB) uruchamia mi się wyłącznie Linux. System się sprawdza, jest stabilny i dostarcza wszystko, czego potrzeba.

Czy ten system jest dla kogoś? Myślę, że tak. Dobrze odnajdą się w nim osoby nie posiadające doświadczenia w komputerach. Interfejs nie budzi wtedy negatywnych emocji, przy okazji nie ma potrzeby piracenia oprogramowania. Jest znacznie mniej nachalnego oprogramowania, łatwiej też kontrolować instalowane aplikacje na komputerze. Uważam, że Linux jest dobrą alternatywą do Windowsa także przy słabych maszynach, które mogą służyć jako jednostki multimedialne. Tak jest z moim starym pecetem - służy wyłącznie do oglądania zdjęć i przejrzenia Internetu raz na jakiś czas.

Czy polecam jakąś szczególną dystrybucję (swego rodzaju odnogę, wariację Linuxa) systemu? Trudno powiedzieć. To kwestia dość osobista, chociaż jeżeli idzie wyłącznie o spróbowanie tego, czym jest Linux - wybrałbym Ubuntu. To system którego używam i dla mnie spełnia wszystkie funkcje. Miałem okazję podziałać trochę na Linuxie Mint - tam jest nieco bardziej intuicyjnie, ale nie przypadł mi mimo wszystko do gustu.

Instalując Linuxa po raz pierwszy trudno mi było powiedzieć, czy to będzie słuszny wybór. Koniec końców okazuje się, że to było dobre rozwiązanie. Dlatego też je polecam. Niech ten rok będzie - nie no, już końcówka - zatem niech przyszły rok będzie rokiem Linuxa! ;)

A dla osób, które chcą nieco bardziej poznać Linuxa:
* [zestaw komend - nie są trudne, serio!](https://www.astrouw.edu.pl/~jskowron/pracownia/komendy/)
* [dobierz Linuxa odpowiedniego dla siebie,](https://distrochooser.de/en/)
* [...albo po prostu sprawdź Ubuntu.](https://ubuntu.com/download/desktop)
