import * as S from "../../style/layout";
import imgObj01 from '../../images/photo/01.jpg';
import imgObj02 from '../../images/photo/02.jpg';
import imgObj03 from '../../images/photo/03.jpg';
import imgObj04 from '../../images/photo/04.jpg';
import imgObj05 from '../../images/photo/05.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


function Content() {
  return (
    <>
      {/* Swiper Image */}
      <S.ImgWrap>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={ imgObj01 } /></SwiperSlide>
          <SwiperSlide><img src={ imgObj02 } /></SwiperSlide>
          <SwiperSlide><img src={ imgObj03 } /></SwiperSlide>
          <SwiperSlide><img src={ imgObj04 } /></SwiperSlide>
          <SwiperSlide><img src={ imgObj05 } /></SwiperSlide>
        </Swiper>
      </S.ImgWrap>
      {/* 게시글 내용 */}
      <S.Content>
        <p>일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 ...</p>
        <span>2023.02.07 12:40</span>
      </S.Content>
    </>
  );
}
export default Content;