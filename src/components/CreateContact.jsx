
const CreateContact = () => {
  return (
    <>
      <h2 className='text-xl font-bold mb-2'>Create Contact</h2>
      <div className='pb-2 flex flex-col'>
        <label htmlFor="first-name" className='text-xs pb-1'>First Name</label>
        <input
          type="text"
          className={`text-base h-12 p-2 pb-2.5 rounded-lg leading-7 border-solid border transition focus:outline-0`}
        />
      </div>
      <div className='pb-2 flex flex-col'>
        <label htmlFor="last-name" className='text-xs pb-1'>Last Name</label>
        <input
          type="text"
          className={`text-base h-12 p-2 pb-2.5 rounded-lg leading-7 border-solid border transition focus:outline-0`}
        />
      </div>
      <div className='pb-2 flex flex-col'>
        <label htmlFor="email" className='text-xs pb-1'>Email</label>
        <input
          type="email"
          className={`text-base h-12 p-2 pb-2.5 rounded-lg leading-7 border-solid border transition focus:outline-0`}
        />
      </div>
      <button
        type="button"
        className="mt-3 text-base font-bold h-11 border-solid border border-gray-300 w-full rounded-md transition hover:bg-sky-500 hover:border-sky-500 hover:text-white hover:shadow-sky-200 hover:shadow-md"
      >Add Contact</button>
    </>
  )
}

export default CreateContact
