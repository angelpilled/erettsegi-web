# OpenBSD

## Mi az OpenBSD?

Az OpenBSD egy BSD (Berkeley Software Distribution) alapú, nyílt forráskódú UNIX operációs rendszer, amit kb 1995-ben kezdte el fejleszteni Theo de Raadt, a NetBSD 1.0-ás verziójának alapjából. A jelenlegi verzió (2023. október 11-én) az OpenBSD 7.3.

## Az OpenBSD filozófiája
Az OpenBSD filozófiája nagy hangsúlyt fektet a biztonságra és hordozhatóságra.

## OpenBSD sajátosságai
### LibreSSL
A LibreSSL egy nyílt forráskódú implementációja a TLS (Transport Layer Security) protokollnak. Az OpenBSD csapata ezt az SSL-t az OpenSSL helyett fejlesztették ki, miután az OpenSSL kódjában egy biztonsági hibát találtak, ez az ún. Heartbleed biztonsági hiba. A cél a fejlettebb, biztonságosabb SSL protokoll fejlesztése volt.

### Memória használat

Az Arch Linuxom alap, álló helyzetben 250-300mb-ot használ, a Windows legalább 1 gigát. Amikor próbáltam az OpenBSD-t, körülbelül 60mb-ot használt a memóriája.
Részben ez miatt is szeretett szerverekként, és persze a biztonsága miatt

### PID randomizáció
A PID (Process IDentification number) az OpenBSD-ben random, még használatlan PID-ket generál az új folyamatoknak, ez elhárítja a külső támadások lehetőségét a BSD felhasználó felé (oly támadások, amelyek egy bizonyos PID "ellen" támadnak). Ez a lehetőség a kernelbe van beépítve, Linuxon pl. nem alap funkció a "mainstream" linux kernelben.

## Hogyan próbáljuk ki?
### Letöltés
Ezen a linket elérhetőek az OpenBSD telepítő képek (.img, .iso). A legtöbb hardverrel az amd64 telepítési képek közül bármelyik működni fog.

### Virtualizálás
Ha kiszeretnénk próbálni - nem natívan - az OpenBSD-t, megtehetjük bármilyen virtualizációs programmal, pl. a VirtualBox vagy VMWare programokkal. Az utóbbival problémáim voltak az AUR-ból való telepítéssel, de ez másnak nem biztos, hogy probléma lesz.

### Telepítési folyamat
https://www.openbsdhandbook.com/installation/

## Negatívumok az OpenBSD-vel


## Mindennapi használatban
### Asztali használat
### Szerver használat

## Biztonság

## Hozzájárulás a projekthez

## Kinek jó az OpenBSD?

## Segítőanyagok, dokumentációk

(reddit post:
Hardware compatibility is a problem with BSDs in general. OpenBSD is by no means the worst of the bunch when it comes to harware compatibility, but it's also not the best.

What I love about OpenBSD is that it is very simple and has very good documentation. So if you want to accomplish something that you don't know how to do, the chances are you can figure it out by yourself and also preety quickly. OpenBSD developers have this mindset of "do it well or don't do it at all". For you, as a user, this means that if some feature is implemented it works really well and it is very unlikely that there are any bugs to work around or something of that sort. In FreeBSD or NetBSD that is often not the case.

OpenBSD software is generally very well thought out, easy to use and has a logical workflow. It doesn't come with 10 tools that do the same thing, and the tools that it does come with don't try to be a swiss army knife, they do a small number of tasks and do it well.

OpenBSD is an OS that you don't have to tweak or configure in any way for it to be secure. It's not really that important for a desktop use case, but for a server of any kind that's a nice advantage to have.
)
