import logo from '../img/vernacuLearn.png';
import facelessPeople from '../img/faceless-people.jpg';


const HomePage = () => {
  return(
    <div>

      <header>
        <img src={logo} className="logo" />
        <span>asdf</span>
      </header>

      <h1>Learn essential lingo fast!</h1>

      <main>
        <section className="hero-container">
          <section className="sign-in">
            <h1>Already a member? Sign In!</h1>
          
          </section>
          <section className="hero-image">
          </section>
        </section>
      </main>

    </div>
  )
}

export default HomePage;
