import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  dataset: [], //Main Array/List that stores data

  //Method that's used for adding data to dataset
  addToDataset: (data) => {
    set((state) => ({
      dataset: [data, ...state.dataset],
    }));
  },

  //Method that's used for removing data to dataset
  removeFromDataset: (dataId) => {
    set((state) => ({
      dataset: state.dataset.filter((data) => data.id !== dataId),
    }));
  },

  //Method that's used for toggling between mark and unmark
  markStatus: (dataId) => {
    set((state) => ({
      dataset: state.dataset.map((data) =>
        data.id === dataId ? { ...data, marked: !data.marked } : data
      ),
    }));
  },
});


//Creating store for storing and managing data
const useStore = create(
  devtools(
    persist(store, {
      name: "dataSet",
    })
  )
);

export default useStore;
