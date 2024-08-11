import { EmailTemplate } from "@/components/EmailTemplates";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { message } from "@/utils/message";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_3WkhKZ72_HvuBfvNRLVUbuNBX9zXHX7dN');

export async function POST(req: NextRequest) {

    try {
        const body: { email: string } = await req.json()

        const { email } = body

        await connectToDatabase()

        const userFind = await User.findOne({ email })

        if (!userFind) {
            return NextResponse.json(
                {
                    message: message.error.userNotExist,
                }, {
                    status: 400,
                }
            )
        }

        const tokenData = {
            email: userFind.email,
            userId: userFind._id,
        }

        const token = jwt.sign({ data: tokenData }, 'secreto', { expiresIn: 86400 })

        const forgetURL = `http://localhost:3000/auth/change-password?token=${token}`

        // @ts-ignore
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Cambiar de contraseña',
            react: EmailTemplate({ buttonUrl: forgetURL }),
        })

        return NextResponse.json(
            {
                message: message.success.emailSentCorrectly,
            },
            {
                status: 200,
            }
        )

    } catch (error) {
        console.log('error: ', error)
        
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