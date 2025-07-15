

import { useEffect, useState } from "react";

const JobPost = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("/api/browse/pro-jobs/", {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setJobs(result.data);
                setLoading(false);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) return <div className="flex justify-center items-center text-4xl font-bold p-10 bg-fuchsia-600 text-white">Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Job Listings</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-sm 
                                   transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        {/* Date */}
                        <p className="text-gray-400 text-sm mb-4">
                            {new Date(job.created_at).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </p>

                        {/* Job Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight">{job.title}</h3>

                        {/* Price Section */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-6 flex justify-between items-center">
                            <span className="text-gray-600 text-sm font-medium">
                                {job.budget_type || "Fixed Price Project"}
                            </span>
                            <span className="text-gray-900 font-semibold">
                                ${job.rate_from}-{job.rate_to}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            In this role, you will be responsible for conducting comprehensive SEO audits and
                            implementing strategies to optimize websites...
                        </p>

                        {/* Status Badges */}
                        <div className="flex gap-2 mb-6">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-600">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Remote
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {job.experience_level || "Senior level"}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                </svg>
                                2 Freelancer
                            </span>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {job.skills.slice(0, 3).map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                                    >
                                        {skill.label}
                                    </span>
                                ))}
                            </div>
                            {job.skills.length > 3 && (
                                <p className="text-gray-500 text-sm font-medium">+{job.skills.length - 3} more</p>
                            )}
                        </div>

                        {/* Posted By */}
                        <p className="text-gray-400 text-sm mb-6">
                            Posted by <span className="text-gray-900 font-medium">Rony</span>
                        </p>

                        {/* Apply Button */}
                        <button
                            className="w-full bg-gray-900 text-white py-3 px-4 rounded-full font-medium
                                       transition duration-200 hover:bg-green-500 "
                        >
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobPost;
