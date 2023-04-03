import Link from "next/link";

const PostCard = ({ post }) => {
  const { title, slug, excerpt, coverImage, author, date } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md">
      <Link href={`/posts/${slug}`} aria-label={title}>
        <div className="bg-white p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-2">{title}</h2>
          <img className="rounded-lg mb-4" src={coverImage} alt={title} />
          <p className="text-gray-700 mb-2">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
