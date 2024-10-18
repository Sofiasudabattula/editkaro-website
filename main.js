const videos = [
    { title: "Short Form Video", category: "Short Form", url: "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" },
    { title: "Long Form Video", category: "Long Form", url: "https://videos.pexels.com/video-files/1394254/1394254-sd_960_506_24fps.mp4" },
    { title: "Gaming Videos",  category: "https://videos.pexels.com/video-files/4247319/4247319-sd_640_360_30fps.mp4" },
        { title: "Football Edits",  category: "https://videos.pexels.com/video-files/3195366/3195366-sd_640_360_25fps.mp4" },
        { title: "eCommerce Ads",  category: "https://videos.pexels.com/video-files/6994619/6994619-sd_640_360_30fps.mp4" },
        { title: "Documentary Style",  category: "https://videos.pexels.com/video-files/1456997/1456997-sd_640_360_30fps.mp4" },
        { title: "Color Grading",  category: "https://videos.pexels.com/video-files/5092425/5092425-sd_640_360_30fps.mp4" },
        { title: "Anime Videos",  category: "https://videos.pexels.com/video-files/17356135/17356135-sd_480_360_30fps.mp4" },
        { title: "Ads",  category: "https://videos.pexels.com/video-files/2104648/2104648-sd_640_360_30fps.mp4" }
    // Add more video details as per the project requirement
];

// React component for Portfolio section
function Portfolio() {
    const categories = [
        { title: "Short Form", video: "https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4" },
        { title: "Long Form", video: "https://videos.pexels.com/video-files/1394254/1394254-sd_960_506_24fps.mp4" },
        { title: "Gaming Videos", video: "https://videos.pexels.com/video-files/4247319/4247319-sd_640_360_30fps.mp4" },
        { title: "Football Edits", video: "https://videos.pexels.com/video-files/3195366/3195366-sd_640_360_25fps.mp4" },
        { title: "eCommerce Ads", video: "https://videos.pexels.com/video-files/6994619/6994619-sd_640_360_30fps.mp4" },
        { title: "Documentary Style", video: "https://videos.pexels.com/video-files/1456997/1456997-sd_640_360_30fps.mp4" },
        { title: "Color Grading", video: "https://videos.pexels.com/video-files/5092425/5092425-sd_640_360_30fps.mp4" },
        { title: "Anime Videos", video: "https://videos.pexels.com/video-files/17356135/17356135-sd_480_360_30fps.mp4" },
        { title: "Ads", video: "https://videos.pexels.com/video-files/2104648/2104648-sd_640_360_30fps.mp4" }
    ];

    return (
        <div className="portfolio-grid">
            {categories.map((item, index) => (
                <div className="portfolio-item" key={index}>
                    <h3>{item.title}</h3>
                    <video src={`videos/${item.video}`} controls></video>
                </div>
            ))}
        </div>
    );
}

// Rendering the Portfolio component
ReactDOM.render(<Portfolio />, document.getElementById('portfolio-content'));
