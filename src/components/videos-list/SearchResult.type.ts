export type  snippet = {
    publishedAt: string;
    channelId: string;
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
        default: {
            url: string;
            width: string;
            height: string;
        };
        medium: {
            url: string;
            width: string;
            height: string;
        };
        high: {
            url: string;
            width: string;
            height: string;
        };
    };
};
 
 export type SearchResult = {
    id: { kind: string; videoId: string };
    snippet: snippet
};


