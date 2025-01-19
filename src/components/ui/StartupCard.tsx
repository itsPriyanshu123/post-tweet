import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { EyeIcon } from "lucide-react";

interface StartupCardType {
  _createdAt: Date;
  views: number;
  author: {
    id: number | string;
    name: string;
  };
  id: number | string;
  title: string;
  category?: string;
  image: string;
  descreption: string;
}

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author: { id: authorId, name },
    title,
    descreption,
    image,
    id,
    category,
  } = post;

  return (
    <li className="startup-card group max-w-md  bg-white border border-gray-200 rounded-lg shadow-md p-5">
      <div className="flex justify-between">
        <p className="startup_card_date text-gray-500">{formatDate(_createdAt)}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="w-6 h-6 text-primary" />
          <span className="text-sm font-medium">{views}</span>
        </div>
      </div>

      <div className="flex justify-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`} className="text-primary">
            {name}
          </Link>
          <Link href={`/startup/${id}`} className="block text-xl font-semibold mt-2 line-clamp-1">
            {title}
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://via.placeholder.com/600x400"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </Link>
      </div>

      <Link href={`/user/${authorId}`} className="block mt-5">
        <p className="startup-card_desc text-gray-600">{descreption}</p>
        <img src={image} alt="placeholder" className="startup-card_img mt-3 w-full h-40 object-cover rounded-lg" />
      </Link>

      <div className="flex justify-between items-center mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`} className="text-sm font-medium text-gray-500">
          {category}
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};


export default StartupCard;
