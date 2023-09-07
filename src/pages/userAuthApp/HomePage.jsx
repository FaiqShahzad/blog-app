import {
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as DribbleLogo } from "../../assets/userAuthApp/svgs/dribble-logo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/userAuthApp/svgs/facebook-logo.svg";
import { ReactComponent as GitHubLogo } from "../../assets/userAuthApp/svgs/github-logo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/userAuthApp/svgs/linkedin-logo.svg";
import React from "react";
import Spinner from "../../components/userAuthApp/Spinner";
import ThemeSwitcher from "../../components/userAuthApp/ThemeSwitcher";
import { ReactComponent as TwitterLogo } from "../../assets/userAuthApp/svgs/twitter-logo.svg";
import _ from "lodash";
import { logout } from "../../redux/users/actionCreator";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/userAuthApp/images/user.png";

function HomePage() {
  const showLoader = useSelector((state) => state.Users.loading);

  const userData = useSelector((state) => state.Users.currentUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout(navigate));
  }

  return (
    <>
      <Spinner show={showLoader} />
      <div className="flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-[#E2E8F0] dark:bg-gray-800">
        <header className="flex w-full items-center justify-start bg-gray-700 px-4 text-white dark:bg-gray-900">
          <div className="flex items-center justify-start flex-1">
            <SearchOutlined className="ml-4" />
            <input
              name="searchBar"
              type="search"
              placeholder="Type to search..."
              className="m-2 w-2/3 rounded-md bg-gray-700 p-2 focus:outline-none focus:ring focus:ring-indigo-custom dark:bg-gray-900"
            />
          </div>

          <div className="ml-auto flex items-center justify-center space-x-4">
            <ThemeSwitcher />
            <LogoutOutlined
              className="cursor-pointer hover:text-indigo-500"
              onClick={handleLogout}
            />
            <SettingOutlined className="cursor-pointer hover:text-indigo-500" />
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-indigo-custom font-bold hover:animate-wiggle-more hover:animate-infinite">
              {_.first(userData.name || userData.firstName)}
            </div>
          </div>
        </header>

        <main className="flex h-full w-full flex-col items-center justify-start overflow-y-auto overflow-x-hidden dark:text-gray-200">
          <div className="mx-auto p-6">
            <div>
              <h1 className="text-4xl font-semibold">Profile</h1>
            </div>

            <div className="mt-4 overflow-hidden rounded-md bg-white dark:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80"
                alt="profile cover"
                className="relative z-20 h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
              />

              <div className="p-4 text-center">
                <div className="mx-auto -mt-20 h-32 w-32 ">
                  <img
                    src={
                      userData?.image ||
                      userData?.picture?.data?.url ||
                      userData?.picture ||
                      userImage
                    }
                    alt="profile"
                    className="relative z-30 rounded-full w-full h-full border-2 border-indigo-custom bg-white "
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-2xl font-semibold">
                    {userData?.name || userData.firstName}
                  </h3>

                  <div className="mx-auto my-4 grid max-w-sm grid-cols-1 rounded-md bg-indigo-custom text-white md:grid-cols-3">
                    <div className="mx-4 my-2 flex border-spacing-2 flex-row items-center justify-center space-x-2 border-b-[1px] md:mx-0 md:border-b-0 md:border-r-[1px] md:border-white">
                      <span className="text-lg font-bold">259</span>
                      <span className="text-sm">Posts</span>
                    </div>
                    <div className="mx-4 my-2 flex border-spacing-2 flex-row items-center justify-center space-x-2 border-b-[1px] md:mx-0 md:border-b-0 md:border-r-[1px] md:border-white">
                      <span className="text-lg font-bold">129K</span>
                      <span className="text-sm">Follower</span>
                    </div>
                    <div className="my-2 flex border-spacing-2 flex-row items-center justify-center space-x-2">
                      <span className="text-lg font-bold">2K</span>
                      <span className="text-sm">Following</span>
                    </div>
                  </div>

                  <div className="mx-auto max-w-2xl">
                    <h4 className="font-semibold">About Me</h4>

                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque posuere fermentum urna, eu condimentum mauris
                      tempus ut. Donec fermentum blandit aliquet. Etiam dictum
                      dapibus ultricies. Sed vel aliquet libero. Nunc a augue
                      fermentum, pharetra ligula sed, aliquam lacus.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium">Follow me on</h4>

                    <div className="mt-4 flex flex-row items-center justify-center space-x-2">
                      <FacebookLogo className="cursor-pointer hover:fill-indigo-custom" />
                      <TwitterLogo className="cursor-pointer hover:fill-indigo-custom" />
                      <LinkedInLogo className="cursor-pointer hover:fill-indigo-custom" />
                      <DribbleLogo className="cursor-pointer hover:fill-indigo-custom" />
                      <GitHubLogo className="cursor-pointer hover:fill-indigo-custom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;
