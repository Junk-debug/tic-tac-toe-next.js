import { Header } from "../components/header";
import { Game } from "../components/game-new";

const HomePageLayout = ({ header, children }) => (
  <div className="bg-slate-50 min-h-screen">
    {header}
    <main className="pt-6 w-max mx-auto">{children}</main>
  </div>
);

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}
