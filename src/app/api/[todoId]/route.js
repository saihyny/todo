import { MongoClient, ObjectId } from 'mongodb'; // Import ObjectId
import { NextResponse } from 'next/server';

export async function PUT(req,{ params }) {
  try {
    const id = params.todoId;
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const response = db.collection("todos");

    const result = await response.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { isComplete: true } }
    );

    client.close();

    return NextResponse.json({result }, { status: 201 });  
  } catch (error) {
    console.error('error occure in updating',error ); 
    return NextResponse.json({ message: 'update failed' }, { status: 500 });
  }
}