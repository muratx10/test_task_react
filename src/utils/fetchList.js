const fetchList = async (url) => {
  const rawData = await fetch(url);
  const data = await rawData.json();
  console.log(data);
  return data;
};

export default fetchList;
