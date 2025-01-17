import { Metadata } from "next";
import {Table} from './../../../shared/components/shared/Table/Table'; 
import { TableHead } from './../../../shared/components/shared/Table/TableHead/TableHead';
import { TableRecord } from './../../../shared/components/shared/Table/TableRecord/TableRecord';
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "NUWM | Склад кафедри",
    description: "Склад кафедри",
};

const Composition: React.FC = () => {
    const compositionHeadData = {
        headings: ["Ім'я, Прізвище", "Посада", "Науковий ступінь"]
    }

    const scheduleHeadData = {
        headings: ["Ім'я, Прізвище викладача", "День тижня", "Години", "Корпоративна пошта", "Аудиторія"]
    }

    const compositionRecords = [
        { values: ["Андрій Сидор", "В.о. завідувач кафедри, доцент", "К.Т.Н"], hover: true, href:"https://wiki.nuwm.edu.ua/index.php/%D0%A1%D0%B8%D0%B4%D0%BE%D1%80_%D0%90%D0%BD%D0%B4%D1%80%D1%96%D0%B9_%D0%86%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Ярослав Николайчук", "Професор", "Д.Т.Н"], hover: true, href:"http://wiki.nuwm.edu.ua/index.php/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D1%87%D1%83%D0%BA_%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Борис Круліковський", "Доцент", "Д.Т.Н"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%9A%D1%80%D1%83%D0%BB%D1%96%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Михайло Соломко", "Доцент", "Д.Т.Н"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D0%BA%D0%BE_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%A2%D0%B8%D0%BC%D0%BE%D1%84%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Сергій Шатний", "Доцент", "Д.Т.Н"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%A8%D0%B0%D1%82%D0%BD%D0%B8%D0%B9_%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D0%B9_%D0%92'%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Михайло Бойчура", "Доцент", "К.Т.Н"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%91%D0%BE%D0%B9%D1%87%D1%83%D1%80%D0%B0_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Віталій Назарук", "Старший викладач", "К.Т.Н"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D1%83%D0%BA_%D0%92%D1%96%D1%82%D0%B0%D0%BB%D1%96%D0%B9_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B8%D1%87" },
        { values: ["Анастасія Шатна", "Старша викладачка", "-"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%9A%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87:%D0%90%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D1%96%D1%8F_%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D1%96%D0%B2%D0%BD%D0%B0_%D0%A8%D0%B0%D1%82%D0%BD%D0%B0#.D0.9F.D0.B5.D0.B4.D0.B0.D0.B3.D0.BE.D0.B3.D1.96.D1.87.D0.BD.D0.B0_.D0.B4.D1.96.D1.8F.D0.BB.D1.8C.D0.BD.D1.96.D1.81.D1.82.D1.8C" },
        { values: ["Аліна Романюк", "Старша викладачка", "-"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%8E%D0%BA_%D0%90%D0%BB%D1%96%D0%BD%D0%B0_%D0%90%D1%84%D0%B0%D0%BD%D0%B0%D1%81%D1%96%D1%97%D0%B2%D0%BD%D0%B0" },
        { values: ["Маріанна Турбал", "Старша викладачка", "К.Т.Н"], hover: true, href: "https://wiki.nuwm.edu.ua/index.php/%D0%A2%D1%83%D1%80%D0%B1%D0%B0%D0%BB_%D0%9C%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D0%BD%D0%B0_%D0%AE%D1%80%D1%96%D1%97%D0%B2%D0%BD%D0%B0" },
        { values: ["Ольга Багнюк", "Старша викладачка", "-"], hover: true, href: "https://wiki.nuwm.edu.ua/index.php/%D0%91%D0%B0%D0%B3%D0%BD%D1%8E%D0%BA_%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0_%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D0%BD%D0%B0" },
        { values: ["Людмила Гаврилюк", "Діловодка", "-"], hover: true, href: "http://wiki.nuwm.edu.ua/index.php/%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D1%8E%D0%BA_%D0%9B%D1%8E%D0%B4%D0%BC%D0%B8%D0%BB%D0%B0_%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D1%96%D1%97%D0%B2%D0%BD%D0%B0" },
    ];

    const scheduleRecords = [
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href:"http://meet.google.com/fbm-nzac-dgs"},
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" },
        { values: ["Михайло Бойчура", "Субота", "19:00", "m.v.boichura@nuwm.edu.ua", "Дистанційно"], hover: true, href: "http://meet.google.com/fbm-nzac-dgs" }
    ];

    return (
        <>
        <div>
            <h1 className="m-5 text-4xl text-center font-bold">Склад кафедри Обчислювальної Техніки</h1>
            <hr className="m-3"></hr>
            <Table
                TableHead={TableHead}
                TableRecords={compositionRecords.map((record, index) => (
                    <TableRecord key={index} {...record} />
                ))}
                tableHeadProps={{ headings: compositionHeadData.headings }}
                tableRecordProps={compositionRecords[0]}
            />
        </div>
            <div className="absolute left-1/2 mt-5 flex justify-center items-center content-center">
                <Link
                    href={"#schedule"}
                    className="bounce-custom "
                >
                    <ChevronsDown color="currentColor" size={50} />
                </Link>
            </div>
                <div id="schedule" className="mt-64 mb-32">
                <h1 className="text-4xl text-center font-bold">Графік Консультацій</h1>
                <hr className="m-3"></hr>
                <Table
                    TableHead={TableHead}
                    TableRecords={scheduleRecords.map((record, index) => (
                        <TableRecord key={index} {...record} />
                    ))}
                    tableHeadProps={{ headings: scheduleHeadData.headings }}
                    tableRecordProps={scheduleRecords[0]}
                />
            </div>
        </>
    );
};

export default Composition;
