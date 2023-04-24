// main_visual
const mainBanner = document.querySelector(".main_banner>ul");
const banner = document.querySelector(".main_banner");
const mainBannerLength = mainBanner.querySelectorAll("li").length;
let mainBannerNum = 0;
let bannerWidth = banner.offsetWidth;
const mainSlide = mainBanner.querySelectorAll("li");
const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");
const slideMove = document.querySelectorAll(".slide_move>li");


// 메인배너배열 앞뒤에 첫번째, 마지막번째 요소복제해서 추가
// 요소를 추가한만큼 width값 지정, 위치도 1번인덱스부터 보이게 left(위치)지정
// 메인배너 각li의 width값과 left(위치)지정
  const firstSlide = mainSlide[0].cloneNode(true);
  const lastSlide = mainSlide[mainBannerLength - 1].cloneNode(true);
  firstSlide.style.width = `${bannerWidth}px`;
  firstSlide.style.left = `${(mainBannerLength + 1) * bannerWidth}px`;
  lastSlide.style.width = `${bannerWidth}px`;
  lastSlide.style.left = `-0px`;

  mainBanner.appendChild(firstSlide);
  mainBanner.insertBefore(lastSlide, mainBanner.firstElementChild);

  mainBanner.style.width = `${(mainBannerLength + 2) * bannerWidth}px`;
  mainBanner.style.left = `-${bannerWidth}px`;

  mainSlide.forEach((li, index) => {
    li.style.width = `${bannerWidth}px`;
    li.style.left = `${(index + 1) * bannerWidth}px`;
  });

// 메인배너 버튼 클릭스 왼쪽,오른쪽으로 가게하기
btnNext.addEventListener("click", e => {
  e.preventDefault();
  mainBanner.style.transition = 'all 1s ease-in-out 0s';

  if (mainBannerNum < mainBannerLength) {
    mainBannerNum++;
    mainBanner.style.transform = `translateX(-${mainBannerNum * bannerWidth}px)`;
  }
  if (mainBannerNum === mainBannerLength) {
    setTimeout(() => {
      mainBanner.style.transition = '0ms';
      mainBanner.style.transform = `translateX(0)`;
      mainBannerNum = 0;
      mainbannerAction();
    }, 1000);
  }
  mainbannerAction();
});

btnPrev.addEventListener("click", e => {
  e.preventDefault();
  mainBanner.style.transition = 'all 1s ease-in-out 0s';

  if (mainBannerNum >= 0) {
    mainBannerNum--;
    if(mainBannerNum >= 0) {
      mainBanner.style.transform = `translateX(-${mainBannerNum * bannerWidth}px)`;
    }
    else{
      mainBanner.style.transform = `translateX(${bannerWidth}px)`;
    }
  } 
  if (mainBannerNum === -1) {
    setTimeout(() => {
      mainBanner.style.transition = '0ms';
      mainBannerNum = mainBannerLength - 1;
      mainBanner.style.transform = `translateX(-${mainBannerNum * bannerWidth}px)`;
      mainbannerAction();
    }, 1000);
  }
  mainbannerAction();
});

const mainbannerAction = () => {
  for(el of mainSlide){
    el.classList.remove("active");
  }
  mainSlide[mainBannerNum].classList.add("active");
  for(el of slideMove){
    el.classList.remove("on");
  }
  slideMove[mainBannerNum].classList.add("on");
}
  
// 오토배너
const autobanner = () =>{
  mainBanner.style.transition = 'all 1s ease-in-out 0s';

  if (mainBannerNum < mainBannerLength) {
    mainBannerNum++;
    mainBanner.style.transform = `translateX(-${mainBannerNum * bannerWidth}px)`;
  }
  if (mainBannerNum === mainBannerLength) {
    setTimeout(() => {
      mainBanner.style.transition = '0ms';
      mainBanner.style.transform = `translateX(0)`;
      mainBannerNum = 0;
      mainbannerAction();
    }, 1000);
  }
  mainbannerAction();
}
setInterval(autobanner, 5000);

/* resize */
let resetBannerSize = () => {
  bannerWidth = banner.offsetWidth;

  firstSlide.style.width = `${bannerWidth}px`;
  firstSlide.style.left = `${(mainBannerLength + 1) * bannerWidth}px`;
  lastSlide.style.width = `${bannerWidth}px`;
  lastSlide.style.left = `-0px`;

  mainBanner.style.width = `${(mainBannerLength + 2) * bannerWidth}px`;
  mainBanner.style.left = `-${bannerWidth}px`;

  mainSlide.forEach((li, index) => {
    li.style.width = `${bannerWidth}px`;
    li.style.left = `${(index + 1) * bannerWidth}px`;
  });
};

// 창 크기가 변경될 때마다 배너 크기를 조정하는 이벤트 리스너
window.addEventListener("resize", () => {
  resetBannerSize();
});

// 초기 실행
resetBannerSize();

// 마우스 드래그
moseDrag(mainBanner);