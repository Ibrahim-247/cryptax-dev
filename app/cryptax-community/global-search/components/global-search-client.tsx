"use client";

import { HeartOutlined, MessageOutlined, UserOutlined, PlayCircleOutlined, SoundOutlined, } from "@ant-design/icons";
import { Avatar, Card, Input, Typography, Tag, Divider, Space, Button, Empty } from "antd";
import { CiSearch } from "react-icons/ci";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Title, Text, Paragraph } = Typography;

export default function GlobalSearchPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const query = searchParams.get("q")?.trim() || "";
    const [searchInput, setSearchInput] = useState(query);

    useEffect(() => {
        setSearchInput(query);
    }, [query]);

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchInput.trim()) {
            router.push(`/cryptax-community/global-search?q=${encodeURIComponent(searchInput.trim())}`);
        }
    };

    // Fake results (only appears when there's a query)
    const results = query ? [
        // People
        { type: "person", name: "Sarah Chen", title: "Crypto Tax Advisor @ TaxBit", avatar: "https://i.pravatar.cc/150?img=68", connections: "12 mutual" },
        { type: "person", name: "Michael Roberts, CPA", title: "Founder @ CryptoTaxPro", avatar: "https://i.pravatar.cc/150?img=12", connections: "48 mutual" },

        // Posts
        {
            type: "post", author: "Alex Rivera", authorAvatar: "https://i.pravatar.cc/150?img=5", time: "2h ago", content: "Jufiled taxes for a client with 400 + DeFi swaps.Cost basis tracking was a nightmare until we used proper software.Start tracking Jan 1st!", likes: 89, comments: 23
        },
        { type: "post", author: "Emma Thompson", authorAvatar: "https://i.pravatar.cc/150?img=33", time: "5h ago", content: "IRS confirmed: Spot Bitcoin ETFs are NOT subject to wash-sale rules. Huge win for holders!", likes: 342, comments: 67 },

        // Article
        { type: "article", title: "2025 Crypto Tax Guide: Bitcoin, DeFi, NFTs & Staking", author: "CryptoTax Team", date: "Nov 20, 2025", readTime: "8 min read", thumbnail: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80" },

        // Podcast
        { type: "podcast", title: "Bitcoin ETF Tax Rules with Former IRS Agent", host: "The Crypto Tax Podcast", duration: "46 min", plays: "12.4K", date: "3 days ago" },
    ] : [];

    return (
        <div className="w-full bg-gray-50">
            {/* Sticky Search Bar */}
            <div className="w-full bg-white border-b shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <Input
                        size="large"
                        placeholder={`Search "${query || "bitcoin tax"}"...`}
                        prefix={<CiSearch className="text-gray-500" size={24} />}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={handleSearch}
                        allowClear
                        className="max-w-2xl mx-auto text-lg rounded-full"
                        autoFocus
                    />
                    {query && (
                        <Text type="secondary" className="block text-center mt-3">
                            About <strong>1,284</strong> results for <Text strong className="text-blue-600">"{query}"</Text>
                        </Text>
                    )}
                </div>
            </div>
            {/* Main Content */}
            <div className="w-full">
                {!query ? (
                    <Empty
                        image={<CiSearch size={80} className="mx-auto text-gray-300" />}
                        description={
                            <div className="text-center">
                                <Title level={4} type="secondary">Start searching the community</Title>
                                <Text type="secondary">Try: bitcoin tax, staking rewards, NFT deductions, IRS rules</Text>
                            </div>
                        }
                    />
                ) : (
                    <>
                        {/* People */}
                        <div>
                            <Title level={4} className="mb-4 flex items-center gap-2">
                                <UserOutlined className="text-blue-600" /> People
                            </Title>
                            <Space direction="vertical" size={16} className="w-full">
                                {results.filter(r => r.type === "person").map((p) => (
                                    <Card hoverable key={p.name}>
                                        <div className="flex items-center justify-between">
                                            <Space>
                                                <Avatar size={64} src={p.avatar} icon={<UserOutlined />} />
                                                <div>
                                                    <Title level={5} className="!mb-1">{p.name}</Title>
                                                    <Text type="secondary">{p.title}</Text>
                                                    <br />
                                                    <Text type="secondary" className="text-sm">{p.connections} connections</Text>
                                                </div>
                                            </Space>
                                            <Button type="default">Connect</Button>
                                        </div>
                                    </Card>
                                ))}
                            </Space>
                        </div>

                        <Divider />

                        {/* Posts & Articles */}
                        {results.filter(r => r.type === "post" || r.type === "article").map((item) => (
                            <Card hoverable key={item.title || item.content}>
                                {item.type === "article" && item.thumbnail && (
                                    <img src={item.thumbnail} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
                                )}
                                <div className="p-2">
                                    {item.type === "post" ? (
                                        <>
                                            <Space className="mb-4">
                                                <Avatar src={item.authorAvatar} size="large" />
                                                <div>
                                                    <Text strong>{item.author}</Text><br />
                                                    <Text type="secondary" className="text-xs">{item.time}</Text>
                                                </div>
                                            </Space>
                                            <Paragraph className="text-base mt-3">{item.content}</Paragraph>
                                            <Space size="large" className="mt-6 text-gray-600">
                                                <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                                                    <HeartOutlined /> {item.likes}
                                                </span>
                                                <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                                                    <MessageOutlined /> {item.comments}
                                                </span>
                                            </Space>
                                        </>
                                    ) : (
                                        <>
                                            <Tag color="purple" className="mb-3">Guide</Tag>
                                            <Title level={4}>{item.title}</Title>
                                            <Text type="secondary">{item.author} · {item.readTime} · {item.date}</Text>
                                        </>
                                    )}
                                </div>
                            </Card>
                        ))}

                        {/* Podcast */}
                        {results.filter(r => r.type === "podcast").map((pod) => (
                            <Card hoverable key={pod.title}>
                                <div className="flex gap-6">
                                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                                        <PlayCircleOutlined style={{ fontSize: 48 }} />
                                    </div>
                                    <div className="flex-1">
                                        <Tag icon={<SoundOutlined />} color="magenta" className="mb-2">Podcast</Tag>
                                        <Title level={4} className="!mt-0 !mb-2">{pod.title}</Title>
                                        <Text type="secondary">{pod.host}</Text><br />
                                        <Text type="secondary" className="text-sm">{pod.duration} · {pod.plays} · {pod.date}</Text>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}