import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import service from "../Appwrite/config";
import { Query } from "appwrite";
import { useSelector } from "react-redux";

function MyPosts() {
    const [posts, setPosts] = useState([]);

    const userData = useSelector(
        (state) => state.auth.userData
    );

    useEffect(() => {
        if (!userData?.$id) {
            return;
        }

        service
            .getPosts([
                Query.equal("userId", userData.$id),
                Query.equal("status", "active")
            ])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            });
    }, [userData]);

    if (!userData) {
        return (
            <div className="w-full py-8 text-center">
                <h1 className="text-2xl font-bold">
                    Please login to see your posts
                </h1>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">
                        You have not created any posts yet.
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="p-2 w-full sm:w-1/2 lg:w-1/4"
                        >
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default MyPosts;