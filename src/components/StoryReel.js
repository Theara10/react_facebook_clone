import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t1.0-9/122847585_2670038136644178_51212964070963508_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH9_G2zcEjm4vdtd7rK3XK3MaYhBX4ylh0xpiEFfjKWHcWcnmm0P1VBQz51ZFr4BA5s9BsRVmSSAbQnLWBjfZCz&_nc_ohc=FSOFhiN2pVgAX-akdQW&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=14d62d30a95f6ae30c3b80518fdecfd7&oe=5FD8D617"
        title="Kit Dara"
        image="https://i.guim.co.uk/img/media/cd6efbd1bade44704b0b4f1d7a2b72e3a635a823/0_247_5568_3341/master/5568.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b5f07bf68d4cfc50b6277ca8cda7cc27"
      />
      <Story
        profileSrc="https://timesknowledge.wwmindia.com/content/2019/jun/capamerica1560330575.jpg"
        image="https://www.komar.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/S/H/SHX8-087_1568286487.jpg"
        title="Som Visal"
      />
      <Story
        profileSrc="https://www.indiewire.com/wp-content/uploads/2019/04/D5Up3sIW0AEMM3R.jpg?w=780"
        image="https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg"
        title="Channarith"
      />
      <Story
        profileSrc="https://www.indiewire.com/wp-content/uploads/2019/04/D5Up3sIW0AEMM3R.jpg?w=780"
        image="https://i2.wp.com/backtothegaming.com/wp-content/uploads/2020/06/marvels-iron-man-screen-01-ps4-us-04sep19.jpg?resize=1220%2C687&ssl=1"
        title="Vong"
      />
      <Story
        profileSrc="https://www.indiewire.com/wp-content/uploads/2019/04/D5Up3sIW0AEMM3R.jpg?w=780"
        image="https://i.redd.it/3kceooolcib51.jpg"
        title="Dyna Prak"
      />
    </div>
  );
}

export default StoryReel;
