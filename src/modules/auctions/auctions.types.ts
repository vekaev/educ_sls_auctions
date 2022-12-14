export const StatusEnum = {
    OPEN: 1,
} as const;

export type StatusEnum = typeof StatusEnum[keyof typeof StatusEnum];

export interface Auction {
    id: string;
    title: string;
    status: StatusEnum;
    createdAt: string;
    updatedAt: string;
    highestBid: {
        amount: number;
    };
}
