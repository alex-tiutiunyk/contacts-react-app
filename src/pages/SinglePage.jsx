import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEditContactMutation, useGetOneContactQuery } from "../redux/contactsApi";
import Tags from "../components/Tags";
import AddTag from "../components/AddTag";
import Spinner from "../components/Spinner";

const SingleContact = () => {
  const {id} = useParams();
  const {data, refetch, isError, isLoading} = useGetOneContactQuery(id);
  const [editContact] = useEditContactMutation();
  const [inputValue, setInputValue] = useState('');

  const noImgUrl = 'https://robohash.org/XKQ.png?set=set1&size=150x150';
  const isTagDel = true;

  const handleAddTag = async () => {
    try {
      if (inputValue) {
        const prevTags = JSON.parse(data.request.tags);
        const newTags = [...prevTags, ...inputValue.split(' ')];
        const set = new Set(newTags.filter(item => item !== ''));
        const request = {...data.request, tags: JSON.stringify([...set])}
        // const request = {...data.request, tags: JSON.stringify([...set]).replace(/"/g, '')}
        await editContact({...data, id, request});
        setInputValue('');
        refetch();
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteTag = async (tagValue) => {
    try {
      const prevTags = JSON.parse(data.request.tags);
      const updatedTags = prevTags.filter(tag => tag !== tagValue);
      const request = {...data.request, tags: JSON.stringify([...updatedTags])}
      await editContact({...data, id, request});
      refetch();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-4 grow">
      <Link to="/contacts-react-app" className="inline-block p-2 text-base font-bold border-solid border border-gray-300 rounded-md transition hover:bg-sky-500 hover:border-sky-500 hover:text-white hover:shadow-sky-200 hover:shadow-md" >&lt; Back</Link>
      {isError && <div>Loading error!</div>}
      {isLoading && <Spinner />}
      {data && <div className="p-4 max-w-xl mx-auto">
        <div className="flex gap-x-3 items-center mb-4">
          <div className='w-[120px] h-[120px] flex-none overflow-hidden'>
            <img width={120} src={data.request.avatar ? data.request.avatar : noImgUrl} alt={data.request['first name'] + ' ' + data.request['last name']} />
          </div>
          <div className="grow pl-2">
            <h3 className='text-base font-bold mb-1'>
              {data.request['first name']} {data.request['last name']}
            </h3>
            <a href={'mailto:' + data.request.email} className='text-base font-bold hover:underline'>{data.request.email}</a>
          </div>
        </div>
        <h3 className="text-base font-bold">Tags:</h3>
        <Tags
          item={data}
          handleDeleteTag={handleDeleteTag}
          isTagDel={isTagDel}
        />
        <AddTag
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTag={handleAddTag}
        />
      </div>}
    </div>
  );
};

export default SingleContact;
