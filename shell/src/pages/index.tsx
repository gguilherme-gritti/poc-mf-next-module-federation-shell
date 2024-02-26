import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("header/component/Header").then((m) => m.Header),
  {
    ssr: false,
  }
);

const Home = dynamic(
  () => import("home/screen/Home").then((m) => m.Home),
  {
    ssr: false,
  }
);

export default function Default() {
  return (
    <>
      <h1>Micro-frontends Polirepo Next JS </h1>
      <Header />
      <Home />
    </>
  );
}
