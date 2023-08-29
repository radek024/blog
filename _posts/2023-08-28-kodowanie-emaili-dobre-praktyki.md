---
layout: post
title: Kodowanie maili - 5 sposobów na to, aby nie zrezygnować w połowie ich pisania
author: Radek
categories: strony-www email
excerpt: Czy możliwe jest kodowanie czegokolwiek w 2023 bez użycia grida czy flexboxa?
comments: true
img-thumb: 2023-08-28.png
faq:
    - query:
        question: "Jak zakodować trudny fragment maila?"
        answer: "Jeśli makieta projektu nie jest możliwa do zrealizowania w kodzie, można skorzystać z grafiki edytowanej w programie graficznym."
    - query:
        question: "Dlaczego testowanie wiadomości e-mail na różnych urządzeniach i platformach jest ważne?"
        answer: "Ze względu na różny udział klientów poczty, zapewnienie responsywności wyglądu wiadomości na wszystkich tych platformach jest ważne ponieważ możliwe jest na osiągnęcie jak największej skuteczności."  
---

W ostatnim czasie miałem dobry maraton pisania maili. Nie było to jednak pisanie na zasadzie Szanowny Pani/Panie, i chociaż zmiana mojego tytułu naukowego miała miejsce i mogłoby to uzasadniać ten fakt, to zwyczajnie pisałem dużo kodu, który jest słany w postaci wiadomości e-mail. Na podstawie doświadczeń, które zebrałem, uznałem, że podzielę się moimi wnioskami, które wysnułem podczas kodowania. Ot, proste zestawienie rzeczy, co do których się przekonałem kombinując jak tu maila wyświetlić dobrze.

### Dedykowany szablon czy gotowe rozwiązanie?

Przechodząc od razu do konkretów - pisanie szablonu pod maila od zera jest dość trudne. Jeżeli doskonale znasz swoją grupę odbiorców (ponieważ jest dokładnie określona, np.: pracownicy firmy używający określonych aplikacji) to można się o to pokusić. W przeciwnym razie weryfikacja kodu napisanego od zera może być dość trudna i czasochłonna. Czy nie podobnie było z Boostrapem, kiedy okazało się, że wiele stron i aplikacji przecina się, chociażby w stosowaniu gridu? Powtarzalność to duży plus maili - i zazwyczaj mamy możliwość wykorzystania tego samego komponentu wielokrotnie.

Przykładowych szablonów jest bardzo dużo i zależnie od sytuacji, możemy brać pod uwagę różne rozwiązania. Jeżeli jednak wiemy, że maile będą się skalować - dobrze będzie postawić na bezpiecznego i starego HTMLa. Oczywiście rozwiązania typu MJML są skuteczne, ale nie zawsze praktyczne. Poziom wejścia w maile oparte o HTML jest zdecydowanie niższy. Łatwiej też zadbać o aspekty rozbudowy. HTML finalnie nie narzuca ograniczeń (a klient poczty).

Stąd też warto podpierać podstawy, takie jak układ kolumn, style normalizujące o gotowe rozwiązania dostępne w sieci. W przypadku dostosowania kodujemy tylko aspekty potrzebne pod nasze rozwiązania, tym samym skracamy czas działania nad wiadomościami e-mail.

### Jeżeli content jest wymyślny, to zastanów się nad grafiką

Maile to nie to samo co strony internetowe czy aplikacje. Style pisze się inline a podział treści nie jest tak elastyczny. Nie zawsze ograniczenia są po drodze z założeniami prezentowanymi w mailu. Wynika to z wielu potrzeb; między innymi - wyróżnienia dobrze znanych nam form.

