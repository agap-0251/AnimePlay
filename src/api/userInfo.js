import { getDataById } from "./api";

const getWatchList = (name) => {
  const {array} = JSON.parse(localStorage.getItem(name));
  if (array.length === 0) {
    return [];
  } else {
    return [...array];
  }
};

const addedTo = (data) => {
  const localList = getWatchList();
  console.log(data);
  console.log(localList.some((item) => item.mal_id === data.mal_id));
  return localList.some((item) => item.mal_id === data.mal_id);
};

const removeWatchItem = (name,data) => {
  const {pass,array} = JSON.parse(localStorage.getItem(name))
  const updatedList = array.filter((item) => item.mal_id != data.mal_id);
  localStorage.setItem(name, JSON.stringify({pass:pass,array:[...updatedList]}));
};

const setWatchId = (data) => {
  const userList = localStorage.getItem("list");
  if (userList === "undefined" || userList === null || userList === "") {
    if (data !== null) localStorage.setItem("list", JSON.stringify([data]));
    else localStorage.setItem("list", JSON.stringify([]));
  } else {
    const list = JSON.parse(userList);
    if (list.includes(data)) return;
    else localStorage.setItem("list", JSON.stringify([...list, data]));
  }
};

const isUserPresent = (name, password) => {
  if (localStorage.getItem(name) === null) {
    localStorage.setItem(name, JSON.stringify({ pass: password, array: [] }));
    return true;

  }
  else {
    const {pass,array} = JSON.parse(localStorage.getItem(name))

    if(pass === password)
        return true;
    else
        return false;
  }
};

const addToList = (name, data) => {
    const {pass,array} = JSON.parse(localStorage.getItem(name));
    if(array.length === 0)
    localStorage.setItem(name, JSON.stringify({ pass: pass, array: [data] }));
    else
      localStorage.setItem(name, JSON.stringify({ pass: pass, array: [...array,data] }));
};

const removeFromList = (name, data) => {
  const {pass,array} = JSON.parse(localStorage.getItem(name));
  const updatedArray = array.filter((item) => item.mal_id != data.mal_id);
  localStorage.setItem(name, JSON.stringify({ pass: pass, array: [...updatedArray] }));
};


export { getWatchList };
export { removeWatchItem };
export { addedTo };
export { setWatchId };
export { isUserPresent };

export { addToList };
export { removeFromList };
