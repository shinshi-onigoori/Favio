import { Prisma, PrismaClient } from "@prisma/client";
import { connect } from "http2";
import { NextResponse } from "next/server";

//インスタンス化
const prisma = new PrismaClient();

//データベース接続用関数
export async function main() {
    try {
        await prisma.$connect();
    } catch (err) {
        return Error("DB接続に失敗しました")
    };
}

//BLOGの全記事取得API
export const GET = async (req: Request, res: NextResponse) => {
    try{
        await main();
        const posts = await prisma.post.findMany();
        return NextResponse.json({message: "Success", posts}, {status: 200})
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
    
};

//BLOGの投稿用API
export const POST = async (req: Request, res: NextResponse) => {
    try{
const { tittle, description } = await req.json();
        
        await main();
        const post = await prisma.post.create({ date: [ tittle, description ] });
        return NextResponse.json({message: "Success", posts}, {status: 200});
    } catch (err) {
        return NextResponse.json({message: "Error", err}, {status: 500})
    } finally {
        await prisma.$disconnect();
    }
    
};