import React from 'react';
import { useRouter } from 'next/router'
import * as jose from 'jose'

export default function Index() {
  const router = useRouter()
  const qstring = router.query
  const secretKey = '901b1717691b7e0521fef72fe067cbc119ff4eb980574654176e41a87adc0b28'
  const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secretKey)
  
  return (
    <>
      <pre>{JSON.stringify(qstring)}</pre>
      <pre>{JSON.stringify(payload)}</pre>
      <a href={`https://dev-7mz8uunx.us.auth0.com/continue?state=${qstring.state}`} >continue</a>
    </>
  );
}
