# `bucketCheck` Dokumentation

Dieses Skript stellt Funktionen bereit, um die **Routing Bucket ID** eines Spielers abzurufen.

---

## Verwendung

### 1. Serverseitig (Exports)

Die Funktion kann direkt über den Export-Mechanismus auf dem Server aufgerufen werden.

**Syntax:**

```lua
local playerBucket = exports["sns_utils"]:getCurrentBucketId(playerSource)
````

  * `playerSource` ist die Server-ID des Spielers.
  * **Rückgabe:** Die Routing Bucket ID oder nil falls nicht vorhanden.

### 2\. Clientseitig (Callbacks)

Die Funktion kann synchron über `lib.callback.await` auf dem Client aufgerufen werden.

**Syntax:**

```lua
local playerBucket = lib.callback.await("sns_utils:getCurrentBucketId", false)
```

  * **Rückgabe:** Die Routing Bucket ID (Zahl) des aktuellen Spielers.
