import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
export async function generateMetadata() {
  return Meta.generate({
    title: "Realizacje — DEWORA Digital",
    description:
      "Wybrane realizacje DEWORA Digital: strony internetowe, sklepy online, branding, SEO, marketing oraz rozwiązania AI dla firm.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("DEWORA Digital — Realizacje")}`,
    path: work.path,
  });
}
export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title="Realizacje — DEWORA Digital"
        description="Wybrane realizacje DEWORA Digital: strony internetowe, sklepy online, branding, SEO, marketing oraz rozwiązania AI dla firm."
        image={`/api/og/generate?title=${encodeURIComponent("DEWORA Digital — Realizacje")}`}
        author={{
          name: "DEWORA Digital",
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" align="center" gap="12" paddingBottom="24">
        <Text variant="label-default-s" onBackground="brand-weak">
          PORTFOLIO
        </Text>
        <Heading as="h1" variant="display-strong-l" align="center" wrap="balance">
          Realizacje DEWORA Digital
        </Heading>
        <Text
          variant="heading-default-m"
          onBackground="neutral-weak"
          align="center"
          wrap="balance"
        >
          Projekty stron internetowych, platform, landing page’y i rozwiązań cyfrowych
          zaprojektowane dla firm, które chcą wyglądać profesjonalnie i zdobywać klientów online.
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}
