import { useEffect, useState } from "react";



function App() {
  const images = [
  {
    id: 1,
    img: "./src/public/img.1.jpg",
    isIt: false,
  },
  {
    id: 2,
    img: "./src/public/img2.jpg",
    isIt: true,
  },
  {
    id: 3,
    img: "./src/public/img3.jpg",
    isIt: false,
  },
  {
    id: 4,
    img: "./src/public/img4.jpg",
    isIt: false,
  },
  {
    id: 5,
    img: "./src/public/img5.jpg",
    isIt: false,
  },
  {
    id: 6,
    img: "./src/public/img6.jpg",
    isIt: false,
  },
  {
    id: 7,
    img: "./src/public/img7.jpg",
    isIt: false,
  },
  {
    id: 8,
    img: "./src/public/img8.jpg",
    isIt: false,
  },
  {
    id: 9,
    img: "./src/public/img9.jpg",
    isIt: false,
  },
  {
    id: 10,
    img: "./src/public/img10.jpg",
    isIt: false,
  },
  {
    id: 11,
    img: "./src/public/img11.jpg",
    isIt: false,
  },
  {
    id: 12,
    img: "./src/public/img12.jpg",
    isIt: false,
  },
  {
    id: 13,
    img: "./src/public/img13.jpg",
    isIt: false,
  },
  {
    id: 14,
    img: "./src/public/img14.jpg",
    isIt: false,
  },
  {
    id: 15,
    img: "./src/public/img.15.jpg",
    isIt: false,
  },
];
  const [img, setImg] = useState();
  const hanleClick = (imgg) => {
    const oneIMg = images.find((imggg) => imggg.img === imgg.img);
    oneIMg.isIt = !oneIMg.isIt;

    setImg(oneIMg);
  };

  const hanleNext = (id) => {
    const oneEl = id == 14 ? id - 13 : id + 1;
    const filterEl = images.find((img) => img.id == oneEl);
    filterEl.isIt = !filterEl.isIt;

    setImg(filterEl);
  };
  const hanlePrev = (id) => {
    const oneEl = id == 1 ? id + 13 : id - 1;
    const filterEl = images.find((img) => img.id == oneEl);
    filterEl.isIt = !filterEl.isIt;

    setImg(filterEl);
  };

  return (
    <>
      <div className="max-w-[70%] flex justify-center gap-5 rounded-lg p-6 mt-[5%] flex-col text-center  mx-auto">
        <div className="relative max-w-full">
          <img
            className="w-[70%] h-[450px] flex mx-auto  rounded-lg"
            src={img ? img.img : images[2].img}
            alt=""
          />
          <button
            onClick={() => {
              hanleNext(img ? img.id : images[2].id);
            }}
            className="font-black text-lx px-3 py-1 text-center rounded-full bg-slate-300 absolute top-[50%] right-[160px]"
          >{`>`}</button>
          <button
            onClick={() => {
              hanlePrev(img ? img.id : images[2].id);
            }}
            className="font-black text-2lx px-3 py-1 text-center rounded-full bg-slate-300 absolute top-[50%] left-[160px]"
          >{`<`}</button>
        </div>

        <div className="cardd">
          {images.map((img) => (
            <img
              key={img.id}
              onClick={() => {
                hanleClick(img);
              }}
              className="w-[95px] cursor-pointer  h-[85px] rounded"
              src={img.img}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
