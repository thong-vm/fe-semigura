import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";

function Moromi() {
  return (
    <>
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
    </>
  );
}

export default Moromi;
