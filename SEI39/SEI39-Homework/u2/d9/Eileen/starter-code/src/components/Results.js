const Results = (props) => {
  return (
    <div className="Results">
      <button type="submit" onClick={props.onClick}>
        Search Again
      </button>
      {props.results.map((data) => {
        return data.show.name.toLowerCase().includes(props.input) ? (
          <div className="results">
            <img src={data.show.image.original}></img>
            <h2>{data.show.name}</h2>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Results;
