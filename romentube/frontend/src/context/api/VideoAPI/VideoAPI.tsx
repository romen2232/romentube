import axios from "axios";

export interface Video {
    id: number
    title: string
    description: string
    video: File
    thumbnail: File
}

/**
 * Get all videos
 * @returns {Promise<Video[]>} Array of videos
 */
const getAllVideos = async ()=>{
    const response = await axios.get("http://localhost:8000/videos")
    const videos = JSON.parse(response.data)
    return videos
}

/**
 * Get a video by id
 * @param {number} id Video id
 * @returns {Promise<Video>} Video
 * @throws {Error} If video not found
 * @throws {Error} If video id is not a positive number
 * */
const getVideo = async (id: number)=>{
    if(id <= 0){
        throw new Error("Video id must be a positive number")
    }
    const response = await axios.get(`http://localhost:8000/videos/${id}`)
    if(response.status === 404){
        throw new Error("Video not found")
    }
    const video = JSON.parse(response.data)
    return video
}


//TODO HACER BIEN EL VIDEO Y EL THUMBNAIL
const postVideo = async (video: File)=>{
    const formData = new FormData();
    formData.append('video', video);
    axios({
        method: 'post',
        url: 'http://localhost:8000/videos',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(function (response) {
        console.log(response);
    }
    ).catch(function (response) {
        console.log(response);
    }
    );
}

const deleteVideo = async (id: number)=>{
    axios({
        method: 'delete',
        url: `http://localhost:8000/videos/${id}`,
    }).then(function (response) {
        console.log(response);
    }
    ).catch(function (response) {
        console.log(response);
    }
    );
}

const updateVideo = async (id: number, video: File)=>{
    const formData = new FormData();
    formData.append('video', video);
    axios({
        method: 'put',
        url: `http://localhost:8000/videos/${id}`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(function (response) {
        console.log(response);
    }
    ).catch(function (response) {
        console.log(response);
    }
    );
}

const VideoAPI = {
    getAllVideos
    ,getVideo,
    postVideo,
    deleteVideo,
    updateVideo
}

export default VideoAPI
