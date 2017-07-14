---
layout: post
title: Github Pages dla zielonych
author: Radek
categories: strony-www
excerpt:
comments: true
img-thumb: 2017-07-14.png
---

Czasami nasze projekty są zbyt duże, aby móc je wrzucić na codepen czy też inny tego typu portal. Wtedy pojawia się dylemat; jak wysłać do sieci nasze dzieło? Chcemy otrzymać jakiś code-review, a ludzie tak często narzekają na strony spakowane w `.rar` i wrzucone na jakiś darmowy hosting...

...wtedy z pomocą przychodzi Github. Oferuje on tzw. “Github Pages” co pozwala na utrzymywanie naszych witryn na portalu github. Nie jest to jednak rozwiązanie, które zastąpi wszystkie inne; narzędzie te nie wspiera PHP,  ale wzamian za to możemy tworzyć w oparciu o Jekylla. Należy jednak napomnieć o tym, że Jekyll to platforma do blogów oraz witryn, a PHP to język programowania. Bez obaw natomiast możemy wrzucać pliki HTML, CSS oraz Javascript. Jest to zatem idealny sposób na wstawienie swojej pracy a następnie udostępnienia jej światu. Jak to jednak zrobić?

Wpis ten pokaże możliwie najłatwiejszy sposób na zrobienie tego. Nie wykorzystamy do żadnych programów, interpreterów poleceń i tak dalej. Naszym celem jest jak najszybsze wrzucenie strony w sieć i tym się zajmiemy. Nie należy zatem szukać tutaj poradnika do ekosystemu git. Jest to poradnik na *chłopski rozum*.

### Udostępnianie strony porzez Github Pages

