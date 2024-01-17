import styled from "styled-components";
import bg_footer from "@/public/bg-footer.png";
import Footer from "./main/Footer";

export default function Section05() {
  return (
    <>
      {/* Section 05 */}
      <Section05 />
      <PaperTexture image={bg_footer.src}>
        <div ref={section04_ref}>
          <div className="" ref={section04_trigger}>
            <div className="h-screen w-full border flex justify-around items-start flex-col p-[10%]">
              <div ref={section04_text_1} className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                nesciunt omnis atque culpa explicabo ad, sed itaque corrupti
                aliquid asperiores, quia necessitatibus assumenda, esse expedita
                repudiandae possimus nemo dolorem iusto.
              </div>
              <div className="flex flex-col">
                <div ref={section04_text_2}>b</div>
                <div ref={section04_text_3} className="text-8xl">
                  SECTION04_TEXT03
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section06 ref={section06_ref}>
          <div className="flex justify-center items-center w-full h-full flex-col gap-10">
            <div className="gallery flex flex-row gap-5 w-[90%] mx-auto">
              <div className="gallery-item h-[30vh] w-[30vw] bg-[#d9d9d9]">
                asdf
              </div>
              <div className="gallery-item h-[30vh] w-[30vw] bg-[#e78383]">
                asdf
              </div>
              <div className="gallery-item h-[30vh] w-[30vw] bg-[#FFAB5E]">
                asdf
              </div>
              <div className="gallery-item h-[30vh] w-[30vw] bg-[#7B8D73]">
                asdf
              </div>
              <div className="gallery-item h-[30vh] w-[30vw] bg-[#4B5944]">
                asdf
              </div>
            </div>
            <p className="gallery-title text-start w-[90%] mx-auto text-9xl font-bold">
              GALLERY
            </p>
          </div>
        </Section06>

        <Footer comp={comp} />
      </PaperTexture>
    </>
  );
}

const Section06 = styled.div`
  /* width: 100vw; */
  height: 100vh;
  background-color: #aba4a4d7;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;
const PaperTexture = styled.div.withConfig({
  shouldForwardProp: (prop) => "image" !== prop,
})`
  background-image: url(${(props) => props?.image});
`;
