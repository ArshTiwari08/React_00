import React, { useEffect, useState } from "react";
import service from "../Appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-12 mt-2 text-center">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full max-w-md p-10 bg-gray-300 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                            <div className="mb-2 text-4xl">🔐</div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Login to read posts
                            </h1>
                            <p className="mt-3 text-gray-500">
                                Please login to explore and read amazing posts.
                            </p>
                        </div>
                    </div>
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
                            className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;