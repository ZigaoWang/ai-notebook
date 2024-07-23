import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
      <div className={"flex flex-row items-center justify-center gap-1.5"}>
        <Image
            src={"https://assets.zigao.wang/img/AIGC-logo.png"}
            alt={"Logo"}
            width={512}
            height={512}
            className={"h-6 w-6 -translate-y-[1px]"}
        />
        <span className={"text-lg font-bold"}>Zigao 的 AI 笔记本</span>
      </div>
  ),
  project: {
    link: 'https://github.com/ZigaoWang/ai-notebook',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/ZigaoWang/ai-notebook',
  footer: {
    text: 'Zigao 的 AI 笔记本',
  },
}

export default config
