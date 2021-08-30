interface Iitem {
   key: string;
   value: string;
}

const setItem = (item: Iitem) => {
   if (!item.key || !item.value) return;
   localStorage.setItem(item.key, item.value);
};

const getItem = (key: string): any => {
   return localStorage.getItem(key);
};

export { setItem, getItem };
