import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { RingMark } from "../components/ui/RingMark";
import { Seo } from "../components/ui/Seo";

export default function NotFound() {
  return (
    <section className="bg-navy-800 text-white">
      <Seo title="Page not found" description="The page you were looking for doesn't exist." noindex />
      <Container className="flex flex-col items-start gap-8 py-24 sm:py-32 md:flex-row md:items-center">
        <RingMark className="size-32 shrink-0" />
        <div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">This page doesn't exist</h1>
          <p className="mt-4 max-w-lg text-lg text-navy-200">
            The link may be old or mistyped. Start from the home page, or go straight to the service you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/">Go to home page</Button>
            <Button to="/locksmith" variant="outline-light">Locksmith services</Button>
            <Button to="/garage-doors" variant="outline-light">Garage door services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
