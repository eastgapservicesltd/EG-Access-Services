import { img, site } from "../../data/site";

type Props = {
  title: string;
  description: string;
  path?: string;
  /** Use `title` as-is instead of appending " | EG Access". */
  fullTitle?: boolean;
  image?: string;
  noindex?: boolean;
};

const defaultImage = img("1756341782434-3020b9d17372", 1200);

// React 19 hoists <title>/<meta>/<link> into <head>; the build-time prerender writes them into each page's HTML.
export function Seo({ title, description, path = "", fullTitle = false, image = defaultImage, noindex = false }: Props) {
  const full = fullTitle ? title : `${title} | ${site.shortName}`;
  const url = `${site.url}${path}`;
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      <meta property="og:site_name" content={site.shortName} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
