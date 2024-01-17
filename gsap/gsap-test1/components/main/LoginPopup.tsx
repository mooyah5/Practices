import { ChangeEvent, MouseEventHandler, useState } from "react";
import closeBtn from "@/public/close.png";
import Image from "next/image";

interface ILoginPopupProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  id: string;
  password: string;
  // handleChangeId: ChangeEventHandler<HTMLInputElement>;
  // handleChangePassword: ChangeEventHandler<HTMLInputElement>;
}

export default function LoginPopup({
  onConfirm,
  onClose,
}: // id,
// password,
// handleChangeId,
// handleChangePassword,
ILoginPopupProps) {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  };

  return (
    <div className="absolute z-50 rounded-bl-[100px] bg-[#675647] text-neutral-50 p-10 flex flex-col gap-3 top-0 right-0 bg-opacity-90">
      <button className="absolute top-10 right-10" onClick={onClose}>
        <Image src={closeBtn} width={20} height={20} alt="close"></Image>
      </button>
      <div className="flex flex-col gap-2 mt-16">
        <div className="flex flex-row items-center gap-2">
          <p className="w-[30px]">ID</p>
          <input
            name="id"
            className="border border-neutral-200 rounded-md text-sm px-4 py-1 text-[#676547]"
            placeholder="아이디"
            type="text"
            onChange={(e: any) => handleOnChange(e)}
            value={id}
            maxLength={30}
          />
        </div>
        <div className="flex flex-row items-center gap-2 ">
          <p className="w-[30px]">PW</p>
          <input
            name="password"
            className="border border-neutral-200 rounded-md text-sm px-4 py-1 text-[#676547]"
            placeholder="비밀번호"
            onChange={(e: any) => handleOnChange(e)}
            value={password}
            type="password"
            maxLength={30}
          />
        </div>
      </div>
      <button
        onClick={onConfirm}
        className="hover:scale-[101%] w-fit mx-auto border-[0.5px] border-white p-2 px-4 rounded-lg duration-300 hover:bg-white hover:bg-opacity-70 hover:text-[#675647]"
      >
        LOGIN
      </button>
    </div>
  );
}
