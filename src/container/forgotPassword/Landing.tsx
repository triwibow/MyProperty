import {useState} from 'react';
import ForgotPassword from './ForgotPassword';
import VerifCode from './VerifCode';

const Landing = (props:any) => {
	const [activeScreen, setActiveScreen] = useState(0);

	const changeScreen = (screen:number) => {
		setActiveScreen(screen);
	}

	const render = (screen:number) => {
		if(activeScreen != 0){
			return <VerifCode {...props} changeScreen={changeScreen} />
		}

		return <ForgotPassword {...props} changeScreen={changeScreen} />
	}

	return render(activeScreen);
}

export default Landing;