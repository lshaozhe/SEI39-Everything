const WeatherIcon = (props) => {
  return (
    <div class="weather">
      <img src={props.img} />
      <p>
        <span>conditions:</span>
        {props.conditions}
      </p>
      <p>
        <span>time:</span>
        {props.time}
      </p>
    </div>
  );
};

export default WeatherIcon;
