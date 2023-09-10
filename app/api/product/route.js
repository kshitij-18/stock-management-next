import { NextResponse } from 'next/server';
import client from '../../utils/mongodb';

export async function GET(request) {
    const db = client.db('stock-management');
    const stocks = await db.collection('stocks').find().toArray();
    return NextResponse.json({stocks});
}

export async function POST(request) {
    console.log('HEREEEE');
    const db = client.db('stock-management');
    const body = await request.json(request.body);
    console.log('BODY', body);
    await db.collection('stocks').insertOne(body);
    return NextResponse.json({ ...body, ok: true });
}