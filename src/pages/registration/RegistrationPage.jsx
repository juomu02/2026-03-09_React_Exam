import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

export default function RegistrationPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      membershipType: "",
      trainingGoal: "",
    },
  });

  const submitHandler = async (formData) => {
    await axios.post(`${API_URL}`, formData);

    reset();

    navigate("/");
  };
  return (
    <div className="flex justify-center items-center py-20 z-0">
      <form onSubmit={handleSubmit(submitHandler)} className="ml-5" noValidate>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Vardas:</legend>
          <input
            type="text"
            className="input"
            id="firstName"
            {...register("firstName", {
              required: "Įveskite lankytojo vardą",
              pattern: {
                value: /^[\p{L} ]*$/u,
                message: "Naudokite tik raides ir tarpus",
              },
            })}
          />
          <p className="label">{errors.firstName?.message}</p>
        </fieldset>{" "}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Pavardė:</legend>
          <input
            type="text"
            className="input"
            id="lastName"
            {...register("lastName", {
              required: "Įveskite lankytojo Pavardę",
              pattern: {
                value: /^[\p{L} ]*$/u,
                message: "Naudokite tik raides ir tarpus",
              },
            })}
          />
          <p className="label">{errors.lastName?.message}</p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Planas:</legend>
          <select
            className="select"
            id="membershipType"
            {...register("membershipType", {
              required: "Pasirinkte planą",
            })}
          >
            <option>Basic</option>
            <option>Premium</option>
            <option>VIP</option>
          </select>
          <span className="label">{errors.membershipType?.message}</span>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Amžius:</legend>
          <input
            type="text"
            className="input"
            id="price"
            {...register("age", {
              required: "Įveskite lankytojo amžių",
              validate: {
                positiveNumber: (fieldValue) => {
                  return fieldValue > 0 || "Įveskite teigiamą skaičių";
                },
              },
            })}
          />
          <p className="label">{errors.age?.message}</p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Lankymosi tikslas:</legend>
          <input
            type="message"
            className="input"
            id="cover"
            {...register("trainingGoal", {
              required: "Įveskite lankytojo tikslus ",
            })}
          />
          <p className="label">{errors.trainingGoal?.message}</p>
        </fieldset>
        <div>
          <input type="text" />
        </div>
        <div>
          <input
            type="submit"
            value="Registruoti"
            className="btn btn-soft btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
