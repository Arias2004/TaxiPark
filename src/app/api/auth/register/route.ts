import { connectToDatabase } from "@/lib/mongodb";
import User, { Iuser, IUserSchema } from "@/models/User";
import { message } from "@/utils/message";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST( req: NextRequest ) {
    try {
        await connectToDatabase()

        const body: Iuser = await req.json()

        const { email, password, confirmPassword } = body

        // Validar campos de email y password 
        if (!email || !password || !confirmPassword) {
            return NextResponse.json(
                {
                    message: message.error.needProps,
                }, {
                    status: 400,
                }
            )
        }

        //Validar que es email válido
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            return NextResponse.json(
                {
                    message: message.error.invalidEmail,
                }, {
                    status: 400,
                }
            )
        }

        // Validar que la contraseña y la confirmación de contraseña sean iguales
        if (password !== confirmPassword) {
            return NextResponse.json(
                {
                    message: message.error.passwordNotMatch,
                }, {
                    status: 400,
                }
            )
        }

        const userFind = await User.findOne({ email })
        // Validar que el usuario no exista
        if (userFind) {
            return NextResponse.json(
                {
                    message: message.error.userExist,
                }, {
                    status: 400,
                }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser: IUserSchema = new User({
            email,
            password: hashedPassword,
        })

        // @ts-ignore
        const { password: userPassword, ...rest } = newUser._doc

        await newUser.save()

        
        const token = jwt.sign({ data: rest }, 'secreto', { expiresIn: 86400 })

        const response = NextResponse.json(
            {
                newUser: rest,
                message: message.success.userRegistered,
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