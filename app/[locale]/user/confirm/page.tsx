'use client'
// pages/user/confirm/[id].js

import { useSearchParams, useRouter} from 'next/navigation'
import { useState } from 'react';

export default function ConfirmUser() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({});
  const router = useRouter()
  const id = searchParams.get('id');
  const api = process.env.UPDATE_USER_ID ? process.env.UPDATE_USER_ID : ""

  if (id !== null) {

 
    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    const result = async () => {
      const response = await fetch(api + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        }, body:JSON.stringify(formData),
      });

      if (response.ok) {

        
        router.push('/en/user/login'); // Change to your login page URL
      } else {

        // Handle failure response as needed
      }
    };

    // Call the function to trigger the fetch
    result();
  } else {

  }
}