Zanim zaczniemy, musimy mieć konto na GitHubie. Proces rejestracji nie jest trudny, więc go pominę. Co dalej? Wejdźmy na adres github.com/twojlogin. W moim przypadku będzie to [github.com/radek024](https://www.github.com/radek024).  Naszym oczom pojawi się mniej więcej taki panel:

![Panel konta na portalu github.com]({{site.baseurl}}/img/post-img/2017-07-14/fot01.png)

Naszą uwagę powinny zwrócić zakładki znajdujące się nad panelami. Druga z nich to **Repositories** -  wejdźmy w nią.

![Zakładka "Repositories" w panelu konta na github.com]({{site.baseurl}}/img/post-img/2017-07-14/fot02.png)

Tak wygląda owa zakładka. W tej części zrzutu ekranu po prawej stronie znajduje się przycisk **New**. Klikając go przejdziemy do tworzenia repozytorium:

![Tworzenie nowego repozytoria na github.com]({{site.baseurl}}/img/post-img/2017-07-14/fot03.png)

Uzupełnijmy opcje: wpiszmy nazwę(u mnie to test). Dalsze pola możemy pominąć. Wspomnę jednak o rodzaju repozytoriów. Dzielimy je na publiczne i prywatne. Dzisiaj interesuje nas wyłącznie repozytorium publiczne. Prywatne repozytoria są płatne. Jeżeli chcemy dostęp do repozytoriów prywatnych możemy wykupić do nich dostęp lub dołączyć do programu Github Student Developer Pack. Przysługuje on osobom uczącym się. Jako że jestem (w sumie byłem) uczniem technikum to skorzystałem z tej oferty i dziki temu mogę wrzucić kod źródłowy moich prac i nikomu go nie udostępnić.
Później możemy kliknąć **Create repository**.

![Tworzenie nowego repozytoria na github.com]({{site.baseurl}}/img/post-img/2017-07-14/fot04.png)

Tutaj też zaczynamy właściwą pracę. Pod napisem **Quick Setup...** klikamy w jeden z linków (na przykład `README`), commitujemy zmiany na dole i tak oto mamy pierwszy plik w naszym repozytorium.

![Wygląd repozytorium na portalu github.com]({{site.baseurl}}/img/post-img/2017-07-14/fot05.png)

Tak będzie prezentował się ekran repozytorium. Jak widać, w polu tekstowym nad nazwą repozytorium wpisałem *gh-pages*. Po kliknięciu w opcję na niebiesko utworzyłem “gałąź” naszego repozytorium która jest (natywnie) odpowiedzialna za utrzymywanie naszej strony w sieci. Gałąź ta nie będzie się różniła niczym od tej podstawowej (jest to gałąź *master*).
Po prawej stronie repozytorium jest przycisk **Upload files**. Po kliknięciu w niego otrzymamy skan taki sam jak poniżej:

![Dodanie plików do repozytorium]({{site.baseurl}}/img/post-img/2017-07-14/fot06.png)

Aby wrzucić pliki na serwer należy je skopiować z naszego komputera. Tutaj przerzuciłem pliki metodą “drag&drop”, co pozwoliło na zachowanie struktury folderów. To ważne, szczególnie jeżeli nie posiadamy wszystkiego w jednym folderze. Po załadowaniu plików i przewinięciu strony do dołu będzie okno dotyczące zmian w repozytorium. Warto je zatytułować oraz umieścić krótką notkę na temat wrzuconych plików.

![Dokumentowanie zmian w repozytorium]({{site.baseurl}}/img/post-img/2017-07-14/fot07.png)

I to.. tyle. Po zacommitowaniu zmian strona już jest w sieci. To było super proste, no nie? Jeżeli chcemy sprawdzić czy wszystko jest ok możemy wejść na stronę twojlogin.github.io/nazwarepozytorium, czyli u mnie będzie to radek024.github.io/test.

### Strona login.github.io

Czasami można zauważyć, że niektóre strony nie potrzebują nazwy repozytorium aby były na Githubie. Jak można to zrobić? Jest to bardzo łatwe do uzyskania. Musimy tylko zrobić repozytorium o takiej nazwie. Zatem jeżeli chcemy zrobić stronę na adresie login.github.io możemy, gdzie login to nasza nazwa użytkownika tworzymy repozytorium o nazwie login.github.io. Następnie wrzucamy tam pliki(rzecz jasna pod `gh-pages`) i całość można obejrzeć pod adresem wymienionym w tytule.

### Usuwanie repozytorium

Czasami nie potrzebujemy już udostępniania strony. Można ją wtedy łatwo usunąć. Wtedy z zakładek repozytorium wybieramy **Settings**, a następnie przechodzimy na sam dół strony gdzie czeka nas taki blok:

 ![Usuwanie repozytorium]({{site.baseurl}}/img/post-img/2017-07-14/fot08.png)

 Klikamy w **Delete this repository**, a następnie w polu tekstowym wpisujemy nazwę naszego repozytorium. Należy pamiętać, że taka operacja jest nieodwracalna, więc warto mieć kopię repozytorium jeżeli jest ono dla nas ważne.

### Ewentualne problemy

Jeżeli robi się coś po raz pierwszy, to istnieje bardzo duża szansa, że zostanie to spartaczone. Co takiego może pójść nie tak?

Na pierwszy rzut może być **brak strony w sieci**. Wszystko jest wrzucone, gałąź wybrana, a strony nie ma. Dlaczego? Może być tak, że strona została wrzucona, ale w nieodpowiednie miejsce. Może do branch `master`? Warto to sprawdzić.
Inny problem, również często spotykany to **brak plików styli oraz JavaScript**. O tym już wspominałem - jeżeli znajdują się one w folderze, mogą nie trafić na serwer Githuba. Dlatego warto sprawdzić czy pliki są i w razie potrzeby doładować foldery.

Nie zadziała również **kod PHP**. Tutaj nic nie poradzimy. Jeżeli chcemy sprawdzić jego działanie w sieci to należy wybrać jakiś darmowy hosting, a następnie tam go wrzucić.

### Podsumowanie

Czy to jest takie trudne? Moim zdaniem jest to nawet łatwiejsze od konfiguracji darmowych hostingów. Tak naprawdę musimy zrobić 5 kroków, a nawet 4, jeżeli nie policzymy założenia konta. A pierwszy krok nigdy nie był tak łatwy ;)
