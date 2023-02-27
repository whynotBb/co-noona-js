날씨 api
https://openweathermap.org/

동영상파일
https://www.pexels.com/ko-kr/search/videos/Clear%20sky/

icon
https://fonts.google.com/

todo

1. v 현재 시간 실시간으로 보여주기(2/22)
2. v 현재 위치 가져와서 기본 날씨 보여주기
3. v 돋보기 아이콘 클릭 시 input box 노출 되며 도시 검색 기능 제공(클릭/enter)
   - input에 포커스 기능 추가
4. - 시간별 예측(4일 96 타임스탬프) 가져와 5개 그룹으로 페이징 하기(토글,아코디언스타일) → free 제공 안됨
     => 5일간 3시간마다의 예보 는 free 제공 됨
     => 날짜 형식 커스텀=> 방법 찾아보고 안되면, 라이브러리(http://momentjs.com/ )=>.substr(5, 11) 기본문법으로해결
5.
6. - 날씨에 따라 배경 동영상 변경
7. - 에러 핸들링: 없는 도시 입력 / 영어가 아닌경우? https://curryyou.tistory.com/208/
8. 검색어 태그 기능 : 검색한 단어는 태그로 저장
   => 클릭 시 날씨 랜더
   => x 버튼 삭제
9. api key 숨기라고
   GitGuardian에서 메일 왔다;;=> api 키 다른파일로 빼고 gitignore 처리

10. - tag 중복 시 추가안되는 기능

배열.join(""); => 배열을 그릴때 나타나는 쉼표 지우기 ","
참고
https://velog.io/@chloe_park/Javascript-14.weather-API-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0

섭씨 = (Kelvin u2013 273.15)
켈빈 = (섭씨 + 273.15)

main 날씨 icon으로 나타내야 하는 case list 확인
clear
clouds
rain
thunderstorm
snow
mist
Drizzle

mist
Smoke
Haze
Dust
Fog
Sand
Dust
Ash
Squall
Tornado
