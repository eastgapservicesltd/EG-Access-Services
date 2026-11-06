import { AreasList } from "../components/sections/AreasList";
import { CtaBanner } from "../components/sections/CtaBanner";
import { PageHero } from "../components/sections/PageHero";
import { Seo } from "../components/ui/Seo";
import { allPlaces } from "../data/areas";
import { site } from "../data/site";

export default function ServiceAreas() {
  return (
    <>
      <Seo
        title="Service areas"
        description={`Locksmith and garage door service in ${allPlaces.slice(0, 8).join(", ")} and across the GTA.`}
        path="/service-areas"
      />
      <PageHero
        title="Service areas"
        lead={`We cover the Greater Toronto Area with technicians on the road every day. Don't see your town? Call ${site.phone}, as we often travel further for scheduled work.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "Service areas" }]}
      />
      <AreasList showLink={false} />
      <CtaBanner />
    </>
  );
}
