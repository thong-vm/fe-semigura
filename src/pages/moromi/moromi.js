import Bmd from "./bmd/bmd";
import Ekisu from "./ekisu/ekisu";
import MoromiGeneral from "./moromi-general/moromi-general";

function Moromi() {
  return (
    <div>
      <h1>Moromi General</h1>
      <MoromiGeneral />
      <h1> BMD</h1>
      <Bmd />
      <h1>Ekisu</h1>
      <Ekisu />
    </div>
  );
}

export default Moromi;
