import { connectToDatabase } from "@/lib/mongodb";
import { message } from "@/utils/message";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import bcrypt from "bcryptjs";

interface BodyProps {
    newPassword: string,
    confirmPassword: string
}

export async function POST( req: NextRequest ) {
    try {
        
        const body: BodyProps = await req.json()

        const { newPassword, confirmPassword } = body

        if ( !newPassword || !confirmPassword ) {
            return NextResponse.json(
                {
                    message: message.error.needProps,
                }, {
                    status: 400,
                }
            )
        }

        if ( !newPassword || !confirmPassword ) {
            return NextResponse.json(
                {
                    message: message.error.isDistinct,
                }, {
                    status: 400,
                }
            )
        }

        await connectToDatabase()

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

            if (newPassword !== confirmPassword) {
                return NextResponse.json(
                    {
                        message: message.error.passwordNotisCorrect,
                    }, {
                        status: 400,
                    }
                )
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10)

            userFind.password = hashedPassword

            

            await userFind.save()

            return NextResponse.json(
                {
                    message: message.success.passwordChanged,
                }, {
                    status: 200,
                }
            )
            

        } catch (error) {
            return NextResponse.json(
                {
                    message: message.error.tokenNotValid,
                    error
                },
                {
                    status: 500,
                }
            )
        }

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