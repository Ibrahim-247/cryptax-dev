import fakeDelay from "@/utils/fakeDelay";
import GlobalSearchClient from "./components/global-search-client";

type SearchParams = {
    q?: string;
};

const GlobalSearch = async ({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) => {
    const params = await searchParams;
    const query = params.q ?? "";
    console.log(query);
    await fakeDelay(100);
    // main render
    return (
        <GlobalSearchClient query={query} />
    )
};

export default GlobalSearch;
