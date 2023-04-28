import {useState} from 'react';
import Register from './Register';
import VerifEmail from './VerifEmail';

const Landing = (props:any) => {
	const [activeScreen, setActiveScreen] = useState(0);

	const changeScreen = (screen:number) => {
		setActiveScreen(screen);
	}

	const render = (screen:number) => {
		if(activeScreen != 0){
			return <VerifEmail {...props} changeScreen={changeScreen} />
		}

		return <Register {...props} changeScreen={changeScreen} />
	}

	return render(activeScreen);
}

export default Landing;