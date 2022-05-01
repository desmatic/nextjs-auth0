import React from 'react';
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const qstring = router.query
  return (
    <>
      <pre>{JSON.stringify(qstring)}</pre>
    </>
  );
}
