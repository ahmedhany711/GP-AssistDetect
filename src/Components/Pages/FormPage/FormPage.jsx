import React, { useState } from "react";
import "./FormPage.scss";
import Swal from "sweetalert2";
import Footer from "../../Footer/Footer";

export default function FormPage() {
  const [selectedOptions, setSelectedOptions] = useState(Array(9).fill(""));
  const [TextAreaContent, setTextAreaContent] = useState("");
  const arr = [
    "Not at all",
    "Several days",
    "More than half the days",
    "Nearly every day",
  ];
  const handleOptionChange = (index, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = arr[parseInt(option) - 1];
    setSelectedOptions(newSelectedOptions);
  };

  const handleTextAreaContentChange = (event) => {
    setTextAreaContent(event.target.value);
  };

  // const token = "24|Xv9MclhowxV2gpoxUXSAHxBRW873l8koALiohphnc4932a9f";
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://gp-production-ead6.up.railway.app/api/patient/survey/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            // selectedOptions,

            "interest-q1": selectedOptions[0],
            "interest-q2": selectedOptions[1],
            "interest-q3": selectedOptions[2],
            "interest-q4": selectedOptions[3],
            "interest-q5": selectedOptions[4],
            "interest-q6": selectedOptions[5],
            "interest-q7": selectedOptions[6],
            "interest-q8": selectedOptions[7],
            "interest-q9": selectedOptions[8],
            text_input: TextAreaContent,
          
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Form submitted successfully:", data);

        data.result === "No"
          ? Swal.fire({
              icon: "success",
              title:
                "<strong class='text-nav font-headingFont text-4xl'>Detection Result !</strong>",
              html: `<p class="text-paragraph ">The depression detection result is   <strong class="text-[#a5dc86] font-headingFont px-2 text-xl"><b>${data.result}</b></p></strong>`,
              showCloseButton: true,
              confirmButtonColor: "#a5dc86",
              confirmButtonText: "Congratulations ! ",
              footer: `<strong class="text-paragraph ">You are Fine  ,  Don't Worry.</strong><br>
            <strong class='text-paragraph'>
              If u want to see  <a href='/blog' class="p-2 text-nav no-underline hover:text-xl duration-300">  Our Community </a> for Info & Tips . </strong> `,
            })
          : Swal.fire({
              title:
                "<strong class='text-nav font-headingFont text-4xl'> Detection Result! </strong >",
              icon: "warning",
              iconColor: "#a55950",
              html: `<p class="font-contentFont text-paragraph">
      The depression detection result is   <strong class="text-nav px-1 text-2xl font-headingFont"><b>${data.result}</b></strong>
      </p>`,

              footer: `<strong class="text-paragraph">We Recommend for you to have<a href='/blog' class="p-2 text-nav no-underline hover:text-xl duration-300">  Meet </a> with our Staff.</strong>
      <br>
       <strong class="text-paragraph">If u want to see  <a href='/team' class="p-2 text-nav no-underline hover:text-xl duration-300">  Our Community </a> for Info & Tips . </strong>`,

              showCloseButton: true,
              showCancelButton: true,
              focusConfirm: false,
              cancelButtonColor: "#8b8b8b",
              confirmButtonColor: "#a55950",
              confirmButtonText: `
       <a href='/blog' class="p-1 text-white no-underline hover:text-xl duration-300">Need Help!</a>`,
              confirmButtonAriaLabel: "great!",
              cancelButtonText: `Cancel`,
              cancelButtonAriaLabel: "Cancel",
            });
      } else {
        console.error("Form submission failed:", data.message);
        Swal.fire({
          icon: "error",
          title: "<strong class='font-headingFont text-4xl'> Error!</strong >",
          text: "You must answer all question .Please try agian.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title:
          "<strong class='font-headingFont text-4xl text-nav'> Error ! </strong >",
        html: `<p class='text-paragraph '>
        <b>
        You must answer all question .
        </b>Please try agian.
        </p>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: `
       Try Agian!
    `,
        confirmButtonAriaLabel: "Try Agian!",
        confirmButtonColor: "#a55950",
        iconColor: "#a55950",
      });
    }
  };
  return (
    <>
    

      {/* Body */}
      <div data-aos="fade-up" id="mainsec1" className="col-12 text-paragraph">
        {/* Title */}
        <div id="header_content" className="col-12 mt-32">
          <h1 className="col-12 text-gray-900 font-headingFont ">
            Questionnaire
          </h1>
          <p className="col-12  font-headingFont text-xl">
            Over the last 2 weeks, how often have you been bothered by any of
            the following problems?
          </p>
        </div>

        <div id="form" className="col-9 ">
          {/* Question1 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav ">
              {" "}
              Little interest or pleasure in doing things?
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question1_option${option}`}
                    name="question1"
                    value={`${option}`}
                    checked={selectedOptions[0] === arr[option - 1]}
                    onChange={() => handleOptionChange(0, option)}
                  />
                  <label
                    htmlFor={`question1_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Question2 */}
          <div className="question col-12  shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Feeling down, depressed, or hopeless
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question2_option${option}`}
                    name="question2"
                    value={`${option}`}
                    checked={selectedOptions[1] === arr[option - 1]}
                    onChange={() => handleOptionChange(1, option)}
                  />
                  <label
                    htmlFor={`question2_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Question3 */}

          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Trouble falling or staying asleep, or sleeping too much
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question3_option${option}`}
                    name="question3"
                    value={`${option}`}
                    checked={selectedOptions[2] === arr[option - 1]}
                    onChange={() => handleOptionChange(2, option)}
                  />
                  <label
                    htmlFor={`question3_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* question4 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Feeling tired or having little energy
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question4_option${option}`}
                    name="question4"
                    value={`${option}`}
                    checked={selectedOptions[3] === arr[option - 1]}
                    onChange={() => handleOptionChange(3, option)}
                  />
                  <label
                    htmlFor={`question4_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* question5 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Poor appetite or overeating
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question5_option${option}`}
                    name="question5"
                    value={`${option}`}
                    checked={selectedOptions[4] === arr[option - 1]}
                    onChange={() => handleOptionChange(4, option)}
                  />
                  <label
                    htmlFor={`question5_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* question6 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Feeling bad about yourself – or that you are a failure or have let
              yourself or your family down
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question6_option${option}`}
                    name="question6"
                    value={`${option}`}
                    checked={selectedOptions[5] === arr[option - 1]}
                    onChange={() => handleOptionChange(5, option)}
                  />
                  <label
                    htmlFor={`question6_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* question7 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Trouble concentrating on things, such as reading the newspaper or
              watching television
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question7_option${option}`}
                    name="question7"
                    value={`${option}`}
                    checked={selectedOptions[6] === arr[option - 1]}
                    onChange={() => handleOptionChange(6, option)}
                  />
                  <label
                    htmlFor={`question7_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* question8 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Moving or speaking so slowly that other people could have noticed?
              Or the opposite – being so fidgety or restless that you have been
              moving around a lot more than usual
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question8_option${option}`}
                    name="question8"
                    value={`${option}`}
                    checked={selectedOptions[7] === arr[option - 1]}
                    onChange={() => handleOptionChange(7, option)}
                  />
                  <label
                    htmlFor={`question8_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* question9 */}
          <div className="question col-12 shadow-sm border-1 border-nav ">
            <h6 className="pl-2 font-headingFont text-xl text-nav">
              Thoughts that you would be better off dead or of hurting yourself
              in some way
            </h6>
            <div className="answer_options col-12">
              {[1, 2, 3, 4].map((option) => (
                <div key={option} className="answer_option">
                  <input
                    type="radio"
                    id={`question9_option${option}`}
                    name="question9"
                    value={`${option}`}
                    checked={selectedOptions[8] === arr[option - 1]}
                    onChange={() => handleOptionChange(8, option)}
                  />
                  <label
                    htmlFor={`question9_option${option}`}
                    className="pl-2 "
                  >
                    {option === 1
                      ? "Not at all"
                      : option === 2
                      ? "Several days"
                      : option === 3
                      ? "More than half the days"
                      : "Nearly every day"}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* textarea */}
          <div className="text_area col-12">
            <h6 className="pl-2 font-headingFont text-2xl col-12 text-black">
              Express a feeling by writing everything you feel !
            </h6>
            <textarea
              className="overflow-hidden border-2 border-nav w-[90%] mx-auto px-5 py-2 text-nav"
              rows="5"
              cols="155"
              value={TextAreaContent}
              onChange={handleTextAreaContentChange}
            ></textarea>
          </div>

          {/* submitButton */}
          <div className="mx-auto text-center flex justify-center col-12">
            <button
              onClick={handleSubmit}
              className="no-underline 
                            text-white text-center bg-navbarColor/100  
                             hover:bg-navbarColor/80 hover:border-2 hover:border-white px-3 py-2 rounded-md text-2xl font-contentFont font-light my-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
