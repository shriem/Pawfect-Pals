import React, { useRef, useState } from 'react';
import './style.css';
import Logo from './logo.png';
import DoggoIcon from './doggo.png';
import { MagnifyingGlassIcon, BellIcon, InboxIcon, UserIcon, CameraIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

function App() {
  const fileInputRef = useRef(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [posts, setPosts] = useState([]); // State to store posts
  const [showDropdown, setShowDropdown] = useState(null); // State to control dropdown visibility

  const handleCameraButtonClick = () => {
    // Trigger click event on the file input
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Update the state with the selected media file
    setSelectedMedia(file);
  };

  const handleTextChange = (e) => {
    // Update the state with the typed text
    setTypedText(e.target.value);
  };

  const handlePostClick = () => {
    // Create a new post object and add it to the posts array
    const newPost = {
      id: posts.length + 1,
      text: typedText,
      media: selectedMedia,
    };

    setPosts([...posts, newPost]);

    // Clear the input and selected media
    setTypedText('');
    setSelectedMedia(null);
  };

  const handleOptionsClick = (postId) => {
    // Toggle the dropdown visibility when EllipsisHorizontalIcon is clicked
    setShowDropdown(showDropdown === postId ? null : postId);
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-orange-400 p-3">
        <div className='mx-4'>
          <img src={Logo} alt='' />
        </div>
        <form action='' className='flex items-center bg-orange-300 rounded p-2 flex-grow'>
          <button className="text-brown-800 p-1 focus:outline-none">
            <MagnifyingGlassIcon className="h-7 w-7" />
          </button>
          <input
            type="text"
            className="bg-white h-8 px-4 rounded text-brown-800 ml-2 flex-grow"
            placeholder="Type something..."
            value={typedText}
            onChange={handleTextChange}
          />
        </form>
        <div className="flex ml-4">
          <button className="text-white p-2 focus:outline-none">
            <BellIcon className="h-7 w-7" />
          </button>
          <button className="text-white p-2 focus:outline-none">
            <InboxIcon className="h-7 w-7" />
          </button>
          <button className="text-white p-2 focus:outline-none">
            <UserIcon className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Text box with doggo icon, camera button, selected media preview, and Post button */}
      <div className="flex flex-col items-center p-4 bg-orange-100">
        <img src={DoggoIcon} alt="Doggo" className="h-8 w-8 mb-2" />
        <input
          type="text"
          className="bg-white h-8 px-4 rounded text-brown-800 mb-2 flex-grow"
          placeholder="Type something..."
          value={typedText}
          onChange={handleTextChange}
        />
        {selectedMedia && (
          <div className="flex items-center mb-2 justify-center">
            {selectedMedia.type.startsWith('image') ? (
              <img
                src={URL.createObjectURL(selectedMedia)}
                alt="Selected Media"
                className="w-60vw max-w-full h-auto mb-2"
                style={{ width: '60vw', height: 'auto', maxWidth: '1080px' }}
              />
            ) : (
              <video
                controls
                className="w-60vw max-w-full mb-2"
                style={{ width: '60vw', height: 'auto', maxWidth: '1080px' }}
              >
                <source src={URL.createObjectURL(selectedMedia)} type={selectedMedia.type} />
              </video>
            )}
          </div>
        )}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <button className="text-brown-800 p-2 focus:outline-none" onClick={handleCameraButtonClick}>
              <CameraIcon className="h-7 w-7" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
          <button className="bg-orange-500 text-white p-2 px-4 rounded-full focus:outline-none ml-2" onClick={handlePostClick}>
            Post
          </button>
        </div>
      </div>

      {/* Display posts in a feed-like manner */}
      <div className="flex flex-col items-center mt-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-orange-100 p-4 my-2 w-full max-w-md relative">
            <p className="text-brown-800">{post.text}</p>
            {post.media && (
              <div className="flex items-center mt-2 justify-center">
                {post.media.type.startsWith('image') ? (
                  <img
                    src={URL.createObjectURL(post.media)}
                    alt="Post Media"
                    className="w-60vw max-w-full h-auto mb-2"
                    style={{ width: '60vw', height: 'auto', maxWidth: '1080px' }}
                  />
                ) : (
                  <video
                    controls
                    className="w-60vw max-w-full mb-2"
                    style={{ width: '60vw', height: 'auto', maxWidth: '1080px' }}
                  >
                    <source src={URL.createObjectURL(post.media)} type={post.media.type} />
                  </video>
                )}
              </div>
            )}
            {showDropdown === post.id && (
              <div className="absolute top-0 right-0 mt-2 p-2 bg-white rounded shadow">
                <button className="block text-brown-800 hover:text-orange-500" onClick={() => handleOptionsClick(post.id)}>
                  Delete
                </button>
                <button className="block text-brown-800 hover:text-orange-500" onClick={() => handleOptionsClick(post.id)}>
                  Report
                </button>
              </div>
            )}
            <button
              className="absolute top-0 right-0 p-2 focus:outline-none"
              onClick={() => handleOptionsClick(post.id)}
            >
              <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;