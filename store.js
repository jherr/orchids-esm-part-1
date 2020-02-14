const createStore = () => {
  let count = 0;
  let image = '/orchids/orchid1.jpg';
  const subscribers = [];
  return {
    getCount: () => count,
    getImage: () => image,
    incrementCount: () => {
      count += 1;
      subscribers.forEach(s => s());
    },
    setImage: (img) => {
      image = img;
      subscribers.forEach(s => s());
    },
    subscribe: (fn) => {
      subscribers.push(fn);
    },
  };
};

const store = createStore();

export default store;
