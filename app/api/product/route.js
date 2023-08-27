import { NextResponse } from 'next/server';
import client from '../../utils/mongodb';

export async function GET(request) {
    const db = client.db('stock-management');
    const stocks = await db.collection('stocks').find().toArray();
    return NextResponse.json({stocks});
}

export async function POST(request) {
    const db = client.db('stock-management');
    const body = request.body;
    
}