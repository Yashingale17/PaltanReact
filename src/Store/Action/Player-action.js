import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosHttp from "../../utils/axiosHttp";

export const getCategory1Players  = createAsyncThunk("players/getCategory1Players", async () => {
  try{
    const response = await axiosHttp.get("?cat_id=1");
    return response.data
  }catch(error) {
    return "error"
  }
})  

export const getCategory2Players  = createAsyncThunk("players/getCategory2Players", async () => {
  try{
    const response = await axiosHttp.get("?cat_id=2");
    return response.data
  }catch(error) {
    return "error"
  }
})  

export const getCategory3Players  = createAsyncThunk("players/getCategory3Players", async () => {
  try{
    const response = await axiosHttp.get("?cat_id=3");
    return response.data
  }catch(error) {
    return "error"
  }
})  

