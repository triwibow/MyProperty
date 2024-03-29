import Container from '../../components/container/Container';
import Login from '../../container/login/Login';
import Footer from '../../components/footer/Footer';

const Index = (props:any) => {
	return (
		<Container>
			<Login {...props} />
			<Footer />
		</Container>
	);
}

export default Index;