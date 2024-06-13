import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image12 from "../../assets/images/12.png";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./MyCarsouel.scss";

const CarouselReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // const handleNext = () => {
  //     setActiveIndex((prevIndex) => prevIndex + 1);
  // };

  // const handlePrev = () => {
  //     setActiveIndex((prevIndex) => prevIndex - 1);
  // };

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="col-12">
      <div className="carousel-reviews broun-block">
        <div className="row">
          <div
            id="carousel-reviews"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <Carousel
              indicators
              activeIndex={activeIndex}
              onSelect={handleSlide}
              className="indicators"
            >
              <Carousel.Item>
                <div
                  className="d-flex "
                  style={{ flexDirection: "Row", flexWrap: "wrap" }}
                >
                  <ReviewCard
                    numOfStars={5}
                    description="I stumbled upon this website while searching for answers about my mental health struggles, and it's been a complete game-changer. The online assessments helped me identify underlying issues I wasn't aware of, and the personalized recommendations guided me towards effective solutions. I finally feel like I'm on the path to understanding and managing my psychological well-being."
                    img={image12}
                    name="Sarah Johnson"
                    job=" Software Engineer"
                  />
                  <ReviewCard
                    numOfStars={5}
                    description="What sets this website apart is its empathetic approach to mental health. The team behind it truly understands the challenges individuals face and offers unwavering support every step of the way. From the moment I reached out for help, I felt heard and validated. Thanks to their guidance, I've made significant progress in overcoming my psychological hurdles."
                    img={image12}
                    name="Amira Mahmoud"
                    job=" Marketing Manager"
                  />
                  <ReviewCard
                    numOfStars={5}
                    description="I'm amazed by the level of expertise available on this website. The articles, webinars, and resources provided by mental health professionals are not only informative but also practical and actionable. Whether it's anxiety, depression, or any other psychological concern, I've found reliable information and guidance to help me navigate through it."
                    img={image12}
                    name="Nourhan Hassan "
                    job="Graphic Designer"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex">
                  <ReviewCard
                    numOfStars={5}
                    description="This website takes a holistic approach to mental health, addressing not just the symptoms but also the underlying causes of psychological disorders. Through a combination of therapy techniques, self-care practices, and lifestyle adjustments, I've experienced profound changes in my mental well-being. I'm grateful for the comprehensive support offered here."
                    img={image12}
                    name="Hossam Abdelrahman "
                    job="Financial Analyst"
                  />
                  <ReviewCard
                    numOfStars={4}
                    description="Navigating the complexities of mental health can feel isolating, but this website provides a safe space for self-discovery and growth. The self-assessment tools helped me gain insight into my thought patterns and behaviors, empowering me to make positive changes. Being part of a community that understands and accepts me has been incredibly validating."
                    img={image12}
                    name="Kareem Mansour"
                    job="Sales Representative"
                  />
                  <ReviewCard
                    numOfStars={5}
                    description=" I can't express enough gratitude for the impact this website has had on my life. It's not just a platform for detecting psychological disorders; it's a lifeline for anyone struggling with their mental health. The resources offered here have equipped me with the knowledge and tools I need to overcome my challenges and live a fulfilling life. I'm filled with hope for the future, thanks to this invaluable resource."
                    img={image12}
                    name="Salma Ahmed "
                    job=" Human Resources Specialist"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex">
                  <ReviewCard
                    numOfStars={5}
                    description="A beacon of hope in challenging times: This platform came into my life when I was at my lowest point, and it's been a guiding light ever since. The compassionate support and wealth of resources have been instrumental in my journey towards recovery. I'm grateful to have found such a caring community that champions mental well-being."
                    img={image12}
                    name="Tarek Ibrahim "
                    job=" Marketing Manager"
                  />
                  <ReviewCard
                    numOfStars={5}
                    description="Empowering individuals to take control: This website empowers individuals to take control of their mental health journey. Through informative content and practical tools, I've learned valuable coping strategies and gained a deeper understanding of myself. It's refreshing to see a platform that prioritizes empowerment and self-advocacy."
                    img={image12}
                    name="Ahmed Kamal"
                    job=" Data Scientist"
                  />
                  <ReviewCard
                    numOfStars={5}
                    description="Transformative experience: My experience with this website has been nothing short of transformative. The holistic approach to mental health resonated with me deeply, and I've seen remarkable improvements in my overall well-being. From the insightful articles to the supportive community, every aspect of this platform contributes to positive change."
                    img={image12}
                    name="Nada Ismail "
                    job="Product Manager"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselReviews;
