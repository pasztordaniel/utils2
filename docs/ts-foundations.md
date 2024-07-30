# Typescript alapok

A typescript egy típusos programozási nyelv, ami javascriptre fordul, segítségével minőségbiztosítási szempontból fontos követelményeket fogalmazgatunk meg a kódunkban, könnyen dokumentálhatjuk a kódunkat és segíthetjük vele későbbi munkánkat.

A typescript nem olyan félelmetes mint aminek elsőre látszik, lényegében ugyanúgy javascriptet írsz, csak közben megfogalamazod a programod helyes működéséhez elvárt típusokat és használat közben ezeket az elvárásokat kell betartanod. A typescript nem az ellenséged, hanem inkább egy jó eszköz, ami szól, ha elfelejtettél valamit, vagy kimaradt véletlenül egy nullcheck, segít a javascript mélyebb megértésében és leegyszerűsíti a refaktorálást.

> Fontos, hogy **NE** elhallgattatni vagy becsapni akard a compilert! Ha valamiért jelez, akkor azt biztosan okkal teszi.

## Hivatkozások

| Cím                     | URL                                                     |
| ----------------------- | ------------------------------------------------------- |
| Typescript dokumentáció | [Typescript docs](https://www.typescriptlang.org/docs/) |
| Sandbox                 | [Sandbox](https://www.typescriptlang.org/play)          |

## Típusok

Ahogy a nyelv neve is mutatja, az a legfontosabb tulajdonsága, hogy típusokat fogalmaz meg, ami később segíti a munkádat.

### Alap típusok

```ts
const numberVar: number = 42;
const bigintVar: bigint = 42n; // csak es2020 target esetén
const stringVar: string = 'Lorem ipsum dolor sit amet';
const booleanVar: boolean = true;
const nullVar: null = null;
const undefinedVar: undefined = undefined;
const anyVar: any = 'anything'; // NE! Csak egyszerűen ne! :)
const neverVar: () => never = () => {
  throw new Error('');
};
const unknownVar: unknown = null;
const objectVar: object = {}; // Létezik, de ne használd, van rá jobb megoldás
```

Nem szükséges feltétlenül minden típust jelezni, ha a vátozó inicializálásakor kiderül mi a típusa, akkor nyugodtan elhagyható, az IDE vagy a fordító úgyis emlékeztetni fog, ha nem odaillő adatot akarsz a változódnak admi.

```ts
let showModal = false; // automatikusan boolean
showModal = true;
showModal = 2; // ez hibára fog futni
```

### Array

A javascripttel ellentétben, előre meghatározott típusú elemeket tehetünk tömbökbe. Ha array-t akarunk definiálni, a típus után `[]`-t teszünk.

```ts
const nums: number[] = [1, 2, 3, 4, 5, 6, 7];
```

### Tuple

A tuple, olyan speciális tömb, aminek előre meghatározott elemszámúnak és elemtípusúnak kell lennie. Ilyen pld. react-ban a `useState` hook értéke: `[state, setter()]`.

```ts
const tuple: [number, string] = [123, 'lipsum'];
const xyzCoords: [number, number, number] = [0, 12, 0];
```

### Enum

Előre meghatározott értékkészlet, pld.: támogatott nyelvek listája.

```ts
enum TestEnum {
  EGY = 'EGY',
  KETTO = 'KETTO',
  HAROM = 'HAROM',
}

const test: TestEnum = TestEnum.EGY;
```

### Interface

Objektumok mezőit határozhatjuk meg, de a classokhoz hasonlóan kiterjeszthetőek.

```ts
interface User {
  id: number;
  email: string;
}

const user: User = {
  id: 123,
  email: 'test@mail.com',
};

// az extends User azt jelzi, hogy tartalmazza a user mezőit is
interface Profile extends User {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

const profile: Profile = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: new Date(),
  ...user,
};
```

Enyhítő körülmény lehet, hogy a typescript csak a minimális elvárásokat kéri, csak akkor dob hibát, ha hiányoznak a szükséges mezők, például ha a fenti kódot folytatva egy `User` típusú változóba beletöltjük a `profile` értékét, nem kapunk hibát, mert megvannak a működéshez szükséges mezők:

```ts
const newUser: User = profile; // nincs error
const newProfile: Profile = user; // itt hiányoznak mezők, ezért hibát kapunk
```

Nem szükséges minden mezőnek kötelezőnek lennie, ha opcionálisan megadható mezőt akarunk adni az interface-nek, egy kérdőjellel jelezzük. Ebben az esetben az IDE figyelmezetet, hogy használatkor nullcheck szükséges.

```ts
interface User {
  id: number;
  email: string;
  phone?: number; // opcionális
}

const user: User = {
  id: 123,
  email: 'test@mail.com',
};

console.log(user.phone); // értéke undefined lesz, az IDE kéri a nullcheck-et

if (user.phone) {
  console.log(user.phone); // az IDE tudja, hogy létezik, nem húzza alá
}
```

### Type

Típusok meghatázozására használjuk, olyankor jön jól, ha egy bonyolultabb típusokat akarunk többször felhasználni.

```ts
type Email = string;

const email: Email = 'test@mail.com';
```

A fenti példának kevés gyakorlati haszna van, emiatt érdemesebb bonyolultabb típusoknál használni, pld., ha az email mező nullable, akkor `|` pipe operátorral megadhatjuk neki, hogy az értéke vagy `string` vagy `null`.

```ts
type Email = string | null;
```

Másik felhasználási lehetőség, ha egy típus csak kifejezetten néhány értéket fogadhat:

```ts
type ButtonColor = 'red' | 'green' | 'blue';
```

A type használható interfaceként is, ebben az esetben `&` operátorral lehet kiterjeszteni a típust:

```ts
type User = {
  id: number;
  email: string;
};

type Profile = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
} & User;
```

Mikor használjuk `type`-ot és mikor `interface`-t? Gyakorlatban ma már elenyésző a különbség, használatban mindkettőugyanúgy megfelel, de ha átláthatóbb kódot akarunk írni, az interface jobb választás, a type-okat használjuk csak bonyolultabb típusok meghatározására, kiemelésésre.

### Generic

Előfordulhat, hogy nem akarjuk a kódunkat egyetlen típus fogadására lekorlátozni, ilyenkor jó eszköz a generics. Ebben az esetben, egy olyan típust hatázunk meg aminek nem tudjuk határozottan a típusát, csak egy jelölőt használunk rá, általában `T`, de szabadon elnevezhető, használat során csak be kell helyettesíteni:

```ts
type Nullable<T> = T | null;
const user: Nullable<User> = null; // vagy User vagy null értéke lehet
```

Generics esetében leszűkíthetjük az behelyettesíthető típusokat az `extends` segítségével:

```ts
type NullableObj<T extends object> = T | null;
const user: NullableObj<User> = null;
const name: NullableObj<string> = null; // erre hibát kapunk, mert nem object
```

Egyenlőség jellel elepértelmezett típust adhatunk a genericnek, így opcionális lesz a behelyettesítendő típus:

```ts
type NullableUser<T extends object = User> = T | null;
const user: NullableUser = null;
```

A generic típusok függvényeknél is hasznosak lehetnek:

```ts
// arrow function esetén
const fn = <T extends object>(obj: T): T => {
  return obj;
};

// function esetén
function fn<T extends object>(obj: T): T {
  return obj;
}
```

## Utilities

A typescript számos olyan beépített típussal rendelkezik, ami segít a típusok manipulálásában.

### Literal

Nem utility, de hasznos lehet, segítségével meghatározhatjuk, hogy milyen felépítésű string-et várunk.

```ts
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;
```

### Partial

Interface összes mezőjét opcionálissá teszi

```ts
type OptionalUser = Partial<User>;
```

### Required

Interface összes mezőjét kötelezővé teszi

```ts
type OptionalUser = Required<User>;
```

### Record

Egy objektumtípust határoz meg, első paramétere a kulcs típusa, a második az érték típusa.

```ts
type UserMap = Record<string, User>;
```

### Omit

Törli a felsorolt mezőket az objektumból, a mezőket pipe `|` operátorral kell elválasztani.

```ts
interface User {
  id: number;
  email: string;
  phone?: number;
}

type UserMin = Omit<User, 'id' | 'phone'>; // csak az email mező marad
```

### Pick

Kiveszi a felsorolt mezőket az objektumból.

```ts
type UserMin = Pick<User, 'id' | 'email'>; // { id: number, email: string }
```

### Exclude

Kizárja a felsorolt elemeket az unionból.

```ts
type ButtonColor = 'red' | 'green' | 'blue';

type BlueButtonColor = Exclude<ButtonColor, 'red' | 'green'>;
```

### ReturnType

A megadott függvény visszatérési értékének típusát adja vissza.

```ts
const addPx = (x: number, y: number) => `${x + y}px`;

type AddReturnType = ReturnType<add>; // string
```

### Parameters

A megadott függvény paramétereinek típusait adja vissza.

```ts
const addPx = (x: number, y: number) => `${x + y}px`;

type AddParam = Parameters<add>[0]; // első param, number
```

## Hasznos cuccok

Ez a fejezet egy olyan lista, ami renszeresen előforduló problémákra ad megoldást, és a későbbi munkában még jól jöhet.

### PartialBy

Partial továbbfejlesztett változata, a megadott mezőket teszi opcionálissá.

```ts
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type UserPartialBy = PartialBy<User, 'email'>;
```

### RequiredBy

Required továbbfejlesztett változata, a megadott mezőket teszi kötelezővé.

```ts
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type UserRequiredBy = RequiredBy<User, 'email'>;
```
