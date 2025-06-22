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
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="animate-fade-in">
        <Navigation />
      </div>
      <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
        <Hero />
      </div>

      <section
        className="py-16 px-4 animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 font-montserrat text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Категории голосования
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 animate-pulse">
            Выберите категорию и отдайте свой голос за лучших
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {votingCategories.map((category, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <VotingCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  voteCount={category.voteCount}
                  status={category.status}
                  onVote={() => handleVote(category.title)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <StatsSection />
      </div>

      <footer
        className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 relative overflow-hidden animate-fade-in"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat animate-pulse">
            ФК Динамо
          </h3>
          <p className="text-blue-200 mb-6 hover:text-white transition-colors duration-300">
            Голосование завершится 31 декабря 2024 года
          </p>
          <div className="text-sm text-blue-300 hover:text-blue-100 transition-colors duration-300">
            © 2024 ФК Динамо. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
