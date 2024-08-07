"use client";
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { useSidebarContext } from '@/context/SidebarContext';

const Chatbotview = () => {
  const { btnFixed } = useSidebarContext();

  return (
    <div
      className={`p-3 mt-20 transition-all duration-1000 ${
        btnFixed ? "ml-[270px]" : "ml-24"
      }`}
    >
      <h1 className="text-2xl font-bold text-blue-900 mt-10 dark:text-blue-400/70">
        Chatbot!!
      </h1>
      <ChatBot
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
/>
    </div>
  );
};

export default Chatbotview;


