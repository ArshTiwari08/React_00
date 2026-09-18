import React from "react";
import service from "../Appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ post }) {

    return (
        <Link
            to={`/post/${post.$id}`}
        >
            <div className="w-full bg-gray-100 rounded-xl p-4">
                {/* Owner Name */}
                <h3 className="text-lg font-bold text-black mb-3">
                    {post.ownerName}
                </h3>

            <div className="w-full mb-4">
                {post.featuredImage && (
                    <img
                        src={service.getFileView(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-xl"
                    />
                )}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-black bg-gray-200 p-2 rounded">
                {post.title}
            </h2>
                        </div>
                    </Link>
                );
            }


export default PostCard;