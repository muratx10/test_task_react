const fetchList = async (url) => {
  const rawData = await fetch(url);
  return await rawData.json();
};

export default fetchList;
