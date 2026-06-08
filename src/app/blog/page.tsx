import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Poradniki — DEWORA Digital",
    description:
      "Strony internetowe, marketing, SEO, social media, branding, AI oraz praktyczne poradniki pomagające rozwijać biznes online.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("DEWORA Digital — Poradniki")}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title="Poradniki — DEWORA Digital"
        description="Strony internetowe, marketing, SEO, social media, branding, AI oraz praktyczne poradniki pomagające rozwijać biznes online."
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent("DEWORA Digital — Poradniki")}`}
        author={{
          name: "DEWORA Digital",
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        Poradniki i inspiracje
      </Heading>

      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />

        <Mailchimp marginBottom="l" />

        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Starsze artykuły
        </Heading>

        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
