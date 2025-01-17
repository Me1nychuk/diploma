import { Metadata } from "next";
import styles from './composition.module.css';
import { ChevronsDown, Link } from "lucide-react";
import { LogoIcon } from "@/shared/components/ui/logo";
import React, { FunctionComponent, JSX } from "react";

export interface TableHeadProps {
    headings: string[];
}

export const TableHead: FunctionComponent<TableHeadProps> = ({headings}) => {
    return (<>
                <thead className="text-xs font-bold text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
    </>
    );
};