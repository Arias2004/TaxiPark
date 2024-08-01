import { message } from "@/utils/message"
import { NextResponse } from "next/server"
import { headers } from "next/headers"
import User from "@/models/User"
import jwt from "jsonwebtoken"
import { connectToDatabase } from "@/lib/mongodb"

export async function GET() {
    try {

        const headersList = headers()
        
        const token = headersList.get('token')

        if (!token) {
            return NextResponse.json(
                {
                    message: message.error.notAuthorized,
                }, {
                    status: 400,
                }
            )
        }

        try {
            const isTokenValid = jwt.verify(token, 'secreto')

            // @ts-ignore
            const { data } = isTokenValid

            await connectToDatabase()

            const userFind = await User.findById(data.userId)

            if (!userFind) {
                return NextResponse.json(
                    {
                        message: message.error.userNotExist,
                    }, {
                        status: 400,
                    }
                )
            }

            return NextResponse.json(
                {
                    isAuthorized: true,
                    message: message.success.isAuthorized,
                }, {
                    status: 200,
                }
            )

        } catch (error) {
            return NextResponse.json(
                {
                    isAuthorized: false,
                    message: message.error.tokenNotValid,
                }, {
                    status: 400,
                }
            )
        }


    } catch (error) {
        return NextResponse.json(
            {
                isAuthorized: false,
                message: message.error.default, 
                error
            },
            {
                status: 500,
            }
        )
    }
}