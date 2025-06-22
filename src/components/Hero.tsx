import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FloatingParticles from "./FloatingParticles";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-blue-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20 animate-pulse"></div>
      <FloatingParticles />

      <div
        className="relative max-w-6xl mx-auto text-center"
        style={{ zIndex: 2 }}
      >
        <div className="mb-8 animate-fade-in">
          <div className="relative">
            <Icon
              name="Trophy"
              size={80}
              className="mx-auto mb-6 text-yellow-400 animate-pulse hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat animate-scale-in bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
            Награды Динамо
          </h1>
          <p
            className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Голосование за лучших игроков и моменты сезона 2024
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50"
          >
            <Icon name="Vote" size={20} className="mr-2 animate-pulse" />
            Проголосовать сейчас
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm bg-white/10"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Расписание голосования
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
