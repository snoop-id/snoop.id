import Search from "@/components/Search";

import "./search.scss";

export default function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div id="search">
            <h1>Search</h1>
            <p>Search for a domain to see its details and history.</p>

            <Search />
            <hr />

            <div className="search-wrapper">{children}</div>
        </div>
    );
}
