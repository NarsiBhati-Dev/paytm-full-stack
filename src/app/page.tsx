import { Container, Govt, Header, Navbar, TripBooking } from "@/components";

export default function Home() {
  return (
    <section>
      <Header />
      <Govt />
      <section className="bg-[#e8f8fd] pt-2 pb-12">
        <Navbar />
        <Container className="bg-white rounded-lg shadow-sm flex flex-col justify-center items-center md:m-auto mx-3">
          <TripBooking />
        </Container>
      </section>
    </section>
  );
}
