
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export  async function POST(request,response) {
 
  try {
    
    const data = await request.json()
    
    const clint = await MongoClient.connect(process.env.MONGODB_URI);

    const db = clint.db();
  
    const todos = db.collection("todos");
   
    const result = await todos.insertOne(data);

    console.log(result)

    clint.close()

    return NextResponse.json( 'Meetup added' , { status: 201 });
    
  } catch (error) {
    return NextResponse.json('error' , { status: 405 });
  } 
  
}
