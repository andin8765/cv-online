import Hero from "./components/hero";
import RiwayatPendidikan from "./components/RiwayatPendidikan";
import RiwayatPekerjaan from "./components/RiwayatPekerjaan";
import FavColor from "./components/favColor";
import "./din-style.css";

export default function MyApp(){
  return(
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <FavColor />
      </section>
  );
}

