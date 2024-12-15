import axios from "axios";

import { DataTable } from "..";
import { domainColumns } from "../columns";

export default async function DomainTable() {
    const req = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_SERVICE}/domains`,
    );

    const domains = req?.data?.data || [];

    return <DataTable data={domains} columns={domainColumns} />;
}
