import ContainerBorder from "./ContainerBorder";
import ContainerHeader from "./ContainerHeader";
import Slider from "./Slider";

function ServicesContainer() {
	return (
		<ContainerBorder>
			<ContainerHeader title='Services' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
			<Slider />
		</ContainerBorder>
	);
}

export default ServicesContainer;
