## 📋 Housing-Konfiguration (Lua-Beispiel)

```lua
{

    uniqueName = "VT_Z_Konzept_Doktor_01",     -- Eindeutiger Name des Hauses 
    houseCoords = vector3(-286.4730, 809.1436, 119.3859),     -- HIER: Mit /printmycoords Ingame-Position herausfinden und eintragen
    houseRadiusLimit = 15,     -- Radius um houseCoords, der als "Zuhause" gilt, relevant für Furniture
    doors = {}, -- leer lassen
    invLimit = 1500,     -- Maximale Kapazität des Hausinventars
    taxAmount = Config.konzeptTaxes.veryLow,     -- Wöchentliche Steuer. Nutzt die vordefinierten Sätze in Config.konzeptTaxes
    buyMenuCoords = vector3(-281.8661, 803.1107, 119.3448),    -- Koordinaten für den Kauf-Marker / das Kauf-Menü
    price = 500,     -- Verkaufspreis (an das System) 
    sellPrice = 300,     -- Verkaufspreis (an das System)
    tpInt = 0, -- so lassen
    tpInstance = 0,     -- so lassen
    name = "Doktor´s Office Valentine",     -- Anzeigename der Immobilie
    forSaleBlips = false,     -- Zeigt einen Blip auf der Karte, wenn das Haus zum Verkauf steht
    saleBlipSprite = 'blip_ambient_quartermaster',     -- Icon des Verkaufs-Blips
    saleBlipModifier = 'BLIP_MODIFIER_MP_COLOR_20',     -- Farbe des Verkaufs-Blips
    canSell = true,     -- Kann das Haus vom Spieler an das System zurückverkauft werden?
    showmarker = false, -- Zeigt dem Spieler einen Marker
    

    -- Konzeptspezifische Einstellungen (Optional):
    konzeptHousing = true,        -- Markiert als Konzept-Housing
    konzeptJob = "doctor_state",  -- Job-ID, die für den Besitz erforderlich ist
    konzeptJobLabel = "Staatlicher Arzt", -- Anzeigename des Jobs
    company = "doctor_vt",        -- Firmen-ID des Konzepts
    companyLabel = "Arztpraxis Valentine" -- Anzeigename der Firma

    buyPing = true,    -- Löst einen Log-Eintrag (Ping) im Discord aus, wenn das Haus gekauft wird

    doorId = 585, -- zu finden über /doorlock 1 an der Tür

},
```

-----

### Konzept-Housing

  * **`konzeptHousing`**:
      * Wenn auf `true`, aktiviert dies die speziellen Konzeptregeln. Das Haus ist dann mit einer speziellen Firma und einem Job verknüpft (sowie einer Tür für automatische Schlüsselübergabe)
  * **`konzeptJob` / `konzeptJobLabel`**:
      * Der **technische Job-Name** (`doctor_state`) und der **Anzeigename** (`Staatlicher Arzt`). Der Spieler der dieses Housing kauft erhält automatisch diesen Job.
  * **`company` / `companyLabel`**:
      * Die **zugehörige company **. Das Label dient lediglich der Anzeige also bspw. "smith_sd" / "Schmiede Saint Denis"
