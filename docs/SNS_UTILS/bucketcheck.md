# `bucketCheck` Dokumentation

Dieses Skript stellt Funktionen bereit, um die **Routing Bucket ID** eines Spielers abzurufen und synchronisiert diesen Wert über den State Bag.

---

Absolut, das ist **korrekt**\!

Der State Bag, den wir implementiert haben (`player.state.currentBucketId`), ist auf dem Server jederzeit verfügbar und kann direkt ausgelesen werden. Dies ist eine **effiziente Alternative** zum Aufruf des `exports`.

Hier ist der aktualisierte Abschnitt 1 der Dokumentation, der diese Option hinzufügt:

-----

# 📚 `bucketCheck` Dokumentation (Aktualisiert)

Dieses Skript stellt Funktionen bereit, um die **Routing Bucket ID** eines Spielers abzurufen und synchronisiert diesen Wert über den State Bag.

-----

## 1\. Serverseitig (Exports und State Bag 🌟)

Der Bucket-Wert kann auf zwei Arten serverseitig abgerufen werden:

### a) Über den Export-Mechanismus (Funktionsaufruf)

**Syntax:**

```lua
local playerBucket = exports["sns_utils"]:getCurrentBucketId(playerSource)
```

  * `playerSource` ist die Server-ID des Spielers.
  * **Rückgabe:** Die Routing Bucket ID (Zahl) des Spielers, stets tick-genau.

### b) Über den Server-Side State Bag (Direktzugriff)

Da der Server den Wert kontinuierlich im **State Bag** des Spielers speichert, kann der Wert **direkt und ohne Funktionsaufruf** ausgelesen werden.

**Syntax:**

```lua
local player = Player(playerSource)

if player then
    local playerBucket = player.state.currentBucketId or 0
end

-- Oder kürzer: local playerBucket = Player(playerSource)?.state?.currentBucketId or 0
```

  * `playerSource` ist die Server-ID des Spielers.
  * `Player(playerSource)` gibt das **Server-Spielerobjekt** zurück.
  * `playerObject.state.currentBucketId` liefert den **zuletzt gespeicherten** Bucket-Wert (max 10 sekunden).

-----


## 2\. Clientseitig (State Bag)

Der effizienteste Weg, um auf den aktuellen Bucket-Status zuzugreifen, ist direkt über den **lokalen Spieler-State Bag** (`LocalPlayer.state`).

Der Server synchronisiert diesen Wert automatisch mit allen Clients, nachdem er das State Bag-Set alle 10 Sekunden.

### a) Wert abrufen

Sie können den Wert direkt wie eine normale Lua-Variable auslesen.

**Syntax:**

```lua
-- Dies funktioniert überall im Client-Skript (nachdem der Player initialisiert wurde)
local currentBucket = LocalPlayer.state.currentBucketId or 0

-- Beispiel für die Abfrage:
if currentBucket == 100 then
    -- Spieler ist im Bucket 100
end
```

### b) Auf Änderungen reagieren

Um Aktionen auszulösen, sobald der Spieler den Bucket wechselt, sollte der **State Bag-Änderungs-Handler** verwendet werden.

**Syntax:**

```lua
-- Fängt Änderungen am State Bag Key "currentBucketId" ab
AddStateBagChangeHandler("currentBucketId", nil, function(bagName, key, value) 
    local entity = GetEntityFromStateBagName(bagName)
    print(tostring(entity) .. " befindet sich nun im Bucket" .. tostring(value))
    -- Whoops, we don't have a valid entity!
    if entity == 0 then return 
    -- We don't want to freeze the entity position if the entity collision hasn't loaded yet
    while not HasCollisionLoadedAroundEntity(entity) do
        -- The entity went out of our scope before the collision loaded
        if not DoesEntityExist(entity) then return end
        Wait(250)
    end
    SetEntityInvincible(entity, value)
    FreezeEntityPosition(entity, value)
    TaskSetBlockingOfNonTemporaryEvents(entity, value)
end)
```

| Parameter | Bedeutung |
| :--- | :--- |
| `bagName` | Name des State Bags (z.B. `player:123` oder `entity:456`). |
| `key` | Der Schlüssel, der sich geändert hat (`currentBucketId`). |
| `value` | Der neue Wert (die neue Bucket ID). |

Documentation: [AddStateBagChangeHandler](https://docs.fivem.net/natives/?_0x5BA35AAF)

## 3\. Clientseitig (callback)

Die Funktion kann synchron über `lib.callback.await` auf dem Client aufgerufen werden, das ist immer 100% live (unabhängig von 10 Sekunden schleife Serverside)

**Syntax:**

```lua
local playerBucket = lib.callback.await("sns_utils:getCurrentBucketId", false)
```

  * **Rückgabe:** Die Routing Bucket ID (Zahl) des aktuellen Spielers.
