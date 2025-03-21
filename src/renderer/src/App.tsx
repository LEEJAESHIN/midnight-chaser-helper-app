import { useState } from 'react'
import s_bed from './assets/imgs/s_bed.png'
import s_box from './assets/imgs/s_box.png'
import s_clock from './assets/imgs/s_clock.png'
import s_closet from './assets/imgs/s_closet.png'
import s_mirror from './assets/imgs/s_mirror.png'
import s_musicbox from './assets/imgs/s_musicbox.png'
import s_piano from './assets/imgs/s_piano.png'
import s_sofa from './assets/imgs/s_sofa.png'
import s_statue from './assets/imgs/s_statue.png'
import bed from './assets/imgs/bed.png'
import box from './assets/imgs/box.png'
import clock from './assets/imgs/clock.png'
import closet from './assets/imgs/closet.png'
import mirror from './assets/imgs/mirror.png'
import musicbox from './assets/imgs/musicbox.png'
import piano from './assets/imgs/piano.png'
import sofa from './assets/imgs/sofa.png'
import statue from './assets/imgs/statue.png'


function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const template = [
    { small: s_bed, big: bed },
    { small: s_box, big: box },
    { small: s_clock, big: clock },
    { small: s_closet, big: closet },
    { small: s_mirror, big: mirror },
    { small: s_musicbox, big: musicbox },
    { small: s_piano, big: piano },
    { small: s_sofa, big: sofa },
    { small: s_statue, big: statue },
  ];

  const sections = Array(9).fill(null).map(() => [...template]);

  const [smallImgs] = useState(sections);
  const [clickImgs, setClickImgs] = useState(Array(9).fill(''));

  const handleSmallImg = (img, idx) => {
    // const smallImgsCopy = [...smallImgs];
    // for(let i = 0; i < smallImgsCopy.length; i++) {
    //   smallImgsCopy[i] = smallImgsCopy[i].filter((item) => item.small !== img.small);
    // }
    // setSmallImgs(smallImgsCopy);

    setClickImgs({ ...clickImgs, [idx]: img.big });
  }
  const handleBigImg = (idx) => {
    // 9개의 인덱스를 만들고
    // 클릭시 해당 인덱스의 값만 없애는걸로.?

    setClickImgs({ ...clickImgs, [idx]: '' });
  }

  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='flex flex-row h-100 border-b-2 border-gray-200'>
          <div className='w-full flex flex-wrap justify-center px-2 py-2 border-r-2 border-gray-200'>
            {clickImgs[0] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[0]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(0)}
                />
              </div>
              : smallImgs[0].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 0)}
                />
              ))}
          </div>
          <div className='w-full flex flex-wrap justify-center px-2 py-2 border-r-2 border-gray-200'>
            {clickImgs[1] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[1]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(1)}
                />
              </div>
              : smallImgs[1].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 1)}
                />
              ))}
          </div>
          <div className='w-full flex flex-wrap justify-center px-2 py-2'>
            {clickImgs[2] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[2]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(2)}
                />
              </div>
              : smallImgs[2].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 2)}
                />
              ))}
          </div>
        </div>
        <div className='flex flex-row h-100 border-b-2 border-gray-200'>
          <div className='w-full flex flex-wrap justify-center px-2 py-2 border-r-2 border-gray-200'>
            {clickImgs[3] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[3]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(3)}
                />
              </div>
              : smallImgs[3].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 3)}
                />
              ))}
          </div>
          <div className='w-full flex flex-wrap justify-center px-2 py-2 border-r-2 border-gray-200'>
            {clickImgs[4] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[4]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(4)}
                />
              </div>
              : smallImgs[4].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 4)}
                />
              ))}
          </div>
          <div className='w-full flex flex-wrap justify-center px-2 py-2'>
            {clickImgs[5] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[5]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(5)}
                />
              </div>
              : smallImgs[5].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 5)}
                />
              ))}
          </div>
        </div>
        <div className='flex flex-row h-100'>
          <div className='w-full flex flex-wrap justify-center px-2 py-2 border-r-2 border-gray-200'>
            {clickImgs[6] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[6]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(6)}
                />
              </div>
              : smallImgs[6].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 6)}
                />
              ))}
          </div>
          <div className='w-full flex flex-wrap justify-center px-2 py-2 border-r-2 border-gray-200'>
            {clickImgs[7] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[7]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(7)}
                />
              </div>
              : smallImgs[7].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 7)}
                />
              ))}
          </div>
          <div className='w-full flex flex-wrap justify-center px-2 py-2'>
            {clickImgs[8] !== "" ?
              <div className='flex justify-center items-center'>
                <img
                  src={clickImgs[8]}
                  alt='small'
                  className='w-24 h-24 cursor-pointer'
                  onClick={() => handleBigImg(8)}
                />
              </div>
              : smallImgs[8].map((img, idx) => (
                <img
                  key={idx}
                  src={img.small}
                  alt='small'
                  className='w-8 h-8 cursor-pointer'
                  onClick={() => handleSmallImg(img, 8)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
