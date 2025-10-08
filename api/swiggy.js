export default async function handler(req, res) {
  try {
    // Example: Replace with the Swiggy API URL you use locally
    const response = await fetch(        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

);
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Swiggy data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
