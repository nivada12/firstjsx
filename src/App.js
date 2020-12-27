
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
function App() {
  return (
    <>
  
      <div style={{border:"solid1pxblack",maxWidth:"100vw"}}/>

<h1 className="title red">Your name here</h1><br/>

<img src={imageInSrc} alt={'imageInSrc'}></img><br/>


<img src={"/imageInPublic.jpg"} alt={"imageInPublic"}></img>

<br>
</br>


<video width={320} height={240} controls>

<source src={"/myVideo.mp4"} type={"video/mp4"} ></source>
  </video> 
</>

  );
  }

export default App;
