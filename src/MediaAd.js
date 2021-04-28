import React from "react";
import "./MediaAd.css";

const MediaAd = () => {
  return (
    <div className="mediaAd">
      <div className="text">
        <span>MS Dhoni:The Untold Story</span>
        <p>2hr 58min . 2016 . Biopic . PG . Tamil,Hindi</p>
        <h6>
        M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical
        sports drama film written and directed by Neeraj Pandey. It is based on 
        the life of former Test, ODI and T20I captain of the Indian national cricket
        team, Mahendra Singh Dhoni. The film stars Sushant Singh Rajput as Dhoni, 
        along with Disha Patani, Kiara Advani, and Anupam Kher. The film chronicles
        the life of Dhoni from a young age through a series of life events.
        </h6>
      </div>
      <div className="mediaImage">
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h"
          alt=""
        />
      </div>
    </div>
  );
};

export default MediaAd;
