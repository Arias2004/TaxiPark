import { connectToDatabase } from "@/lib/mongodb";
import User, { Iuser } from "@/models/User";
import { message } from "@/utils/message";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export async function POST(req: NextRequest) {

    try {
        await connectToDatabase()

        const body: Iuser = await req.json()

        const { email, password } = body

        if ( !email || !password ) {
            return NextResponse.json(
                {
                    message: message.error.needProps,
                }, {
                    status: 400,
                }
            )

        }

        // Validar que el usuario exista
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

        //contraseña es correcta?
        const isPasswordCorrect: boolean = await bcrypt.compare(
            password,
            userFind.password,
        )

        if (!isPasswordCorrect) {
            return NextResponse.json(
                {
                    message: message.error.passwordNotisCorrect,
                    isAuthorized : true,
                }, {
                    status: 400,
                }
            )
        }

        const { password: userPassword, ...rest } = userFind._doc

        const token = jwt.sign({ data: rest }, 'secreto', { expiresIn: 86400 })

        
        const response = NextResponse.json(
            {
                newUser: rest,
                message: message.success.useLogged,
            },
            {
                status: 200,
            }
        )

        
        

        response.cookies.set('auth_cookie', token, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 86400,
            path: '/',
        })
        

        return response


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