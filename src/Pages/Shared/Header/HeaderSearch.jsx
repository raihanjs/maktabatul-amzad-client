import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function HeaderSearch() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    navigate("/books", { state: data });
    reset();
  };

  return (
    <div className="w-[200px] lg:w-[280px] flex items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <input
            type="text"
            className="top-0 left-0 w-full py-1 px-3 focus-within:outline-0 rounded-l-sm"
            placeholder="Search..."
            {...register("search")}
          />

          <input
            type="submit"
            className="bg-[#F0141E] text-white py-1.5 px-3 border-1.5 border-[#F0141E]  rounded-r-sm text-sm"
          />
        </div>
      </form>

      {/* <button className="bg-[#F0141E] text-white py-1.5 px-3 border-1.5 border-[#F0141E]  rounded-r-sm text-sm">
        Search
      </button> */}
    </div>
  );
}
