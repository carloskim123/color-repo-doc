import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/carloskim123/color-repo-doc',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/carloskim123/color-repo-doc',
  footer: {
    text: 'Color Repo Kim',
  },
   useNextSeoProps() {
    return {
      titleTemplate: '%s – SWR'
    }
  },
   logo: (
    <>
      <div>🌚</div>
      <span style={{ marginLeft: '.4em', fontWeight: "normal" }}>
        Color Repo Kim
      </span>
    </>
  ),
  faviconGlyph: "🌚"
}

export default config
