import { UPDATE_PAGE, ADD_RANDOM_FISH_TANK_FEEDER } from "./actionTypes";

export const updatePage = (pageId) => {
  return ({
    type: UPDATE_PAGE,
    pageId: pageId,
  });
}

export const addRandomFishTankFeeder = (roomId) => {
  return ({
    type: ADD_RANDOM_FISH_TANK_FEEDER,
		tankName: 'tank',
		roomId: roomId,
		foodCapacityLevel: Math.round(Math.random() * 100),
		lastFeedInHours: Math.round(Math.random() * 12),
		nextFeedInHours: Math.round(Math.random() * 12),
  });
}
