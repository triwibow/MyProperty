import Container from '../../components/container/Container';
import Register from '../../container/register/Register';
import Footer from '../../components/footer/Footer';

const Index = (props:any) => {
	return (
		<Container>
			<Register {...props} />
			<Footer />
		</Container>
	);
}

export default Index;