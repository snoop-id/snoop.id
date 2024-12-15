import Resolver from "@/components/Resolver";

import "./resolver.scss";

export default function ResolverPage() {
    return (
        <div id="resolver">
            <h1>Resolver</h1>
            <p>
                Redirect your <span>space.id</span> domain to an URL. Requires{" "}
                <a href="https://snoop.id" target="_blank">
                    snoop.id Chrome Extension
                </a>{" "}
                to be installed.
            </p>
            <Resolver />
        </div>
    );
}
