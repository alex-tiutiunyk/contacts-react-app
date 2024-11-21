import { useEffect, useState } from "react";
import { get, ref } from 'firebase/database'
import { db } from '../firebase'
import Contacts from "../components/Contacts"
import CreateContact from "../components/CreateContact"

const HomePage = () => {
  const [data, getData] = useState([]);

  // get data
  const fetchData = async () => {
    try {
      const contactsRef = ref(db, 'contacts')
      const snapshot = await get(contactsRef)
      const response = snapshot.val()
      if (snapshot.exists()) {
        // transformed output data
        const outData = Object.entries(response).map(item => {
          return {
            id: item[0],
            ...item[1]
          }
        })
        getData(outData)
        console.log(outData)
      } else {
        console.log("No data")
        getData([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex w-full flex-col items-start md:flex-row pt-7 pb-5">
      <div className='w-full flex-1 order-2 p-4'>
        <Contacts data={data} fetchData={fetchData}/>
      </div>
      <aside className="mx-auto w-80 order-1 p-4 md:sticky md:top-0">
        <CreateContact fetchData={fetchData}/>
      </aside>
    </div>
  )
}

export default HomePage
