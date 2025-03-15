import HeroImg from './assets/images/hero.jpg';
import ExperienceIc from './assets/icons/promo-percentage-icon.png';

const App = () => {
  return (
    <>
      <view className="pt-20 w-full h-96">
        <image src={HeroImg} className="w-full h-full" />
      </view>
      <view className="grid grid-cols-4 gap-4 py-4 px-4">
        <view
          className="auto w-full bg-red-500"
          style={{
            aspectRatio: '1/1',
          }}
        ></view>
        <view
          className="h-auto w-full bg-red-500"
          style={{
            aspectRatio: '1/1',
          }}
        ></view>
        <view
          className="auto w-full bg-red-500"
          style={{
            aspectRatio: '1/1',
          }}
        ></view>
        <view
          className="auto w-full bg-red-500"
          style={{
            aspectRatio: '1/1',
          }}
        ></view>
      </view>
      <view class="fixed bottom-0 right-0 left-0 bg-red h-10 bg-blue-200"></view>
    </>
  );
};

export default App;
