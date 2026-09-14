import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        The page you’re looking for isn’t here. My work, journey, and contact
        details are all on the homepage.
      </p>
      <Link href="/" className="button-primary">
        Back to the portfolio <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
