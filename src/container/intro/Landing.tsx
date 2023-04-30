import React, {ReactElement} from 'react';
import { StyleSheet, Text, ListRenderItemInfo, ListRenderItem } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import First from './First';
import Second from './Second';
import Third from './Third';

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
	}
]
 
const Landing = () =>  {

	const renderItem  = ({item}: {item:Slides}) => {

		if(item.key == 2){
			return <Second />;
		}

		if(item.key == 3){
			return <Third />
		}

		return <First />
	};

  return <AppIntroSlider 
						renderItem={renderItem} 
						data={slides} 
					/>;
}


export default Landing;