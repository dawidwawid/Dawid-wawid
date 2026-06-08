import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
export async function generateMetadata() {
  return Meta.generate({
    title: "DEWORA Digital — Strony Internetowe, Marketing i AI",
    description:
      "Tworzymy nowoczesne strony internetowe, sklepy online, branding, SEO, social media oraz rozwiązania AI dla firm, które chcą rozwijać biznes w internecie.",
    baseURL: baseURL,
    path: "/",
    image: `/api/og/generate?title=${encodeURIComponent("DEWORA Digital")}`,
  });
}
export default function Home() {
  const homeTitle = "DEWORA Digital — Strony Internetowe, Marketing i AI";
  const homeDescription =
    "Tworzymy nowoczesne strony internetowe, sklepy online, branding, SEO, social media oraz rozwiązania AI dla firm, które chcą rozwijać biznes w internecie.";
  const homePath = "/";
  const homeImage = `/api/og/generate?title=${encodeURIComponent("DEWORA Digital")}`;
  const featured = {
    display: true,
    title: "Nowe: Strony WWW • Marketing • SEO • AI dla lokalnych firm",
    href: "/work",
  };
  const headline = "DEWORA Digital";
  const subline =
    "Tworzymy nowoczesne strony internetowe, sklepy online i rozwiązania cyfrowe, które pomagają firmom zdobywać klientów i rozwijać biznes w internecie.";
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={homePath}
        title={homeTitle}
        description={homeDescription}
        image={homeImage}
        author={{
          name: "DEWORA Digital",
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={featured.href}
              >
                <Row paddingY="2">{featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                Poznaj DEWORA Digital
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6} fillWidth>
        <Column fillWidth gap="24" paddingY="32">
          <Column horizontal="center" align="center" gap="8">
            <Heading as="h2" variant="display-strong-xs" align="center">
              Wybierz pakiet dla swojej firmy
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Proste pakiety startowe dla firm, które chcą profesjonalnie wejść do internetu.
            </Text>
          </Column>
          <Row fillWidth gap="16" s={{ direction: "column" }}>
            <Column flex={1} padding="24" gap="16" border="neutral-alpha-medium" radius="l">
              <Heading as="h3" variant="heading-strong-l">
                START
              </Heading>
              <Text onBackground="neutral-weak">
                Dla małych firm i osób rozpoczynających działalność.
              </Text>
              <Heading as="p" variant="display-strong-xs">
                od 2 500 zł
              </Heading>
              <Column gap="8">
                <Text>Strona One Page</Text>
                <Text>Responsywność</Text>
                <Text>Formularz kontaktowy</Text>
                <Text>Podstawowe SEO</Text>
              </Column>
              <Button href="mailto:home@dewora.pl" variant="secondary">
                Zamów wycenę
              </Button>
            </Column>
            <Column flex={1} padding="24" gap="16" border="brand-alpha-medium" radius="l">
              <Badge background="brand-alpha-weak">Najczęściej wybierany</Badge>
              <Heading as="h3" variant="heading-strong-l">
                BUSINESS
              </Heading>
              <Text onBackground="neutral-weak">
                Dla firm, które potrzebują rozbudowanej strony i lepszej widoczności.
              </Text>
              <Heading as="p" variant="display-strong-xs">
                od 4 500 zł
              </Heading>
              <Column gap="8">
                <Text>Strona wielostronicowa</Text>
                <Text>Indywidualny projekt</Text>
                <Text>Optymalizacja SEO</Text>
                <Text>Formularze i integracje</Text>
              </Column>
              <Button href="mailto:home@dewora.pl" variant="primary">
                Zamów wycenę
              </Button>
            </Column>
            <Column flex={1} padding="24" gap="16" border="neutral-alpha-medium" radius="l">
              <Heading as="h3" variant="heading-strong-l">
                PREMIUM
              </Heading>
              <Text onBackground="neutral-weak">
                Dla marek, które chcą mocnej strony, strategii i dalszego rozwoju online.
              </Text>
              <Heading as="p" variant="display-strong-xs">
                od 7 500 zł
              </Heading>
              <Column gap="8">
                <Text>Strategia UX/UI</Text>
                <Text>Zaawansowane SEO</Text>
                <Text>Landing pages</Text>
                <Text>AI i automatyzacje</Text>
              </Column>
              <Button href="mailto:home@dewora.pl" variant="secondary">
                Umów konsultację
              </Button>
            </Column>
          </Row>
        </Column>
      </RevealFx>
      <Column fillWidth gap="24">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Column fillWidth gap="24" horizontal="center">
          <Heading as="h2" variant="display-strong-xs" align="center">
            Wybrane realizacje
          </Heading>
          <Projects />
        </Column>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Poradniki i inspiracje
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Mailchimp />
    </Column>
  );
}
