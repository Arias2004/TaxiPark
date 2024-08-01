import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { message } from "@/utils/message";
import { NextRequest, NextResponse } from "next/server";

export async function GET( req: NextRequest ) {

    try {
        
        await connectToDatabase()

        const users = await User.find({}, { email: 1, _id: 0 });

        return NextResponse.json(
            {
                users
            },
            {
                status: 200,
            }
        )

    } catch (error) {
        return NextResponse.json(
            {
                message: message.error.default,
                error
            },
            {
                status: 500,
            }
        )
    }
    
}