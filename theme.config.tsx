import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
            src="https://assets.zigao.wang/img/AIGC-logo.png"
            alt="Logo"
            width={30}
            height={30}
            style={{ objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Zigao 的 AI 笔记本</span>
      </div>
  ),
  project: {
    link: 'https://github.com/ZigaoWang/ai-notebook',
  },
  docsRepositoryBase: 'https://github.com/ZigaoWang/ai-notebook',
  footer: {
    text: 'Zigao 的 AI 笔记本',
  },
}

export default config