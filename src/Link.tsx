export function Link({
  href,
  children,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
} & React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className="underline hover:text-blue-800"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
