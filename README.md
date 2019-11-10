# vue-native-sample-app

## 環境構築手順
詳しくは[ブログ](https://sandfishfactory.hatenablog.com/entry/2019/11/09/093630)を見て下さい。

### 1. cliのインストール
```
yarn global add vue-native-cli
yarn global add expo-cli
```

### 2. vue-nativeプロジェクトの作成
```
git clone https://github.com/sandfishfactory/VueNativeSampleApp.git
cd VueNativeSampleApp
vue-native init blogapp
cp -r src/* blogapp
```


### 3. 必要なパッケージのインストール
```
cd blogapp
yarn add vuex vue-native-router react-native-reanimated react-native-gesture-handler react-native-paper react-native-vector-icons --save
```

### 4. React Nativeプロジェクトに変換
```
yarn eject
```

### 5. iOS用の開発準備
```
cd ios
pod install
```

### 6. 動作確認
```
yarn ios
```
