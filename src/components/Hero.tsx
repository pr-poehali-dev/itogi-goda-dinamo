import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <Icon
            name="Trophy"
            size={80}
            className="mx-auto mb-6 text-yellow-400"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
            Награды Динамо
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Голосование за лучших игроков и моменты сезона 2024
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 text-lg"
          >
            <Icon name="Vote" size={20} className="mr-2" />
            Проголосовать сейчас
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
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
