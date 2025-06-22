import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VotingCard from "@/components/VotingCard";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const votingCategories = [
    {
      title: "Лучший игрок сезона",
      description:
        "Выберите самого выдающегося игрока команды в сезоне 2024. Учитывайте голы, передачи и общий вклад в игру команды.",
      icon: "Star",
      voteCount: 8453,
      status: "active" as const,
    },
    {
      title: "Гол года",
      description:
        "Самый красивый и зрелищный гол сезона. Голосуйте за тот момент, который заставил вас встать с места!",
      icon: "Target",
      voteCount: 6721,
      status: "active" as const,
    },
    {
      title: "Матч сезона",
      description:
        "Самая захватывающая игра года. Выберите матч, который запомнился больше всего своей драматургией и эмоциями.",
      icon: "Zap",
      voteCount: 4892,
      status: "upcoming" as const,
    },
  ];

  const handleVote = (category: string) => {
    console.log(`Голосование за: ${category}`);
    // Здесь будет логика перехода на страницу голосования
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 font-montserrat text-gray-800">
            Категории голосования
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Выберите категорию и отдайте свой голос за лучших
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {votingCategories.map((category, index) => (
              <VotingCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                voteCount={category.voteCount}
                status={category.status}
                onVote={() => handleVote(category.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">ФК Динамо</h3>
          <p className="text-blue-200 mb-6">
            Голосование завершится 31 декабря 2024 года
          </p>
          <div className="text-sm text-blue-300">
            © 2024 ФК Динамо. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
