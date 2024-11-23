import { Link } from "react-router-dom"
import { useDeleteContactMutation, useGetContactsQuery } from "../redux/contactsApi";

const Contacts = () => {
  const noImgUrl = 'https://robohash.org/XKQ.png?set=set1&size=150x150';

  const {data = [], isError} = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  // delete contact
  const handleDeleteContact = (e, item) => {
    // ignore click on parent block
    e.preventDefault();
    const {id} = item;
    deleteContact(id);
  }

  return (
    <>
      {isError && <div>Loading error!</div>}
      {data.map(item => (
        <Link to={`/contacts-react-app/${item.id}`} key={item.id} className="rounded-md bg-gray-200 hover:bg-gray-300 transition hover:shadow-gray-400 hover:shadow-md p-4 mb-4 pr-14 flex gap-x-3 relative">
          <div className='w-[59px] h-[59px] flex-none overflow-hidden'>
            <img src={item.request.avatar ? item.request.avatar : noImgUrl} alt={item['first name'] + ' ' + item['last name']} />
          </div>
          <div className="grow">
            <h3 className='text-base font-bold mb-1'>
              <div className="hover:underline">
                {item.request['first name']} {item.request['last name']}
              </div>
            </h3>
            <span className='text-base font-bold hover:underline'>{item.request.email}</span>
            {(JSON.parse(item.request.tags).length > 0)
              ? <ul className='flex flex-wrap text-sm leading-5 gap-2 pt-3 pb-2'>
                  {
                    JSON.parse(item.request.tags).map(tag => <li key={item.id + '-' + tag} className='bg-gray-400 px-2 rounded cursor-default'>{tag}</li>)
                  }
                </ul>
              : ''
            }
          </div>
          <button
            type="button"
            onClick={(e) => handleDeleteContact(e, item)}
            className="absolute top-[10px] right-[10px] hover:rotate-90 hover:scale-125 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
          </button>
        </Link>
      ))}
    </>
  )
}

export default Contacts
