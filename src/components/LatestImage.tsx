function LatestImage() {
    // download image function
    function downloadImage() {
        // get image element in react
        let img = document.getElementById("image").querySelector("img");
        let link = document.createElement("a");
        link.href = img.src;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div class="image-section">
            <h2>
                <span>Latest Image</span>
                <button onClick={downloadImage}>download</button>
            </h2>

            <div id="image">
                <img src="../../assets/preload.jpg" alt="bird" />
                <span id="time">2023.5.1 3:10</span>
            </div>
        </div>
    );
}

export default LatestImage;
