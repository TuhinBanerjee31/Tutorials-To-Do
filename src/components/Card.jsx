/* eslint-disable react/prop-types */
import "../styles/Card.css";
import useStore from "../manager/store";

const Card = (props) => {
    const {markStatus, removeFromDataset} = useStore(
        (state) => ({
            markStatus: state.markStatus,
            removeFromDataset: state.removeFromDataset,
        })
    )

  return (
    <div className="card" style={{backgroundColor: props.data.marked ? "rgba(36, 237, 96, 0.45)" : "rgba(255, 255, 255, 0.45)"}}>
      <h3 className="font-semibold">{props.data.title}</h3>
      <p>{props.data.description}</p>
      <div className="flex justify-between items-center gap-x-3">
        <a href={props.data.link} className="card-footer">
          Link
        </a>
        <div className="flex gap-x-3">
          <button onClick={() => {markStatus(props.data.id)}}>Completed</button>
          <button onClick={() => {removeFromDataset(props.data.id)}}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
