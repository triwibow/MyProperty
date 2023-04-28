import Container from '../../components/container/Container';
import ForgotPassword from '../../container/forgotPassword/ForgotPassword';
import Footer from '../../components/footer/Footer';

const Index = (props:any) => {
	return (
		<Container>
			<ForgotPassword {...props} />
			<Footer />
		</Container>
	);
}

export default Index;