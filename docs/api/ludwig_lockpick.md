# `ludwig_lockpick` - API

## 1. Kurzbeschreibung

Das `ludwig_lockpick`-Skript verwaltet den gesamten Dietrich-Vorgang, von der Voraussetzungsprüfung über das interaktive NUI-Minispiel bis zur Anwendung von Konsequenzen (z.B. Verletzungen bei Misserfolg).

<p style="color: #ff7340; border: 1px solid rgba(255, 135, 23, 0.25); border-radius:5px; padding: 1rem;">Wichtig: Die notwendige Überprüfung des Werkzeugbesitzes sowie die Abfrage des Spieler-Fähigkeitswerts (`ludwig_skillz`) werden vollständig intern durch dieses Skript durchgeführt und müssen nicht vor dem Aufruf in Ihrem Skript geprüft werden. <br> <br>
Auch das setzen von Merkmalen sowie einer Szene wird automatisch von ludwig_lockpick selbst übernommen !</p>


## 2. Externe API-Referenz (Nutzung durch andere Skripte)

Die einzige Methode zur Integration der Dietrich-Funktionalität in andere Skripte ist der client-seitig exportierte Aufruf:

### `StartLockpickMinigame`

Diese Funktion startet den gesamten Dietrich-Vorgang (Voraussetzung, Animation, Minispiel) und verarbeitet das Ergebnis.

| Parameter | Typ | Beschreibung |
| :--- | :--- | :--- |
| `difficultyMultiplyer` | `number` | **Schwierigkeits-Multiplikator.** Ein Wert, der die Basis-Schwierigkeit des Minispiels skaliert. Höhere Werte (z.B. `1.3`) erhöhen die Herausforderung. häufige werte: `0.5`, `0.9`, `1`, `1.3` |
| `callback` | `function` | **Callback-Funktion.** Eine erforderliche Funktion, die nach dem Ende des Minispiels (Erfolg oder Misserfolg) aufgerufen wird. |

### 2.1. Rückgabewert und Callback-Signatur

Die Funktion `StartLockpickMinigame` gibt das Ergebnis asynchron über die bereitgestellte `callback`-Funktion zurück.

```lua
function(erfolg)
    -- 'erfolg' (success) ist ein boolescher Wert:
    -- 'true', wenn das Minispiel erfolgreich war.
    -- 'false', wenn der Dietrich-Versuch fehlschlug.
end
````

### 2.2. Anwendungsbeispiel

Das folgende Beispiel zeigt die korrekte Nutzung der Export-Funktion, um eine logische Aktion (z.B. das Öffnen eines Stashes) basierend auf dem Ergebnis des Dietrich-Versuchs durchzuführen:

```lua
local schwierigkeit = 1.3 -- Definiert die Schwierigkeit für diesen Versuch

exports['ludwig_lockpick']:StartLockpickMinigame(schwierigkeit, function(erfolg)
    if erfolg then
        -- Erfolgreich: Führen Sie die gewünschte Aktion aus
        print("Erfolgreich")
    else
        -- Fehlgeschlagen: Die internen Konsequenzen (z.B. Hinzufügen von Merkmalen,
        -- das Setzen von "Einbruchsspuren") werden automatisch von ludwig_lockpick
        -- verarbeitet. Hier können Sie zusätzliche Logik einfügen.
        print("Einbruchsversuch fehlgeschlagen")
    end
end)
```
