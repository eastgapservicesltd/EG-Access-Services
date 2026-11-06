import { site } from "../../data/site";

// React 19 hoists <title>/<meta>/<link> into <head>.
export function Seo({ title, description, path = "" }: { title: string; description: string; path?: string }) {
  const full = title === site.name ? title : `${title} | ${site.shortName}`;
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${site.url}${path}`} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site.url}${path}`} />
    </>
  );
}
