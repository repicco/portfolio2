import Lottie from "react-lottie";
import { useResponsive } from "../../../hooks/useResponsive";
import calcBarbecueLottie from "../../assets/lottie_files/calc_barbecue_app.lottie.json";
import financialLottie from "../../assets/lottie_files/financial_app.lottie.json";
import shoppingCartLottie from "../../assets/lottie_files/shopping_cart_app.lottie.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "./projectsApps.css";

import { Navigation, Pagination } from "swiper/modules";

export default function ProjectsApps() {
  const { windowSize } = useResponsive();
  const { width } = windowSize;
  const isTabletScreen = width > 768;

  function clickRepo(link) {
    window.open(link, "_blank");
  }

  if (!width) return null;

  const carouselData = [
    {
      title: "Cálculo de churrasco",
      tech: "React Native",
      lottieFile: calcBarbecueLottie,
      linkRepo: "https://github.com/repicco/calc-barbecue",
      alt: "Animação do app: cálculo de churrasco",
    },
    {
      title: "Finanças",
      tech: "React Native",
      lottieFile: financialLottie,
      linkRepo: "https://github.com/repicco/app_financial",
      alt: "Animação do app: finanças",
    },
    {
      title: "Carrinho de compras",
      tech: "React Native",
      lottieFile: shoppingCartLottie,
      linkRepo: "https://github.com/repicco/shopping_cart",
      alt: "Animação do app: carrinho de compras",
    },
  ];

  return (
    <div className="projectApps__container">
      <div className="projectApps__swipper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={isTabletScreen ? 2 : 1.5}
          loop={true}
          pagination={{ clickable: true }}
        >
          {carouselData.map((el) => (
            <SwiperSlide>
              <div className="projectApps__card">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: el.lottieFile,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  width={isTabletScreen ? "228px" : "128px"}
                  height={isTabletScreen ? "500px" : "272px"}
                  style={{
                    borderRadius: isTabletScreen ? "28px" : "20px",
                    display: "block",
                    margin: "0 16px",
                  }}
                  alt={el.alt}
                />
                <div>
                  <h4>{el.title}</h4>
                  <p>{el.tech}</p>
                  <div
                    className="projectApps__repoButton"
                    onClick={() => clickRepo(el.linkRepo)}
                  >
                    <i class="fa-brands fa-github " />
                    Repositório
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
