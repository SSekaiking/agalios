import Button from '../components/button';
import Link from 'next/link'
import Navbar from '../components/Navbar';
import CreatePopup from '../components/popup/Create';
import JoinPopup from '../components/popup/Join';




const Home = () => {


  return (<div className="container">

    <Navbar />
    <div className="content">
      <div></div>
      <ul className="actions">
        <li>
          <CreatePopup>
            <Button>Create a Room</Button>
          </CreatePopup>
        </li>
        <li>
          <JoinPopup>
            <Button>Join a Room</Button>
          </JoinPopup>
        </li>
        <li>
          <Link href="/create">
            <a className="button">
              <Button>
                Public Rooms
            </Button>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <a className="button">
              <Button>
                Settings
            </Button>
            </a>
          </Link>
        </li>
      </ul >
      <div></div>
    </div >
    <style jsx>{`
      .container{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 100vh;
      }
      .content{
        margin-top: 10vh;
        flex: 1;
        display: grid;
        grid-template-columns: auto 50vw auto;
      }
      .actions{
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      .actions li{
        margin: 20px auto;
        list-style: none;
      }
    `}</style>
  </div >
  );
}

export default Home
