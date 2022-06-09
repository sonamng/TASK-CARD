
import logo from './logo.svg';
import Card from './component/Card'
import './App.css';

const data = [
  {
    id: 1,
    name: "Taj Mahal",
    place: "India",
    img: "https://im.whatshot.in/img/2019/May/vertical-1558961949.jpg?w=800&h=800&cc=1"
  },

  {
    id: 2,
    name: "Colosseum",
    place: "Italy",
    img: "https://w0.peakpx.com/wallpaper/523/928/HD-wallpaper-coliseo-de-roma-roman-colosseum-the-colosseum-rome-italy.jpg"
  },

  {
    id: 3,
    name: "The Great wall of China",
    place: "China",
    img: "https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop"
  },
  
  {
    id: 4,
    name: "Christ The Redeemer",
    place: "Brazil",
    img:"https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg",
  }

]




function App() {
  return (
    <div className="App">
      {
        data.map((datas) => {
          return (
            <>
                <Card img={datas.img} place={datas.place} name={datas.name} />
            </>
          )
        })
      }
    </div>
  );
}

export default App;