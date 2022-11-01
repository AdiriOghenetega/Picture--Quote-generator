import { useState } from "react";
import { useEffect } from "react";
import Header from "./header";
import Generator from "./generator";
import { createClient } from 'pexels';
import "./App.css";

function App() {
  const [meme, setMeme] = useState("");
  const [cardCategory,setCardCategory]= useState("nature")
  const [memeDisplay, setMemeDisplay] = useState({
    topText: "Write Something inspirational or fun...",
    randomImage: "../images/default_photo.jpg",
    on: true,
  });

  
 

  useEffect(() => {
    const client = createClient('563492ad6f9170000100000113ca0ff9125145858d25a00fc1f5b022');
const query = cardCategory;

client.photos.search({ query, per_page: 80 }).then(photos => {
  setMeme(photos.photos)
})
    .catch(err => console.log(err));
    
  }, [cardCategory]);

  function handleCategorySelect(selected){
  const category = selected.target.value; 
    setCardCategory(category)
  }
  console.log(cardCategory)

  function handleClick() {
    const rand = Math.floor(Math.random() * meme.length);
    let memeRandom ;
    if (meme){
      memeRandom = meme[rand].src.original;
    }
    
    setMemeDisplay((prevState) => {
      return { ...prevState, randomImage: memeRandom };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMemeDisplay((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function toggle() {
    setMemeDisplay((prevState) => {
      return { ...prevState, on: !prevState.on };
    }); 
  }

  return (
    <div className="App">
      <Header />
      <Generator
        key={meme.id}
        display={memeDisplay.randomImage}
        switch={handleClick}
        top={memeDisplay.topText}
        bottom={memeDisplay.bottmText}
        change={handleChange}
        toggle={toggle}
        color={memeDisplay.on}
        handleCategorySelect={handleCategorySelect}
        cardCategory={cardCategory}
      />
    </div>
  );
}

export default App;