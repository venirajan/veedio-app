import {commonAPI} from './commonAPI'
import { serverURL } from './serverURL'

//upload a video
export const uploadVideo =async (reqBody)=>{
    //call post http request to http:localhost:4000/videos to add video in json server and return response to Add component
  return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}
//get all videos from json server
export const getAllVideos =async ()=>{
    //make get http request to http:localhost:4000/videos to get all videos from json server and return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}
//get a videos from json server
export const getAVideo =async (id)=>{
        //make get http request to http:localhost:4000/videos to get all videos from json server and return response to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}
// remove a video from json server
export const deleteAVideo =async (id)=>{
        //make delete http request to http:localhost:4000/videos to get all videos from json server and return response to Videocard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}
// store watching video history to json server
export const  addToHistory = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}
// get all watching video history from json server
export const getAllHistory = async()=>{
    return await commonAPI("GET",`${serverURL}/history`,"")
}
// delete watching video history from json server
export const deleteHistory = async(id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}
 // adding category
 export const addCategory = async (reqBody)=>{
    //make get http request to http://localhost:4000/categories to add category in json server and return response to category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)
 }
//  get all category from json server
export const getAllCategory = async ()=>{
    //make get http request to http://localhost:4000/categories to add category in json server and return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
 }
//  remove category from json server
export const deleteCategory = async (id)=>{
    //make get http request to http://localhost:4000/categories to delete category in json server and return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
 }

// update category
//  remove category from json server
export const updateCategory = async (id,body)=>{
    //make put http request to http://localhost:4000/categories/id to update particular category in json server and return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
 }
export default uploadVideo