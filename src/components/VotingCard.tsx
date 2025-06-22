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
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Icon name={icon} size={48} className="text-blue-600" />
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}
          >
            {getStatusText()}
          </span>
        </div>
        <CardTitle className="text-2xl font-montserrat text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Icon name="Users" size={16} className="mr-2" />
            <span>{voteCount.toLocaleString()} голосов</span>
          </div>

          <Button
            onClick={onVote}
            disabled={status !== "active"}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Icon name="Vote" size={16} className="mr-2" />
            Голосовать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VotingCard;
