# React atsiskaitymo užduotis – Sporto klubas

Sukurkite sistemą, kurioje **sporto klubo administratorius gali registruoti naujus klubo narius**.

Tinklapį sudaro **keturi pagrindiniai puslapiai**.

---

# 1. Pagrindinis puslapis

Puslapyje turi būti:

* trumpas aprašymas apie sporto klubą
* paveikslėlis
* mygtukas **„Registruoti narį“**, kuris nukreipia į registracijos formą

Taip pat šiame puslapyje turi būti rodoma **narių statistika**, gaunama iš **json-server** duomenų.

Statistika turi parodyti bent:

* bendrą registruotų narių skaičių
* kiek yra **Basic**, **Premium** ir **VIP** narių

---

# 2. Nario registracija

Registracijos forma turi turėti tokius laukus:

* `firstName`
* `lastName`
* `age`
* `membershipType` (pvz.: Basic / Premium / VIP)
* `trainingGoal`

Forma turi:

* validuoti įvedamus duomenis, rodyti klaidų pranešimus
* išsaugoti duomenis naudojant **json-server**
* naujas narys turi atsirasti **json duomenų faile**

Po **sėkmingos registracijos vartotojas turi būti automatiškai nukreipiamas į narių sąrašo puslapį.** 

---

# 3. Narių sąrašas

Šiame puslapyje matomas **visų narių sąrašas**.

Reikalavimai:

* nariai turi būti rodomi **kortelėse**
* sąrašas turi būti **surikiuotas pagal `lastName` abėcėlės tvarka**
* turi būti įgyvendintas **filtras pagal `membershipType`**
* galima pasirinkti, kad būtų rodomi tik **Basic**, **Premium** arba **VIP** nariai

Kiekviena kortelė turi turėti mygtuką **„Peržiūrėti išsamiau“**.

Mygtukas turi nukreipti į nario puslapį naudojant **React Router su ID parametru**, pvz.:

```
/members/5
```

---

# 4. Nario duomenys

Tai atskiras puslapis, kuriame rodomi **vieno pasirinkto nario duomenys**.

Šis puslapis turi būti pasiekiamas naudojant **React Router parametrą `id`**.

Pvz. route struktūra:

```
/members/:id
```

Naudojant `id` turi būti užkraunami konkretūs nario duomenys iš **json-server**.

Šiame puslapyje turi būti galimybės:

* **redaguoti nario duomenis (Update)**
* **ištrinti narį (Delete)**

---

# Papildomi reikalavimai

Sukurkite **Navigation bar**, kurio pagalba galima pereiti į:

* Pagrindinį puslapį
* Registracijos puslapį
* Narių sąrašą

Navigacijai naudokite **React Router**.

Dizainas gali būti paprastas, tačiau turi būti **tvarkingas ir aiškus**.

---

# Vertinimo kriterijai

1. Pagrindinis puslapis su aprašymu ir mygtuku registracijai – **1 taškas**
2. Narių statistikos atvaizdavimas pagrindiniame puslapyje – **1 taškas**
3. Nario sukūrimas naudojant formą (**Create**) – **2 taškai**
4. Automatinis nukreipimas į narių sąrašą po registracijos – **1 taškas**
5. Narių sąrašo atvaizdavimas (**Read**) – **2 taškai**
6. Sąrašo rikiavimas pagal `lastName` – **1 taškas**
7. Filtravimas pagal `membershipType` – **1 taškas**
8. Nario duomenų puslapis naudojant **route parametrą `:id`** – **2 taškai**
9. Nario redagavimas (**Update**) – **2 taškai**
10. Nario ištrynimas (**Delete**) – **1 taškas**
11. Navigacija tarp puslapių – **1 taškas**

**Viso: 15 taškų – 10 balų**

