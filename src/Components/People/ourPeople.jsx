import React from "react";
import mary from "../../Assets/images/mary.png";
import bolaji from "../../Assets/images/bolaji.png";
import ore from "../../Assets/images/ore.png";

const OurPeople = () => {
  const people = [
    { name: "Mary Ezinne", img: mary },
    { name: "Bolaji Abdullah", img: bolaji },
    { name: "Ore Afolayan", img: ore },
    { name: "Mary Ezinne", img: mary },
    { name: "Bolaji Abdullah", img: bolaji },
    { name: "Ore Afolayan", img: ore },
    { name: "Mary Ezinne", img: mary },
    { name: "Bolaji Abdullah", img: bolaji },
    { name: "Ore Afolayan", img: ore },
  ];
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <h2 className='font-bold text-2xl'>
        Our <span className='text-pry'> People</span>
      </h2>
      <p className='my-4 font-light'>
        {" "}
        At X-agon, we have a light-hearted atmosphere and a collaborative
        culture essential to feeling motivated and inspired at work. We believe
        that teamwork makes the dream work. Every staff is able to learn from
        other colleagues while we grow as a team.We support each other and work
        together to bring our ideas to life. We encourage our people to be bold,
        to try out new ideas and unleash their creativity. <br />
        <br /> X-agon’s value is “Be fearless” and the management team comprise
        the following:
      </p>
      <div className='my-10 grid grid-cols-2 md:grid-cols-3 gap-5'>
        {people.map(({ name, img }, ind) => (
          <div key={ind}>
            <img src={img} className='w-full' alt='box' />
            <h2 className='uppercase bg-gray-700 p-4 text-white text-sm'>
              {name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;
