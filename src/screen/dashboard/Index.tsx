import Container from "../../components/container/Container";
import Dashboard from "../../container/dashboard/Dashboard";

const Index = (props:any) => {
	return (
		<Container>
			<Dashboard {...props} />
		</Container>
	)
}

export default Index;