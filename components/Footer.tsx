import Link from "./Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.04] pb-8 pt-8">
      <div className="flex flex-col items-center gap-5">
        <div className="flex space-x-5">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
        </div>
        <div className="flex items-center space-x-2 font-mono text-xs text-[#5a5a6a]">
          <span>{siteMetadata.author}</span>
          <span className="text-[#e8b931]/30">&middot;</span>
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="text-[#e8b931]/30">&middot;</span>
          <Link href="/" className="transition-colors duration-300 hover:text-[#e8b931]">
            {siteMetadata.title}
          </Link>
        </div>
      </div>
    </footer>
  );
}
