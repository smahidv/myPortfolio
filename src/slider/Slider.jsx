import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper.css'
import { Navigation, Pagination, Scrollbar, A11y } from '../../node_modules/swiper/modules';
import '../../node_modules/swiper/modules/navigation.css';
import '../../node_modules/swiper/modules/pagination.css';
import '../../node_modules/swiper/modules/scrollbar.css';
import bookmark from "../images/bookmark.png"
import space from "../images/space-tourism-website.png"
import product from "../images/product-main-page.png"
import booking from "../images/booking.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "./costomSlide.css"

const slidesData = [

  {
    imageSrc: bookmark,
    altText: 'bookmark',
    projectLinks: {
      live: 'https://smahidv.github.io/bookmark/',
      github: 'https://github.com/smahidv/bookmark',
      description:'Developing a landing page for a browser extension using React.js'
    }
  },
  {
    imageSrc: booking,
    altText: 'booking',
    projectLinks: {
      live: 'https://mern-task-app-lwts.onrender.com/',
      github: 'https://github.com/smahidv/mern-booking',
      description:'Creating a hotel reservation website using MERN STACK'
    }
  },
  {
    imageSrc: product,
    altText: 'product-main-page',
    projectLinks: {
      live: 'https://smahidv.github.io/product-main-page/',
      github: 'https://github.com/smahidv/product-main-page',
      description:'Designing a web page enabling the addition of articles to the shopping cart'
    }
  },
 

  {
    imageSrc: space,
    altText: 'space-tourism-website',
    projectLinks: {
      live: 'https://smahidv.github.io/space-tourism-website/',
      github: 'https://github.com/smahidv/space-tourism-website',
      description:"Establishing a space and astronomy blog"
    }
  
 
  }

];

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className='swiper-costomized'
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="image-container relative">
            <div className="overlay"></div>
            <img src={slide.imageSrc} alt={slide.altText} />
            <div className="project-icons flex">
              <a href={slide.projectLinks.live}><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#ffffff"}} /></a>
              <a href={slide.projectLinks.github}><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff"}} /></a>
            </div>
           
          </div>
          <div className="description-project absolute">
              {slide.projectLinks.description}
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
