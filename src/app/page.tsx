import { Suspense } from "react";

import Loading from "./loading";
import DomainTable from "@/components/DataTable/Tables/DomainTable";

import "./main.scss";

export default function Home() {
    return (
        <div id="home">
            <h1>Crawled Domains</h1>
            <p>
                Here are the domains that have been crawled by the{" "}
                <span>snoop.id</span> crawlers.
            </p>
            <div className="domain-table-wrapper">
                <Suspense fallback={<Loading />}>
                    <DomainTable />
                </Suspense>
            </div>
        </div>
    );
}
