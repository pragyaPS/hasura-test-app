import React, { useState, useEffect } from "react";
import AlbumList from "./AlbumList";
import AddAlbum from "./AddAlbum";
import apiConfig from "../../../config/api.config";
import httpService from "../../../utils/httpService";
import {RESPONSE_SUCCESS} from "../../../utils/constants";

const DashBoardPage = () => {
  const [albumList, setAlbumList] = useState([]);
  const [isAlbumLoading, setIsAlbumLoading] = useState(true);

  const handleAlbumSubmit = async (albumParams) => {
    await httpService.post(apiConfig.addAlbum, albumParams);
    setIsAlbumLoading(true);
    loadAlbums();
  };

  const loadAlbums = async () => {
    let { data, status } = await httpService.get(apiConfig.allAlbums);
    if (status === RESPONSE_SUCCESS) {
      setIsAlbumLoading(false);
    }
    setAlbumList(data);
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <>
      <AddAlbum {...{ handleAlbumSubmit }} />
      <AlbumList {...{ albumList, isAlbumLoading }} />
    </>
  );
};

export default DashBoardPage;
