import React, { useState, useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../Components/Card";
import ContextStorage from "../context/context";
import LoadingSpinner from "../Common/LoadingSpinner";
import Button from "../Common/Button";
import Form from "../Components/Form";
import UpdateForm from "../Components/UpdateForm";

const Appointment = () => {
  const ctx = useContext(ContextStorage);
  const [isform, setIsForm] = useState(false);
  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const [displayDate, setDisplayDate] = useState();
  const [day, setDay] = useState(0);

  const { response, isLoading, fetchPost } = useFetch(ctx.current + "/api/getall");

  useEffect(() => {
    let newDay = new Date().getDate() + day;
    let date = new Date().toISOString().substr(0, 8) + newDay;
    setDisplayDate(date);
    if (response) {
      setDisplayData([]);
      for (let i = 0; i < response.length; i++) {
        if (response[i].time.substr(0, 10) === date) {
          setDisplayData((prevState) => [...prevState, response[i]]);
        }
      }
    }
  }, [day, response]);

  const createHandler = (e) => {
    console.log(e.target);
    setIsForm(true);
  };

  const addHandler = () => {
    let x = day;
    x++;
    setDay(x);
    console.log("add", x);
  };

  const subHandler = () => {
    let x = day;
    x--;
    setDay(x);
    console.log("subtract", x);
  };

  const displayToggle = () => {
    if (response) {
      console.log(displayData);
      return displayData.map((element) => (
        <Card
          key={Math.random()}
          element={element}
          fetchPost={fetchPost}
          setIsUpdateForm={setIsUpdateForm}
        />
      ));
    }
  };

  return (
    <div>
      <h1>{displayDate}</h1>
      {isform && <Form setIsForm={setIsForm} fetchPost={fetchPost} response={response} />}
      {isUpdateForm && (
        <UpdateForm
          setIsUpdateForm={setIsUpdateForm}
          isUpdateForm={isUpdateForm}
          fetchPost={fetchPost}
          response={response}
        />
      )}
      <div className="cards-container">{isLoading ? <LoadingSpinner /> : displayToggle()}</div>
      <br />
      <div className="button-container">
        <Button name={"previous"} id={"previous"} clickHandler={subHandler} />
        <Button name={"create"} id={"create"} clickHandler={createHandler} />
        <Button name={"next"} id={"next"} clickHandler={addHandler} />
      </div>
    </div>
  );
};

export default Appointment;
