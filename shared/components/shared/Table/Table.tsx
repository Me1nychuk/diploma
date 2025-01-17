import { FunctionComponent } from 'react';
import { TableRecord } from './TableRecord/TableRecord';
import styles from './table.module.css';
import cn from '../../../../node_modules/classnames';

interface TableHeadProps {
    headings: string[];
}

interface TableRecordProps {
    values: string[];
    href?: string;
    hover?: boolean;
}

interface TableProps {
    TableHead: FunctionComponent<TableHeadProps>; 
    TableRecords: JSX.Element[];
    tableHeadProps: TableHeadProps; 
    tableRecordProps: TableRecordProps;
}

export const Table = ({
    TableHead,
    TableRecords,
    tableHeadProps,
    tableRecordProps
}: TableProps): JSX.Element => {
    return (
        <div className={cn("relative overflow-x-auto mx-5 mt-5 max-sm:w-[400px]")}>
            <table className={cn("w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ")}>
                <TableHead {...tableHeadProps} />
                <tbody>
                    {TableRecords}
                </tbody>
            </table>
        </div>
    );
};
