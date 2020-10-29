import john from "./assets/john.jpeg";
import kristen from "./assets/kristen.jpg";
import readytodie from "./assets/readytodie.jpg";
import matt from "./assets/matt.jpg";
import claire from "./assets/claire.jpg";
import shaun from "./assets/shaun.jpg";
import mace from "./assets/mace.jpg";
import kanye from "./assets/kanye.jpg";

const users = {
  "Kristen Mckellar": {
    info: {
      nickName: "Killa Kella",
      tel: "072 143 9920",
      dob: "July 12, 1988",
      name: "Kristen Mckellar",
      gender: "Female",
      language: "English",
      image: kristen,
      place: "Cape Town, RSA",
    },
    thread: [
      {
        user: kristen,
        text: "It goes a little something like this.",
        time: "12:37",
        type: "received",
      },
      {
        user: kristen,
        text:
          "It was all a dream, I used to read Word Up magazine Salt'n'Pepa and Heavy D up in the limousine",
        time: "12:38",
        type: "received",
      },
      {
        user: john,
        text: "Did you ever Hang' pictures on your wall?",
        time: "12:39",
        type: "sent",
      },
      {
        user: kristen,
        text:
          "Yes I did! Every Saturday! Rap Attack, Mr. Magic, Marley Marl. I even let my tape rock 'til my tape popped. Smokin' weed and bamboo, sippin' on private stock.  But this was way back, when I had the red and black lumberjack with the hat to match.",
        time: "12:40",
        type: "received",
      },
      {
        user: john,
        text: "Haha awesome,  I think I know the album your looking. for",
        time: "12:43",
        type: "sent",
      },
      {
        user: john,
        time: "12:45",
        type: "sent",
        card: {
          image: readytodie,
          title: "Ready to Die",
          album: "The Notorious B.I.G",
          ratings: 95,
          price: "$12.99",
        },
      },
    ],
  },
  "Matt Thompson": {
    info: {
      nickName: "Matt",
      tel: "072 143 9920",
      dob: "Sep. 12, 1988",
      name: "Matt Thompson",
      gender: "Male",
      language: "English",
      image: matt,
      place: "Florida, USA",
    },
    thread: [
      {
        user: matt,
        text: "Hey, How are you doing?",
        time: "12:37",
        type: "received",
      },
      {
        user: john,
        text: "I am doing good. What about you?",
        time: "12:38",
        type: "sent",
      },
    ],
  },
  "Claire Sharwood": {
    info: {
      nickName: "Matt",
      tel: "072 143 9920",
      dob: "Sep. 12, 1988",
      name: "Claire Sharwood",
      gender: "Female",
      language: "English",
      image: claire,
      place: "SF, USA",
    },
    thread: [
      {
        user: claire,
        text: "Hey, How are you doing?",
        time: "12:37",
        type: "received",
      },
      {
        user: john,
        text: "I am doing good. What about you",
        time: "12:38",
        type: "sent",
      },
    ],
  },
  "Shaun Gardner": {
    info: {
      nickName: "Shaun",
      tel: "072 143 9920",
      dob: "Sep. 12, 1988",
      name: "Shaun Gardner",
      gender: "Male",
      language: "Russian",
      image: shaun,
      place: "Moscow, Russia",
    },
    thread: [
      {
        user: shaun,
        text: "Hey, How are you doing?",
        time: "12:37",
        type: "received",
      },
      {
        user: john,
        text: "I am doing good. What about you",
        time: "12:38",
        type: "sent",
      },
    ],
  },
  "Mace Windu": {
    info: {
      nickName: "Mace",
      tel: "072 143 9920",
      dob: "Sep. 12, 1988",
      name: "Mace Windu",
      gender: "Male",
      language: "English",
      image: mace,
      place: "Florida, USA",
    },
    thread: [
      {
        user: mace,
        text: "Hey, How are you doing?",
        time: "12:37",
        type: "received",
      },
      {
        user: john,
        text: "I am doing good. What about you?",
        time: "12:38",
        type: "sent",
      },
      {
        user: mace,
        text: "Great! can you send me the photos we took on Friday?",
        time: "12:39",
        type: "received",
      },
      {
        user: john,
        text: "Sure.",
        time: "12:40",
        type: "sent",
      },
      {
        user: john,
        text: "Will send you via dropbox",
        time: "12:41",
        type: "sent",
      },
    ],
  },
  "Kanye West": {
    info: {
      nickName: "Mace",
      tel: "072 143 9920",
      dob: "Sep. 12, 1988",
      name: "Kanye West",
      gender: "Male",
      language: "English",
      image: kanye,
      place: "Florida, USA",
    },
    thread: [
      {
        user: kanye,
        text: "Hey, How are you doing?",
        time: "12:37",
        type: "received",
      },
      {
        user: john,
        text: "I am doing good. What about you",
        time: "12:38",
        type: "sent",
      },
    ],
  },
};

export default users;
