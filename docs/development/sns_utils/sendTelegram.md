# ✉️ Telegramm-Versenden: `sns_utils:sendTelegrammToChar`

Diese Dienstprogrammfunktion wird verwendet, um eine **„Telegramm“**-Nachricht direkt an einen Charakter im Spiel zu senden, indem die Nachrichtendetails in die Datenbank eingefügt werden.

Sie wird über einen **standardmäßigen Lua-Ereignismechanismus** ausgelöst, typischerweise auf der Serverseite.

---

### Voraussetzungen

**Wichtiger Hinweis:** Vor dem Senden **muss** die `charId` des Empfängers mit einem `telegram_id`-Eintrag in der Datenbanktabelle `visn_telegram_characters` verknüpft sein, damit die Nachricht korrekt zugestellt werden kann. **Wenn keine TelegrammId vorhanden ist, wird das Telegramm nicht gesendet.**

---

### Ereignis-Details

Die Funktion wird über `TriggerEvent` aufgerufen und akzeptiert ein einzelnes **Tabellenobjekt**, das alle Telegramm-Details enthält.

| Schlüssel | Typ | Beschreibung |
| :--- | :--- | :--- |
| `charId` | `number` | Die Charakter-ID des Empfängers. |
| `message` | `string` | Der Hauptinhalt/Text des Telegramms. Unterstützt Zeilenumbruchzeichen (`\n`). |
| `title` | `string` | Der Betreff oder Titel des Telegramms. |
| `sender_name` | `string` | Der Name, der als Absender angezeigt wird (z. B. "Postamt"). |
| `sender_location` | `string` | Der spezifische Ort, von dem das Telegramm gesendet wurde (z. B. "Saint Denis"). |
| `sender_area` | `string` | Das größere geografische Gebiet, aus dem das Telegramm gesendet wurde (z. B. "Lemoyne"). |

---

### Beispiel-Nutzung (Lua)

Dieses Beispiel zeigt, wie die Datentabelle erstellt und das Ereignis ausgelöst wird, um ein Telegramm über eine Bankeinzahlung an einen Charakter mit der `charId` `12345` zu senden.

```lua
local function sendeKontoauszug(empfaengerCharId)
    local telegrammInfo = {
        -- Die Charakter-ID des Empfängers
        charId = empfaengerCharId, 

        -- Betreffzeile
        title = 'Dringende Einzahlungsbenachrichtigung', 
        
        -- Nachrichtentext (verwenden Sie \n für Zeilenumbrüche)
        message = 'Eine Einzahlung von $500 wurde erfolgreich auf Ihrem Konto verarbeitet.\nVielen Dank für Ihr Geschäft.', 
        
        -- Absenderdetails
        sender_name = 'Hope Valley Bank',
        sender_location = 'Saint Denis',
        sender_area = "Lemoyne"
    }

    -- Löst das Ereignis mit der zusammengestellten Informationstabelle aus
    TriggerEvent("sns_utils:sendTelegrammToChar", telegrammInfo)
end

-- Beispiel-Aufruf zum Senden des Telegramms
sendeKontoauszug(12345)
