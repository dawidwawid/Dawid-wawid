import { Flex, Meta, Schema } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Galeria — DEWORA Digital",
    description:
      "Galeria projektów DEWORA Digital: strony internetowe, branding, identyfikacje wizualne, marketing, social media i rozwiązania cyfrowe.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("DEWORA Digital — Galeria")}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Galeria — DEWORA Digital"
        description="Galeria projektów DEWORA Digital: strony internetowe, branding, identyfikacje wizualne, marketing, social media i rozwiązania cyfrowe."
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent("DEWORA Digital — Galeria")}`}
        author={{
          name: "DEWORA Digital",
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <GalleryView />
    </Flex>
  );
}
