# 🚨 Map Alerts System Dokumentation

Dieses Skript implementiert ein serverseitiges System zur Auslösung von **Alarmen/Benachrichtigungen** auf der Karte für bestimmte Spieler. Es beinhaltet eine Funktion zur Protokollierung dieser Alarme über einen **Discord Webhook** mit detaillierten Spieler- und Positionsinformationen.

-----

## ⚙️ Konfiguration

Die Konfiguration erfolgt über die lokalen Variablen am Anfang des Skripts.

  * `standardLabel`: Standard-Titel für den Alarm.
  * `standardMessage`: Standard-Nachricht für den Alarm.
  * `standardDuration`: Standard-Dauer des Karten-Blips in Sekunden.
  * `standardRadius`: Standard-Radius, in dem Spieler sich befinden müssen, um den Alarm zu erhalten (wenn keine `serverId` angegeben ist).
  * `standardAlertRadius`: Standard-Radius für die **zufällige Blip-Positionierung** auf der Karte.
  * `Debug`: Wenn auf `true` gesetzt, werden zusätzliche Debug-Meldungen in der Server-Konsole ausgegeben.
  * `Webhook`: Konfiguration für den Discord-Webhook. **Passen Sie die `url` an** oder lassen Sie sie leer, um die Discord-Protokollierung zu deaktivieren.

-----

## 🎯 Nutzung (Events)

Die Hauptfunktionalität wird über das serverseitige Event `sns-utils:triggerMapAlert` ausgelöst.

### Payload (Datenstruktur)

Das Event erwartet ein `data`-Objekt (eine Lua-Tabelle) mit den folgenden Parametern:

| Parameter | Typ | Optional | Standardwert | Beschreibung |
| :--- | :--- | :--- | :--- | :--- |
| **`coords`** | `vector3` | Nein | - | Die zentralen Koordinaten des Alarmereignisses. |
| `jobs` | `table` | Ja | - | Eine Liste von Job-Namen, an die der Alarm gesendet werden soll (z.B. `{ "police", "medic" }`). Wird ignoriert, wenn `serverId` verwendet wird. |
| `serverId` | `number` | Ja | - | Wenn gesetzt, wird der Alarm **nur** an diesen spezifischen Spieler gesendet (überschreibt `jobs` und `radius`). |
| `label` | `string` | Ja | `"Alarm !"` | Der Titel des Alarms/Blips. |
| `message` | `string` | Ja | `"Ein Alarm wurde ausgelöst !"` | Die Benachrichtigungsnachricht. |
| `duration` | `number` | Ja | `60` | Dauer des Karten-Blips in Sekunden. |
| `color` | `string` | Ja | `yellow` | Farbe des Karten-Blips, verfügbar:  "red", "yellow", "blue", "green", "cyan", "white", "black", "pink", "purple" |
| `radius` | `number` | Ja | `200` | Maximaler Radius um die `coords`, in dem sich Spieler mit passenden `jobs` befinden müssen, um den Alarm zu erhalten. |
| `ignoreRadius` | `boolean` | Ja | `false` | Wenn `true`, wird die Radius-Prüfung ignoriert (Spieler mit passendem Job erhalten Alarm überall). |
| `alertRadius` | `number` | Ja | `64` | Der Radius, innerhalb dessen der Karten-Blip **zufällig** platziert wird, um die genaue Position zu verschleiern. |
| `sprite` | `string` | Ja | `"blip_mp_gun_for_hire"` | Name des Blip-Symbols. Unterstützt Aliase: `"question"`, `"exclamation"`, `"fire"`, `"lightning"`. |

### Beispiel-Nutzung (Server- und Client-Seite)

#### Server-Nutzung (via `TriggerEvent`):

```lua
-- TriggerEvent für Server-interne Nutzung
local payload = {
    coords = vector3(2618.7656, -1297.9266, 52.1914),
    jobs = { "police", "sheriff" }, 
    label = "Bankraub Alarm",
    message = "Ein Bankraub wurde in Valentine gemeldet!",
    duration = 120,
    color = "red",
    alertRadius = 80
}

TriggerEvent('sns-utils:triggerMapAlert', payload)
```

#### Client-Nutzung (via `TriggerServerEvent`):

```lua
-- TriggerServerEvent für Client-seitige Auslösung
local payload = {
    -- Coords sollten vom Client gesendet werden, z.B. die Position des Spielers
    coords = GetEntityCoords(PlayerPedId()),
    jobs = { "police" }, 
    label = "Notfall-Taste gedrückt", 
    message = "Ich brauche Unterstützung!",
    duration = 45,
    color = "yellow",
    alertRadius = 50
}

TriggerServerEvent('sns-utils:triggerMapAlert', payload)
```

-----

> **Wichtig:** Die Discord-Protokollierung wird übersprungen, wenn das Skript im **DEV**-Modus läuft (`cleanName` enthält "development") und die Variable `Debug` auf `false` gesetzt ist.
