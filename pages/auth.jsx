import React from 'react';
import { useRouter } from 'next/router'
import * as jose from 'jose'

export default function Index() {
  const router = useRouter()
  const qstring = router.query
  const secretKey = '901b1717691b7e0521fef72fe067cbc119ff4eb980574654176e41a87adc0b28'
  
  const getClaims = async (qstring, secretKey) => {
    return await jose.jwtDecrypt(qstring.session_token, secretKey)
  }

  const jwt = getClaims(qstring, secretKey).then((data) => { return data }) 
  
  return (
    <>
      <pre>{JSON.stringify(qstring)}</pre>
      <pre>{JSON.stringify(qstring.session_token)}</pre>
      <pre>{JSON.stringify(secretKey)}</pre>
      <pre>{JSON.stringify(jwt)}</pre>
      <a href={`https://dev-7mz8uunx.us.auth0.com/continue?state=${qstring.state}`} >continue</a>
    </>
  );
}
