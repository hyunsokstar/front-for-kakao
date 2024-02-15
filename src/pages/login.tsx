// 'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

type Props = {}

const login = (props: Props) => {

    const { data: session, status } = useSession()
    const loading = status === "loading"
    console.log("session : ", session);
    console.log("status : ", status);



    if (session) {
        return (
            <>
                {session.user?.name}님 반갑습니다
                <button onClick={() => signOut()}>로그아웃</button>
            </>
        )
    }

    return (
        <div>
            <button onClick={() => signIn("kakao")}>로그인</button>
        </div>
    )
}

export default login