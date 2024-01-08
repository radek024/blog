---
layout: post
title: Jak zmienić hasło w Wordpressie?
author: Radek
categories: wordpress strony-www
excerpt: W jaki sposób możesz zmodyfikować dane do logowania do Wordpressa? Czy zmiana hasła jest trudna? Więcej informacji we wpisie.
comments: true
img-thumb: 2023-01-22.png
---
WordPress to jedno z największych i najpopularniejszych rozwiązań do obsługi portali internetowych oraz blogów. Nietrudno się z nim spotkać — wybierając dziesięć dowolnych portali internetowych, sklepów i blogów jestem święcie przekonany, że na części z nich spotkamy się z WordPressem. 
WordPress jest używany na naprawdę szeroką skalę, czasami niepotrzebnie. Bywają bowiem sytuacje, gdzie aktualizacja strony jest wymagana raz na rok. Strona stanowi wizytówkę, której nie ma potrzeby odświeżać częściej aniżeli raz do roku… i pojawia się problem. Jakie było hasło do tej witryny? 

### Czy WordPress jest bezpieczny?
Zanim opiszę możliwe sposoby zmiany haseł, jak zwykle napominam o bezpieczeństwie. WordPress posiada potężną społeczność, dziesiątki super rozwiązań. Używanie wszystkiego nie jest dobrym pomysłem. Może to spowodować masę problemów, których nikt nie potrzebuje. Dlatego przed opisaniem sposobów na zmianę hasła, kilka ważnych rzeczy:
* **zadbaj o aktualizacje**. WordPress powinien być regularnie aktualizowany. To samo dotyczy wtyczek. Dzięki temu dbasz o bezpieczeństwo platformy, której używasz.
* **wykonuj kopie zapasowe**. Dzięki kopiom zapasowym jesteś w stanie odzyskać w łatwy sposób stan możliwie aktualny portalu. To ważne, nawet jeżeli strony nie aktualizujesz często — aktualizacje wersji zapasowej portalu sprzed roku mogą skończyć się niepowodzeniem. 
* **używaj nietypowych loginów**: ```admin``` oraz ```operator``` to nie jest dobry pomysł. Jeżeli twój portal nazywa się mojemiejsce.pl, to login ```mojemiejsce``` również nie jest najlepszym rozwiązaniem. Bardzo łatwo trafić w taki login, a jeżeli masz proste hasło, to witryna może zostać przejęta.
* **używaj silnych haseł**. O tym pisze i mówi się wszędzie, ale hasło jest podstawą. Długie, złożone z cyfr, wielkich i małych liter oraz znaków specjalnych zapewni ochronę przed atakami typu brute-force.
* jeżeli to możliwe — użyj weryfikacji dwuetapowej. Dzięki temu logowanie do portalu jest dodatkowo chronione.

