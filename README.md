# 김남경 201740202 
## RN2021

React-Native 2021

# 05월 28일

>1. navigation  install (설치)
>npm install @react-navigation/native
>
>2. Installing dependencies into a bare React Native project (설치)
>npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

>3. 화면이동시
 <a href="details.html">Go to Details</a>
 or 
 <a
  onClick={() => {
    window.location.href = 'details.html';
  }}
>
  Go to Details
</a>
하지만 리액트네이티브에서는  onPress가 사용

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
 
>4. Tab navigation( https://reactnavigation.org/docs/tab-based-navigation )
    Drawer navigation( https://reactnavigation.org/docs/drawer-based-navigation )
 
>5. npm install -g expo-cli (expo설치)
    expo init ProjectName -> expo start -> Press w (실행됨)
>6. createMaterialBottomTabNavigator expo에서 만들기 (https://reactnavigation.org/docs/material-bottom-tab-navigator)

# 05월 07일
>1. 중간고사 풀이
>2. 구조분해 할당, 기본할당, 새로운변수 이름으로 할당하기 (모질라)
>3.  index,mycomponent,mycomponentstyles 등 컴포넌트 이름변경,파일이름변경 (저번주 실습)
>4. 배경색(background-color) 설명
>5. 오늘 실습(App.js) backgroundColor넣기
>6. border 스타일 설명


# 04월 30일
>1. 외부 스타일 적용하기
>2. bind()함수 사용 방법 

# 04월 23일
>1. 중간고사 임포트 Text 를 못함 추가하면 정상작동 

# 04월 16일
>1. 버튼을 만들어서 속성 값 전달하기 
>2. 넘어오는 값 버튼으로 삭제 하기 
>3. 스타일 캡슐화(스타일은 밖에 빼는게 더좋을것같다)
>4. switch문 으로 type에 값들어 가있는거 확인후 todo에 반환
 
# 04월 09일
>1. 모듈화 
>2. Input 타입을 사용
>3. 디버깅이용해서 값 넘어오는거 확인~3-13까지
>4. 입력값 배열에 넣기

# 04월 02일
>1. 생명주기
>2. 구조분해 할당

# 03월 26일
>1. 동적 정적 props 사용 
>2. state를 사용해서 배열이나 변수를  출력





