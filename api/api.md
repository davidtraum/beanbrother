# API Specification

### Brew

> Kaffee brauen

POST `IP`

#### Request

```json
{
    "strength": 6,
    "amount": 250
}
```

|Feld|Mögliche Werte|Beschreibung|
|---|---|---|
|strength|0-10|Stärke des Kaffees|
|amount|20-400|Menge in Milliliter|

#### Response

```json
{
    "status": 0
}
```

|Feld|Mögliche Werte|Beschreibung|
|---|---|---|
|status|siehe Statuscodes|Status der API-Antwort|

> Statusabfrage

#### Response

GET `IP`

```json
{
    "status": 0,
    "progress": 56
}
```

|Feld|Mögliche Werte|Beschreibung|
|---|---|---|
|status|siehe Statuscodes|Status der API-Antwort|
|progress|0-100|Fortschritt des momentanen Kaffees in %|
|waterLevel|0-100|Wasserfüllmenge in %|
|beanLevel|0-100|Bohnenmenge in %|
