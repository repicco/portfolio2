import Lottie from "react-lottie";
import { useResponsive } from "../../../hooks/useResponsive";
import calcBarbecueLottie from "../../assets/lottie_files/calc_barbecue_app.lottie.json";

export default function ProjectsApps() {
  const { windowSize } = useResponsive();
  const { width } = windowSize;
  const isTabletScreen = width > 768;

  return (
    <div>
      <h1>Projetos Apps</h1>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: calcBarbecueLottie,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
          margin: 0,
        }}
        width={isTabletScreen ? "228px" : "128px"}
        height={isTabletScreen ? "500px" : "272px"}
        style={{ borderRadius: isTabletScreen ? "28px" : "20px" }}
        alt="Tutorial animado"
      />
    </div>
  );
}
