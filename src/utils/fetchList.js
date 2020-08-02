const fetchList = async (url) => {
  try {
    const rawData = await fetch(url);
    return await rawData.json();
  } catch (e) {
    console.error(e.message);
  }
};

export default fetchList;
