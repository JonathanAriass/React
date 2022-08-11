import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cathedral_of_Oviedo_2021_-_exterior.jpg/280px-Cathedral_of_Oviedo_2021_-_exterior.jpg",
    address: "Oviedo, Asturias",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Cathedral_of_Oviedo_2021_-_exterior.jpg/280px-Cathedral_of_Oviedo_2021_-_exterior.jpg",
    address: "Oviedo, Asturias",
    description: "This is the second meetup!",
  },
];

function HomePage() {
  return <MeetUpList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
