import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: "Realizacje — IT’S FRACTAL",
    description:
      "Realizacje IT’S FRACTAL: PPF, detailing, tuning i carbon. Zobacz projekty, proces i finalny efekt.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("IT’S FRACTAL — Realizacje")}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title="Realizacje — IT’S FRACTAL"
        description="Realizacje IT’S FRACTAL: PPF, detailing, tuning i carbon. Zobacz projekty, proces i finalny efekt."
        image={`/api/og/generate?title=${encodeURIComponent("IT’S FRACTAL — Realizacje")}`}
        author={{
          name: "IT’S FRACTAL",
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        Realizacje
      </Heading>
      <Projects />
    </Column>
  );
}
