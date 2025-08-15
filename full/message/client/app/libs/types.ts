export type Challenge = {
    id: string;
    title: string;
    creatorName: string;
    participants: number;
    startsAt: string; // ISO
    endsAt: string; // ISO
};

export type PageResp<T> = {
    items: T[];
    nextCursor: string | null;
};
