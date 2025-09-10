const url = "https://git.fahrul.id/koda/data/raw/branch/main/talents.json";
async function getTalents() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const result = data.map((item) => {
      return `Id: ${item.id} Name: ${item.name} Batch: 4`;
    });

    console.log(result);
  } catch (err) {
    console.error("Error fetch:", err);
  }
}

module.exports = { getTalents };
