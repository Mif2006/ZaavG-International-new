export const SITE = "https://www.zaavgbali.com";

/** Shared head() factory: title, description, OG tags + canonical for any page. */
export function pageHead(path: string, title: string, description: string) {
  const url = `${SITE}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}