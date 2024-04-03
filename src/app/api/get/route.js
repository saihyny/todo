import { MongoClient} from "mongodb";
import { NextResponse } from "next/server";

export async function GET(res, req) {
  try {
    const clint = await MongoClient.connect(process.env.MONGODB_URI);

    const db = clint.db();

    const response = db.collection("todos");

    const result = await response.find().toArray();

    clint.close();

    return NextResponse.json( result , { status: 201 });
  } catch(error) {
    return NextResponse.json( {error} , { status: 405 })
  }
}
