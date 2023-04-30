import React, {ReactElement} from 'react';
import { StyleSheet, Text, ListRenderItemInfo, ListRenderItem } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

type Slides =   {
	[key:string|number]:number
}

const slides:Slides[] = [
	{
		key: 1
	},
	{
		key: 2
	},
	{
		key: 3
	},
	{
		key: 4
	}
]

 
const Landing = (props:any) =>  {

	const { navigation } = props;

	const onDone = () => {
		navigation.navigate('login');
	}

	const renderItem  = ({item}: {item:Slides}) => {

		if(item.key == 2){
			return <Second {...props} />;
		}

		if(item.key == 3){
			return <Third {...props} />
		}

		if(item.key == 4){
			return <Fourth {...props} />
		}

		return <First {...props} />
	};

  return <AppIntroSlider 
						renderItem={renderItem} 
						data={slides} 
						onDone={onDone}
					/>;
}


export default Landing;