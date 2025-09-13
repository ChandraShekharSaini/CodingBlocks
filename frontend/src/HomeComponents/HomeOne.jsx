import React from "react";

const HomeOne = () => {
  return (
    <section className="bg-[#1c1e25] w-[75%] mx-auto font-mulish text-white mt-16 px-10 py-10">
      <div className="flex flex-row items-center justify-between ">
        <div className=" w-[25%]  ">
          <p className="text-3xl font-bold">
            Why <br></br> <span>Coding Blocks?</span>
          </p>
        </div>

        <div className="text-[14px] w-[70%]  border-l border-gray-500 pl-3 ">
          With time tested, result oriented pedagogy & industry aligned courses
          offering project based learning, our courses are your perfect
          investment into your career. Get the best in the industry!
        </div>
      </div>

      <div className="flex flex-row gap-2 px-2 mt-10  justify-between">
        <div className="flex flex-col w-[22%] gap-3 border-r pr-2 border-gray-500">
          <img
            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/teacher.png"
            alt="image"
            className="w-7"
          />
          <h4 className="font-bold">Superb mentors</h4>

          <p className="text-[13px] leading-tight">
            Best in class mentors from top Tech schools and Industry favourite
            Techies are here to teach you.
          </p>
        </div>


        <div className="flex flex-col w-[22%] gap-3 border-r pr-2  border-gray-500">
          <img
            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/laptop.png"
            alt="image"
            className="w-7"
          />
          <h4 className="font-bold">Industry-vetted <br/> curriculum</h4>

          <p className="text-[13px] leading-tight">
            Best in class content, aligned to the Tech industry is delivered to you to ensure you are a darling of the Tech industry.
          </p>
        </div>


        <div className="flex flex-col w-[22%] gap-3  border-r pr-2 border-gray-500">
          <img
            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cd-bcm.webp"
            alt="image"
            className="w-7"
          />
          <h4 className="font-bold">Project based <br/> learning</h4>

          <p className="text-[13px] leading-tight">
            Hands on learning pedagogy with live projects to cover practical knowledge over theoretical one.
          </p>
        </div>



        <div className="flex flex-col w-[22%] gap-3 ">
          <img
            src="https://cb3img.s3.ap-south-1.amazonaws.com/img/office-bag.png"
            alt="image"
            className="w-7"
          />
          <h4 className="font-bold">Superb placements</h4>

          <p className="text-[13px] leading-tight">
            Result oriented courses with placement across all genres, students as well as Working professionals.
          </p>
        </div>


    
      </div>
    </section>
  );
};

export default HomeOne;
