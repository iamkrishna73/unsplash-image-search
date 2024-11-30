import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Yn1YT7vlJDHjSd36n2MDFuTRWVKE058vqxSnWFTc2J4",
    },
    params: {
      query: term,
    },
  });

  // console.log(response);
  return response.data.results;
};

export default searchImages;
