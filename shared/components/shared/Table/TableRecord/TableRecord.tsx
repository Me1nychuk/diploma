import styles from './TableRecord.module.css';
import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes, JSX } from "react";
import cn from 'classnames';

export interface TableRecordProps extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
    values: string[];
    href?: string;
    hover?: boolean;
}

export const TableRecord: FunctionComponent<TableRecordProps> = ({ values, href, hover = false, className }) => {
    const slicedValues = values.slice(1);

    return (
        <tr className={cn("text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", className, {
            [styles.tableRecord]: hover 
        })}>
            <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        {values[0]}
                    </a>
                ) : (
                    values[0]
                )}
            </th>
            {slicedValues.map((value, index) => (
                <td key={index} className="px-6 py-4">{value}</td>
            ))}
        </tr>
    );
};
