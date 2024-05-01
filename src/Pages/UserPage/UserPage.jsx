import Swal from "sweetalert2";
import { useContext } from "react";
import useUser from "../../hooks/useUser";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import { useAxiosPublic } from "../../hooks/useAxiosPublic";

export default function UserPage() {
  const { user, updateUser } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const [userDetails, isLoading, refetch] = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const updatedUser = {
      name: data.name,
      phone: data.phone,
      address: {
        district: data.district,
        city: data.city,
        zip: data.zip,
        details: data.address,
      },
    };
    axiosPublic.patch(`/users/${userDetails._id}`, updatedUser).then((res) => {
      if (res.data.modifiedCount === 1) {
        // Update User Display Name
        updateUser(user, data.name)
          .then(() => {
            console.log("Displayname Updated");
          })
          .catch((error) => {
            console.log(error);
          });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your profile updated",
          showConfirmButton: false,
          timer: 1500,
        });

        refetch();
      }
    });
  };

  return (
    <div>
      <div className="text-center p-5 border-b-2">
        <h3 className="text-2xl font-bold">My Profile</h3>
        <p>Add information about yourself</p>
      </div>

      <div className="w-8/12 mx-auto my-5">
        {isLoading ? (
          <>Loading User Data ...</>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input field */}
            <div className="mb-5">
              <div className="flex flex-col">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  defaultValue={userDetails?.name}
                  {...register("name", { required: true })}
                  className="p-3 w-full border border-black"
                />
              </div>
              {errors.name && (
                <p className="text-red text-sm">This field is required</p>
              )}
            </div>
            {/* Input field */}
            <div className="mb-5">
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  defaultValue={userDetails?.email}
                  disabled
                  className="p-3 w-full border border-black"
                />
              </div>
            </div>
            {/* Input field */}
            <div className="mb-5">
              <div className="flex flex-col">
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  defaultValue={userDetails?.phone}
                  {...register("phone")}
                  className="p-3 w-full border border-black"
                />
              </div>
            </div>
            {/* Input field */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex flex-col">
                <label htmlFor="">District</label>
                <select
                  defaultValue={userDetails?.address?.district}
                  className="border border-black capitalize p-3"
                  {...register("district")}
                >
                  <option value="barisal" className="capitalize">
                    barishal
                  </option>
                  <option value="chittagong" className="capitalize">
                    chittagong
                  </option>
                  <option value="dhaka" className="capitalize">
                    dhaka
                  </option>
                  <option value="maymensingh" className="capitalize">
                    maymensingh
                  </option>
                  <option value="khulna" className="capitalize">
                    khulna
                  </option>
                  <option value="rajshahi" className="capitalize">
                    rajshahi
                  </option>
                  <option value="comilla" className="capitalize">
                    comilla
                  </option>
                  <option value="rangpur" className="capitalize">
                    rangpur
                  </option>
                  <option value="sylhet" className="capitalize">
                    sylhet
                  </option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  defaultValue={userDetails?.address?.city}
                  className="p-3 border border-black"
                  {...register("city")}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Zip</label>
                <input
                  type="text"
                  defaultValue={userDetails?.address?.zip}
                  className="p-3 border border-black"
                  {...register("zip")}
                />
              </div>
            </div>
            {/* Input field */}
            <div className="mb-5">
              <div className="flex flex-col">
                <label htmlFor="">Address Details</label>
                <textarea
                  {...register("address")}
                  defaultValue={userDetails?.address?.details}
                  className="p-3 w-full border border-black h-28"
                />
              </div>
            </div>

            <input
              type="submit"
              // value="Update Profile"
              className="bg-primary text-white py-2 px-12 cursor-pointer"
            />
          </form>
        )}
      </div>
    </div>
  );
}
