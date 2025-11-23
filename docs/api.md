---
layout: doc
title: Dokumentation
---

# Docs

Willkommen auf der Docs Seite von `SAINTS & SINNERS`, hier stellen wir Dokumentation für unsere Systeme für die Gamedesign und Developement Abteilung.

Verwaltet wird das Developement sowie das Gamedesign von Ludwig 

<p style="color: #ff7340; border: 1px solid rgba(255, 135, 23, 0.25); border-radius:5px; padding: 1rem;">Im folgenden gibt´s code der zeigt wie hier dokumentiert wird:.</p>

```lua
exports("sns_utilsgetCurrentBucketId", function(playerSrc)
    local retval = GetPlayerRoutingBucket(playerSrc)
    return retval
end)
```

Falls du Dokumentationen schreiben willst kannst du dir das [hier](https://vitepress.vuejs.org/guide/markdown) durchlesen.

