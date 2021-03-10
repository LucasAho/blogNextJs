import Container from "react-bootstrap/Container"
import SectionHeader from "../components/portfolioSectionHeader"

export default function PortfolioPage() {
    return (
        <Container className="justify-content-center" style={{backgroundColor: "#180D35"}}>
            <SectionHeader
                titleText="Lucas Asher"
                subText="Author, rock climber, and full stack developer"
                variant="h6"
                color="light"
            />
        </Container>
    )
}