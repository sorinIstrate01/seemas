import PlatformSubnav from "../platform-subnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PlatformSubnav />
      {children}
    </>
  );
}
