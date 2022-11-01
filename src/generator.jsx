// import { AiOutlineDownload } from "react-icons/ai";
// import {useCallback} from "react"
// import downloadjs from 'downloadjs';
// import html2canvas from 'html2canvas';

export default function Generator(props) {

  // const handleCaptureClick = useCallback(async () => {
    
  //   const myImage =
  //     document.querySelector('.text-img');
  //   if (!myImage) return;

  //   const canvas = await html2canvas(myImage);
  //   const dataURL = canvas.toDataURL('image/jpg');
  //   downloadjs(dataURL, 'download.jpg', 'image/jpg');
  // }, []);
  
  return (
    <div className="gen">
      <div className="gen-inputs">
        <textarea
          type="text"
          className="inputed"
          placeholder="Input write-up"
          value={props.top}
          onChange={props.change}
          name="topText"
        />

        

        <input
          className="inputed2"
          type="text"
          placeholder="choose theme e.g nature , sunset , halloweeen.etc"
          value={props.cardsCategory}
          onChange={props.handleCategorySelect}
          name="cardcategory"
        />
      </div>
      <button className="gen--button" onClick={props.switch}>
        Get a new image
      </button>
      <div className="text-img" 
      // style={{backgroundImage: `url(${props.display})`}}
      >
        <p
          className="toptext"
          onClick={props.toggle}
          style={{ color: props.color ? "white" : "black" }}
        >
          {props.top}
        </p>
        <img src={props.display} className="meme-images"  crossOrigin="anonymous"/>
        
        
      </div>
      {/* <div className="download__icon" onClick={handleCaptureClick}>
        <AiOutlineDownload  />
        </div> */}
    </div>
  );
}
