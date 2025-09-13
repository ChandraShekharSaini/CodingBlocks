import React from "react";

const HomeTwo = () => {
  const imagesRow1 = [
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/aishwaryav-hashedin.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/aakashdhingra-mercedes.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/abhigyaverma-microsoft.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/akashmodak-meta.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/akhileshkumar-qualcomm.webp",
  ];

  const imagesRow2 = [
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/mansisharma-blackrock.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/gautamwadhwani-paytm.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/farhanahmadjafri-samsung.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/ayushkhandelwal-amazon.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/avinashkumar-paytm.webp",
  ];

  const imagesRow3 = [
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/sanchakshkaul-oracle.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/sauravkumar-walmart.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/siddharthabose-dell.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/venkatasaisreekar-servicenow.webp",
    "https://cb3img.s3.ap-south-1.amazonaws.com/img/Testimonials/yennasairamreddy-oracle.webp",
  ];

  const renderRow = (images, rowIndex) => (
    <div key={rowIndex} className="flex gap-4 justify-center mb-3 ">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative h-[150px] w-[220px] rounded-md overflow-hidden animate-slide"
        >
          <img
            src={src}
            alt={`student-${rowIndex}-${index}`}
            className="h-full w-full object-cover rounded-md"
          />
          {/* bottom border */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          {/* right border */}
          <div className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-red-600 to-pink-500"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden w-full bg-gray-900 py-6 mt-7">
      <p className="flex flex-row items-center gap-5 text-[32px] text-white font-bold  mt-4 mb-6 ml-32">
        Success stories at Coding Blocks 

        <img src ="https://cb3img.s3.ap-south-1.amazonaws.com/img/bheartred.svg" alt="image" className="w-7  h-7"/>
      </p>

      {renderRow(imagesRow1, 1)}
      {renderRow(imagesRow2, 2)}
      {renderRow(imagesRow3, 3)}
    </div>
  );
};

export default HomeTwo;
