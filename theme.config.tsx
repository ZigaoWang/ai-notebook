import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: (
      <div className="flex items-center gap-2">
        <Image
            src="https://assets.zigao.wang/img/AIGC-logo.png"
            alt="Logo"
            width={24}  // Adjusted width
            height={24} // Adjusted height
            className="object-contain" // Ensures the image scales properly
        />
        <span className="text-lg font-bold">Zigao 的 AI 笔记本</span>
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