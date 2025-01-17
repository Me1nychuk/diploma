import { FunctionComponent } from "react";
import { TableRecord } from "./TableRecord";

interface TableRecordsProps {
    TableRecords: Array<FunctionComponent<TableRecordsProps>>
}

const TableRecords = ({TableRecords}: TableRecordsProps) => {
    return (
        TableRecords
    );
}
 
export default TableRecords;