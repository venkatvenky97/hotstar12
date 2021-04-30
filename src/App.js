import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Media from "./Media";
import MediaAd from "./MediaAd";

const images=[
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/1352/1000081352/1000081352-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6201/896201-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2451/732451-h"
]

function App() {
  return (
    <div className="App">
      <Header />
      <MediaAd />
      <div className="watch">
        <span className="span">Continue watch</span>
      </div>
      <div className="media-row">
    {
      images.map(image==>(<Media img={image)/>)
    }
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2521/602521-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1662/581662-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7460/627460-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/423/820423-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3943/553943-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9921/549921-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/517/260517-h"
         />
       
        
      </div>
      <div className="watch">
        <span className="span">Shows Recommended For You</span>
      </div>
      <div className="media-row">
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3118/883118-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5071/895071-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6195/766195-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1020/651020-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3621/673621-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1947/961947-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9915/929915-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6481/776481-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/786/580786-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1868/561868-h"
         />
        
      </div>
      <div className="watch">
        <span className="span">Best in Sports</span>
      </div>
      <div className="media-row">
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7241/967241-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7075/967075-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8043/968043-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3777/883777-h" 
        />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8980/798980-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4280/794280-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2329/952329-h"
         />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1926/571926-h
        " />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MATCH/1826/2001901826/2001901826-h" />
        <Media img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8946/958946-h"
         />
        
      </div>
      <Footer />
    </div>
  );
};




export default App;
