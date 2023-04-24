/*main.js*/
// newsroom
const newsroomFront= document.querySelectorAll(".newsroom_cards .card_front");
// smallbanner
const smallBanner = document.querySelector(".small_banner>ul");
const smallLength = smallBanner.querySelectorAll("li").length-1;
const smallPrev = document.querySelector(".small_slide_prev");
const smallNext = document.querySelector(".small_slide_next");
const slideCount = document.querySelector(".slide_count");
let smallNum = 0;

smallPrev.addEventListener("click", e => {
  e.preventDefault();
  smallNum --;
  smallBanner.style.transform = `translateX(${50*smallNum}%`;
  if(smallNum<0) smallNum=smallLength;
  slideCount.querySelector("span").innerText = `${smallNum+1}`;
});
smallNext.addEventListener("click", e => {
  e.preventDefault();
  smallNum ++;
  if(smallNum>smallLength) smallNum=0;
  smallBanner.style.transform = `translateX(-${50*smallNum}%`;
  slideCount.querySelector("span").innerText = `${smallNum+1}`;
});

// 카드앞부분 배경이미지 하나씩추가
newsroomFront.forEach((el,index) => {
  el.style.backgroundImage = `url(images/newsroom_ALL_${index+1}.jpg)`;
  el.style.backgroundRepeat = `no-repeat`;
  el.style.backgroundSize = `cover`;
  el.style.backgroundPosition = `50% 50%`;
})


// content1 각 li에 mosemover시 각li이의 넓이가 커지고 영상재상
  //재생버튼 눌렀을때 이미지 바뀌게 하기
const business = document.querySelectorAll(".content1>ul>li");
const btnVideo = document.querySelectorAll(".video_btn");

business.forEach((li) => {
  li.addEventListener("mouseover", () =>{
    (videoPlay == 1)? li.querySelector("video").pause():li.querySelector("video").play();
    for(el of business){
      el.style.width = "17.5%";
    }
    li.style.width = "45%";
    li.classList.add("on");
  });
  li.addEventListener("mouseleave", () =>{
    for(el of business){
      el.style.width = "24.3%"
      }
      li.querySelector("video").pause();
      li.querySelector("video").load();
      li.classList.remove("on");
      li.querySelector(".video_btn").style.backgroundImage = `url(../images/pause.png)`;
      videoPlay=0;
  });
});

let videoPlay = 0;

btnVideo.forEach((btn) => {
  btn.addEventListener("click", e =>{
    e.preventDefault();
    if(videoPlay == 0){
      e.currentTarget.closest("li").querySelector("video").pause();
      e.currentTarget.style.backgroundImage = `url(../images/play.png)`;
      videoPlay = 1;
    }
    else{
      e.currentTarget.closest("li").querySelector("video").play();
      e.currentTarget.style.backgroundImage = `url(../images/pause.png)`;
      videoPlay = 0;
    }
  })
});

// content2 각 li눌렀을대 .on붙이기
const esg = document.querySelectorAll(".content2>ul>li");
esg.forEach((li) => {
  li.addEventListener("mouseover", () =>{
    li.classList.add("on");
  })
  li.addEventListener("mouseleave", () =>{
    li.classList.remove("on");
  })
})

// content3 뉴스룸 버튼 클릭시 ul위치 이동
const cards = document.querySelector(".newsroom_cards");
const cardLength = document.querySelectorAll(".newsroom_cards>li").length-1;
const slidePrev = document.querySelector(".newsroom_slide_prev");
const slideNext = document.querySelector(".newsroom_slide_next");
let slideNum = 0;
slidePrev.addEventListener("click", e =>{
  e.preventDefault();
  slideNum--;
  if(slideNum>=0){
    cards.style.transform = `translateX(${-12.72*slideNum}%)`;
  }
  else{
    slideNum=0;
  }
});
slideNext.addEventListener("click", e =>{
  e.preventDefault();
  slideNum++;
  if(slideNum<=cardLength-2){
    cards.style.transform = `translateX(${-12.72*slideNum}%)`;
  }
  else{
    slideNum=cardLength-2;
  }
});

// content4 각 li클릭시 해당 내용으로 보이게 옮기기
const globalMeun = document.querySelectorAll(".global_meun>li");
const globalTrend = document.querySelector(".global_trend");
const globalList = document.querySelector(".global_trend>div:first-child");

globalMeun.forEach((li,index) => {
  li.addEventListener("click", e => {
    e.preventDefault();
    for(let el of globalMeun){
      el.classList.remove("on");
    }
    e.currentTarget.classList.add("on");
    globalList.style.transform = `translateX(-${index*globalTrend.offsetWidth}px)`

  })
})
