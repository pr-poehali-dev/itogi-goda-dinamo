import Icon from "@/components/ui/icon";
import AnimatedCounter from "./AnimatedCounter";

const StatsSection = () => {
  const stats = [
    { label: "Всего голосов", value: 15847, icon: "Vote", suffix: "" },
    { label: "Участников", value: 3294, icon: "Users", suffix: "" },
    { label: "Активных категорий", value: 3, icon: "Trophy", suffix: "" },
    { label: "Дней до завершения", value: 12, icon: "Calendar", suffix: "" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-gray-800 animate-fade-in">
          Статистика голосования
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-3 border border-blue-100 hover:border-blue-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4">
                <Icon
                  name={stat.icon}
                  size={40}
                  className="mx-auto text-blue-600 group-hover:text-yellow-500 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                />
                <div className="absolute -inset-3 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 text-sm group-hover:text-blue-600 transition-colors duration-300 font-medium">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
