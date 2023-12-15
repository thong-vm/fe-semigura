import { useDispatch } from "react-redux";
import Arukoru from "./Arukoru/Arukoru";
import Bmd from "./Bmd/Bmd";
import Ekisu from "./Ekisu/Ekisu";
import MoromiGeneral from "./MoromiGeneral/MoromiGeneral";
import PrepareMoromi from "./PrepareMoromi/PrepareMoromi";
import { useEffect } from "react";

function Moromi() {
  const dispatch = useDispatch();
  useEffect(() => {
    // const loader = async () => {
    //   const { result, error } = await Batch.getAll();
    //   if (error) {
    //     setMsg(error);
    //   } else {

    //     dispatch(setList({ moromis: result.moromis }));
    //   }
    // };
    // if (!data) {
    //   loader();
    // }
  }, [dispatch]);
  return (
    <>
    <select>
      <option value="" key=""></option>
    </select>
      <PrepareMoromi />
      <MoromiGeneral />
      <Bmd />
      <Arukoru />
      <Ekisu />
    </>
  );
}

export default Moromi;
