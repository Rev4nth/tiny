import React from "react";
import clsx from "clsx";

import { Video, Star, Phone, Paperclip, Send, Smile } from "react-feather";

const Header = () => {
  return (
    <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div class="flex items-center space-x-4">
        <div class="flex flex-col leading-tight">
          <div class="text-2xl mt-1 flex items-center">
            <span class="text-gray-700 mr-3">
              Kristen McKellar is typing...
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <Star />
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <Phone />
        </button>
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
        >
          <Video />
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex">
        <span class="absolute inset-y-0 flex items-center">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Paperclip />
          </button>
        </span>
        <input
          type="text"
          placeholder="Type your message..."
          class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3"
        />
        <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Smile />
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

const Message = ({ isReceived, message }) => {
  let styles = clsx({
    flex: true,
    "items-end": true,
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
    "px-4": true,
    "py-2": true,
    "rounded-lg": true,
    "inline-block": true,
    "rounded-bl-none": true,
    "bg-white": isReceived,
    "text-gray-600": isReceived,
    "bg-blue-600": !isReceived,
    "text-white": !isReceived,
  });
  let profileStyles = clsx({
    "order-1": isReceived,
    "order-2": !isReceived,
    "text-center": true,
  });

  return (
    <div className={styles}>
      <div class={boxStyles}>
        <div>
          <span class={messageStyles}>{message}</span>
        </div>
      </div>
      <div className={profileStyles}>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          class="w-10 h-10 rounded-full"
        />
        <span className="text-xs">12:17</span>
      </div>
    </div>
  );
};

const Chat = () => {
  return (
    <div class="chat w-5/12">
      <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <Header />
        <div
          id="messages"
          class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <Message
            isReceived={true}
            message={
              "This is Receiver hhhhhhhhhhhhhhhhhhhhsd This is Receiver hhhhhhhhhhhhhhhhhhhhsdThis is Receiver hhhhhhhhhhhhhhhhhhhhsdThis is Receiver hhhhhhhhhhhhhhhhhhhhsdThis is Receiver hhhhhhhhhhhhhhhhhhhhsd"
            }
          />
          <Message
            isReceived={false}
            message={
              "This is Sender his is Receiver hhhhhhhhhhhhhhhhhhhhsd Thishis is Receiver hhhhhhhhhhhhhhhhhhhhsd Thishis is Receiver hhhhhhhhhhhhhhhhhhhhsd Thishis is Receiver hhhhhhhhhhhhhhhhhhhhsd Thishis is Receiver hhhhhhhhhhhhhhhhhhhhsd This"
            }
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Chat;
