import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const uri = 'mongodb+srv://kshitijnath:kshitijnath@cluster0.qdz65bp.mongodb.net/?retryWrites=true&w=majority'
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('stock-management');
    const stockCollection = database.collection('stock');
    const currentStock = await stockCollection.find({}).toArray();
    console.log('CURRENT STOCK', currentStock);
    return NextResponse.json({
        a: 21,
    })
}