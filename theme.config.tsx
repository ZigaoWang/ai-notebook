import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AIGC 设计创意新未来</span>,
  project: {
    link: 'https://github.com/ZigaoWang/aigc',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/ZigaoWang/aigc',
  footer: {
      <p className="_text-sm">
        <Link href={"https://creativecommons.org/licenses/by-sa/4.0/"}>
          CC BY-SA 4.0{" "}
        </Link>
        © {new Date().getFullYear()} Zigao Wang
      </p>
  },
}

export default config
