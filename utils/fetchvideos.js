export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "9e9d1774c1msh466883d3e45f1a2p177ae1jsnbecdb564c67e",
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchVideos = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };