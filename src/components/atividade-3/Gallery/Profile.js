// import {useState} from "react";

export function Profile() {
  //   const [images] = useState(["./girl.jpg", "./girl2.jpg", "./dad.jpg"]);

  return (
    <>
      <div>
        <img
          key={1}
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fpt%2Ffotos-de-stock&psig=AOvVaw1VE4mKQnkArpyaYWfmCeut&ust=1686713004531000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCey9-lv_8CFQAAAAAdAAAAABAa"
          alt="girl"
        ></img>
        <img key={2} src="./girl2.jpg" alt="girl2"></img>
        <img key={3} src="./dad.jpg" alt="dad"></img>
      </div>
    </>
  );
}
