import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  const [data, setData] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e: any) => {
    setData(!data);
  };

  const emailValue = watch("Email");

  return (
    <>
      <section className="flex max-w-screen-xl min-h-[100vh] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-custom-white md:rounded-3xl min-h-[100vh] md:min-h-fit w-full md:w-[50rem] md:mx-auto my-auto drop-shadow">
          <div className="row-start-2 m-14 md:row-start-1 md:my-auto md:m-10">
            <h1 className="text-5xl font-bold font-roboto-bold text-dark-gray">
              Stay updated!
            </h1>
            <p className="text-sm mt-6 font-roboto">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="font-roboto text-sm my-6 space-y-2">
              <li className="flex">
                <img
                  src="./public/assets/images/icon-list.svg"
                  className="mr-4"
                />
                Product discovery and building what matters
              </li>
              <li className="flex">
                <img
                  src="./public/assets/images/icon-list.svg"
                  className="mr-4"
                />
                Measuring to ensure updates are a success
              </li>
              <li className="flex">
                <img
                  src="./public/assets/images/icon-list.svg"
                  className="mr-4"
                />
                And much more!
              </li>
            </ul>
            <form onSubmit={handleSubmit((data)=> onSubmit(data))}>
              <label htmlFor="Email" className="font-roboto-bold text-xs">
                Email address
              </label>
              <p className="float-right font-roboto-bold text-xs text-[#dc2626]">
                {errors.Email?.message?.toString()}
              </p>
              <input
                type="text"
                id="Email"
                placeholder="email@company.com"
                data-error={errors?.Email?.message?.toString()}
                className={`block py-4 px-6 w-full rounded-md font-roboto text-sm ${
                  errors.Email?.message
                    ? "border border-[#dc2626] bg-[#dc2626] text-[#dc2626] placeholder-[#dc2626] bg-opacity-50"
                    : "border border-grey"
                }`}
                {...register("Email", {
                  required: "Valid email required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Valid email required",
                  },
                })}
              />

              <button
                type="submit"
                className={` w-full rounded-md text-sm font-medium text-custom-white p-4 mt-6 bg-gradient-to-r from-dark-gray to-dark-gray hover:from-[#e4346e] hover:to-[#F0DE36]`}
              >
                Subscribre to monthly newsletter
              </button>
            </form>
          </div>
          <div className="md:m-6">
            <figure>
              <img
                className="hidden md:flex"
                src="/assets/images/illustration-sign-up-desktop.svg"
                alt=""
              />
              <img
                className="flex md:hidden w-full object-contain"
                src="/assets/images/illustration-sign-up-mobile.svg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
      <div
        className={`top-0 w-full h-full bg-dark-gray ${
          data === true ? "absolute" : "hidden"
        }`}
      >
        <div
          className={`absolute top-0 bottom-0 right-0 left-0 mx-auto my-auto w-full md:w-[30rem] h-full md:h-[30rem] bg-custom-white p-10 md:rounded-3xl`}
        >
          <img src="/assets/images/icon-success.svg" className="mb-8" alt="" />
          <h1 className="text-5xl font-roboto-bold text-dark-gray">
            Thanks for subscribing!
          </h1>
          <p className="font-roboto mt-3">
            A confirmation email has been sent to{" "}
            <span className="font-roboto-bold">{emailValue}</span>
            . Please open it and click the button inside to confirm yout subscription.
          </p>
          <button
            onClick={onSubmit}
            className="absolute right-10 left-10 bottom-10 w-[80%] rounded-md text-sm font-medium text-custom-white p-4 mt-6 bg-gradient-to-r from-dark-gray to-dark-gray hover:from-[#e4346e] hover:to-[#F0DE36]"
          >
            Dimiss message
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
