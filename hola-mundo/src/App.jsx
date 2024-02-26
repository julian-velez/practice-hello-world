import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="kikobeats">Kikobeats</TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="pheralb">pablo heraldo</TwitterFollowCard>
    </section>
  );
}
