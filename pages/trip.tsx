import Container from '../components/Grid/Container';
import Col from '../components/Grid/Col';
import Row from '../components/Grid/Row';

export const Trip = (): JSX.Element => (
  <div className="pt-5">
    <div className="h-screen">
      <img
        className="slider-image"
        src="/assets/Banner_Jam.jpeg"
        alt="slide"
      />
    </div>
    <Container>
      <Row>
        <Col cols={6}>
          <img
            src="/assets/jam-gameplay.png"
            alt="slide"
            width="460"
          />
        </Col>
        <Col cols={6}>
          <div className="flex flex-col justify-center h-full">
            <div className="font-bold text-4xl pb-10"> SEARCH, SWIPE, AND SCORE!</div>
            <p className="py-2">It&apos;s an anagram, it&apos;s a crossword, it&apos;s CROSSWORD JAM!</p>

            <p className="py-2">
              These puzzles will have you solving your way around the world -
              traveling across beautiful
              landscapes and learning a whole lot of fun facts along the way!
            </p>

            <p className="py-2">
              Look for hidden words to zoom to your next destination, while Dr.
              Hoot keeps you learning with some OWLsome
              mysteries from all over the globe!
            </p>
          </div>

        </Col>
      </Row>
    </Container>
  </div>
  );

export default Trip;
