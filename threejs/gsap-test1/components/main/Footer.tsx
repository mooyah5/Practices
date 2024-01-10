import bg_footer from "@/public/bg-footer.png";
import footer_img_1 from "@/public/footer_img_1.png";
import footer_img_2 from "@/public/footer_img_2.png";
import Image from "next/image";
export default function Footer() {
  return (
    <section
      style={{ backgroundImage: `url(${bg_footer.src})` }}
      className="relative h-screen flex flex-col justify-center items-center p-[5%]"
    >
      <div className="w-full h-24"></div>
      <div className="w-full h-full flex flex-row">
        <div className="flex justify-start items-end w-full h-full">
          <div className="">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">E-MAIL</p>
              <p>artch@nitsoft.biz</p>
            </div>
          </div>
        </div>
        <div className="gap-4 ml-72 w-full h-full flex justify-end flex-col">
          <svg
            width="60"
            height="60"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="36"
              cy="36"
              r="35.75"
              stroke="black"
              stroke-width="0.5"
            />
            <path
              d="M17 26.5L36 17L54.5 26.5V54.5H17V26.5Z"
              stroke="black"
              stroke-width="0.5"
            />
            <path
              d="M17 26.5L36 41L54.5 26.5"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>

          <div className="font-extralight text-xs">
            아치의 새로운 콜라보 프로젝트와 다양한 정보가 담긴 뉴스레터를 통해
            최신 소식을 받아보세요!
          </div>
          <div className="text-xs">
            숨는다면 서는 앞이, 넋은, 나오니까 일을, 주다,
          </div>
          <div className="flex flex-col mt-10 text-7xl">
            <div>JOIN</div>
            <div className="flex flex-row items-end gap-4">
              <div>US</div>
              <div>
                <input
                  className="text-base border-b border-black bg-transparent font-extralight pr-12 pl-2"
                  type="text"
                  placeholder="ENTER YOUR EMAIL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={600}
        height={600}
        className="absolute -bottom-36 left-1/3 scale-50 object-bottom -translate-x-1/2"
        src={footer_img_1.src}
        alt=""
      />
      <Image
        width={700}
        height={700}
        className="absolute -bottom-32 left-[calc(50%-20px)] scale-50 object-bottom -translate-x-1/2"
        src={footer_img_2.src}
        alt=""
      />
    </section>
  );
}
