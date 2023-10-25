export const getPlacesInRadius = async(formData) => {
    const latitude = parseFloat(formData.latitude);
    const longitude = parseFloat(formData.longitude);
    const radius = parseInt(formData.radius, 10);

    const apiUrl = `https://placesapi.dogukanozdemir.com/api/nearby-locations?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };