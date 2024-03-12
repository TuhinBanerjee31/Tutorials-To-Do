import { useState } from "react";
import useStore from "../manager/store";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookForm = () => {
  //Bringing Adding method from the store
  const addToDataset = useStore((state) => state.addToDataset);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const notify = (line) => {

    if(!title){
      toast.warn(line, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    else if(!link){
      toast.warn(line, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    else{
      toast.success(line, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

  };

  //Adding data to store on click
  const handleSubmit = () => {
    if (!title) {
      return notify("Title is missing !!");
    } else if (!link) {
      return notify("Link is missing !!");
    }
    addToDataset({
      id: uuidv4(),
      title: title,
      link: link,
      description: description,
    });

    setTitle("");
    setLink("");
    setDescription("");

    notify("Successfully added to the list !!");
  };

  return (
    <form className="max-w-md mx-auto mt-3 px-4">
      <ToastContainer />
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:borderwhite dark:focus:border-ablack focus:outline-none focus:ring-0 focus:border-white peer"
          placeholder=" "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-ablack peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Title
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:borderwhite dark:focus:border-ablack focus:outline-none focus:ring-0 focus:border-white peer"
          placeholder=" "
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-ablack peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Link
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          className="block py-2.5 px-0 h-20 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:borderwhite dark:focus:border-ablack focus:outline-none focus:ring-0 focus:border-white peer"
          placeholder=" "
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-ablack peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Description
        </label>
      </div>

      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
        className="text-black bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-ablack font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-black dark:hover:text-white dark:focus:ring-black"
      >
        Add To List
      </button>
    </form>
  );
};

export default BookForm;
