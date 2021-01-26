// @ts-ignore
import randomLatitude from 'random-latitude';
// @ts-ignore
import randomLongitude from 'random-longitude';

export const generateCoordinates = (numberOfMarkers: number) => {
  const coordinates = [];
  for (let i = 0; i <= numberOfMarkers; i++) {
    let lng = randomLongitude();
    let lat = randomLatitude();
    coordinates.push({ lng: lng > 90 || lng < -90 ? 89 : lng , lat: lat > 90 || lat < -90 ? 89 : lat });
  }
  return coordinates;
};


