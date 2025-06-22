import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface VotingCardProps {
  title: string;
  description: string;
  icon: string;
  voteCount: number;
  status: "active" | "upcoming" | "completed";
  onVote: () => void;
}

const VotingCard = ({
  title,
  description,
  icon,
  voteCount,
  status,
  onVote,
}: VotingCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-50";
      case "upcoming":
        return "text-yellow-600 bg-yellow-50";
      case "completed":
        return "text-gray-600 bg-gray-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "active":
        return "Активно";
      case "upcoming":
        return "Скоро";
      case "completed":
        return "Завершено";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-l-4 border-l-blue-500 hover:border-l-yellow-500 hover:-translate-y-2 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

      <CardHeader className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <Icon
              name={icon}
              size={48}
              className="text-blue-600 group-hover:text-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            <div className="absolute -inset-2 bg-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()} animate-pulse`}
          >
            {getStatusText()}
          </span>
        </div>
        <CardTitle className="text-2xl font-montserrat text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
            <Icon
              name="Users"
              size={16}
              className="mr-2 group-hover:animate-pulse"
            />
            <span className="group-hover:font-semibold transition-all duration-300">
              {voteCount.toLocaleString()} голосов
            </span>
          </div>

          <Button
            onClick={onVote}
            disabled={status !== "active"}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-110 transition-all duration-300 hover:shadow-lg disabled:opacity-50"
          >
            <Icon
              name="Vote"
              size={16}
              className="mr-2 group-hover:animate-bounce"
            />
            Голосовать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VotingCard;
