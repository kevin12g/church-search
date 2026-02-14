function search() {
    const query = document.getElementById("searchInput").value;
    const resultDiv = document.getElementById("result");

    fetch(`http://127.0.0.1:5000/search?q=${query}`)
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = "";
            resultDiv.style.display = "block";

            if (data.length === 0) {
                resultDiv.innerHTML = "<p class='result-item'>لا توجد نتائج</p>";
                return;
            }

            data.forEach(item => {
                const div = document.createElement("div");
                div.className = "result-item";
                div.textContent = item;
                resultDiv.appendChild(div);
            });
        });
}
