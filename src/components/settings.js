import React, { useState } from 'react';
import './style.css';
import DoggoIcon from './doggo.png';
import { BellIcon, InboxIcon, UserIcon, CogIcon } from '@heroicons/react/24/solid';

function SettingsPage() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSaveUsername = () => {
    // Save the new username (you can add your logic here)
    setIsEditingUsername(false);
    console.log('New username saved:', newUsername);
  };

  const handleSavePassword = () => {
    // Save the new password (you can add your logic here)
    setIsEditingPassword(false);
    console.log('New password saved:', newPassword);
  };

  const handleSaveEmail = () => {
    // Save the new email (you can add your logic here)
    setIsEditingEmail(false);
    console.log('New email saved:', newEmail);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className="bg-orange-500 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <ul>
          <li
            className="cursor-pointer hover:bg-orange-600 p-2 rounded"
            onClick={() => setIsEditingUsername(true)}
          >
            Change Username
          </li>
          <li
            className="cursor-pointer hover:bg-orange-600 p-2 rounded"
            onClick={() => setIsEditingPassword(true)}
          >
            Change Password
          </li>
          <li
            className="cursor-pointer hover:bg-orange-600 p-2 rounded"
            onClick={() => setIsEditingEmail(true)}
          >
            Change Email
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center bg-orange-400 p-3">
          <div className='mx-4'>
            <img src={DoggoIcon} alt='' className="h-10 w-10 rounded-full" />
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

        {/* Settings Page */}
        <div className="flex flex-col items-center p-4 bg-orange-100 flex-grow">
          <h1 className="text-2xl font-semibold text-brown-800 mt-4">Account Settings</h1>

          {/* Change Username Section */}
          {isEditingUsername && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-brown-800 mb-2">Change Username</h2>
              <>
                <input
                  type="text"
                  placeholder="New Username"
                  className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
                  value={newUsername}
                  onChange={handleUsernameChange}
                />
                <button
                  className="bg-orange-500 text-white p-2 px-4 rounded-full focus:outline-none ml-2"
                  onClick={handleSaveUsername}
                >
                  Save
                </button>
              </>
            </div>
          )}

          {/* Change Password Section */}
          {isEditingPassword && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-brown-800 mb-2">Change Password</h2>
              <>
                <input
                  type="password"
                  placeholder="New Password"
                  className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
                  value={newPassword}
                  onChange={handlePasswordChange}
                />
                <button
                  className="bg-orange-500 text-white p-2 px-4 rounded-full focus:outline-none ml-2"
                  onClick={handleSavePassword}
                >
                  Save
                </button>
              </>
            </div>
          )}

          {/* Change Email Section */}
          {isEditingEmail && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-brown-800 mb-2">Change Email</h2>
              <>
                <input
                  type="email"
                  placeholder="New Email"
                  className="bg-white p-2 rounded focus:outline-none focus:shadow-outline mr-2"
                  value={newEmail}
                  onChange={handleEmailChange}
                />
                <button
                  className="bg-orange-500 text-white p-2 px-4 rounded-full focus:outline-none ml-2"
                  onClick={handleSaveEmail}
                >
                  Save
                </button>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;