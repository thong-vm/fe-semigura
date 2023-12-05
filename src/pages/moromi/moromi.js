import Bmd from "./bmd/bmd";
import MoromiGeneral from "./moromi-general/moromi-general";

function Moromi() {
  return (
    <div>
      <h1>Moromi General</h1>
      <MoromiGeneral />
      <h1> BMD</h1>
      <Bmd />
    </div>
  );
}

export default Moromi;
