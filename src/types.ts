export type PostType = {
    id: number;
    title: string;
    description:string;
    date: Date;
}

export type UserType = {
    id: string;
    email: string;
    passeordHash: string;
    username: string;
    created: Date;
    update: Date; 
}