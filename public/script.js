const button = document.querySelector(".new-campaign-button");

const postNewCampaign = async (campaignName) => {
  const response = await fetch("http://localhost:5656/api/campaign", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: campaignName }),
  });

  const data = await response.json();

  console.log(data);
};

button.addEventListener("click", (_event) => {
  postNewCampaign(document.querySelector(".name-input").value)
});