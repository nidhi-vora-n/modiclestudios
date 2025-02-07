import React from 'react';
import './Board.css';
 
const Board = () => {
  return (
    <>
    <p className="board-head">Meet Our Founders</p>
<div className="board-container">

    
<div className="card">
<img src="../../assets/images/tripta" alt="Rohan Mehta" className="card-img" />
<div className="overlay">
<div className="content">
<h2>Tripta Jaisinghani</h2>
<h3>CEO</h3>
<p>
            Born and raised in Mumbai, Tripta Jaisinghani is a passion-driven visionary who embraces challenges with poise, passion, and persistence. As the founder of Modicle Studios, she crafts innovative marketing strategies tailored to each client's unique needs. Her philosophy emphasizes not just the steps taken but the purpose guiding them, ensuring impactful results. With charisma, ethics, and emotional intelligence, Tripta transforms businesses through creativity and precision. She believes, "Life is what you make it, so why not make it beautiful?"            </p>
            {/* <button className="connect-button">Connect</button> */}
</div>
</div>
</div>
 
      <div className="card">
<img src="../../assets/images/kirti" alt="Chandni Shah" className="card-img" />
<div className="overlay">
<div className="content">
<h2>Kirti Jaisinghani</h2>
<h3>COO</h3>
<p>
            Modicle Studios is proud to have Mrs. Kirti Jaisinghani, mother of founder Tripta Jaisinghani, as a director and behind-the-scenes mastermind. A pillar of support and the wind beneath Tripta’s wings, she has been instrumental in their success. Professionally qualified in Home Science with an MA degree, her grounded nature and creative insights inspire the team. Tripta credits her own creativity in marketing to her mother’s influence. “I am where I am today because she always has my back,” says Tripta.
</p>
            {/* <button className="connect-button">Connect</button> */}
</div>
</div>
</div>
</div></>
  );
};
 
export default Board;