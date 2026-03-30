import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const headerClass = [
    "flex items-center w-full bg-[#08080c]/80 backdrop-blur-xl justify-between py-5 px-2",
    siteMetadata.stickyNav ? "sticky top-0 z-50 border-b border-white/[0.04]" : "",
  ].join(" ").trim();

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div
          className="text-xl text-[#f0ece2] transition-colors duration-300 hover:text-[#e8b931]"
          style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        >
          {siteMetadata.headerTitle}
        </div>
      </Link>

      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-5 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="m-1 font-mono text-xs uppercase tracking-widest text-[#5a5a6a] transition-colors duration-300 hover:text-[#e8b931]"
              >
                {link.title}
              </Link>
            ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
