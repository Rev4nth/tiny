import React from "react";
import clsx from "clsx";

import { Video, Star, Phone, Paperclip, Send, Smile } from "react-feather";
import john from "./assets/john.jpeg";
import kristen from "./assets/kristen.jpg";
import readytodie from "./assets/readytodie.jpg";

const thread = [
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
];

const Header = () => {
  return (
    <div className="flex justify-between h-16 border-b border-gray-400">
      <div className="flex px-5 items-center">
        <p className="font-medium">
          Kristen McKellar
          <span className="font-light"> is typing...</span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-16 sm:w-16 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none border-l border-gray-400"
        >
          <Star />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center  h-16 w-10 sm:w-16 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none border-l border-gray-400"
        >
          <Phone />
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center h-16 w-10 sm:w-16 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none border-l border-gray-400"
        >
          <Video />
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-200 px-4 py-3 sm:mb-0 bg-gray-100">
      <div className="relative flex">
        <span className="absolute inset-y-0 flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Paperclip />
          </button>
        </span>
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
        />
        <div className="absolute right-0 items-center inset-y-0 flex">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Smile />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

const Rate = () => {
  return (
    <div className="flex">
      <Star color={"#ffd201"} fill={"#ffd201"} size={12} />
      <Star color={"#ffd201"} fill={"#ffd201"} size={12} />
      <Star color={"#ffd201"} fill={"#ffd201"} size={12} />
      <Star color={"#ffd201"} fill={"#ffd201"} size={12} />
      <Star color={"#2263b0"} fill={"#2263b0"} size={12} />
    </div>
  );
};

const Message = ({ isReceived, text, user, time, card }) => {
  let styles = clsx({
    flex: true,
    "items-start": true,
    "justify-end": !isReceived,
  });

  let boxStyles = clsx({
    flex: true,
    "flex-col": true,
    "space-y-2": true,
    "max-w-xs": true,
    "mx-2": true,
    "order-1": !isReceived,
    "order-2": isReceived,
    "items-start": isReceived,
    "items-end": !isReceived,
  });

  let messageStyles = clsx({
    "p-4": true,
    flex: true,
    "flex-col": true,
    "sm:flex-row": true,
    "rounded-lg": true,
    "inline-block": true,
    "bg-white": isReceived,
    "text-sm": true,
    "chat-blue": !isReceived,
    "text-white": !isReceived,
  });
  let profileStyles = clsx({
    "order-1": isReceived,
    "order-2": !isReceived,
    "text-center": true,
  });

  return (
    <div className={styles}>
      <div className={boxStyles}>
        <div>
          {text ? (
            <span className={messageStyles}>{text}</span>
          ) : (
            <div className={messageStyles}>
              <img src={card.image} className="h-32 shadow" alt="album" />
              <div className="sm:ml-4 flex flex-col justify-between">
                <div>
                  <h2 className="font-bold text-lg">{card.title}</h2>
                  <p className="text-sm">{card.album}</p>
                </div>

                <div className="flex items-center justify-start">
                  <Rate />
                  <span className="text-xs ml-2">95 Ratings</span>
                </div>
                <button className="bg-blue-700  text-xs text-white font-bold py-2 px-4 rounded">{`${card.price} - BUY NOW`}</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={profileStyles}>
        <img
          src={user}
          alt="My profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
        />
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="chat w-full lg:w-5/12 sm:w-9/12 md:5/12">
      <div className="flex-1  justify-between flex flex-col h-screen">
        <Header />
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto"
        >
          {thread.map((message) => (
            <Message
              text={message.text}
              user={message.user}
              isReceived={message.type === "received"}
              time={message.time}
              card={message.card}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Chat;