Warto pamiętać jednak, że wtyczki rodzaju “PRO Secure Login” dają tylko powierzchowne bezpieczeństwo. Narzędzia tego rodzaju można wyłączyć bardzo szybko zarówno na poziomie serwera, jak i bazy danych. Zamiast otaczać się dziesiątką kłódek na panelu administratora, lepiej zadbać — tak jak wcześniej wspomniałem — o aktualizacje, silne hasła i regularne kopie zapasowe. Podstawą bezpieczeństwa strony jest zainstalowany certyfikat SSL. 
Kwestie bezpieczeństwa powinny być zawsze na pierwszym miejscu. Jeżeli kogoś zainteresował temat bardziej, polecam ciepło prezentację Krzysztofa Drożdża: [Wyczaruj sobie spokój](https://wpmagus.pl/prezentacje/wyczaruj-sobie-spokoj/).

### Zmiana hasła w panelu WordPress
Najłatwiej hasło jest zmienić w panelu. Jeżeli mamy do niego dostęp, to w bardzo łatwy sposób możemy zmienić dane do logowania. 
Po zalogowaniu się do panelu wystarczy przejść do Zakładki Użytkownicy > Wszyscy użytkownicy. Pokaże się nam wówczas następująca zakładka wraz z kontami, które działają w obrębie portalu.

![Grafika przedstawia listę użytkowników w portalu]({{site.baseurl}}/img/post-img/2023-01-22/wordpress-lista-uzytkownikow.png)

Jak widać, na portalu jest zarejestrowanych dwóch użytkowników. Dla użytkownika akowal75 zaznaczona jest opcja wysłania linku do resetowania hasła. *To ważne: wysłanie linku nie wymusza jego zmiany, sama funkcja również go nie zmienia*. Po kliknięciu jej użytkownik będzie mógł dokonać wspomnianej zmiany, o ile jest założona skrzynka wordpress@nazwaporta.lu. Jeżeli takiej skrzynki nie ma, wiadomość może nie zostać wysłana, tym samym trzeba szukać alternatywy. A nie jest tak daleko - wystarczy kliknąć pierwszą z dostępnych opcji - “edytuj”. Wówczas przejdziemy do szczegółowej edycji użytkownika.
Tutaj opcji jest bardzo dużo, niemniej po zjechaniu na sam dół ustawień można znaleźć pole “Ustaw nowe hasło”: 

![Grafika przedstawia zmianę hasła w panelu administracyjnym Wordpress]({{site.baseurl}}/img/post-img/2023-01-22/zmiana-hasla-uzytkownika-dashbord.png)

Po kliknięciu  “Ustaw nowe hasło” wyświetlone zostaje przykładowe silne hasło, niemniej te można zmienić i nadać własne. Po wszystkim należy kliknąć przycisk “Zaktualizuj konto użytkownika”, który jest dostępny na końcu ekranu.

### Jak zmienić hasło za pomocą poczty w Wordpressie?
Pierwszy ze sposobów jest dość oczywisty. Dostęp do konta jest łatwy i szybki. Jeżeli nie mamy możliwości zmiany hasła w ten sposób, możemy przejść do kolejnego sposobu. 
Przy panelu logowania również mamy możliwość odzyskania hasła. Robimy to za pomocą wejścia w link “Nie pamiętasz hasła?” w panelu logowania. Wówczas otrzymamy takie okno: 

![Grafika przedstawia zmianę hasła za pomocą e-maila w Wordpressie]({{site.baseurl}}/img/post-img/2023-01-22/wordpress-zmiana-hasla-uzytkownika.png)

Po wpisaniu nazwy użytkownika bądź adresu e-mail powinna przyjść do nas wiadomość z hasłem. 
Opcja ta nie wydaje mi się zawsze bezpieczna. Jeżeli ktoś włamałby się na nasze konto pocztowe, to bezpośrednio mógłby wejść również na blog/portal. Tę opcję możemy zmodyfikować bardzo szybko. 
Po wklejeniu następującego kodu jesteśmy w stanie przekierować adres odzyskiwania hasła na jakikolwiek inny. 
```php
function bwk_disable_lost_password() {
    if (isset( $_GET['action'] )){
        if ( in_array( $_GET['action'], array('lostpassword', 'retrievepassword') ) ) {
            wp_redirect( wp_login_url(), 301 );
            exit;
        }
    }
}
add_action( 'login_init', 'bwk_disable_lost_password' );
```
Co się tutaj dzieje? W drugiej linii kodu sprawdzamy, czy została ustawiona wartość dla `GET`. Jeżeli tak - za pomocą `in_array` weryfikujemy, czy jest to strona dotycząca przypomnienia hasła (na podstawie słów kluczowych: `lostpassword` oraz `retrevepassword`). Przy założeniu, że warunek będzie prawdziwy, użytkownik zostanie przekierowany na adres - w tym przypadku do panelu logowania. Sama funkcja zadziała dzięki add_action, która uruchamia ją w przypadku wejścia na formularz logowania.
Sam tekst również można zmodyfikować. Kod wygląda następująco:
```php
function bwk_remove_lostpassword_text ( $text ) {
         if ($text == 'Nie pamiętasz hasła?'){$text = 'Kliknij w pajacyka!';}
                return $text;
         }
add_filter( 'gettext', 'bwk_remove_lostpassword_text' );
```
Tutaj kod jest prostszy, więc myślę, że nie ma potrzeby go tłumaczyć. 
Czy takie rozwiązanie wspomaga nas w jakiś szczególny sposób? Moim zdaniem owszem. Nie jest to może skuteczne rozwiązanie, ale z pewnością eliminuje część mniej miłych odbiorców treści z platformy.

### Jak zmienić hasło do WordPress w bazie danych?
Ta opcja wydaje mi się najbardziej popularna. Aby zmienić hasło na bazie, musimy posiadać jej kopię. Działanie na jakiejkolwiek bazie bez kopii zapasowej jest bardzo niebezpieczne. Nikomu temu nie rekomenduję! Jeżeli posiadamy kopię, zadbajmy o dostępy do bazy samej w sobie. Informacje te znajdziemy w pliku `wp-config.php`. Dane są następujące:
* nazwę bazy danych — dostępna pod `DB_NAME`,
* nazwę użytkownika, która znajdzie się pod `DB_USER`,
* hasło do konta użytkownika -  `DB_PASSWORD`
* i serwer bazodanowy — pod `DB_HOST`.

Czasami dane te znajdują się w osobnym pliku. Po ich odnalezieniu zastanawiający może być adres serwera bazodanowego - `localhost`. Hostingi często używają adresów lokalnych celem przyśpieszenia lub pewności danych. Przykładowo, na konfiguracji home można spotkać localhost właśnie. Wówczas na bazę danych możemy się logować poprzez adres https://sql.nazwa_konta.home.pl. Po więcej info odsyłam do home: [Połączenie z bazą danych MySQL na serwerze home.pl](https://pomoc.home.pl/baza-wiedzy/polaczenie-z-baza-danych-mysql-na-serwerze-w-home-pl).
Mamy dane do logowania na bazę danych! Po uzyskaniu dostępu do panelu administracyjnego bazy możemy przejść do tabeli wp-users. Wpiszmy `describe wp_users` - ta komenda pozwoli nam na zerknięcie, jak zbudowana jest tabela:

![Grafika przedstawia tabelę users w Wordpressie]({{site.baseurl}}/img/post-img/2023-01-22/tabela-users-wordpress.png)

My rzecz jasna będziemy zmieniali wyłącznie pole `user_pass`. Dane generalnie powinny się pokazać po wejściu w tabelę. Jeżeli nie, to możemy zastosować komendę:
```sql
select * from wp_users;
```
Posiadając id konta, do którego chcemy zmienić hasło, rzucamy kolejną komendą — najszybciej będzie to zrobić za pomocą komendy:
```
UPDATE wp_users set user_pass=MD5('nowesilnehaslo') where id=id_konta;
 ```
Do zmiany hasła użyliśmy funkcji MD5(). Jest to algorytm szyfrujący dane. Więcej o nim można poczytać tutaj, w [artykule](https://repozytorium.ukw.edu.pl/bitstream/handle/item/3558/Implementacja%20algorytmu%20funkcji%20skrotu%20MD5%20w%20jezyku%20C%2B%2B.pdf?sequence=1&isAllowed=y).
Jeżeli nadal nie możesz zalogować się na konto, zweryfikuj, czy prefix bazy (w moim przypadku jest natywny - `wp`) się zgadza. Warto zwrócić uwagę na nawiasy, słowa kluczowe oraz apostrofy — literówki się zdarzają. Jakimś cudem coś mogło się stać z bazą danych — wówczas masz kopię zapasową. Prawda? :D

### Zmiana hasła poprzez WP-CLI
WP-CLI jest bardzo wygodnym narzędziem dla osób płynnie poruszających się w terminalu. Stąd też nie będę rozpisywał tej sekcji. Jeżeli nie wiesz czym jest `sudo`, `cd`, `mv` albo `grep` to prawdopodobnie nie poradzisz sobie z Wordpressem w konsoli. Ciekawy jednak może być artykuł dotyczący mojej opinii co do codziennego korzystania z Linuxa, do którego przeczytania zachęcam: [Linux jako system na co dzień]({{site.baseurl}}/wpisy/linux-system-na-co-dzien/).
Po zainstalowaniu WP-CLI należy przejść do katalogu z Wordpressem, a następnie użyć komendy, która pozwoli na udostępnienie listy użytkowników: 
```
wp user list
```
Rezultat mamy następujący:

![Grafika przedstawia tabelę users w Wordpress CLI]({{site.baseurl}}/img/post-img/2023-01-22/tabela-users-wordpress-cli.png)

Do zmiany hasła użytkownika na wartość `silnehaslo` o ID równym 1 użyjemy: 
```
wp user update 1 --user_pass=silnehaslo
```
Jeżeli zmiana hasła nastąpi, otrzymamy komunikat o pomyślnej zmianie hasła. W przeciwnym razie sprawdź następujące rzeczy:
* czy poprawnie zainstalowałeś WP-CLI?
* czy jesteś w katalogu strony?
* czy użyłeś odpowiedniego ID?

### Podsumowanie
Temat prosty, a jednak tyle informacji. Wiedza ta jest jednak moim zdaniem niezbędna do pracy z WordPressem — a tej jest dość dużo. Dzięki dostępowi do panelu administracyjnego będziemy w stanie wyeliminować dużą część potencjalnych problemów. A jeżeli hasło zmieniamy za pomocą WP-CLI, to mamy również dostęp do serwera. Jak mówił klasyk — moc jest z nami. Niech pozostanie, dzięki za przeczytanie!
