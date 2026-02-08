import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Poradniki — IT’S FRACTAL",
    description:
      "Poradniki i realizacje IT’S FRACTAL: PPF, detailing, tuning i carbon. Konkretne case studies, procesy i wskazówki premium.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("IT’S FRACTAL — Poradniki")}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title="Poradniki — IT’S FRACTAL"
        description="Poradniki i realizacje IT’S FRACTAL: PPF, detailing, tuning i carbon. Konkretne case studies, procesy i wskazówki premium."
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent("IT’S FRACTAL — Poradniki")}`}
        author={{
          name: "IT’S FRACTAL",
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        Poradniki i realizacje
      </Heading>

      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />

        <Mailchimp marginBottom="l" />

        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Starsze wpisy
        </Heading>

        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
