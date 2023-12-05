import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import { selectAllPrepareMoromi, updatePrepareMoromi } from "../../../store/moromi/prepareMoromiSlice";

function PrepareMoromi() {
    const dispatch = useDispatch();
    const data = useSelector(selectAllPrepareMoromi);
    const updateData = ({ id, changes }) => {
      dispatch(updatePrepareMoromi({ id, changes }));
    };
    const MemoizedPageTable = memo(PageTable);
    return <MemoizedPageTable data={data} updateData={updateData} />;
}

export default PrepareMoromi;