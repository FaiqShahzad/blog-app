import "react-toastify/dist/ReactToastify.css";

import React, { useEffect, useState } from "react";
import {
  fetchAllTvShows,
  reInit,
  searchTvShowAPI,
} from "../../redux/shows/actionCreator";
import { useDispatch, useSelector } from "react-redux";

import FilterSection from "../../components/tvShowApp/FilterSection";
import Loader from "../../components/tvShowApp/Loader";
import Page404 from "../../components/tvShowApp/Page404";
import Pagination from "../../components/tvShowApp/Pagination";
import TvShowCard from "../../components/tvShowApp/TvShowCard";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const AllTvShows = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const [tvShowList, setTvShowList] = useState(null);
  let allShows = useSelector((shows) => shows.TvShows);
  const totalPages = allShows.summary.pages;

  const queryParams = new URLSearchParams(search);
  let searchParam = queryParams.get("search");
  const pageParam = queryParams.get("page") || 1;
  const country = queryParams.get("country");
  const network = queryParams.get("network");
  const isSorted = queryParams.get("isSorted");

  if (searchParam === "null") searchParam = null;

  useEffect(() => {
    if (allShows?.error) {
      toast.error(allShows?.error);
      dispatch(reInit());
    } else if (allShows?.success) {
      toast.success(allShows?.success);

      dispatch(reInit());
    }
  }, [allShows?.error, allShows?.success]);

  useEffect(() => {
    searchParam
      ? dispatch(searchTvShowAPI(searchParam, pageParam))
      : dispatch(fetchAllTvShows(pageParam));
  }, [searchParam, pageParam]);

  useEffect(() => {
    setTvShowList(allShows.tvShows);
  }, [allShows]);

  return (
    <>
      <FilterSection
        pageNo={pageParam}
        data={{
          allShows: allShows?.tvShows,
          tvShowList: tvShowList,
          setTvShowList: setTvShowList,
          country: country,
          network: network,
          isSorted: isSorted === "true",
        }}
      />

      {allShows?.loading ? (
        <Loader />
      ) : tvShowList?.length > 0 && pageParam < totalPages ? (
        <div className="grid grid-cols-1  mx-20 justify-center pt-8 xs:mx-0 md:mx-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {tvShowList?.map((tvShow, index) => (
            <div key={index}>
              <TvShowCard data={tvShow} key={index} />
            </div>
          ))}
          {/* <ToastContainer /> */}
        </div>
      ) : (
        <Page404 errorMsg="No Result Found" />
      )}
      <Pagination searchParam={searchParam} pageParam={pageParam} />
    </>
  );
};

export default AllTvShows;
