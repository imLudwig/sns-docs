---
layout: page
title: Roadmap
---

<script setup>
import { computed } from 'vue'

// 1. Definiere die Datenstruktur für die Roadmap
const roadmapItems = [
    { title: 'Dark Mode', status: 'In Arbeit', quarter: 'Q4 2025', description: 'Implementierung eines vollständigen Dark Mode für die gesamte Seite.' },
    { title: 'Navigation 2.0', status: 'Geplant', quarter: 'Q4 2025', description: 'Verbesserung der mobilen Navigation und der Desktop-Sidebar.' },
    { title: 'API Integration', status: 'Idee', quarter: 'Q1 2026', description: 'Anbindung an einen externen Service zur Datenvisualisierung.' },
    { title: 'Basis-Setup', status: 'Abgeschlossen', quarter: 'Q3 2025', description: 'Erstes Hosting und Grundkonfiguration der Site.' },
]

// 2. Erstelle eine berechnete Eigenschaft, um die Items nach Quartal zu gruppieren
const groupedRoadmap = computed(() => {
    const groups = {}
    roadmapItems.forEach(item => {
        if (!groups[item.quarter]) {
            groups[item.quarter] = []
        }
        groups[item.quarter].push(item)
    })
    return groups
})

// 3. Optional: Eine Funktion, um den Status visuell hervorzuheben
const getStatusClass = (status) => {
    switch(status) {
        case 'Abgeschlossen': return 'status-completed'
        case 'In Arbeit': return 'status-wip'
        default: return 'status-planned'
    }
}
</script>

# 🛣️ Projekt-Roadmap

<div v-for="(items, quarter) in groupedRoadmap" :key="quarter" style="margin-bottom: 24px;">
    <h2>{{ quarter }}</h2>
    <ul style="list-style: none; padding-left: 0;">
        <li v-for="item in items" :key="item.title" style="border-left: 3px solid var(--vp-c-brand-1); padding-left: 10px; margin-bottom: 8px;">
            <strong :class="getStatusClass(item.status)">[{{ item.status }}]</strong> 
            **{{ item.title }}**
            <p style="margin: 0; font-size: 0.9em; color: var(--vp-c-text-2);">{{ item.description }}</p>
        </li>
    </ul>
</div>

<style>
/* Fügen Sie hier etwas einfaches Styling hinzu, um die Statusfarben zu definieren */
.status-completed { color: var(--vp-c-green-1); }
.status-wip { color: var(--vp-c-yellow-1); }
.status-planned, .status-idea { color: var(--vp-c-brand-1); }
</style>
