import useStore from "../manager/store";

const Footer = () => {
  const { dataset } = useStore((state) => ({
    dataset: state.dataset,
  }));

  const conditionalStyle = () => {
    if(dataset.length === 0) {
      return 'absolute';
    }
    else {
      return 'relative';
    }
  }

  return (
    <div className="mt-20 mb-5">
      <h1 className="text-center text-white w-full text-xl bottom-0 mb-5" style={{position: conditionalStyle()}}>
        Developed with ❤️ by{" "}
        <a
          href="https://github.com/TuhinBanerjee31"
          className="hover:text-2xl hover:font-semibold duration-300 ease-in-out"
        >
          Tuhin Banerjee
        </a>
      </h1>
    </div>
  );
};

export default Footer;
