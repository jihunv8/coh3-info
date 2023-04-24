# COH3 Info

![release version label](https://img.shields.io/static/v1?label=release&message=v0.1.1&color=blue&style=flat-square)
![game data version label](https://img.shields.io/static/v1?label=game_data&message=v1.1.4&color=green&style=flat-square)

게임 Company of heroes3 유닛 정보 웹앱 프로젝트

웹 사이트 : https://coh3info.com


## 목표

Company of Heroe3(이하 coh3)는 게임 내 유닛의 능력치를 자세히 알려주지 않기 때문에 유닛의 특징과 유닛간 대결의 우위를 파악하기 어렵습니다. 이는 유저들이 게임에 적응하는데 오래걸립니다.

이 프로젝트는 게임 내 유닛의 정보를 쉽게 파악하게하여 게임의 접근성을 낮추어 새로 유입된 유저와 기존 유저들이 좀 더 원활하게 게임을 플레이 할 수 있도록 돕는 것을 목표로 합니다.
 
 ## 기술 스택
 ### 클라이언트
 
 ![node.js version label](https://img.shields.io/static/v1?label=node.js&message=v18.15.0&color=43853d&style=flat-square)
 ![typescript version label](https://img.shields.io/static/v1?label=typescript&message=v4.9.5&color=3178c6&style=flat-square)
 ![react version label](https://img.shields.io/static/v1?label=react&message=v18.2.0&color=61dafb&style=flat-square)
 ![react-redux version label](https://img.shields.io/static/v1?label=react-redux&message=v8.0.5&color=764abc&style=flat-square)
 ![styled-components version label](https://img.shields.io/static/v1?label=styled-components&message=v5.3.9&color=db7093&style=flat-square)
 ![chart.js version label](https://img.shields.io/static/v1?label=chart.js&message=v4.2.1&color=FF6384&style=flat-square)
 
 ### 배포
 
![netlify label](https://img.shields.io/static/v1?label=&message=netlify&color=555555&style=flat-square)
 
 ![skills drawio](https://user-images.githubusercontent.com/78804014/233882218-dcf9c63b-2d65-4a20-934b-98812d1dafcd.png)
 
 ## 개발 환경 실행법
 ```
 npm start
 ```
 
 ## 개발 아키택쳐
 이 프로젝트는 데이터를 추출하여 나온 json파일을 맵핑하여 사용합니다. 
 
 json파일의 데이터는 정의된 인터페이스에 따라 맵핑되어야합니다. 데이터 인터페이스는 src/types/game_data/ 폴더에 위치해 있습니다. (Unit은 맵핑된 데이터를 하나로 통합하는 인터페이스 입니다. 자세한 내용은 `추후 노션링크 넣기 ...!!!`에서 확인해주세요.)
 ### 데이터 인터페이스 예시
 
 [Squad](https://github.com/coh3-info/coh3-info/blob/75e83910fc1debe1267ad73aaec6d6bd720a98c7/src/types/game_data/squad.d.ts#L10),
 [Entity](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/game_data/entity.d.ts#L13),
 [Weapon](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/game_data/weapon.d.ts#L30)
 

 맵핑된 데이터로 Stats객체를 생성해 사용합니다. Stats 인터페이스는 src/types/stats/ 폴더에 위치해 있습니다.
 ### Stats 인터페이스 예시
 
 [SquadStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/squadStats.d.ts#L3),
 [EntityStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/entityStats.d.ts#L3),
 [WeaponStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/weaponStats.d.ts#L14)
 
 
 
 ## 게임 데이터와 이미지
 게임 데이터와 이미지는 추출기 가이드에 따라 추출하여 사용합니다.
 
 추출기 가이드 : `추후 노션링크 추가하기..!!!`

 
 (추출기 제작자분이 사용해도 좋다고 허락해주셨습니다.)
 ### 데이터 추출기
 https://github.com/cohstats/coh3-data
 
 ### 이미지 추출기
 https://github.com/cohstats/coh3-image-extractor
 
 
