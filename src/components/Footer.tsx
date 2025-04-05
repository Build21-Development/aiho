"use client";

import {
  DISCORD_LINK,
  FIGMA_LINK,
  GITHUB_LINK,
  ONCHAINKIT_LINK,
  TWITTER_LINK,
} from "../links";
import ArrowSvg from "../svg/ArrowSvg";

const docLinks = [
  { href: ONCHAINKIT_LINK, title: "Docs" },
  { href: GITHUB_LINK, title: "Github" },
  { href: DISCORD_LINK, title: "Discord" },
  { href: FIGMA_LINK, title: "Figma" },
  { href: TWITTER_LINK, title: "X" },
];

export default function Footer() {
  return (
    <section className="mt-auto mb-6 pb-6 flex w-full flex-col justify-center gap-2 md:mt-8 md:mb-6 md:flex-row">
      <aside className="flex items-center pt-2 md:pt-0">
        <h3 className="mr-2 mb-2 text-m md:mb-0">
          Built with love by{" "}
          <a
            href="https://build21.io/en"
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
            className="font-semibold hover:text-indigo-600"
          >
            Build21{" "}
          </a>
          &{" "}
          <a
            href="https://ratio1.ai/"
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
            className="font-semibold hover:text-indigo-600"
          >
            Ratio1{" "}
          </a>
          Using the{" "}
          <a
            href="https://github.com/Ratio1"
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
            className="font-semibold hover:text-indigo-600"
          >
            Ratio1 Protocol{" "}
          </a>
          &{" "}
          <a
            href={ONCHAINKIT_LINK}
            target="_blank"
            rel="noreferrer"
            title="OnchainKit"
            className="font-semibold hover:text-indigo-600"
          >
            OnchainKit{" "}
          </a>
        </h3>
      </aside>
    </section>
  );
}
