import { Flex, Meta, Schema } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Galeria — IT’S FRACTAL",
    description:
      "Galeria realizacji IT’S FRACTAL: PPF, detailing, tuning i carbon. Zobacz projekty, detale i efekt końcowy.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("IT’S FRACTAL — Galeria")}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Galeria — IT’S FRACTAL"
        description="Galeria realizacji IT’S FRACTAL: PPF, detailing, tuning i carbon. Zobacz projekty, detale i efekt końcowy."
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent("IT’S FRACTAL — Galeria")}`}
        author={{
          name: "IT’S FRACTAL",
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
