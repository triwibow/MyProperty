import Container from '../../components/container/Container';
import Landing from '../../container/register/Landing';
import Footer from '../../components/footer/Footer';

const Index = (props:any) => {
	return (
		<Container>
			<Landing {...props} />
			<Footer />
		</Container>
	);
}

export default Index;