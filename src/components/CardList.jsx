import Card from "./Card";
import useStore from "../manager/store";

const CardList = () => {
  const { dataset } = useStore((state) => ({
    dataset: state.dataset,
  }));

  // const dataset = useStore((state) => state.dataset);

  return (
    <div className="mt-20 w-full">
      <div className="header-container w-full flex justify-center items-center gap-x-3.5">
        <div className="line max-w-sm border-4 rounded border-white"></div>
        <h1 className="text-white text-4xl uppercase">Tutorial List</h1>
        <div className="line max-w-sm border-4 rounded border-white"></div>
      </div>

      {dataset.length !== 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-5 my-10 mx-3 duration-200 ease-in-out">
          {dataset.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
        </div>
      ) : (
        <div className="py-10 flex justify-center items-center gap-4 duration-200 ease-in-out">
          <h1 className="text-center uppercase text-2xl">
            List is currently Empty !!
          </h1>
          <ion-icon name="layers-outline" style={{color: "black"}}></ion-icon>
        </div>
      )}
    </div>
  );
};

export default CardList;
