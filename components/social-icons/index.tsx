import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
} from "./icons";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
};

const brandColors: Record<string, string> = {
  mail: "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300",
  github: "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white",
  linkedin: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
  facebook: "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",
  youtube: "text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400",
  twitter: "text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300",
  x: "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white",
  mastodon: "text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
  threads: "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white",
  instagram: "text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300",
  medium: "text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white",
  bluesky: "text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300",
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === "mail" && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];
  const colorClass = brandColors[kind] || "text-gray-700 dark:text-gray-200";

  return (
    <a
      className="text-sm transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current transition h-${size} w-${size} ${colorClass}`}
      />
    </a>
  );
};

export default SocialIcon;
