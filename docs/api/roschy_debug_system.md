# Roschy Debug System

Dieses System bietet erweiterte Logging-Funktionen für die Entwicklung. Es automatisiert die Ausgabe von Dateipfaden und Zeilennummern, um das Debugging innerhalb der FiveM-Umgebung zu beschleunigen.

## 1. Installation & Integration

Um das System in einem Script zu nutzen, muss die `main.lua` als **Shared Script** (also Client und Server) in der `fxmanifest.lua` eingebunden werden.

```lua
shared_scripts {
    '@roschy_debug_system/main.lua'
}
```

> [!IMPORTANT]
> Ohne die Definition von `Config.Debug` funktionieren die spezialisierten Debug-Prints nicht korrekt.

---

## 2. Verfügbare Funktionen

Das System stellt drei globale Funktionen zur Verfügung, die das Standard-`print()` ersetzen oder ergänzen.

### `Print(text)`

Ein Standard-Log, der zusätzlich Metadaten liefert.

* **Zusatzinfo:** Zeigt automatisch den **Dateipfad** und die genaue **Zeilennummer** an, in der die Funktion aufgerufen wurde.

### `DebugPrint(text)`

Ein bedingter Log für die Entwicklungsphase.

* **Verhalten:** Identisch mit `Print`, jedoch wird die Nachricht **nur ausgegeben**, wenn `Config.Debug = true` gesetzt ist.
* **Nutzen:** Verhindert das "Spammen" der Konsole auf Live-Servern, ohne die Debug-Befehle im Code löschen zu müssen.

### `WarnPrint(text)`

Ein optisch hervorgehobener Log für Fehler oder wichtige Hinweise.

* **Verhalten:** Identisch mit `Print`, aber die Ausgabe erfolgt in **roter Farbe**.
* **Zusatzinfo:** Enthält ebenfalls Dateipfad und Zeile.

---

## 4. Anwendungsbeispiel

```lua
-- In deiner Config.lua
Config.Debug = true

-- In deinem Script
Print("Das Script wurde geladen.") 
-- [script:ludwig_crafti] [ludwig_crafting] @ludwig_crafting/server/sfreecraft.lua:129 (fn) Das Script wurde geladen.

DebugPrint("Diese Info siehst du nur im Debug-Modus!") 
-- Output (wenn Config.Debug true): [script:ludwig_crafti] [ludwig_crafting] @ludwig_crafting/server/sfreecraft.lua:132 (fn) Diese Info siehst du nur im Debug-Modus!

if not SomeVariable then
    WarnPrint("Warnung: Variable ist nil!")
end
-- Output (in rot): @ludwig_crafting/server/sfreecraft.lua:136 (fn) Warnung: Variable ist nil!

```

