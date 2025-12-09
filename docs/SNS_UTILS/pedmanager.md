# Pedmanager

Der `PedManager` ist ein Hilfsmodul zur effizienten Verwaltung von NPCs (**Peds**) und deren Interaktionspunkten in RedM/FiveM, basierend auf der **ox\_lib Points** Funktionalität.

Es ermöglicht das automatische Spawnen und Despawnen von NPCs, wenn sich Spieler nähern oder entfernen.

---

### ⚙️ Registrierung (API)

Die Registrierung MUSS im **Client-Teil** der Resource erfolgen, die die NPCs definieren möchte.

#### 1\. Export / Event

Du kannst die Funktion über **Exports** oder **Events** aufrufen, empfohlen sind Events:

```lua
-- Über Export
exports('resourceName', 'registerNpcs', resourceName, npcList, options)

-- Über Event (Standard)
TriggerEvent('sns_utils:pedmanager:registerNpcs', resourceName, npcList, options)
```

#### 2\. `npcList` Struktur

Die `npcList` ist eine Tabelle, die einzelne NPC-Definitionen enthält.

| Feld | Typ | Status | Beschreibung |
| :--- | :--- | :--- | :--- |
| **`model`** | `string` | **Pflicht** | Das Ped-Modell (z.B. `'a_m_m_val_drunk_01'`). |
| **`x, y, z`** | `number` | **Pflicht** | Die Koordinaten (Position) des NPCs. |
| `heading` | `number` | empfohlen | Die Blickrichtung des NPCs beim Spawnen (Standard: `0.0`). |
| `scenario` | `string` | empfohlen | Ein Szenario (animation mit Prop) (z.B. `'WORLD_HUMAN_SMOKE'`). |
| `blip` | `table` | Optional | Konfiguration für die Blip-Erstellung. |
| `interaction` | `table` | Optional | Konfiguration für die `murphy_interact` Interaktion. |
| `spawnDistance` | `number` | Optional | Radius für das Spawnen des NPCs (Standard: `100`). |
| `animDict` | `string` | Optional | Das Animations-Dictionary zum Abspielen. |
| `animName` | `string` | Optional | Der Name der Animation im Dictionary. |
| `outfit` | `number/string` | Optional | ID des Outfit-Presets zum Laden. |
| `randomizeOutfit` | `boolean` | Optional | Wenn `true`, wird das Ped-Outfit zufällig gewählt (Standard: `true`). |
| `onSpawn(ped, npcData)` | `function` | Optional | Callback, wenn der NPC gespawnt wurde. |
| `onDespawn(npcData)` | `function` | Optional | Callback, wenn der NPC despawnt wurde. |
| `onNearby(npcData)` | `function` | Optional | Callback, solange ein Spieler in Reichweite des Spawnpunkts ist. |

| `id` | `string/number` | optional, nicht empfohlen | Eindeutige ID für den NPC (Standard: `'resourceName_[aufsteigende Zahl]'`). |


-----

### 📝 Code-Beispiel

```lua
local resourceName = GetCurrentResourceName()

local npcDefinitions = {
    -- Pflicht: Minimaler NPC
    {
        model = 'a_m_m_val_shopkeeper', 
        x = -291.56,
        y = 753.81,
        z = 117.84,
    },
    
    -- NPC mit allen optionalen Features
    {
        -- Pflicht
        model = 'a_f_m_val_citizen_01', 
        x = -287.97,
        y = 756.90,
        z = 117.84,
        
        -- OPTIONAL
        heading = 270.0,
        spawnDistance = 150,
        
        -- Animationen/Verhalten
        scenario = 'WORLD_HUMAN_DRINKING_BEER',
        
        -- Aussehen
        outfit = 1, -- Lädt Preset 1, falls nicht gesetzt wird random gesetzt
        
        -- Callbacks
        onSpawn = function(ped)
            SetPedKeepTask(ped, true) -- Beispiel-Logik
        end,
        
        -- Blip
        blip = {
            name = 'Ranch Mitarbeiter',
            sprite = 'BLIP_HEALTH', -- Muss ein gültiges Blip-Sprite sein, https://github.com/femga/rdr3_discoveries/tree/master/useful_info_from_rpfs/textures
            color = 'WHITE',
        },

        -- Interaktion (murphy_interact)
        interaction = {
            title = 'Sprechen',
            distance = 3.0,
            options = {
                {
                    title = 'Hallo sagen',
                    action = function()
                        lib.notify({ title = 'NPC', description = 'Der NPC grüßt zurück!' })
                    end
                }
            }
        }
    }
}

-- Registrierung der NPCs
TriggerEvent('sns_utils:pedmanager:registerNpcs', resourceName, npcDefinitions)
```
