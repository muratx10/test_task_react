const fetchList = async (url) => {
  if (url !== '') {
    try {
      const rawData = await fetch(url);
      return await rawData.json();
    } catch (e) {
      console.error(e.message);
    }
  } else {
    console.log('%cTHERE\'S NO DATA TO FETCH', 'color: red; font-size: 18px');
  }
};

export default fetchList;
