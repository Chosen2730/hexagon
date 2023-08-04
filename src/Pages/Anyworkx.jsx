import React from "react";
import AnyworkxIntro from "../Components/Products/anyworkx";
import Anywork from "../Components/HomePage/anywork";
import Recommendation from "../Components/Products/recommendation";

const Anyworkx = () => {
  return (
    <div className='pt-12'>
      <AnyworkxIntro />
      <div className='px-4 pt-20 bg-green-50'>
        <div className='container mx-auto'>
          <Anywork />
        </div>
      </div>
      <Recommendation />
    </div>
  );
};

export default Anyworkx;
