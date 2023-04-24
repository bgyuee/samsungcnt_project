/*common.js*/

window.addEventListener("load", () => {

  const headerWrap = document.querySelector(".header_wrap");
const businessField = document.querySelector(".businessfield");
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const keyInfoOpen = document.querySelector(".businessfield>a");
const keyInfoClose = document.querySelector(".keyinfo>div>a");
const keyinfo = document.querySelector(".keyinfo");
const language = document.querySelector(".util>ul>li:nth-child(2)");
const btnSrch = document.querySelector(".srch");
const srchBox = document.querySelector(".srchbox");

/*햄버거메뉴 */
const btnTabMeun = document.querySelector(".btn_tabMeun");
const tabMenu = document.querySelector(".tabMenu");
const tabList = document.querySelectorAll(".tab_snb>li");

// gnb메뉴 오버시 하위메뉴들 보이게, 마지막 메뉴 선택안되게
for(let i=0; i<gnbMenu.length-1; i++){
  gnbMenu[i].addEventListener("mouseover", e =>{
    e.currentTarget.querySelector("div").classList.add("on");
    srchBox.classList.remove("on");
    btnSrch.classList.remove("on");
    language.classList.remove("on");
  })
  gnbMenu[i].addEventListener("mouseout", e =>{
    e.currentTarget.querySelector("div").classList.remove("on");
  })
}

// keyinfo박스 열리고 닫히게
keyInfoOpen.addEventListener("click", e => {
  e.preventDefault();
  keyinfo.classList.add("on");
  businessField.classList.add("on");
});
keyInfoClose.addEventListener("click", e => {
  e.preventDefault();
  keyinfo.classList.remove("on");
  businessField.classList.remove("on");
});

// 언어설정
language.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
});

// srchbox
btnSrch.addEventListener("click", e => {
  e.preventDefault();
  srchBox.classList.toggle("on");
  btnSrch.classList.toggle("on");
})

// scroll내릴시 특정 영역에서 header사라지게
// scroll내릴시 특정 영역에서 header밑에 border추가
// scroll위로 올리면 header나오게
// 햄버거메뉴 나올대는 scoll내릴때 작동안되게

window.addEventListener("scroll", () => {
  let totalHeight = window.pageYOffset;
  let currnetHiehgt = document.documentElement.scrollHeight;
  let scrollAverage = totalHeight/currnetHiehgt;

  if(scrollAverage>=0.03) {
    if(btnTabMeun.classList.contains("on")) {
      headerWrap.classList.remove("active");
      headerWrap.style.borderBottom="none";
    } else {
      headerWrap.classList.add("active");
      headerWrap.style.borderBottom="1px solid #e5e5e5";
    }
  } else {
    headerWrap.classList.remove("active");
    headerWrap.style.borderBottom="none";
  }

  if (scrollAverage >= 0.1) {
    // 마우스 휠 이벤트 리스너 등록
    window.addEventListener("wheel", handleMouseWheel);
  } else {
    // 스크롤 위치가 0.5 미만인 경우 마우스 휠 이벤트 리스너 제거
    window.removeEventListener("wheel", handleMouseWheel);
    headerWrap.classList.remove("on");
  }
});

// 마우스 휠 이벤트 처리 함수
function handleMouseWheel(e) {
  // 스크롤 방향이 위쪽인 경우
  if (e.deltaY < 0) {
    // 헤더 요소에서 on 클래스 제거
    headerWrap.classList.remove("on");
  } 
  // 스크롤 방향이 아래쪽인 경우
  else {
    // 헤더 요소에 on 클래스 추가
    headerWrap.classList.add("on");
  }
}

// footer
const managementList = document.querySelector("#footer>ul>li:nth-child(4)");

managementList.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  const currentTarget = e.currentTarget.querySelector("ul");
  (e.currentTarget.classList.contains("on"))? currentTarget.style.visibility = "visible": currentTarget.style.visibility = "hidden";
});
const relatedsites = document.querySelector(".relatedsites");

relatedsites.children[0].addEventListener("click", e =>{
  e.preventDefault();
  relatedsites.classList.toggle("on");
  if(relatedsites.classList.contains("on")) {
    relatedsites.children[1].style.visibility = `visible`;
    relatedsites.children[1].style.height = `450px`;
  }
  else{
    relatedsites.children[1].style.visibility = `hidden`;
    relatedsites.children[1].style.height = `0`;
  }
})


/* 햄버거 메뉴 */
// 옆으로 열리고 닫히게 
btnTabMeun.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if(btnTabMeun.classList.contains("on")){
    tabMenu.classList.add("on")
    document.querySelector("body").style.overflow = "hidden";
  } 
  else{
    tabMenu.classList.remove("on");
    document.querySelector("body").style.overflow = "auto";
  }
  
});
// li클릭했을때 하위메뉴들이 나오고 안보이게 
tabList.forEach(li => {
  li.addEventListener("click", e =>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
  });
});



})
