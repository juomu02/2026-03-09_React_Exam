import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function Filter({ setUsers }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      likes: "",
    },
  });
  const [error, setError] = useState("");

  const filterUsers = async (formData) => {
    try {
      const { email, likes } = formData;
      const filterQuery = { email, likes_gte: likes };

      const response = await axios.get(API_URL, { params: filterQuery });
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="shadow my-2 p-2">
      {error && <p>{error}</p>}
      <h1 className="font-bold">Users filter</h1>
      <form onSubmit={handleSubmit(filterUsers)} noValidate>
       


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



        <div>
          <input
            type="submit"
            value="Filtruoti narius"
            className="bg-blue-300 p-1"
          />
          <input
            type="reset"
            value="Reset"
            onClick={() => {
              filterUsers({ email: "", posts: "" });
              reset();
            }}
            className="bg-blue-300 p-1 mx-2"
          />
        </div>
      </form>
    </div>
  );
}