Nie zawsze jednak możliwe będzie zrealizowanie takiego zamysłu. Tak może być z właściwością `transform`. Listę atrybutów oraz znaczników, które można wykorzystać w pisaniu kodu maila można znaleźć na [can i email]([https://www.caniemail.com/](https://www.caniemail.com/)). Jeżeli nie mamy możliwości zakodowania, zawsze można się posłużyć grafiką.

![Grafika przedstawia zestawienie możliwości dla funkcji clip w CSS]({{site.baseurl}}/img/post-img/2023-08-28/caniemail-kodowanie-maili.png)

Takie rozwiązania stosuje m.in. Atlassian czy Janosik. Warto zauważyć, że podział jest dwukolumnowy. Grafiki są jednak docięte - to można by zrobić za pomocą clip, ale ono nie jest wspierane w mailach.

![Grafika przedstawia przykład kreatywnego wykorzystania grafik w mailu]({{site.baseurl}}/img/post-img/2023-08-28/yanosik-mailing.png) 

Taki efekt można zrobić poprzez prostą edycję zdjęcia w programie graficznym. Dzięki temu mail wygląda świeżo, a technicznie - to żaden kłopot, aby działać w ten sposób.

### Testuj na wielu urządzeniach i platformach

Na chwilę pisania artykułu, [trzy największe platformy](https://www.litmus.com/email-client-market-share/) służące do obsługi poczty to Apple Mail, Gmail oraz Outlook. Dwie pierwsze obejmują ponad 85% rynku - potężne liczby! Niestety, ale 15% to dobry kawałek tortu i warto o niego zadbać. Dlatego też należy pisać maile tak, aby ich responsywność była zawarta także w tej mniejszej części rynku. Rzecz jasna liczby będą się różnić, w szczególności per kraj, ale udział różnych technologii na miejsce i nie można ignorować rozwiązań trzecich. Dlatego też ważne jest weryfikowane na wielu płaszczyznach. Fakt, że mail dobrze wyświetli się na jednym urządzeniu to zdecydowanie za mało. Jaką w takim razie granicę przyjąć?

Warto znać swojego użytkownika. Jak pisałem wyżej, polityka przyjęta przy pisaniu kodu wewnętrznie może być inna aniżeli ta, w której uwzględniamy bardzo szeroką gamę klientów. Niezależnie jednak jaka jest grupa docelowa wiadomości - nadal musimy mieć na uwadze fakt, że maile przegląda się nie tylko w przeglądarce czy za pomocą klienta pocztowego, ale także na telefonie. Ważna jest zatem responsywność.

Maile w trakcie testów mogą być wysyłane z różnego źródła. W takim przypadku mogą być inaczej interpretowane przez klienta pocztowego. W efekcie ważne jest testowanie na faktycznym środowisku (bądź zbliżonym).

### Stostuj dobre praktyki przy pisaniu kodu

“Dobre praktyki” to słowo klucz takich artykułów. Jak zachować dobre praktyki przy pisaniu maili? Osobiście kieruję się kilkoma zasadami.

Przede wszystkim - ile się da, tyle kodu pisać inline. Powszechną praktyką jest czyszczenie styli nie-inline, więc jeżeli mamy możliwość - koniecznie należy pisać style bezpośrednio przy bloku. Ryzyko wysypania się maila jest mniejsze.

Kolejna rekomendacja - zapomnieć o flexie, gridzie czy animacjach. Niestety, technologie odpowiedzialne za wizualną warstwę zatrzymały się mniej więcej na możliwościach stylowania inline. Bezpieczniej jest użyć twardego koloru aniżeli gradientu. Łatwiej dodać element jak grafikę (na przykład punktor) w miejscu, gdzie można zastosować pseudoblok.

Idąc dalej, kluczem jest cierpliwość. Testy są konieczne, aby nie robić szybkich poprawek zaraz po wysłaniu korespondecji - a czasami korespondencję wysyłamy raz. Należy mieć zatem pewność, że wiadomość wyświetli się dobrze.

Wbrew pozorom, tabele działają bardzo dobrze. Rezygnacja z nich w przypadku gdy układ wiadomości jest większy aniżeli jedna kolumna to duże ryzyko. Warto trzymać się tabel i działać na sprawdzonych metodach.

Maile to też wydajność, więc optymalizacja grafik jest ważna. Warto o tym pamiętać, tym bardziej że grafiki mogą stanowić bardzo ważną część zawartości maila. Elementy stałe, takie jak stopka czy media społecznościowe można standaryzować i korzystać z jednego źródła (nawet pod kątem ułatwienia sobie pracy). Ponadto dobrze mieć z tyłu głowy aspekt rozdzielczości oraz formatu grafik - `.png` to dobre, stabilne rozwiązanie. W przypadku animacji - nie umieścimy żadnego formatu video, ale GIFa jak najbardziej.

### Podsumowanie
Maile to wbrew pozorom temat rzeka. Podobnie jak strony, bazują na połączeniu i HTMLa i styli, ale przeznaczenie i rola są nieco inne. Niezależnie jednak, czy jesteśmy blisko komunikacji w takiej formie, warto przegryźć temat, chociażby dla weryfikacji jak bardzo elastyczni jesteśmy pod kątem naszych deweloperskich umiejętności.