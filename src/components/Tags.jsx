import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Tags = ({item, handleDeleteTag}) => {
  const isTagDel = useSelector(state => state.tagsDelState.isTagDel);

  const tags = JSON.parse(item.request.tags)
  console.log(tags.length)

  return (
    <>
      {(tags.length > 0)
        ? <ul className='flex flex-wrap text-sm leading-5 gap-2 pt-3 pb-2'>
            {
              tags.map(tag => (
                isTagDel 
                  ? <li key={item.id + '-' + tag} title="Press to delete" className='bg-gray-400 px-2 rounded hover:opacity-80 cursor-pointer' onClick={() => handleDeleteTag(tag)}>{tag}</li>
                  : <li key={item.id + '-' + tag} className='bg-gray-400 px-2 rounded cursor-default'>{tag}</li>
              ))
            }
          </ul>
        : ''
      }
    </>
  );
};

Tags.propTypes = {
  item: PropTypes.object,
  handleDeleteTag: PropTypes.func
};

export default Tags;
