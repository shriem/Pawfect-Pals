import React, { useRef, useState } from 'react';
import './style.css';
import DoggoIcon from './doggo.png';
import { BellIcon, InboxIcon, UserIcon, CameraIcon, EllipsisHorizontalIcon, CogIcon } from '@heroicons/react/24/solid';

function ProfilePage() {
  const fileInputRef = useRef(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [description, setDescription] = useState('');
  const [numPets, setNumPets] = useState(0);
  const [petDetails, setPetDetails] = useState([]); // Array to store details of each pet
  const [newPet, setNewPet] = useState({ name: '', age: '', type: '' }); // State to store details of the new pet being added
  const [isEditingDescription, setIsEditingDescription] = useState(true);

  const handleCameraButtonClick = () => {
    // Trigger click event on the file input
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Update the state with the selected profile picture
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleDescriptionChange = (e) => {
    // Update the state with the typed description
    setDescription(e.target.value);
  };

  const handleNumPetsChange = (e) => {
    // Update the state with the selected number of pets
    const numPets = parseInt(e.target.value, 10);
    setNumPets(numPets);

    // Reset pet details when the number of pets changes
    setPetDetails([]);
  };

  const handlePetDetailChange = (index, key, value) => {
    // Update the pet details in the array based on user input
    const updatedPetDetails = [...petDetails];
    updatedPetDetails[index][key] = value;
    setPetDetails(updatedPetDetails);
  };

  const handleNewPetChange = (key, value) => {
    // Update the state with the new pet details
    setNewPet((prevPet) => ({ ...prevPet, [key]: value }));
  };

  const handleAddPet = () => {
    // Add the new pet details to the array of petDetails
    setPetDetails((prevDetails) => [...prevDetails, newPet]);
    // Clear the newPet state
    setNewPet({ name: '', age: '', type: '' });
  };

  const handleDescriptionDone = () => {
    // Set isEditingDescription to false to indicate that editing is done
    setIsEditingDescription(false);
  };

  return (
    <div>
      <header className="flex justify-between items-center bg-orange-400 p-3">
        <div className='mx-4'>
          <img src={profilePicture || DoggoIcon} alt='' className="h-10 w-10 rounded-full" />
        </div>
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
          <button className="text-white p-2 focus:outline-none">
            <CogIcon className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* Profile details */}
      <div className="flex flex-col items-center p-4 bg-orange-100">
        <label htmlFor="profilePictureInput" className="cursor-pointer">
          <input
            id="profilePictureInput"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <img src={profilePicture || DoggoIcon} alt="Profile" className="h-24 w-24 mb-4 rounded-full cursor-pointer" />
        </label>
        <h1 className="text-2xl font-semibold text-brown-800">Your Name</h1>
        <p className="text-brown-600">@username</p>
        <p className="text-gray-500">Joined on January 1, 2023</p>

        {/* Input box for a small description */}
        {isEditingDescription ? (
          <>
            <textarea
              className="bg-white h-16 px-4 rounded mt-4 w-full focus:outline-none focus:shadow-outline"
              placeholder="Write a short description about yourself..."
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
            <button
              className="bg-orange-500 text-white p-2 px-4 rounded-full focus:outline-none ml-2 mt-2"
              onClick={handleDescriptionDone}
            >
              Done
            </button>
          </>
        ) : (
          <p className="text-brown-800 mt-4">{description}</p>
        )}

        {/* Dropdown for the number of pets */}
        <div className="flex items-center mt-4">
          <label htmlFor="numPets" className="mr-2 text-brown-800">Number of Pets:</label>
          <select
            id="numPets"
            className="bg-white p-2 rounded focus:outline-none focus:shadow-outline"
            value={numPets}
            onChange={handleNumPetsChange}
          >
            {[0, 1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Pet details input based on the number of pets */}
        {numPets > 0 && (
          <div className="mt-4">
            {[...Array(numPets)].map((_, index) => (
              <div key={index} className="mt-2">
                <label className="block text-brown-800 mb-2">{`Pet ${index + 1} details:`}</label>
                <input
                  type="text"
                  placeholder="Pet Name"
                  className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
                  value={petDetails[index]?.name || ''}
                  onChange={(e) => handlePetDetailChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Pet Age"
                  className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
                  value={petDetails[index]?.age || ''}
                  onChange={(e) => handlePetDetailChange(index, 'age', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Pet Type"
                  className="bg-white p-2 rounded focus:outline-none focus:shadow-outline"
                  value={petDetails[index]?.type || ''}
                  onChange={(e) => handlePetDetailChange(index, 'type', e.target.value)}
                />
              </div>
            ))}
          </div>
        )}

        {/* New pet details input */}
        <div className="mt-4">
          <label className="block text-brown-800 mb-2">New Pet details:</label>
          <input
            type="text"
            placeholder="Pet Name"
            className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
            value={newPet.name}
            onChange={(e) => handleNewPetChange('name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Pet Age"
            className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
            value={newPet.age}
            onChange={(e) => handleNewPetChange('age', e.target.value)}
          />
          <input
            type="text"
            placeholder="Pet Type"
            className="bg-white p-2 rounded focus:outline-none focus:shadow-outline"
            value={newPet.type}
            onChange={(e) => handleNewPetChange('type', e.target.value)}
          />
          <button
            className="bg-orange-500 text-white p-2 px-4 rounded-full focus:outline-none ml-2"
            onClick={handleAddPet}
          >
            Add
          </button>
        </div>
      </div>

      {/* User's posts */}
      <div className="flex flex-col items-center mt-4">
        {/* Sample post */}
        <div className="bg-orange-100 p-4 my-2 w-full max-w-md relative">
          <p className="text-brown-800">Hello, this is my first post!</p>
          <img src={DoggoIcon} alt="Post Media" className="w-full h-auto mb-2" />
          <button className="absolute top-0 right-0 p-2 focus:outline-none">
            <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Add more posts as needed */}
      </div>
    </div>
  );
}

export default ProfilePage;