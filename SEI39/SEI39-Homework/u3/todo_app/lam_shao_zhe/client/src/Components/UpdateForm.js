import React, { useContext } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import contextStorage from "../context/context";

const Form = (props) => {
  const ctx = useContext(contextStorage);
  let data = props.response[0];
  console.log(data);

  const defaultValues = {
    title: data.title,
    time: new Date(),
    description: data.description,
    address: data.address,
    category: data.category,
    organisation: data.organisation,
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (e) => {
    let timedate = e.time.toISOString().substr(0, 10) + "T" + e.hour + ":" + e.minutes + ":00";
    e.time = timedate;
    delete e.hour;
    delete e.minutes;
    e.id = props.isUpdateForm;
    console.log(e);
    props.fetchPost(ctx.current + "/api/update", "PATCH", JSON.stringify(e));
    props.setIsUpdateForm(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Update Form</h1>
        <section>
          <label>Title</label>
          <input
            {...register("title", {
              required: true,
            })}
          />
          {errors?.title?.type === "required" && <p>This field is required</p>}
        </section>

        <section>
          <label>Select date and Time</label>
          <Controller
            control={control}
            name="time"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <ReactDatePicker
                className="input"
                placeholderText="date"
                onChange={(date) => onChange(date)}
                selected={value}
              />
            )}
          />
          <input
            type="number"
            placeholder="HH"
            {...register("hour", {
              required: true,
              maxLength: 2,
              min: 0,
              max: 24,
            })}
          />
          {errors?.hour?.type === "required" && <p>Hour field is required</p>}
          {errors?.hour?.type === "maxLength" && <p>Hour should be only 2 digits</p>}
          <input
            type="number"
            placeholder="MM"
            {...register("minutes", {
              required: true,
              maxLength: 2,
              min: 0,
              max: 60,
            })}
          />
          {errors?.minutes?.type === "required" && <p>Min field is required</p>}
        </section>

        <section>
          <label>Description</label>
          <input {...register("description")} />
        </section>

        <section>
          <label>Type</label>
          <select {...register("category")}>
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="others">others</option>
          </select>
        </section>

        <section>
          <label>With who?</label>
          <input {...register("audience.0")} />
          <input {...register("audience.1")} />
          <input {...register("audience.2")} />
        </section>

        <section>
          <label>organisation</label>
          <input {...register("organisation")} />
        </section>

        <section>
          <label>Address</label>
          <input {...register("address")} />
        </section>

        <section>
          <label>Recurring Event?</label>
          <select {...register("isRecurring")}>
            <option value="false">no</option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
          </select>
        </section>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
