function uploadImage() {
  let formData = new FormData();
  formData.append("image", document.getElementById("image").files[0]);

  fetch("http://127.0.0.1:5000/product/predict", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(productData => {
    return fetch("http://127.0.0.1:5000/recommend/from-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData)
    });
  })
  .then(res => res.json())
  .then(finalData => {
    document.getElementById("result").textContent =
      JSON.stringify(finalData, null, 2);
  });
}
