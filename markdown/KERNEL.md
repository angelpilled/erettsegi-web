# Kernel Programozás


## Mi az a Kernel?
A Kernel az operációs rendszerek középpontja. Lényegében ez a "komponens" kezeli a számítógép legalapabb műveleteit; I/O műveletek, memóriakezelés, CPU-hozzáférés, és még több.
Nagyon fontos egy optimalizált Kernel megírása, mivel egy pl. hobbi operációs rendszeren (és minden más rendszeren is) ez a program kezel majd minden műveletet, így a gyorsaság és affinitás a cél.
A két legfőbb kernel model a monolitikus-és a mikrokernel.
- Monolitikus Kernel: ez a fajta kernel a felhasználói-és kernelszolgáltatásokat is egyetlen címtérben végzik, ezáltál ha egy szolgáltatás is összeomlik, az egész rendszer is összeomlik. Modernebb monolitikus rendszereken ezt kiküszöbölték a kernel modulok használatával. Ilyen kernellel rendelkezik pl. a Linux, a BSD operációs rendszerek és a Windows is.
- Mikrokernel: A felhasználói-és kernelszolgáltatásokat külön címterekben tárolják, ezáltal biztonságosabb; csak a mikrokernel egy részére van hatással az összeomlás, azonban az írás/olvasás, alap műveletek végzése is lassabb. Ilyen kernellel fut pl.: Mac OS X, Minix.

## Kernel Programozás C-ben
### Miért C-ben programozunk Kernelt?
Miért C-ben, és nem C++ vagy C# nyelveken lett írva a Unix kernel? Hát, mondjuk azért, mert a C hamarabb volt, és azért is, mert a C (utólag) a Unix kiépítésére lett tervelve.
Elejében a Unix Assembly nyelven íródott, de később feltalálták a C-t, és átírták a rendszer kódját. Így érthetőbb és egyszerűbb volt a programozó számára, sőt, sokkal rövidebb kódból jött ki.
Mivel a C-vel nagyon egyszerűen hozzáférünk a memóriához/hardverhez, és még érthetőbb is az átlagembernek, mint az Assembly (!), ezért ésszerű C-ben kernelt programozni, mint mondjuk Pythonban (igen, lehetséges, és igen, nagyon szar). Mivel a C rendszerprogramozásra lett kitalálva, nagyon ügyes dolgokat tudunk vele készíteni.

## Kernel Fejlesztői Környezet
Nagyon ajánlott használni egy szövegszerkesztőt. Egy Assembler-t, és a GNU C Compiler-ét. Az utóbbi a "gcc", amivel C kódot tudunk átalakítani object fájllá, majd futtathatóvá tehetjük.

## Kernel Modulok
Egy kernel modulok arra lettek kitalálva, hogy kibővítsék az alap kernel funkcionalitását akkor, amikor szükség van rá, sőt, a rendszer újraindítása sem szükséges. Tehát ha felesleges egy kernel funkcionalitás, nincs értelme meghívni, így gyorsabb és biztonságosabb is meghíváskor. Ha már nincs szükségünk továbbra a kernel modulra, úgymond "ki tudjuk tölteni" (unload). Azonban ha új funkcionalitást akarunk beépíteni, muszáj a kernelünket újraépíteni és újraindítani.
Itt egy nagyon egyszerű kernel modul, betöltésnél köszön, kitöltésnél pedig elköszön.
```c
#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>MODULE_LICENSE(“GPL”);

MODULE_AUTHOR(“Robert W. Oliver II”);
MODULE_DESCRIPTION(“A simple example Linux module.”);
MODULE_VERSION(“0.01”);static int __init lkm_example_init(void)

{
 printk(KERN_INFO “Hello, World!\n”);
 return 0;
}

static void __exit lkm_example_exit(void)
{
 printk(KERN_INFO “Goodbye, World!\n”);
}

module_init(lkm_example_init);
module_exit(lkm_example_exit);
```

## Hogyan használja a hardvert a kernel?
Különleges "számítógépes instrukciókkal", a számítógép memóriájának egy bizonyos hardverhez rendelésével, és ezek memóriáknak alap I/O műveletek alkalmazásával történik a hardver kezelése a kernellel.
Mindezt az Assembly nyelvvel tudjuk elérni, mivel a "számítógépes instrukciók" valójában Assembly instrukciók, amelyekkel az összes lehetséges processzor-instrukciókat elvégezhetjük a számítógépünkön. Ezzel meg is ölhetjük számítógépünket, szóval memória hozzárendeléssel odafigyelni!

## Kernel Adatstruktúrák
A Kernel adatstruktúrák a jelenlegi rendszer adatainak tárolását szolgálják célul. Ha egy új "processz", vagyis folyamat létrejön, egy kernel adatstruktúra vele együtt létrejön, ami tartalmazza a processz összes részletét.
Eme adatstruktúrákban három nagyon fontos "táblát" tartalmaz, ez a: processz tábla; fájl tábla; és a V-node, I-node táblák.

1. Processz tábla: a processz tábla az összes, jelenleg futó folyamatok információit tárolja. Ilyenek pl. a tárolási információ, (folyamat) lefuttatási állapot, fájl információk, stb.
2. Fájl tábla: a fájl tábla a rendszer összes fájljának a bejegyzését tárolja. Egy ilyen bejegyzés tárolja a fájl állapotát (a fájl-t olvassák/írják-e), vagy a fájl offset-ét, amely lényegében a következő (olvasás vagy írás) művelet helyét határozza meg a fájlban.
3. V-node és I-node táblák: ezen táblák jelentősége lényegében hivatkozások a (már fenn említett) táblákra. A hardver-t a szoftverhez/programhoz "csatlakoztatják"/kötik.

## Linux Kernel Logolása 
Ez a részleg lényegében a Linux rendszerre vonatkozik. Egy elég modern megoldással egész egyszerűen megtekinthetőek a Linux kernel logjai mindössze a `dmesg` paranccsal. Systemd-vel futó rendszereken a `journalctl --system -f` paranccsal ugyan ez elérhető. Ezen parancsokkal, magas szinten, de tanulható, hogy mégis miként működik a Linux kernel.

## Kernel fejlesztési könyvek, közösségek, leírások
- www.wiki.osdev.org
- https://forum.osdev.org/
- OS.pdf (https://users.iit.uni-miskolc.hu/~toth130/os/gyak/OS.pdf)
- The Linux Kernel Module Programming Guide (https://tldp.org/LDP/lkmpg/2.6/html/index.html)
