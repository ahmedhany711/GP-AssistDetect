import { React, useState } from "react";
import Question from "../../Questions/Questions";
import { Link } from "react-router-dom";

import Footer from "../../Footer/Footer";

export default function FAQPage({ showFooter, showBanner }) {
  const [isOpen, setIsOpen] = useState(Array(2).fill(false));

  const toggleAccordion = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  const questions = [
    {
      question:
        "What are the typical symptoms of depression, and how can I differentiate them from just feeling down?",
      answer:
        "Depression symptoms include persistent feelings of sadness, hopelessness, and loss of interest or pleasure in activities. Other signs may include changes in appetite or weight, sleep disturbances, fatigue, difficulty concentrating, and thoughts of death or suicide. These symptoms persist for at least two weeks and significantly impact daily functioning, distinguishing depression from temporary mood fluctuations.",
    },
    {
      question:
        "Are there any self-help strategies or coping mechanisms that can alleviate symptoms of depression?",
      answer:
        "Yes, several self-help strategies can complement professional treatment or be used on their own. These include regular exercise, maintaining a healthy diet, ensuring adequate sleep, practicing relaxation techniques such as deep breathing or meditation, engaging in enjoyable activities, setting realistic goals, and seeking social support from friends and family. Additionally, cognitive-behavioral techniques can help challenge negative thought patterns.",
    },

    {
      question:
        "When is it advisable to seek professional help for depression, and what treatment options are available?",
      answer:
        "It's advisable to seek professional help if depressive symptoms persist for more than two weeks and significantly interfere with daily life. Treatment options include therapy (such as cognitive-behavioral therapy or interpersonal therapy), medication (such as antidepressants), or a combination of both. Psychiatrists, psychologists, and licensed therapists can provide personalized treatment plans based on individual needs.",
    },

    {
      question:
        "How can I support a friend or family member who is struggling with depression?",
      answer:
        "Supporting a loved one with depression involves offering empathy, understanding, and encouragement. Listen actively without judgment, validate their feelings, and offer practical assistance with daily tasks if needed. Encourage them to seek professional help and accompany them to appointments if necessary. Educate yourself about depression to better understand their experiences and provide ongoing support.",
    },

    {
      question:
        "What lifestyle changes, such as diet, exercise, and sleep habits, can positively impact depression?",
      answer:
        "Lifestyle changes play a crucial role in managing depression. Regular exercise promotes the release of endorphins, which can improve mood and reduce symptoms. A balanced diet rich in fruits, vegetables, whole grains, and lean proteins provides essential nutrients for brain health. Establishing a consistent sleep schedule and practicing good sleep hygiene can also enhance mood and overall well-being.",
    },

    {
      question: " How Do I Know If I'm Unwell?",
      answer:
        "Recognizing illness entails noting physical, emotional, and cognitive shifts, such as fatigue, persistent sadness, or difficulty concentrating. Seeking professional help is essential if these symptoms affect daily functioning.",
    },

    {
      question: " Do I Need A Referral To See A Psychologist?",
      answer:
        "Whether you require a referral to see a psychologist varies depending on your healthcare system and insurance plan. While some allow direct appointments, others may mandate a referral from a primary care provider. It's advisable to verify your insurance policy or healthcare provider's requirements.",
    },

    {
      question: "What Are 3 Things Psychologist Do?",
      answer:
        "Psychologists perform various roles, including assessing and diagnosing mental health conditions, providing therapy or counseling to individuals or groups, and conducting research to advance understanding of human behavior and mental processes.",
    },
  ];
  return (
    <>
      <div className="faq flex flex-col lg:flex-row lg:flex-wrap lg:align-start lg:justify-start lg:items-start  pb-4">
        {/* banner */}
        {showFooter && (
          <section
            data-aos="zoom-in"
            className="sec1 h-[70vh] bg-cover bg-top flex flex-col lg:flex-row lg:items-center lg:justify-center text-white relative"
            id="FAQ"
          >
            {/* OverLay */}
            <div
              id="overlay"
              className="absolute top-0 left-0 w-full h-full bg-homeOverly/30 opacity-65 px-8 py-16"
            ></div>
            {/* Text Details  */}
            <div className="z-[10]">
              <h1 className="text-[74px] font-headingFont font-light ml-2 ">
                FAQ
              </h1>
              <div className=" flex items-center justify-center text-white mt-0  font-light">
                <div>
                  <Link
                    className="no-underline text-white  text-[18px] mr-2 hover:text-active "
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="">
                  <p className="p-0 m-0 text-[18px]"> / FAQ</p>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Body */}
        <section
          data-aos="fade-up"
          className=" flex flex-col      my-10  justify-center mx-auto"
        >
          <div className=" flex flex-col lg:gap-10 pb-20 lg:pb-0 text-center  mx-auto">
            <span className="text-lg -mb-7 pt-4 font-semibold" id="span">
              FAQs
            </span>
            <h1 className="text-3xl lg:text-7xl font-headingFont mb-20">
              We Are Here To Help You
            </h1>
          </div>
          <div className="container">
            <div
              data-aos="fade-up"
              className="questions_div  grid grid-cols-2 gap-x-4 gap-y-10 "
            >
              {questions.map((item, index) => (
                <Question
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={isOpen[index]}
                  toggleAccordion={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      {showFooter && <Footer />}
    </>
  );
}
