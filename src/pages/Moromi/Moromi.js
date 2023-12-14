import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";

function Moromi() {
  return (
    <>
      <PrepareMoromi />
      <MoromiGeneral />
      <Bmd />
      <Arukoru />
      <Ekisu />
    </>
  );
}

export default Moromi;
