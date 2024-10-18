const videos = [
    { title: "Short Form Video", category: "Short Form", url: "https://drive.google.com/file/d/1iP7X7ohhYOgcnXQONNo5JKwmbgWJ_gr9/view?usp=sharing" },
    { title: "Long Form Video", category: "Long Form", url: "long-form.mp4" },
    // Add more video details as per the project requirement
];

// React component for Portfolio section
function Portfolio() {
    const categories = [
        { title: "Short Form", video: "https://drive.google.com/file/d/1iP7X7ohhYOgcnXQONNo5JKwmbgWJ_gr9/view?usp=sharing" },
        { title: "Long Form", video: "long-form.mp4" },
        { title: "Gaming Videos", video: "gaming-videos.mp4" },
        { title: "Football Edits", video: "football-edits.mp4" },
        { title: "eCommerce Ads", video: "ecommerce-ads.mp4" },
        { title: "Documentary Style", video: "documentary-style.mp4" },
        { title: "Color Grading", video: "color-grading.mp4" },
        { title: "Anime Videos", video: "anime-videos.mp4" },
        { title: "Ads", video: "ads.mp4" }
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
