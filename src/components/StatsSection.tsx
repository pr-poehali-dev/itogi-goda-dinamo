import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    { label: "Всего голосов", value: "15,847", icon: "Vote" },
    { label: "Участников", value: "3,294", icon: "Users" },
    { label: "Активных категорий", value: "3", icon: "Trophy" },
    { label: "Дней до завершения", value: "12", icon: "Calendar" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat text-gray-800">
          Статистика голосования
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Icon
                name={stat.icon}
                size={40}
                className="mx-auto mb-4 text-blue-600"
              />
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
