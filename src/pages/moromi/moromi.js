import Arukoru from "./arukoru/arukoru";
import Bmd from "./bmd/bmd";
import Ekisu from "./ekisu/ekisu";
import MoromiGeneral from "./moromiGeneral/moromiGeneral";
import PrepareMoromi from "./prepareMoromi/prepareMoromi";

function Moromi() {
  return (
    <div>
      <h1>Prepare Moromi</h1>
      <PrepareMoromi />
      <h1>Moromi General</h1>
      <MoromiGeneral />
      <h1> BMD</h1>
      <Bmd />
      <h1> Alcohol</h1>
      <Arukoru />
      <h1>Ekisu</h1>
      <Ekisu />
    </div>
  );
}

export default Moromi;
