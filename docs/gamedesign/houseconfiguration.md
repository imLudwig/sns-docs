# 🏠 Housing-Konfiguration einreichen

Bitte übermittle dem Development die folgende **Lua-Tabelle** mit allen ausgefüllten Informationen. Bei Unsicherheiten kannst du den Wert mit einem Kommentar versehen oder auf dem Standardwert (`default`) belassen.

-----

## 💵 Aktuelle Steuerkonfiguration in $ (monatlich)

```lua 
    Config.konzeptTaxes = {
        veryLow = 25,
        low = 35,
        middle = 45,
        high = 55,
        veryHigh = 65
    },
```

steuern werden also so definiert: 

```lua
taxAmount = Config.konzeptTaxes.veryLow,
```

-----

## 💻 Codebeispiel

Bitte verwende dieses Format, wenn du dir noch unsicher bist was die einzelnen Werte bedeuten.

```lua
{
    uniqueName = "VT_Z_Konzept_Doktor_01",         -- Eindeutiger Name des Hauses (z.B. VT_Z_Konzept_Job_01)
    houseCoords = vector3(-286.4730, 809.1436, 119.3859),     -- HIER: Mit /printmycoords Ingame-Position herausfinden und eintragen
    houseRadiusLimit = 15,                         -- Radius um houseCoords, der als "Zuhause" gilt, relevant für Furniture
    doors = {},                                    -- Standardmäßig leer lassen
    invLimit = 1500,                               -- Maximale Kapazität des Hausinventars
    taxAmount = Config.konzeptTaxes.veryLow,       -- Wöchentliche Steuer (nutzt vordefinierte Sätze in Config.konzeptTaxes)
    buyMenuCoords = vector3(-281.8661, 803.1107, 119.3448), -- Koordinaten für den Kauf-Marker / das Kauf-Menü
    price = 500,                                   -- Verkaufspreis (an den Spieler)
    sellPrice = 300,                               -- Verkaufspreis (an das System zurück)
    tpInt = 0,                                     -- Standardwert: so lassen
    tpInstance = 0,                                -- Standardwert: so lassen
    name = "Doktor´s Office Valentine",             -- Anzeigename der Immobilie
    forSaleBlips = false,                          -- Zeigt Blip auf der Karte, wenn das Haus zum Verkauf steht (true/false)
    saleBlipSprite = 'blip_ambient_quartermaster', -- Icon des Verkaufs-Blips
    saleBlipModifier = 'BLIP_MODIFIER_MP_COLOR_20', -- Farbe des Verkaufs-Blips
    canSell = true,                                -- Kann das Haus vom Spieler an das System zurückverkauft werden?
    showmarker = false,                            -- Zeigt dem Spieler einen Marker (true/false)

    -- Konzeptspezifische Einstellungen (Optional):
    konzeptHousing = true,                         -- Markiert als Konzept-Housing (true/false)
    konzeptJob = "doctor_state",                   -- Job-ID, die für den Besitz erforderlich ist
    konzeptJobLabel = "Staatlicher Arzt",          -- Anzeigename des Jobs
    company = "doctor_vt",                         -- Firmen-ID des Konzepts
    companyLabel = "Arztpraxis Valentine",         -- Anzeigename der Firma

    buyPing = true,                                -- Löst einen Log-Eintrag (Ping) im Discord aus, wenn das Haus gekauft wird

    doorId = 585,                                  -- Zu finden über /doorlock 1 an der Tür (falls relevant)

},
```

-----

## 📝 Wichtige Parameter

| Parameter | Typ | Beschreibung |
| :--- | :--- | :--- |
| **`uniqueName`** | String | **Eindeutiger Name** (z.B. `STADT_Z_Job_Nr`) – **Pflichtfeld\!** |
| **`houseCoords`** | `vector3` | Exakte Position des Hauses (Ingame mit **`/printmycoords`** bestimmen). |
| **`buyMenuCoords`** | `vector3` | Position des Kauf-Markers / Kauf-Menüs. |
| **`name`** | String | Der im Spiel angezeigte Name der Immobilie (z.B. "Haus am See"). |
| `price` | Zahl | Verkaufspreis (an den Spieler). |
| `sellPrice` | Zahl | Ankaufpreis durch das System. |
| `invLimit` | Zahl | Maximale Kapazität des Hausinventars (Standard: `1500`). |
| `taxAmount` | Variable | Wöchentliche Steuer (z.B. `Config.konzeptTaxes.low`). |
| `forSaleBlips` | Boolean | `true` zeigt einen Blip auf der Karte, wenn das Haus zum Verkauf steht. |
| **`konzeptHousing`** | Boolean | Muss **`true`** sein, wenn es sich um ein Konzept-Housing handelt. |
| **`konzeptJob`** | String | **Job-ID**, die für den Besitz erforderlich ist (z.B. `"polizei"`). |
| **`company`** | String | **Firmen-ID** des Konzepts. |
| `doorId` | Zahl | Die ID der Tür, wenn sie über das Housing-System gesperrt werden soll (ermitteln mit **`/doorlock 1`**). |

-----

## 💾 Leere Vorlage (Zur direkten Übernahme)

```lua
{
    uniqueName = "",
    houseCoords = vector3(0, 0, 0),
    houseRadiusLimit = 15,
    doors = {},
    invLimit = 1500,
    taxAmount = Config.konzeptTaxes.low,
    buyMenuCoords = vector3(0, 0, 0),
    price = 0,
    sellPrice = 0,
    tpInt = 0,
    tpInstance = 0,
    name = "",
    forSaleBlips = false,
    saleBlipSprite = 'blip_ambient_quartermaster',
    saleBlipModifier = 'BLIP_MODIFIER_MP_COLOR_20',
    canSell = true,
    showmarker = false,

    konzeptHousing = false,
    konzeptJob = "",
    konzeptJobLabel = "",
    company = "",
    companyLabel = "",

    buyPing = true,

    doorId = 0,

},
```

