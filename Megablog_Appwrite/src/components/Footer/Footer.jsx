import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
    return (
        <footer className="relative overflow-hidden py-12 bg-gray-400 border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="-mx-4 -my-6 flex flex-wrap">

                    {/* Logo & About */}
                    <div className="w-full px-4 py-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <div className="mb-4 inline-flex items-center">
                                    <h1 className="text-2xl font-extrabold text-white">
                                        @BlogVerse
                                    </h1>
                                </div>

                                <p className="max-w-md text-sm leading-6 text-gray-800">
                                    BlogVerce is a modern blogging platform designed to give people a simple and engaging space to share their ideas, knowledge, experiences, and stories.
                                    <br/>
                                    Write. Share. Discover. — Welcome❤️to BlogVerce.......
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="text-sm text-black font-bold">
                                    © 2026 BlogVerce. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="w-full px-6 py-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="mb-6 text-large font-semibold uppercase tracking-wider text-black">
                            Explore
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/all-posts"
                                >
                                    All Posts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    to="/add-post"
                                >
                                    Write a Post
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    {/* Account */}
                    <div className="w-full px-4 py-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-large font-semibold uppercase tracking-wider text-black">
                                Account
                            </h3>

                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to={"/login"}
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to={"/signup"}
                                    >
                                        Create Account
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        About BlogVerce
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* BlogVerce */}
                    <div className="w-full px-4 py-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-large font-semibold uppercase tracking-wider text-black">
                                BlogVerce
                            </h3>

                            <p className="text-sm leading-6 text-gray-700">
                                Share your thoughts. Discover new perspectives.
                                Connect through stories.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;