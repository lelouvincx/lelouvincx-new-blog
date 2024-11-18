import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { GmailIcon } from "@components/icons";

const config: DocsThemeConfig = {
  logo: <span>lelouvincx's blog</span>,
  primaryHue: 160,
  primarySaturation: 50,
  project: {
    link: "https://github.com/lelouvincx/lelouvincx.github.io",
  },
  chat: {
    link: "mailto:dinhminhchinh3357@gmail.com",
  },
  docsRepositoryBase: "https://github.com/lelouvincx/lelouvincx.github.io",
  footer: {
    text: <span>MIT {new Date().getFullYear()} © lelouvincx .</span>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s | lelouvincx's blog",
      };
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: "Question? Give me feedback →",
    labels: "feedback",
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
};

export default config;
