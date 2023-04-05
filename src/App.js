import { useState } from 'react';
import './App.css';

// this array holds the data for the carousel
const photos = [
  
  {
    id: 'p1',
    title: '01 . JAVA-SCRIPT',
   // title2: 'Number',
    url: 'https://cutewallpaper.org/21/javascript-wallpaper/JavaScript-Wallpapers-Wallpaper-Cave.jpg',
  },
  {
    id: 'p2',
    title: '02 . PYTHON',
    url: 'https://c4.wallpaperflare.com/wallpaper/645/96/47/python-programming-programming-programming-language-code-hd-wallpaper-preview.jpg',
  },
  {
    id: 'p3',
    title: '03 . GO',
    url: 'https://www.freecodecamp.org/news/content/images/2021/10/golang.png',
  },
  {
    id: 'p4',
    title: '04 . JAVA',
    url: 'https://contentstatic.techgig.com/photo/93000110/What-makes-Java-still-popular-among-developers.jpg',
  },
  {
    id: 'p5',
    title: '05 . KOTLIN',
    url: 'https://www.contentside.com/wp-content/uploads/2016/05/kotlin.png',
  },
  {
    id: 'p6',
    title: '06 . PHP',
    url: 'https://stevedesign.com.pl/wp-content/uploads/2012/05/php-logo.png',
  },
  {
    id: 'p7',
    title: '07 . C#',
    url: 'https://kaancamur.com/Images/Eng/Articles/Thumb/article_id_17.jpg',
  },
  {
    id: 'p8',
    title: '08 . SWIFT',
    url: 'https://mycodetips.com/wp-content/uploads/2019/10/swiftAPI.jpeg',
  },
  {
    id: 'p9',
    title: '09 . RUBY',
    url: 'https://www.techquintal.com/wp-content/uploads/2021/10/Ruby.jpg',
  },
  {
    id: 'p10',
    title: '10 . C++',
    url: 'https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129776/regular_1708x683_cover-0828_AfterAllTheseYearstheWorldisStillPoweredbyCProgramming_Razvan_Newsletter-2b9ea38294bb08c5aea1f0c1cb06732f.png',
  },
  {
    id: 'p11',
    title: '11 . C',
    url: 'https://www.technotification.com/wp-content/uploads/2018/08/is-c-programming-still-worth-learning-1024x576.png',
  },
  {
    id: 'p12',
    title: '12 . MATLAB',
    url: 'https://www.analyticsinsight.net/wp-content/uploads/2022/07/MATLAB-A-Programming-Language-Every-Tech-aspirant-Wants-to-Learn.jpg',
  },
  {
    id: 'p13',
    title: '13 . TYPE-SCRIPT',
    url: 'https://www.meticulous.ai/assets/blog/posts/safer-exhaustive-switch-statements-in-typescript/safer-exhaustive-switch-statements-in-typescript.jpeg',
  },
  {
    id: 'p14',
    title: '14 . SCALA',
    url: 'https://lvivity.com/wp-content/uploads/2020/02/scala.jpg',
  },
  {
    id: 'p15',
    title: '15 . SQL',
    url: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/171121027/original/151d339f1059ab4bdac72ac344f4747c17fd69d0/create-your-database-with-mysql-or-oracle.jpg',
  },
  
];

function App() {

  
  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {/* Render the carousel */}
      <div className='slider-container'>
        {photos.map((photo) => (
          <div
            key={photo.id}

            // if the photo is the current photo, show it
            className={
              photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
            }
          >
            <img src={photo.url} alt={photo.title} className='photo' />
            <div className='caption'>{photo.title}</div>
          </div>
        ))}

        {/* Previous button */}
        <button onClick={prev} className='prev'>
          &lt;
        </button>

        {/* Next button */}
        <button onClick={next} className='next'>
          &gt;
        </button>
      </div>

      {/* Render dots indicator */}
      <div className='dots'>
        {photos.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
}

export default App;