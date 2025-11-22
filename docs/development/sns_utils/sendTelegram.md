# Telegram Utility Usage: `sns_utils:sendTelegrammToChar`

This utility function is used to send an in-game "telegram" message directly to a character by inserting the message details into the database.

It is triggered via a standard Lua event mechanism, typically on the server-side.

### Prerequisites

**Crucial Note:** Before sending, the recipient's `charId` **must** be linked to a `telegram_id` entry in the `visn_telegram_characters` database table for the message to be delivered correctly. If there is no TelegrammId the Telegramm won´t be sent.

### Event Details

The function is called via `TriggerEvent` and accepts a single table object containing all the telegram details.

| Key | Type | Description |
| :--- | :--- | :--- |
| `charId` | `number` | The character ID of the recipient. |
| `message` | `string` | The main content/body of the telegram. Supports newline characters (`\n`). |
| `title` | `string` | The subject or title of the telegram. |
| `sender_name` | `string` | The name displayed as the sender (e.g., "Post Office"). |
| `sender_location` | `string` | The specific location the telegram was sent from (e.g., "Saint Denis"). |
| `sender_area` | `string` | The broader geographical area the telegram was sent from (e.g., "Lemoyne"). |

### Example Usage (Lua)

This example demonstrates how to construct the data table and trigger the event to send a telegram about a bank deposit to a character with `charId` `12345`.

```lua
local function sendBankStatement(recipientCharId)
    local telegrammInfo = {
        -- The recipient's character ID
        charId = recipientCharId, 

        -- Subject line
        title = 'Urgent Deposit Notification', 
        
        -- Message body (use \n for line breaks)
        message = 'A deposit of $500 was successfully processed to your account.\nThank you for your business.', 
        
        -- Sender details
        sender_name = 'Hope Valley Bank',
        sender_location = 'Saint Denis',
        sender_area = "Lemoyne"
    }

    -- Trigger the event with the compiled information table
    TriggerEvent("sns_utils:sendTelegrammToChar", telegrammInfo)
end

-- Example call to send the telegram
sendBankStatement(12345)
