import React from 'react'
import NavigationBar from './components/NavigationBar';
import CarouselHero from './components/CarouselHero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MainButton from './components/MainButton';
import Counter from './components/Counter';
import LifeCycleExample from './components/LifecycleExample';
import FormExample from "./components/FormExample";


const App = () => {
  return (
    <>
        <FormExample/>
        <LifeCycleExample/>
        <Counter/>
        <MainButton variant="primary" buttonText="asdasdasd"/>
        <MainButton variant="warning" buttonText="Ciao bottone 2"/>
        <MainButton variant="danger" buttonText="Ciao bottone 3"/>
        <NavigationBar/>
        <CarouselHero/>
        <MainContent/>
        <Footer/>
    </>
  )
}

export default App

/* class App extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <>
                <FormExample/>
                <LifeCycleExample/>
                <Counter/>
                <MainButton variant="primary" buttonText="asdasdasd"/>
                <MainButton variant="warning" buttonText="Ciao bottone 2"/>
                <MainButton variant="danger" buttonText="Ciao bottone 3"/>
                <NavigationBar/>
                <CarouselHero/>
                <MainContent/>
                <Footer/>
            </>
        )
    }
}

export default App;
 */