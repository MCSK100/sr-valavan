import { useEffect } from "react";

const SITE = "https://srvalavanenterprises.in";
const DEFAULT_OG_IMAGE = `${SITE}/srv-og.jpeg`;

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(prop: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", prop);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  path = "/",
  image,
  jsonLd,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: object;
}) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    setMetaByName("description", description);
    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:type", "website");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
    const ogImage = image || DEFAULT_OG_IMAGE;
    setMetaByProperty("og:image", ogImage);
    setMetaByName("twitter:image", ogImage);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, image]);

  useEffect(() => {
    if (!jsonLd) return;
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(s);
    return () => {
      s.remove();
    };
  }, [jsonLd]);

  return null;
}

export { SITE };
