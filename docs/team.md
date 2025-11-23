---
layout: page
title: Team
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
   
        {
        avatar: 'https://avatars.githubusercontent.com/u/184827756?v=4',
        name: 'Ludwig',
        title: 'Head-Developer',
        links: [
            { icon: 'github', link: 'https://github.com/imLudwig' },
        ]
    },
     {
        avatar: 'https://avatars.githubusercontent.com/u/147651367?v=4',
        name: 'Dusk',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/StarBoyDusk' },
        ]
    },
     {
        avatar: 'https://avatars.githubusercontent.com/u/10331752?v=4',
        name: 'Roschy',
        title: 'Developer & Mentor',
        links: [
            { icon: 'github', link: 'https://github.com/JulianLegler' },
        ]
    },
   {
        avatar: 'https://avatars.githubusercontent.com/u/69167497?v=4',
        name: 'Lucas',
        title: 'Möchtegern-Developer',
        links: [
            { icon: 'github', link: 'https://github.com/jackdawxs' },
        ]
    }
]

const specialThanks = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/76929464?v=4',
        name: 'gamingApple',
        title: 'Systemadministrator',
        links: [
            { icon: 'github', link: 'https://github.com/gamingapple' },
        ]
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/10902965?v=4',
        name: 'Bytesizd',
        title: 'Ersteller des Docs-Boilerplat',
        links: [
            { icon: 'github', link: 'https://github.com/AndrewR3K' },
        ]
    }
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Unser Team</template>
    <template #lead>Lerne das technische Rückrad des Projektes kennen.</template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Developer</template>
    <template #members>
     <VPTeamMembers size="medium" :members="developers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Danksagungen</template>
    <template #members>
     <VPTeamMembers size="medium" :members="specialThanks" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
