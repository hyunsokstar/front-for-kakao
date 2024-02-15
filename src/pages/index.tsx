import React from 'react'

type Props = {}

const index = (props: Props) => {

  console.log("process.env.KAKAO_CLIENT_ID : ", process.env.KAKAO_CLIENT_ID);
  console.log("process.env.KAKAO_CLIENT_SECRET : ", process.env.KAKAO_CLIENT_SECRET);


  return (
    <div>메인 페이지</div>
  )
}

export default index